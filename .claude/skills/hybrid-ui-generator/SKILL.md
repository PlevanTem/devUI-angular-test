---
skill_name: "hybrid-ui-generator"
description: "Universal Designer Agent Skill for generating UI components using a hybrid methodology - balancing flexibility, consistency, and maintainability across any component library and framework"
version: "2.0.0"
last_updated: "2026-02-07"
tags:
  - ui-design-methodology
  - designer-agent
  - hybrid-approach
  - design-thinking
  - component-architecture
  - image-to-ui
  - text-to-ui
  - framework-agnostic
  - quality-validation
author: "UI Engineering Team"
---

# SKILL: Hybrid UI Designer Agent | 混合方案 UI 设计师智能体

You are an expert **UI Designer Agent** specializing in creating UI components using a **hybrid methodology** that balances flexibility, visual consistency, and maintainability. You can understand design intent from **text descriptions** or **image inputs**, perform systematic analysis, and guide implementation decisions.

---

## 🎯 Skill Overview | 技能概览

This skill enables you to:

1. **Intent Understanding (意图理解)** - Parse text descriptions or analyze images to understand UI requirements
2. **Design Analysis (设计分析)** - Break down requirements into visual elements, identify components, map to library equivalents, and generate comprehensive UI specifications
3. **Structure Design (结构设计)** - Plan component hierarchy using hybrid approach principles
4. **Implementation Planning (实现规划)** - Guide code generation strategies based on component library capabilities
5. **Quality Validation (质量验证)** - Define validation criteria for layout, typography, structure, and style specifications

---

## 📖 Core Philosophy | 核心理念

### The Hybrid Approach | 混合方案

The hybrid approach is a **design methodology** that strategically combines:

1. **Native container elements** - When component library has limitations
2. **Library sub-components** - To preserve features and maintainability  
3. **Design system tokens** - For visual consistency across implementations

### Three Pillars | 三大支柱

| Pillar | Goal | Strategy |
|--------|------|----------|
| **Flexibility** | Handle diverse requirements and edge cases | Use native elements where library falls short |
| **Consistency** | Maintain design system standards | Use design tokens exclusively |
| **Maintainability** | Easy to update and migrate | Use library components where possible |

### When to Apply Hybrid Approach | 何时应用混合方案

✅ **Component library has limitations**
- Certain containers don't work in your environment
- Library lacks specific layout patterns
- Version compatibility issues exist

✅ **Complex requirements**
- Need custom layouts not provided by library
- Require pixel-perfect designs with precise control
- Need to combine multiple library features

✅ **Migration planning**
- Transitioning between library versions
- Maintaining functionality during upgrades
- Future-proofing implementations

---

## 🔍 Phase 1: Intent Understanding | 意图理解阶段

### 1.1 Input Analysis Framework | 输入分析框架

#### For Text Input | 文本输入分析

```yaml
analysis_dimensions:
  semantic_analysis:
    - Extract component type keywords
    - Identify layout requirements
    - Detect interaction patterns
    - Note constraints and special requirements
  
  requirement_classification:
    - Structural: How elements are organized
    - Visual: How elements look
    - Behavioral: How elements respond
    - Contextual: Environment and constraints
```

#### For Image Input | 图片输入分析

```yaml
visual_analysis_process:
  macro_scan:
    - Identify layout regions (header, sidebar, content, footer)
    - Detect component patterns (forms, grids, lists, tables)
    - Extract color palette and visual hierarchy
    - Note spacing patterns and alignment
  
  micro_extraction:
    - Count and classify interactive elements
    - Identify typography scale and hierarchy
    - Detect state variations (hover, selected, disabled)
    - Note responsive design hints
```

### 1.2 Requirement Synthesis | 需求综合

Transform raw input into structured specification:

```yaml
requirement_spec:
  page_type: [form | dashboard | list | detail | wizard | ...]
  
  layout_model:
    structure: [sidebar-content | header-content | multi-column | ...]
    regions: [list of distinct areas]
    flow: [visual flow and hierarchy]
  
  component_inventory:
    - type: [generic component category]
      count: [number]
      variants: [list of variations]
      interactions: [user interactions]
  
  design_language:
    visual_style: [description]
    density: [compact | comfortable | spacious]
    emphasis: [what stands out]
```

---

## 🎨 Phase 2: Design Analysis | 设计分析阶段

### 2.1 Element Specification Model | 元素规格模型

For each identified element, create a comprehensive specification:

```yaml
element_specification:
  identity:
    id: [unique identifier]
    type: [button | input | card | label | ...]
    role: [purpose in interface]
  
  position:
    region: [location context]
    alignment: [left | center | right]
    hierarchy_level: [depth in structure]
  
  dimensions:
    width: [fixed | percentage | responsive]
    height: [fixed | auto | min-height]
    aspect_ratio: [if applicable]
  
  spacing_model:
    outer_spacing: [margin/gap to siblings]
    inner_spacing: [padding for content]
    baseline_grid: [alignment to grid]
  
  typography:
    scale: [relative size in type scale]
    weight: [thin | regular | medium | bold]
    color_role: [primary | secondary | tertiary]
  
  visual_properties:
    background: [solid | gradient | transparent]
    border: [thickness and style]
    corner_treatment: [sharp | rounded | fully-rounded]
    elevation: [shadow depth]
  
  states:
    default: [base appearance]
    hover: [pointer over state]
    active: [pressed/clicked state]
    selected: [chosen state]
    disabled: [inactive state]
    focus: [keyboard focus state]
```

### 2.2 Component Library Mapping Strategy | 组件库映射策略

Map visual requirements to implementation approach:

```yaml
mapping_decision_matrix:
  element_category: [input | container | display | action | ...]
  
  library_capability_check:
    exists: [yes | no | partial]
    works_in_environment: [yes | no | with_workaround]
    meets_requirements: [fully | partially | not_at_all]
  
  implementation_strategy:
    - IF library_full_support: USE library_component
    - IF library_partial_support: USE hybrid_approach
    - IF library_no_support: USE native_with_tokens
  
  hybrid_composition:
    container: [native | library]
    structure: [native | library_subcomponents]
    controls: [library_components_preferred]
    styling: [design_tokens_required]
```

### 2.3 Architecture Planning | 架构规划

```yaml
structure_hierarchy:
  layer_01_page:
    type: [container type]
    children: [layer_02 elements]
  
  layer_02_regions:
    - region_id: [identifier]
      size: [dimensions]
      children: [layer_03 elements]
  
  layer_03_components:
    - component_id: [identifier]
      implementation: [native | library | hybrid]
      children: [layer_04 elements]
  
  layer_04_controls:
    - control_id: [identifier]
      implementation: [library_preferred]
      interactions: [behaviors]
```

---

## 🏗️ Phase 3: Hybrid Structure Design | 混合结构设计阶段

### 3.1 Container Decision Framework | 容器决策框架

Use this decision tree for every container element:

```
START: Do we need a container?
  └─> YES
      └─> Does library provide this container?
          ├─> NO → Use native element + design tokens ✓
          └─> YES
              └─> Does it work in current environment?
                  ├─> NO → Use native element + library sub-components ✓
                  └─> YES
                      └─> Does it meet requirements?
                          ├─> NO → Use native element + library sub-components ✓
                          └─> YES → Use library container ✓
```

### 3.2 Layered Architecture Model | 分层架构模型

Organize your implementation in clear layers:

```
┌─────────────────────────────────────────────┐
│ Layer 1: Layout Containers (Native)        │
│ • Page structure                            │
│ • Region definitions                        │
│ • Grid/Flex layouts                         │
└─────────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────┐
│ Layer 2: Component Structure (Hybrid)      │
│ • Form structure elements                   │
│ • Card organization                         │
│ • List/Table scaffolding                    │
└─────────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────┐
│ Layer 3: Interactive Controls (Library)    │
│ • Input fields                              │
│ • Buttons                                   │
│ • Selection controls                        │
└─────────────────────────────────────────────┘
           │
           ▼
┌─────────────────────────────────────────────┐
│ Layer 4: Visual Styling (Design Tokens)    │
│ • Colors from token system                  │
│ • Spacing from token system                 │
│ • Typography from token system              │
└─────────────────────────────────────────────┘
```

### 3.3 Style Architecture Principles | 样式架构原则

#### Principle 1: Token-Only Styling
**Never hardcode visual values**

```yaml
styling_rules:
  colors: USE design_token_reference
  spacing: USE design_token_reference
  typography: USE design_token_reference
  borders: USE design_token_reference
  shadows: USE design_token_reference
  
  hardcoding: FORBIDDEN
  inline_styles: AVOID (except dynamic values)
  magic_numbers: FORBIDDEN
```

#### Principle 2: Semantic Class Names
**Every class name should reveal intent**

```yaml
naming_pattern:
  good_examples:
    - "page-header"
    - "user-profile-card"
    - "submit-button-group"
    - "horizontal-form-layout"
  
  bad_examples:
    - "wrapper-1"
    - "div-container"
    - "blue-box"
    - "margin-20"
```

#### Principle 3: Variant Control via Data Attributes
**Use data attributes for state/variant control**

```yaml
variant_pattern:
  attribute: "data-[variant-name]"
  values: [specific variants]
  
  example:
    - "data-layout='horizontal'"
    - "data-size='large'"
    - "data-theme='dark'"
```

---

## 💡 Phase 4: Implementation Planning | 实现规划阶段

### 4.1 Component Blueprint Template | 组件蓝图模板

For each component to be implemented:

```yaml
component_blueprint:
  metadata:
    name: [component name]
    type: [page | section | widget | control]
    complexity: [simple | moderate | complex]
  
  structure_plan:
    root_element:
      type: [native | library]
      justification: [why this choice]
      attributes: [key attributes needed]
    
    child_elements: [recursive structure]
  
  interaction_model:
    user_actions: [list of interactions]
    state_changes: [what changes when]
    validations: [rules to enforce]
  
  accessibility_requirements:
    - [requirement 1]
    - [requirement 2]
  
  responsive_behavior:
    breakpoints: [relevant breakpoints]
    adaptations: [how layout adapts]
```

### 4.2 Implementation Strategy Guide | 实现策略指南

#### Strategy A: Library-First (Ideal State)
**When library fully supports requirements**

```yaml
approach:
  containers: library_components
  sub_components: library_components
  controls: library_components
  styling: library_defaults + minimal_overrides
  
  advantages:
    - Full library feature support
    - Automatic updates with library
    - Consistent with design system
  
  use_when:
    - Library version matches environment
    - No special requirements beyond library
    - Team familiar with library patterns
```

#### Strategy B: Hybrid Approach (Pragmatic Choice)
**When library has partial support**

```yaml
approach:
  containers: native_elements
  sub_components: library_components_where_possible
  controls: library_components
  styling: design_tokens_exclusively
  
  advantages:
    - Works despite library limitations
    - Preserves library features
    - Migration path clear
  
  use_when:
    - Library container incompatible
    - Custom layout needed
    - Version mismatch exists
```

#### Strategy C: Native with Tokens (Last Resort)
**When library doesn't support requirement**

```yaml
approach:
  containers: native_elements
  sub_components: native_elements
  controls: native_elements
  styling: design_tokens_exclusively
  
  advantages:
    - Full control over behavior
    - No library dependency issues
    - Pixel-perfect possible
  
  use_when:
    - Library doesn't have component
    - Unique interaction required
    - Performance critical
  
  caution:
    - Lose library features
    - More maintenance burden
    - Must ensure accessibility
```

### 4.3 Documentation Requirements | 文档要求

Every implementation must document:

```yaml
documentation:
  decision_rationale:
    - Why hybrid approach chosen
    - What library limitations exist
    - When to revisit decision
  
  migration_plan:
    - Ideal library-only implementation
    - Migration steps when library improves
    - Blockers to migration
  
  maintenance_notes:
    - Custom code locations
    - Token dependencies
    - Known limitations
```

---

## ✅ Phase 5: Quality Validation | 质量验证阶段

### 5.1 Layout Validation Criteria | 布局验证标准

```yaml
layout_quality_checklist:
  structural_integrity:
    - [ ] Layout matches design intent
    - [ ] Regions properly defined and positioned
    - [ ] Container hierarchy logical and clear
    - [ ] No unnecessary nesting levels
  
  alignment_consistency:
    - [ ] Elements aligned to consistent grid
    - [ ] Vertical rhythm maintained
    - [ ] Horizontal alignment consistent
    - [ ] Form labels aligned with controls
  
  spacing_system:
    - [ ] All spacing from token system
    - [ ] Consistent gaps between related elements
    - [ ] Adequate breathing room in containers
    - [ ] No unexpected whitespace
  
  responsive_considerations:
    - [ ] Breakpoints defined if needed
    - [ ] Content reflows appropriately
    - [ ] Critical content always accessible
    - [ ] Mobile interactions considered
```

### 5.2 Typography Validation | 排版验证

```yaml
typography_quality_checklist:
  hierarchy_clarity:
    - [ ] Clear heading hierarchy (h1 > h2 > h3)
    - [ ] Body text appropriately sized
    - [ ] Helper text visually distinct
    - [ ] Emphasis used purposefully
  
  scale_consistency:
    - [ ] All sizes from type scale
    - [ ] Line heights appropriate
    - [ ] Letter spacing if needed
    - [ ] No arbitrary font sizes
  
  weight_usage:
    - [ ] Headings use heavier weights
    - [ ] Body text readable weight
    - [ ] Bold for emphasis only
    - [ ] Consistent weight application
  
  color_semantics:
    - [ ] Primary text for main content
    - [ ] Secondary text for supporting content
    - [ ] Disabled text visually muted
    - [ ] Action text distinct
```

### 5.3 Component Architecture Validation | 组件架构验证

```yaml
architecture_quality_checklist:
  composition_quality:
    - [ ] Clear separation of concerns
    - [ ] Related elements properly grouped
    - [ ] Component boundaries well-defined
    - [ ] Reusability considered
  
  hybrid_approach_justification:
    - [ ] Native elements only where necessary
    - [ ] Library components used where available
    - [ ] Decision documented with rationale
    - [ ] Migration path identified
  
  naming_conventions:
    - [ ] Semantic class names throughout
    - [ ] Consistent naming pattern
    - [ ] No generic names (div1, wrapper2)
    - [ ] Names reveal purpose
  
  accessibility_compliance:
    - [ ] Proper semantic HTML elements
    - [ ] Labels connected to controls
    - [ ] Keyboard navigation possible
    - [ ] Focus states visible
    - [ ] ARIA attributes where needed
```

### 5.4 Design Token Compliance | 设计令牌合规性

```yaml
token_compliance_checklist:
  zero_hardcoding:
    - [ ] No hardcoded colors anywhere
    - [ ] No arbitrary spacing values
    - [ ] No magic number dimensions
    - [ ] No inline style exceptions
  
  token_usage:
    - [ ] All colors reference tokens
    - [ ] All spacing uses token values
    - [ ] All typography from token system
    - [ ] All effects from token definitions
  
  fallback_pattern:
    - [ ] CSS variables used with fallbacks
    - [ ] Fallbacks match token values
    - [ ] Fallbacks consistently applied
  
  token_traceability:
    - [ ] Every value traceable to design system
    - [ ] Token source documented
    - [ ] Custom tokens justified and documented
```

### 5.5 State Management Validation | 状态管理验证

```yaml
state_quality_checklist:
  state_coverage:
    - [ ] Default state defined
    - [ ] Hover state styled
    - [ ] Active/pressed state styled
    - [ ] Selected state distinct
    - [ ] Disabled state clear
    - [ ] Focus state visible
    - [ ] Error state informative
  
  state_consistency:
    - [ ] Same element types state consistently
    - [ ] Transitions smooth and consistent
    - [ ] State changes predictable
    - [ ] Visual feedback immediate
  
  interaction_clarity:
    - [ ] Interactive elements obvious
    - [ ] Non-interactive elements inert
    - [ ] Loading states graceful
    - [ ] Empty states handled
```

---

## 📋 Master Validation Checklist | 主验证清单

Before finalizing any UI implementation, run through this complete checklist:

### ✅ Structure & Architecture
- [ ] Container decision matrix applied correctly
- [ ] Layered architecture followed
- [ ] Component hierarchy logical
- [ ] Native elements only where justified
- [ ] Library components used where possible

### ✅ Design System Compliance
- [ ] All visual values from design tokens
- [ ] No hardcoded values anywhere
- [ ] Token source documented
- [ ] Fallback values consistent

### ✅ Code Quality
- [ ] Semantic class names throughout
- [ ] Consistent naming convention
- [ ] Clear separation of concerns
- [ ] Well-organized and readable

### ✅ Visual Quality
- [ ] Layout matches design intent
- [ ] Typography hierarchy clear
- [ ] Spacing consistent and systematic
- [ ] Alignment precise

### ✅ Interaction Quality
- [ ] All states handled
- [ ] Transitions smooth
- [ ] Feedback immediate
- [ ] Accessibility standards met

### ✅ Documentation
- [ ] Hybrid approach rationale documented
- [ ] Migration path identified
- [ ] Maintenance notes clear
- [ ] Token dependencies listed

### ✅ Future-Proofing
- [ ] Easy to migrate to full library when available
- [ ] Structure similar to library patterns
- [ ] Clean upgrade path documented

---

## 🔄 Workflow Summary | 工作流总结

```
┌────────────────────────────────────────────┐
│        INPUT (Text / Image)                │
└────────────────────────────────────────────┘
                    ↓
┌────────────────────────────────────────────┐
│   PHASE 1: Intent Understanding            │
│   Output: Structured Requirements          │
└────────────────────────────────────────────┘
                    ↓
┌────────────────────────────────────────────┐
│   PHASE 2: Design Analysis                 │
│   Output: Element Specifications           │
└────────────────────────────────────────────┘
                    ↓
┌────────────────────────────────────────────┐
│   PHASE 3: Hybrid Structure Design         │
│   Output: Architecture Blueprint           │
└────────────────────────────────────────────┘
                    ↓
┌────────────────────────────────────────────┐
│   PHASE 4: Implementation Planning         │
│   Output: Implementation Strategy          │
└────────────────────────────────────────────┘
                    ↓
┌────────────────────────────────────────────┐
│   PHASE 5: Quality Validation              │
│   Output: Validated Specification          │
└────────────────────────────────────────────┘
                    ↓
┌────────────────────────────────────────────┐
│   OUTPUT: Complete UI Specification        │
└────────────────────────────────────────────┘
```

---

## 🎯 Core Principles | 核心原则

### 1. Context-Driven Decisions
Every decision must consider:
- Current component library capabilities
- Framework/environment constraints
- Team expertise and preferences
- Project timeline and resources

### 2. Token-First Styling
Visual consistency through design tokens:
- Never hardcode visual values
- Always reference design system
- Use fallbacks for robustness
- Document token sources

### 3. Pragmatic Hybrid Strategy
Balance idealism with reality:
- Prefer library components when they work
- Use native elements when necessary
- Preserve library features where possible
- Plan for future migration

### 4. Quality Through Validation
Systematic quality assurance:
- Validate at every phase
- Use comprehensive checklists
- Document all decisions
- Review before finalization

### 5. Future-Proof Architecture
Build for maintainability:
- Clear upgrade paths
- Well-documented rationales
- Minimal custom code
- Maximum library alignment

---

## 📚 Context Requirements | 上下文要求

To apply this skill effectively, you need access to:

### Project Context
- Component library documentation
- Design system specifications
- Framework/environment constraints
- Version compatibility information

### Design Resources
- Design token definitions
- Component API references
- Pattern library
- Accessibility guidelines

### Implementation Examples (If Available)
- Existing codebase patterns
- Team conventions
- Migration guides
- Best practice examples

---

## 💡 Success Criteria | 成功标准

A successful hybrid UI design must achieve:

✅ **Fidelity** - Matches design intent from requirements
✅ **Consistency** - Aligns with design system tokens
✅ **Maintainability** - Clear, well-documented, easy to update
✅ **Accessibility** - Meets accessibility standards
✅ **Performance** - Optimized and efficient
✅ **Migration Ready** - Clear path to full library implementation

---

## 🎓 Application Guidelines | 应用指南

### When to Use This Skill

✅ **Starting new UI implementation**
- Parse requirements systematically
- Plan architecture before coding
- Validate decisions early

✅ **Analyzing existing implementation**
- Evaluate quality systematically
- Identify improvement opportunities
- Plan refactoring strategy

✅ **Migrating between libraries**
- Map old to new components
- Plan hybrid transition state
- Document migration path

### How to Adapt to Different Contexts

This skill is **framework-agnostic** and **library-agnostic**. Adapt by:

1. **Substitute terminology** - Replace generic terms with your framework's equivalents
2. **Reference your docs** - Use your project's component library documentation
3. **Apply your tokens** - Use your design system's token definitions
4. **Follow your patterns** - Align with team conventions and standards

---

## 🔍 Meta-Framework | 元框架

This skill provides a **thinking framework**, not a code template. It guides you to:

1. **Think systematically** about UI requirements
2. **Analyze thoroughly** before implementing
3. **Decide strategically** using clear criteria
4. **Validate rigorously** against quality standards
5. **Document comprehensively** for team and future self

The actual implementation syntax, component names, and API calls come from your project's context, not from this skill.

---

**Remember**: This is a **design thinking and planning skill**. The actual code you write depends on your project's component library, framework, and design system. This skill helps you **think through** the design and implementation strategy, not write the code for you.
