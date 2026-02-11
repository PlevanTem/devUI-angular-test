#!/usr/bin/env python3
"""
双源对比评估：解析器(OmniParser/parse_ui_image) vs 多模态模型识别结果

对同一张设计稿的两种输入进行对比与验证：
- 解析器：OCR + 启发式区域划分，输出文案与区域（无组件类型）
- 多模态：视觉模型输出的区域划分、文案摘要、组件规格

输出评估报告：一致项、仅解析器、仅多模态、冲突与合并建议。
用法:
  python tools/compare_parser_vs_multimodal.py \\
    tools/parsed_spec_v7.yaml \\
    tools/spec_schema/multimodal_spec_v7_example.yaml \\
    --output tools/eval_report_v7.md
"""

from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path


def _normalize_text(s: str) -> str:
    s = (s or "").strip().lower()
    s = re.sub(r"\s+", "", s)
    return s


def _text_similarity(a: str, b: str) -> float:
    """简单相似度：归一化后相等为 1，包含为 0.5，否则 0。"""
    na, nb = _normalize_text(a), _normalize_text(b)
    if na == nb:
        return 1.0
    if na in nb or nb in na:
        return 0.5
    return 0.0


def _best_match(needle: str, haystack: list[str], threshold: float = 0.5) -> str | None:
    for h in haystack:
        if _text_similarity(needle, h) >= threshold:
            return h
    return None


def load_yaml(path: Path) -> dict:
    try:
        import yaml
        return yaml.safe_load(path.read_text(encoding="utf-8")) or {}
    except Exception as e:
        print(f"Error loading {path}: {e}", file=sys.stderr)
        raise


def load_json(path: Path) -> dict:
    import json
    return json.loads(path.read_text(encoding="utf-8"))


def compare_regions(parser_regions: list, multi_regions: list) -> dict:
    """对比区域：按区域名称对齐，再对比文案样本。"""
    parser_by_name = {r.get("区域名称", ""): r for r in (parser_regions or [])}
    multi_by_name = {r.get("区域名称", ""): r for r in (multi_regions or [])}
    all_names = set(parser_by_name) | set(multi_by_name)

    report = {
        "agreement": [],
        "parser_only": [],
        "multimodal_only": [],
        "text_overlap": [],
        "conflicts": [],
    }

    for name in sorted(all_names):
        pr = parser_by_name.get(name)
        mr = multi_by_name.get(name)
        parser_texts = (pr or {}).get("text_samples") or []
        multi_texts = (mr or {}).get("文案摘要") or []

        if not name:
            continue

        if pr and mr:
            # 两边都有该区域：评估文案重叠
            matched = 0
            parser_only = []
            for t in parser_texts:
                if _best_match(t, multi_texts):
                    matched += 1
                else:
                    parser_only.append(t)
            multi_only = [t for t in multi_texts if not _best_match(t, parser_texts)]
            overlap_ratio = matched / len(parser_texts) if parser_texts else 1.0
            report["text_overlap"].append({
                "region": name,
                "parser_samples": len(parser_texts),
                "multimodal_samples": len(multi_texts),
                "matched": matched,
                "overlap_ratio": round(overlap_ratio, 2),
                "parser_only_samples": parser_only[:5],
                "multimodal_only_samples": multi_only[:5],
            })
            if overlap_ratio >= 0.5:
                report["agreement"].append(name)
            elif parser_only or multi_only:
                report["conflicts"].append({
                    "region": name,
                    "parser_only": parser_only[:5],
                    "multimodal_only": multi_only[:5],
                })
        elif pr:
            report["parser_only"].append(name)
        else:
            report["multimodal_only"].append(name)

    return report


def compare_components(parser_spec: dict, multi_spec: dict) -> dict:
    """解析器无组件类型，仅汇总多模态的 component_specification 供人工核对。"""
    components = (multi_spec.get("component_specification") or [])
    return {
        "multimodal_components_count": len(components),
        "multimodal_components_summary": [
            {
                "类型": c.get("组件类型"),
                "区域": c.get("所在区域"),
                "承载信息": (c.get("承载信息") or "")[:40],
            }
            for c in components[:20]
        ],
        "note": "解析器(OCR)不输出组件类型，仅多模态提供；合并 Spec 时以多模态组件为主、用解析器文案做校验。",
    }


def build_report(parser_spec: dict, multi_spec: dict, out_path: Path | None, fmt: str) -> str:
    parser_regions = parser_spec.get("region_decomposition") or []
    multi_regions = multi_spec.get("region_decomposition") or []

    region_report = compare_regions(parser_regions, multi_regions)
    comp_report = compare_components(parser_spec, multi_spec)

    lines = [
        "# 双源对比评估报告",
        "",
        "## 1. 数据源",
        f"- **解析器**: 区域数 {len(parser_regions)}，OCR 文案元素数 {parser_spec.get('ocr_elements_count', 0)}",
        f"- **多模态**: 区域数 {len(multi_regions)}，组件数 {comp_report['multimodal_components_count']}",
        "",
        "## 2. 区域对比",
        "",
        "### 2.1 一致区域（名称对齐且文案重叠率 ≥ 50%）",
        *([f"- {r}" for r in region_report["agreement"]] or ["- 无"]),
        "",
        "### 2.2 仅解析器识别的区域",
        *([f"- {r}" for r in region_report["parser_only"]] or ["- 无"]),
        "",
        "### 2.3 仅多模态识别的区域",
        *([f"- {r}" for r in region_report["multimodal_only"]] or ["- 无"]),
        "",
        "### 2.4 文案重叠详情（解析器 vs 多模态）",
        "",
    ]
    for t in region_report["text_overlap"]:
        lines.append(f"- **{t['region']}**: 解析器 {t['parser_samples']} 条，多模态 {t['multimodal_samples']} 条，匹配 {t['matched']} 条，重叠率 {t['overlap_ratio']}")
        if t.get("parser_only_samples"):
            lines.append(f"  - 仅解析器有: {t['parser_only_samples']}")
        if t.get("multimodal_only_samples"):
            lines.append(f"  - 仅多模态有: {t['multimodal_only_samples']}")
        lines.append("")
    if region_report["conflicts"]:
        lines.append("### 2.5 建议人工核对的冲突")
        for c in region_report["conflicts"]:
            lines.append(f"- **{c['region']}**: 解析器独有样本 {c.get('parser_only', [])}; 多模态独有样本 {c.get('multimodal_only', [])}")
        lines.append("")

    lines.extend([
        "## 3. 组件规格（多模态）",
        "",
        comp_report["note"],
        "",
        "| 类型 | 区域 | 承载信息 |",
        "|------|------|----------|",
    ])
    for s in comp_report["multimodal_components_summary"]:
        lines.append(f"| {s.get('类型', '')} | {s.get('区域', '')} | {s.get('承载信息', '')} |")
    lines.append("")
    lines.append("## 4. 合并建议")
    lines.append("")
    lines.append("- 区域划分：以多模态为主，用解析器各区域 `text_samples` 补全/校正漏识或错识文案。")
    lines.append("- 组件规格：采用多模态的 `component_specification`，用解析器 OCR 结果校验按钮、输入框等承载文案是否一致。")
    lines.append("- 冲突项：对「仅解析器有」「仅多模态有」的文案做人工确认后，再写入最终 UI Spec。")
    lines.append("")

    report_text = "\n".join(lines)
    if out_path:
        out_path.write_text(report_text, encoding="utf-8")
        print(f"Report written to {out_path}", file=sys.stderr)
    return report_text


def main():
    ap = argparse.ArgumentParser(description="Compare parser spec vs multimodal spec for UI image")
    ap.add_argument("parser_spec", type=str, help="Path to parser output (YAML/JSON)")
    ap.add_argument("multimodal_spec", type=str, help="Path to multimodal spec (YAML/JSON)")
    ap.add_argument("--output", "-o", type=str, default=None, help="Output report path (default: stdout)")
    ap.add_argument("--format", choices=["markdown", "text"], default="markdown")
    args = ap.parse_args()

    p_path = Path(args.parser_spec)
    m_path = Path(args.multimodal_spec)
    if not p_path.exists():
        print(f"Error: parser spec not found: {p_path}", file=sys.stderr)
        sys.exit(1)
    if not m_path.exists():
        print(f"Error: multimodal spec not found: {m_path}", file=sys.stderr)
        sys.exit(1)

    parser_spec = load_yaml(p_path) if p_path.suffix in (".yaml", ".yml") else load_json(p_path)
    multi_spec = load_yaml(m_path) if m_path.suffix in (".yaml", ".yml") else load_json(m_path)

    out_path = Path(args.output) if args.output else None
    report = build_report(parser_spec, multi_spec, out_path, args.format)
    if not args.output:
        print(report)


if __name__ == "__main__":
    main()
