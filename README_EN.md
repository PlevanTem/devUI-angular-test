# DevUI Angular Component Restoration Experiment

[中文](./README.md) | **English**

This project is an experimental playground for exploring different UI implementation strategies using **Angular** and the **DevUI** component library. It focuses on comparing methodologies for reproducing high-fidelity designs, specifically evaluating the trade-offs between strict component usage and custom implementations.

![alt text](image.png)

## 🎯 Project Objectives

- **Evaluate UI Fidelity**: Compare how well different approaches match original design specifications.
- **Test "Hybrid Fusion" Methodology**: validate a balanced approach that combines component library stability with custom layout flexibility using Design Tokens.
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
  - Use Library Containers (e.g., `d-card`) where flexible.
  - Use Native Layouts (Flex/Grid) for complex internal structures.
  - **Strictly Use Design Tokens** (`var(--devui-*)`) for all styling.
- **Pros**: High fidelity, system consistency, maintainable, visually robust.

## 📂 Experiment Catalog

| Experiment | Description | Location | Status |
|------------|-------------|----------|--------|
| **Card V1** | Basic Card Component | `src/app/card-experiment/` | ✅ Done |
| **Card V2** | Advanced Card with Actions | `src/app/card-experiment-v2/` | ✅ Done |
| **Card V3** | Instance/Server Card (Hybrid) | `src/app/card-experiment-v3/` | ✅ **New** |
| **Page V1** | Full Page Layout | `src/app/page-experiment/` | ✅ Done |
| **Page V2** | Dashboard Page | `src/app/page-experiment-v2/` | ✅ Done |
| **Page V3** | Cloud Config Wizard (Hybrid) | `src/app/page-experiment-v3/` | ✅ **New** |

![alt text](image-1.png)

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

## 💡 Key Learnings

- **Design Tokens are Critical**: Using `var(--devui-primary)` instead of hex codes is the single most important factor for making custom/hybrid components feel "native" to the system.
- **Container Flexibility**: Library containers (`d-card`, `d-form`) sometimes lack the slot flexibility needed for complex designs. Hybrid approaches using native wrappers often yield better results.
- **Hybrid Protocol**: The "Hybrid UI Generator" skill (documented in `.claude/skills`) was refined through these experiments to standardize the decision-making process for when to use Native vs. Library components.

---

*Verified with Gemini 3 Pro (High) & Claude 4.5 Sonnet*
