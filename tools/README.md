# 图生 UI 视觉辅助工具

本目录用于 **图生还原 UI** 时的视觉辅助：结合 [OmniParser](https://github.com/microsoft/OmniParser) 与 [Hybrid UI Generator Skill](.claude/skills/hybrid-ui-generator/SKILL.md)，让大模型更深入理解设计稿的布局、区域和规格，从而生成更准确的 UI Spec 与代码。

## 环境说明

- **项目虚拟环境**：仓库根目录下的 `.venv`（Python 3.x）
- **OmniParser**：已克隆到 `tools/OmniParser`，需在 **Python 3.12** 环境下安装依赖并下载模型权重后使用。

## 一、虚拟环境（已创建）

在项目根目录已创建 Python 虚拟环境：

```bash
# 项目根目录
cd /path/to/devUI-angular-test
source .venv/bin/activate   # Windows: .venv\Scripts\activate
```

当前环境为系统默认 Python（如 3.14）。若需运行 **完整 OmniParser**（含 PaddleOCR），建议使用 **Python 3.12** 的独立环境（见下文）。

## 二、安装 OmniParser（推荐 Python 3.12）

OmniParser 官方推荐 Python 3.12，且部分依赖（如 PaddlePaddle）在 macOS ARM / Python 3.14 上可能不可用。建议使用 conda 或 pyenv 创建 3.12 环境：

```bash
# 方式 A：使用 conda（推荐）
conda create -n omni python=3.12 -y
conda activate omni
cd tools/OmniParser
pip install -r requirements.txt

# 方式 B：使用 pyenv + venv
pyenv install 3.12
pyenv local 3.12
python -m venv .venv-omni
source .venv-omni/bin/activate
cd tools/OmniParser
pip install -r requirements.txt
```

### 下载模型权重（V2）

在 `tools/OmniParser` 下执行：

```bash
# 创建权重目录并下载
mkdir -p weights
for f in icon_detect/{train_args.yaml,model.pt,model.yaml} icon_caption/{config.json,generation_config.json,model.safetensors}; do
  huggingface-cli download microsoft/OmniParser-v2.0 "$f" --local-dir weights
done
mv weights/icon_caption weights/icon_caption_florence
```

需已安装 [Hugging Face CLI](https://huggingface.co/docs/huggingface_hub/installation)。

### 运行 Gradio 演示

```bash
conda activate omni  # 或 source .venv-omni/bin/activate
cd tools/OmniParser
python gradio_demo.py
```

## 三、与 Hybrid UI Generator Skill 的集成

### 工作流

1. **输入**：设计稿截图（如 `.png`）。
2. **OmniParser**：解析为结构化元素（区域、图标、OCR 文本框、可交互性等）。
3. **输出**：将解析结果整理成 **UI Spec**（区域划分、组件类型、文案、布局关系）。
4. **Hybrid UI Generator Skill**：以该 Spec 为「意图理解」阶段的输入，执行规范校正与 Hybrid 方案设计，再生成代码。

### OmniParser 输出可提供的辅助信息

- **布局区域**：header / sidebar / content / footer 等大致分区。
- **可交互区域**：按钮、输入框、链接等的位置与边界框。
- **图标与描述**：图标检测 + 功能描述（icon caption）。
- **OCR 文本**：界面上的文案与位置（可用 EasyOCR，不依赖 Paddle 时设置 `use_paddleocr=False`）。

这些信息可对应到 Hybrid UI Generator Skill 中的：

- **宏观扫描**：layout regions、component patterns。
- **微观提取**：interactive elements、typography、dimensions。
- **规范校正**：将边界框与文本映射到 Design Token 与 8px 栅格。

### 在 Skill 中引用解析结果

在图生 UI 的 prompt 或上下文中，可加入一段「视觉解析摘要」，例如：

```yaml
# 由 OmniParser 解析后整理（示例）
layout_regions:
  - type: header
    bbox: [0, 0, 1920, 56]
  - type: main
    bbox: [0, 56, 1920, 1080]
interactive_elements:
  - role: button
    bbox: [100, 200, 180, 240]
    text: "提交"
  - role: textbox
    bbox: [100, 260, 400, 300]
```

Agent 可结合 `.claude/skills/hybrid-ui-generator/SKILL.md` 中的 **Phase 1: Intent Understanding** 与 **UI Spec 结构化识别框架**，将上述结果与设计稿描述一起用于生成 `region_decomposition`、`component_specification` 等，再进入实现规划与质量验证。

## 四、项目内文件说明

| 路径 | 说明 |
|------|------|
| `.venv/` | 项目 Python 虚拟环境（根目录） |
| `tools/OmniParser/` | OmniParser 源码与权重目录 |
| `tools/requirements-omni-slim.txt` | 精简依赖（仅作参考，完整功能请用官方 requirements.txt + Python 3.12） |
| `.claude/skills/hybrid-ui-generator/SKILL.md` | 图生 UI 与 Hybrid 方案设计技能 |

## 五、轻量解析脚本（无需 Paddle）

在项目 `.venv` 下可直接运行 `parse_ui_image.py`，用 **EasyOCR + OpenCV** 对设计稿做 OCR 与区域划分，输出与 Hybrid UI Generator 对齐的 UI Spec（YAML/JSON），无需安装 OmniParser 或 Paddle。

```bash
# 激活虚拟环境后
source .venv/bin/activate  # 或 Windows: .venv\Scripts\activate
python tools/parse_ui_image.py /path/to/your/screenshot.png --output tools/parsed_spec.yaml
```

示例：对华为云「测试用例配置」设计稿解析后生成 `tools/parsed_spec_v7.yaml`，并据此在 `devui-app` 中还原了 **Page V7 - 测试用例配置** 页面（菜单入口：测试用例配置 (V7) [OmniParser+Hybrid]）。

### 双源对比评估（解析器 + 多模态）

解析器单独使用时无法正确识别组件类型且 OCR 易有误识，建议与**多模态模型**的识别结果结合做评估与合并：

1. **多模态输出**：让视觉模型按 `tools/spec_schema/multimodal_spec_template.yaml` 的结构输出（或人工根据设计稿填写），保存为例如 `multimodal_spec_v7_example.yaml`。
2. **运行对比**：
   ```bash
   python tools/compare_parser_vs_multimodal.py \
     tools/parsed_spec_v7.yaml \
     tools/spec_schema/multimodal_spec_v7_example.yaml \
     --output tools/eval_report_v7.md
   ```
3. **查看报告**：`eval_report_v7.md` 中包含区域一致度、文案重叠率、仅解析器/仅多模态差异及合并建议。按报告中的「合并建议」生成最终 UI Spec 后再交给 Hybrid UI Generator 做实现。

## 六、可选：仅用 EasyOCR（无 Paddle）

若仅需 OCR 且不希望安装 PaddlePaddle，OmniParser 代码中部分调用支持 `use_paddleocr=False`（使用 EasyOCR）。但当前 `util/utils.py` 在模块顶层即 `import paddleocr`，因此未安装 Paddle 时无法直接运行完整 OmniParser。若需「仅 EasyOCR」的轻量流程，可考虑单独写一个小脚本调用 EasyOCR，再手动整理为类似上面的 layout/element 摘要供 Skill 使用；或使用 Python 3.12 + 完整 OmniParser 安装。
