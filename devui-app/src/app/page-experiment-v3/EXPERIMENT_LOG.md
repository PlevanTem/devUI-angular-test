# Hybrid UI Generator - Experiment Log

## Version History

| Version | Date | Model | Key Changes |
|---------|------|-------|-------------|
| V1 | - | Cursor Auto | Initial implementation |
| V2 | - | Cursor Auto | Added three comparison schemes |
| V3 | 2026-02-07 | Gemini 3 Pro (High) | Updated LLMs docs, enhanced hybrid approach |

---

## Experiment V3 Summary

### Context
- **Model**: Gemini 3 Pro (High)
- **Framework**: Angular 21.1.3
- **Component Library**: DevUI 18.0.0
- **Location**: `devui-app/src/app/page-experiment-v3/`

### Input Design
![Original Design](uploaded_image.png)

A cloud service configuration wizard page with:
- Left sidebar with step indicators
- Main content area with form
- Form contains: source selection (radio), project name (input), template selection (card grid)
- Fixed footer with pricing info and action buttons

### Three Implementation Schemes

#### Scheme 1: Pixel-Perfect Restoration (V1)
**Approach**: Pure native HTML/CSS to exactly match visual design

**Characteristics**:
- Native `<form>`, `<input>`, `<button>` elements
- Hardcoded CSS values matching exact pixel specs
- Full control over every visual detail
- No component library dependencies

**Pros**:
- Maximum visual fidelity
- Complete control over styling
- No version compatibility issues

**Cons**:
- No library features (validation, accessibility, theming)
- Difficult to maintain with design system updates
- No component reusability

#### Scheme 2: DevUI Standard (V2)
**Approach**: Attempt to use DevUI components strictly per specification

**Characteristics**:
- Use d-layout, d-card, d-form-item, d-button, etc.
- Follow library API documentation
- Rely on library styles

**Issues Encountered**:
- `d-form` doesn't work in standalone components
- `d-radio-group` has binding issues
- `placeholder` binding syntax differences
- Layout container components limited

**Result**: Had to fall back to hybrid approach for form container

#### Scheme 3: Hybrid Fusion (V3) ⭐ Recommended
**Approach**: Native containers + DevUI sub-components + Design tokens

**Characteristics**:
- Native `<form class="hybrid-form">` for container
- DevUI `d-form-item`, `d-form-label`, `d-form-control` for structure
- DevUI `d-text-input`, `d-radio`, `d-card`, `d-button` for inputs
- CSS uses `var(--devui-*)` design tokens with fallbacks
- `[attr.data-layout]` for variant control

**Pros**:
- Works with Angular 21 standalone components
- Preserves library features (accessibility, theming)
- Design system compliant via tokens
- Easy to migrate when library updates
- Best balance of flexibility and consistency

**CSS Architecture**:
```css
/* Layer 1: Layout containers (native) */
.hybrid-form { display: flex; flex-direction: column; gap: var(--devui-spacing-lg, 24px); }

/* Layer 2: Layout variants via data attributes */
.hybrid-form[data-layout="horizontal"] d-form-item { display: flex; gap: var(--devui-spacing-md, 16px); }

/* Layer 3: Component enhancements (custom + library) */
.hybrid-card-wrapper { display: grid; grid-template-columns: repeat(3, 1fr); }

/* Layer 4: All values from design tokens */
.hybrid-card-title { color: var(--devui-text-primary, #252B3A); }
```

---

## Key Learnings

### 1. Container Components Have Issues
- `d-form` doesn't initialize properly in standalone mode
- `d-radio-group` has complex binding requirements
- **Solution**: Use native containers with library sub-components

### 2. Property Binding Syntax Matters
- Some properties need `[prop]="'value'"`, others just `prop="value"`
- `placeholder` works as attribute, not always as binding
- **Solution**: Test both syntaxes, prefer simpler when possible

### 3. Design Tokens Enable Consistency
- Using `var(--devui-primary, #5E7CE0)` ensures:
  - Theming compatibility
  - Design system compliance
  - Easy updates when tokens change
- **Solution**: Always use CSS variables with fallbacks

### 4. Hybrid Approach is Best for Compatibility
- When library version doesn't match framework:
  - Native container (works everywhere)
  - Library sub-components (preserves features)
  - Design tokens (maintains visual consistency)

### 5. Layer Architecture Improves Maintainability
```
Layer 1: Layout containers (native HTML)
Layer 2: Structure components (library sub-components)
Layer 3: Input/Action components (library components)
Layer 4: Styling (design tokens only)
```

---

## Recommendations for Future Work

1. **Always check VERSION_COMPATIBILITY.md** before choosing approach
2. **Start with hybrid for complex layouts** - safer default
3. **Document every native element usage** - explain why and migration path
4. **Test in isolation first** - confirm component works before integrating
5. **Use design tokens exclusively** - never hardcode visual values

---

## Files Created

| File | Purpose |
|------|---------|
| `page-comparison-v3.component.ts` | Component logic with mock data |
| `page-comparison-v3.html` | Template with 3 scheme implementations |
| `page-comparison-v3.component.css` | Styles for all 3 schemes |
| `EXPERIMENT_LOG.md` | This documentation |

---

## SKILL Updates Applied

Based on this experiment, the `hybrid-ui-generator` SKILL has been upgraded to v2.0.0 with:

1. **5-Phase Workflow**: Intent → Analysis → Design → Generation → Validation
2. **Image/Text Input Support**: Structured approach to understanding inputs
3. **Container Decision Matrix**: Clear rules for when to use native vs library
4. **Quality Validation Checklist**: Layout, typography, layer, style checks
5. **CSS Architecture Guidelines**: Clear layer separation pattern
6. **Code Templates**: Ready-to-use patterns for common scenarios
