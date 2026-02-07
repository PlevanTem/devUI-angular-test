# Card Component Experiment V3 Log

## Context
- **Objective**: Recreate a specific Card UI design using 3 different approaches.
- **Input**: Image of a server/instance card.
- **Location**: `src/app/card-experiment-v3/`

## Implementations

### Scheme 1: Pixel-Perfect Restoration (V1)
- **Method**: Native HTML/CSS.
- **Result**: Exact visual match including gradients, shadows, and precise spacing.
- **Pros**: 100% Fidelity.
- **Cons**: No library features, hard maintenance, no theming support.

### Scheme 2: DevUI Standard (V2)
- **Method**: Strict usage of `d-card` and its sub-components (`d-card-header`, `d-card-content`, `d-card-actions`).
- **Result**: Functional but visually distinct from the original design.
  - Header layout is constrained by `d-card-header` slots.
  - Actions alignment is standard.
- **Pros**: Full library support, consistent with other standard cards.
- **Cons**: Difficult to achieve specific custom layouts (like the right-aligned date in header).

### Scheme 3: Hybrid Fusion (V3)
- **Method**: `d-card` container + Custom internal Grid Layout + Design Tokens.
- **Key Techniques**:
  - Used `d-card` for container styling (shadow, border, bg).
  - Used `d-icon` for icons but with custom sizing via styles.
  - Used CSS Grid for the info section (Status/CPU/Mem/Storage).
  - Used `var(--devui-*)` tokens for all colors and spacing to ensure consistency.
  - Replaced strict `d-card-actions` with a flex container to match the split action button layout.
- **Result**: High fidelity (close to V1) while using library components and tokens.

## Conclusion
The **Hybrid Approach (V3)** successfully bridges the gap between custom design requirements and component library standards. It allows for:
1. **Visual Fidelity**: Matching the specific layout of the design.
2. **System Consistency**: Using design tokens ensures it looks like part of the system.
3. **Maintainability**: Using `d-card` and `d-icon` means updates to the library are respected where possible.

## Files
- `card-comparison-v3.component.ts`: Logic & Mock Data
- `card-comparison-v3.html`: Templates for V1, V2, V3
- `card-comparison-v3.component.css`: Styles (Native for V1, Token-based for V3)
