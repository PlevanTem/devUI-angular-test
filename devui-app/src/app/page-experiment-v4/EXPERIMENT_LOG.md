# Page Experiment V4 Log (Cloud Dashboard)

## Context
- **Objective**: Implement a Cloud Service Dashboard using 3 different schemes.
- **Input**: Image of "Huawei Cloud" console dashboard.
- **Location**: `src/app/page-experiment-v4/`

## Implementations

### Scheme 1: Pixel-Perfect Restoration (V1)
- **Method**: Native HTML/CSS, Grid Layout.
- **Result**: Exactly matches the image.
- **Pros**: 100% Fidelity.
- **Cons**: High maintenance effort, "dead" components (divs instead of semantic elements).

### Scheme 2: DevUI Standard (V2)
- **Method**: Strict DevUI Components (`d-layout`, `d-header`, `d-aside`, `d-content`, `d-accordion`, `d-tabs`).
- **Result**: Functional and consistent, but visual gaps:
  - `d-accordion` menu styling is generic.
  - `d-layout` header height and padding are fixed by library defaults.
  - Card layouts inside `d-row`/`d-col` are rigid compared to the custom grid in the image.
- **Pros**: Fastest implementation, full library support.
- **Cons**: Doesn't match the specific visual flair of the source image.

### Scheme 3: Hybrid Fusion (V3) - Recommended
- **Method**: 
  - **Layout**: CSS Grid for main page structure (Sidebar/Content) to match the dashboard density.
  - **Sidebar**: Native List implementation styled with `var(--devui-*)` tokens (more flexible than `d-accordion` for this specific look).
  - **Components**: Used `d-card`, `d-tabs`, `d-icon`, `d-tag`, `d-button` for all interactive elements.
  - **Styling**: Strictly token-based. No hardcoded colors.
- **Key Techniques**:
  - `hybrid-page-layout` grid matches the precise sidebar width.
  - `hybrid-gate-card` uses a custom Gradient but with token colors (`--devui-success` derived).
  - `hybrid-mini-cards-grid` uses CSS Grid to perfectly align the 6 small cards, while using `d-card` for the card shell.

## Conclusion
The **Hybrid Approach (V3)** provides the best balance. It captures the "spirit" and high-fidelity of the original design (e.g., the specific gate result card layout) while keeping the implementation grounded in the DevUI design system through tokens and atomic components.
