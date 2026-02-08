# DevUI Angular Component Restoration Experiment

[中文](./README.md) | **English**

This project is an experimental playground for exploring different UI implementation strategies using **Angular** and the **DevUI** component library. It focuses on comparing methodologies for reproducing high-fidelity designs, specifically evaluating the trade-offs between strict component usage and custom implementations.

![alt text](image.png)

## 🎯 Project Objectives

- **Evaluate UI Fidelity**: Compare how well different approaches match original design specifications.
- **Test "Hybrid Fusion" Methodology**: Validate a balanced approach that combines component library stability with custom layout flexibility using Design Tokens.
- **Assess Maintainability**: Determine which strategy offers the best long-term maintenance characteristics.

## 🧪 Experiment Methodology

Each experiment (Case Study) implements the same design target using three distinct schemes:

### 1. Scheme V1: Pixel-Perfect Restoration (Native)
- **Goal**: 100% visual fidelity to the original design/image.
- **Technique**: Pure native HTML/CSS, manual pixel adjustments.
- **Pros**: Exact visual match.
- **Cons**: No library features, hard to maintain, no theming support.

### 2. Scheme V2: DevUI Standard (Library-First)
- **Goal**: Strict adherence to DevUI component specifications.
- **Technique**: Using `d-*` components exactly as documented (e.g., `d-card`, `d-form`, `d-layout`).
- **Pros**: High maintainability, full library features (a11y, validation).
- **Cons**: Visual discrepancies when design deviates from standard component slots.

### 3. Scheme V3: Hybrid Fusion (Recommended)
- **Goal**: Balance fidelity and system consistency.
- **Technique**:
  - **Flexible Containers**: Use native Flex/Grid for complex layouts (e.g., `d-form` compatibility issues in standalone mode).
  - **Component Reuse**: Use library components for atomic interactive elements (`d-input`, `d-button`).
  - **Strict Token Usage**: All styles must reference `var(--devui-*)` variables; hardcoded colors/spacing forbidden.
- **Pros**: High fidelity, system consistency, maintainable, visually robust.

![alt text](image-1.png)

## 📂 Experiment Catalog

This project contains two main experiment series:
- **Card Series**: Three-scheme comparison of basic card components
- **Page Series**: Progressive optimization experiments for complex pages (cloud service consoles)

| Experiment | Description | Location | Status |
|------------|-------------|----------|--------|
| **Card V1** | Basic Card - Initial Comparison | `src/app/card-experiment/` | ✅ Done |
| **Card V2** | Comparison: HTML Native vs Library vs Hybrid | `src/app/card-experiment-v2/` | ✅ Done |
| **Card V3** | Refactored with Hybrid UI Generator Skill | `src/app/card-experiment-v3/` | ✅ **Validates Skill Effectiveness** |
| **Page V1** | Cloud Config Wizard - Initial Comparison | `src/app/page-experiment/` | ✅ Done |
| **Page V2** | Adding Hybrid Fusion Scheme | `src/app/page-experiment-v2/` | ✅ Done |
| **Page V3** | Based on llms.txt + Gemini 3 Pro Multimodal | `src/app/page-experiment-v3/` | ✅ **Validates Multimodal Vision & Prompt Engineering** |
| **Page V4** | Cloud Monitoring Dashboard | `src/app/page-experiment-v4/` | ✅ Done |
| **Page V5** | Huawei Cloud Work Item Form - Complex Forms | `src/app/page-experiment-v5/` | ✅ **Validates Hybrid Best Practices for Complex Forms** |

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- Angular CLI (v17+)

### Installation

```bash
git clone <repository-url>
cd devui-angular-test/devui-app
npm install
```

### Running the App

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The application launches a dashboard where you can select and view each experiment.

## 🛠 Tech Stack

- **Framework**: Angular 18+
- **UI Library**: DevUI (ng-devui) 18.0.0
- **Styling**: SCSS, CSS Variables (Design Tokens)
- **Development Tools**: Angular CLI, TypeScript

## 🤖 AI-Assisted Development

This project is a practical case study of AI-assisted UI development, demonstrating how to leverage large language models and custom skills to accelerate the development workflow:

### AI Toolchain
- **Claude Sonnet 4.5**: Code generation, architecture design, and documentation
- **Gemini 3 Pro (Multimodal)**: Image recognition, UI specification extraction, and multimodal understanding
- **Custom Skills**:
  - `hybrid-ui-generator`: Hybrid UI generation skill (located in `.claude/skills/hybrid-ui-generator/`)
  - `gen-llms-txt-pencil`: Component specification documentation generator

### Image-to-UI Workflow
1. **Input Design**: Provide design image + brief description
2. **Multimodal Recognition**: Gemini 3 Pro extracts UI specs (layout, components, colors, spacing)
3. **Spec Calibration**: Map recognized values to DevUI Design Tokens
4. **Hybrid Decision**: Based on skill documentation, decide which parts use native containers vs library components
5. **Code Generation**: Generate 3 versions - V1 (pixel-perfect), V2 (library-only), V3 (Hybrid)
6. **Quality Validation**: Verify against quality checklists in skill documentation

### Skill System Architecture
```
.claude/
└── skills/
    └── hybrid-ui-generator/
        ├── SKILL.md          # Main skill documentation (1000+ lines of design methodology)
        ├── llms.txt          # DevUI component specification quick reference
        └── llms-full.txt     # DevUI complete component API documentation
```

## 💡 Key Learnings

### 1. Design Tokens are the Foundation of System Consistency
- **Unified Visual Language**: Using `var(--devui-primary)` instead of hardcoded color values ensures easy theme switching and global style adjustment
- **Spec Calibration Strategy**: Multimodal recognition of margins, fonts, and colors may not be fully accurate; normalization mapping with Design Token library is needed
- **Zero Hardcoding Principle**: Hybrid V3 strictly forbids magic numbers and inline styles

### 2. Three-Layer Architecture of Hybrid Approach
Distilled from V3-V5 experiments, a clear layering strategy emerged:
- **Layer 1 (Layout)**: Native CSS Grid/Flex for page-level layouts (e.g., three-column, dashboard grids)
- **Layer 2 (Structure)**: Hybrid use of native containers + library component children (e.g., form groups, toolbars)
- **Layer 3 (Controls)**: 100% library components for interactive controls (`d-button`, `d-select`, `d-text-input`, etc.)

### 3. Complex Scenario Best Practices (from Page V5 Experiment)
- **Form Field Layout**: Use native `<div class="hybrid-field-row">` + Flex, embed DevUI form controls
- **Rich Text Toolbar**: Use DevUI `d-button bsStyle='text'` + native dividers for pixel-perfect restoration
- **Metadata Panel**: Vertical forms use native containers + DevUI `d-select`/`d-datepicker` for compact layout

### 4. Container Decision Framework
```
Need Container → Does library provide it?
  ├─ No → Native + Design Tokens ✓
  └─ Yes → Works in current environment?
       ├─ No → Native container + Library sub-components ✓ (e.g., d-form issues in standalone mode)
       └─ Yes → Meets design requirements?
            ├─ No → Native container + Library sub-components ✓
            └─ Yes → Use library container ✓
```

### 5. Skill Formalization
- **Hybrid UI Generator Skill**: Standardizes the hybrid approach as a reusable design decision process (located in `.claude/skills/`)
- **Multimodal Vision & Calibration**: V3 proved the effectiveness of Gemini 3 Pro + structured UI Spec
- **Component Coverage Targets**: Form controls and buttons 100% use library components; layout containers flexibly chosen based on needs

---

## 📚 Related Resources

- **DevUI Official Docs**: [ng-devui.github.io](https://ng-devui.github.io/)
- **DevUI GitHub**: [github.com/DevCloudFE/ng-devui](https://github.com/DevCloudFE/ng-devui)
- **Design Token Reference**: DevUI Design Tokens (`node_modules/ng-devui/styles-var/devui-var.scss`)
- **Experiment Documentation**: `EXPERIMENT_LOG.md` files in each experiment directory

## 📝 Changelog

### 2026-02-07
- ✅ Completed **Page V5** Experiment - Huawei Cloud Work Item Creation Form, validating complex form scenarios
- 📘 Updated **Hybrid UI Generator Skill** to v2.0.0, added multimodal vision recognition and spec calibration chapters
- 🔧 Optimized Hybrid V3 quality validation checklist with fine-grained inspection items

### 2026-02-05
- ✅ Completed **Page V4** Experiment - Cloud Service Monitoring Dashboard
- 📝 Expanded `llms-full.txt` component specification documentation

### 2026-02-03
- ✅ Completed **Page V3** Experiment - Combined with Gemini 3 Pro multimodal capabilities
- 🧪 Validated effectiveness of multimodal model + prompt engineering

### 2026-02-02
- ✅ Completed **Card V3** Experiment - Based on new Hybrid UI Generator Skill
- 📘 First validation of skill documentation executability and effectiveness

---

*This project is developed collaboratively with **Gemini 3 Pro (High)** & **Claude Sonnet 4.5***  
*Last updated: 2026-02-08*
