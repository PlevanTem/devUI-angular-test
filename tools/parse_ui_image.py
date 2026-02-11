#!/usr/bin/env python3
"""
轻量级 UI 设计稿解析脚本（OmniParser 替代方案）
使用 EasyOCR + OpenCV 提取文案与粗略区域，输出 Hybrid UI Generator Skill 可用的 UI Spec。
不依赖 PaddleOCR，可在项目 .venv 中直接运行。
用法: python tools/parse_ui_image.py <图片路径> [--output spec.yaml]
"""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

def _to_native(obj):
    """Convert numpy types to native Python for JSON serialization."""
    import numpy as np
    if isinstance(obj, np.integer):
        return int(obj)
    if isinstance(obj, np.floating):
        return float(obj)
    if isinstance(obj, np.ndarray):
        return obj.tolist()
    if isinstance(obj, dict):
        return {k: _to_native(v) for k, v in obj.items()}
    if isinstance(obj, (list, tuple)):
        return [_to_native(x) for x in obj]
    return obj

def main():
    parser = argparse.ArgumentParser(description="Parse UI screenshot to structured spec (EasyOCR + OpenCV)")
    parser.add_argument("image", type=str, help="Path to UI screenshot")
    parser.add_argument("--output", "-o", type=str, default=None, help="Output YAML/JSON path (default: stdout)")
    parser.add_argument("--format", choices=["yaml", "json"], default="yaml")
    args = parser.parse_args()

    image_path = Path(args.image)
    if not image_path.exists():
        print(f"Error: image not found: {image_path}", file=sys.stderr)
        sys.exit(1)

    try:
        import cv2
        import numpy as np
    except ImportError as e:
        print(f"Error: {e}. Activate .venv and install: pip install opencv-python-headless", file=sys.stderr)
        sys.exit(1)

    try:
        import easyocr
    except ImportError as e:
        print(f"Error: {e}. Activate .venv and install: pip install easyocr", file=sys.stderr)
        sys.exit(1)

    # Load image
    img = cv2.imread(str(image_path))
    if img is None:
        print(f"Error: could not load image: {image_path}", file=sys.stderr)
        sys.exit(1)
    h, w = img.shape[:2]

    # EasyOCR (first run loads model, may be slow)
    reader = easyocr.Reader(["ch_sim", "en"], gpu=False, verbose=False)
    raw = reader.readtext(str(image_path))

    # Build text elements with bbox (xyxy), normalized y for region heuristic
    elements = []
    for (box, text, conf) in raw:
        x1, y1 = min(p[0] for p in box), min(p[1] for p in box)
        x2, y2 = max(p[0] for p in box), max(p[1] for p in box)
        cy = (y1 + y2) / 2
        elements.append({
            "text": text.strip(),
            "bbox_xyxy": [float(round(x1, 1)), float(round(y1, 1)), float(round(x2, 1)), float(round(y2, 1))],
            "confidence": round(float(conf), 3),
            "center_y": float(round(cy, 1)),
        })

    # Heuristic regions: top 8% = header, left 15% = sidebar, rest = content
    header_threshold = h * 0.08
    sidebar_threshold = w * 0.15

    regions = {
        "header": [e for e in elements if e["center_y"] < header_threshold],
        "sidebar": [e for e in elements if e["center_y"] >= header_threshold and e["bbox_xyxy"][0] < sidebar_threshold],
        "content": [e for e in elements if e["center_y"] >= header_threshold and e["bbox_xyxy"][0] >= sidebar_threshold],
    }

    # Build UI Spec (aligned with hybrid-ui-generator SKILL region_decomposition / component_specification)
    spec = {
        "ui_description": {
            "整体描述": "由 parse_ui_image 从设计稿 OCR 生成的区域与文案摘要，供 Hybrid UI Generator 作为意图理解输入。",
            "页面类型": "console",
            "source_image_size": {"width": int(w), "height": int(h)},
        },
        "region_decomposition": [
            {
                "区域名称": "顶部导航栏",
                "区域位置": "顶部全宽",
                "包含文案数": len(regions["header"]),
                "text_samples": [e["text"] for e in regions["header"][:15]],
            },
            {
                "区域名称": "左侧边栏",
                "区域位置": "左侧纵向",
                "包含文案数": len(regions["sidebar"]),
                "text_samples": [e["text"] for e in regions["sidebar"][:25]],
            },
            {
                "区域名称": "主内容区",
                "区域位置": "中部右侧",
                "包含文案数": len(regions["content"]),
                "text_samples": [e["text"] for e in regions["content"][:40]],
            },
        ],
        "ocr_elements_count": len(elements),
        "ocr_elements_sample": elements[:30],
    }
    spec = _to_native(spec)

    out = json.dumps(spec, ensure_ascii=False, indent=2)
    if args.format == "yaml":
        try:
            import yaml
            out = yaml.dump(spec, allow_unicode=True, default_flow_style=False, sort_keys=False)
        except ImportError:
            pass

    if args.output:
        Path(args.output).write_text(out, encoding="utf-8")
        print(f"Spec written to {args.output}", file=sys.stderr)
    else:
        print(out)


if __name__ == "__main__":
    main()
