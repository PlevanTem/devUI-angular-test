---
skill_name: "gen-llms-txt"
description: "Transform official UI component library documentation into structured llms.txt format for AI UI generation"
version: "3.0.0"
last_updated: "2026-02-07"
tags:
  - ui-generation
  - documentation
  - design-systems
  - component-library
  - api-transformation
author: "UX Design Team"
---

# SKILL: LLMs.txt Documentation Generator

## 🎯 Purpose | 目的

Transform official UI component library documentation into **structured, AI-readable format** for efficient UI code generation.

**Input**: Official documentation (component library websites)  
**Output**: 
- `llms-full.txt` - Complete structured documentation (全量)
- `llms.txt` - Quick reference summary (精简)

---

## 📐 Three-Part Structure | 三部分结构

Based on Ant Design documentation patterns, llms-full.txt should contain:

### Part 1: Semantic Description | 语义化描述

**Purpose**: Component structure and element breakdown

```yaml
# Schema
SemanticDescription:
  summary: string                    # 概述
  components:
    - name: string                   # 组件名称
      elements:
        - key: string                # 语义化键名
          description: string        # 样式和用途描述
      subComponents:                 # 子组件
        - name: string
          elements: []
```

**Example Output**:
```txt
# SEMANTIC DESCRIPTIONS | 语义化描述

TOTAL_COMPONENTS: 65

## Button
ELEMENTS:
  - root: Button wrapper container
  - icon: Icon element inside button
  - content: Text content area
  - loading: Loading spinner overlay

## Card
ELEMENTS:
  - root: Card container
  - header: Card header section
  - body: Main content area
  - cover: Cover image container
  - actions: Bottom action buttons
SUB_COMPONENTS:
  - Card.Meta:
    - avatar: Avatar element
    - title: Title text
    - description: Description text
```

### Part 2: Resources | 资源文档

**Purpose**: Design resources, articles, references

```yaml
# Schema
Resources:
  designResources:
    - name: string
      description: string
      link: url
      tag: string
  articles:
    - title: string
      link: url
  references:
    - name: string
      description: string
      link: url
```

**Example Output**:
```txt
# RESOURCES | 资源

## Design Resources
- Figma UI Kit: https://figma.com/...
- Sketch Components: https://sketch.com/...
- Adobe XD: https://xd.adobe.com/...

## Articles
- Design Principles: https://...
- Accessibility Guide: https://...

## References
- Official Docs: https://ant.design
- GitHub: https://github.com/ant-design/ant-design
```

### Part 3: Component API Documentation | 组件API文档

**Purpose**: Complete component specifications

```yaml
# Schema
ComponentDoc:
  whenToUse: string[]                # 使用场景
  examples:
    - id: string
      title: string
  api:
    version: string                  # 可用版本
    props:
      - property: string
        description: string
        type: string
        default: any
        version: string
  designToken: reference
  faq:
    - question: string
      answer: string
```

**Example Output**:
```txt
---
COMPONENT: Button
IMPORT: import { Button } from 'antd';
SELECTOR: <Button>
DOCS: https://ant.design/components/button
---

WHEN_TO_USE:
  - Trigger an operation
  - Submit a form
  - Navigation between pages

EXAMPLES:
  - basic: Basic button types
  - icon: Button with icon
  - size: Different sizes
  - loading: Loading state
  - disabled: Disabled state

API:
  VERSION: 3.0+
  PROPS:
    | Property | Description | Type | Default | Version |
    |----------|-------------|------|---------|---------|
    | type | Button type | 'primary' \| 'default' \| 'dashed' \| 'text' \| 'link' | 'default' | - |
    | size | Button size | 'large' \| 'middle' \| 'small' | 'middle' | - |
    | disabled | Disabled state | boolean | false | - |
    | icon | Icon component | ReactNode | - | - |
    | loading | Loading state | boolean \| { delay: number } | false | - |
    | onClick | Click handler | (event) => void | - | - |

DESIGN_TOKENS:
  - colorPrimary: #1677ff
  - colorPrimaryHover: #4096ff
  - borderRadius: 6px

FAQ:
  - Q: How to add icon to button?
    A: Use icon prop: <Button icon={<SearchOutlined />}>Search</Button>
```

---

## 📝 Output File Templates | 输出模板

### llms-full.txt Template

```txt
============================================================
llms-full.txt - [Library Name] Complete Documentation
============================================================

---
title: "[Library Name] - AI UI Generation Reference"
version: "[Version]"
framework: "[React/Vue/Angular]"
last_updated: "[Date]"
source: "[Official URL]"
---

# 1. METADATA | 元数据

PROJECT_NAME: [Name]
FRAMEWORK: [Framework]
VERSION: [Version]
NPM_PACKAGE: [Package]
DOCS: [URL]
GITHUB: [URL]

---

# 2. SEMANTIC DESCRIPTIONS | 语义化描述

TOTAL_COMPONENTS: [Number]

## Component Category: General
[Component semantic structures...]

## Component Category: Layout
[Component semantic structures...]

## Component Category: Navigation
[Component semantic structures...]

## Component Category: Data Entry
[Component semantic structures...]

## Component Category: Data Display
[Component semantic structures...]

## Component Category: Feedback
[Component semantic structures...]

---

# 3. DESIGN TOKENS | 设计令牌

## 3.1 Color System
COLOR: {
  "primary": "[hex]",
  "primaryHover": "[hex]",
  "success": "[hex]",
  "warning": "[hex]",
  "error": "[hex]",
  "text": "[hex]",
  "textSecondary": "[hex]",
  "background": "[hex]",
  "border": "[hex]"
}

## 3.2 Typography
TYPOGRAPHY: {
  "fontFamily": "[font-stack]",
  "fontSize": "[px]",
  "fontSizeHeading1": "[px]",
  "fontSizeHeading2": "[px]",
  "lineHeight": "[value]"
}

## 3.3 Spacing
SPACING: {
  "xs": "[px]",
  "sm": "[px]",
  "md": "[px]",
  "lg": "[px]",
  "xl": "[px]"
}

## 3.4 Border & Shadow
DECORATION: {
  "borderRadius": "[px]",
  "borderRadiusLg": "[px]",
  "boxShadow": "[value]"
}

---

# 4. RESOURCES | 资源

## Design Resources
[Resource list...]

## Documentation Links
- Getting Started: [URL]
- Design Principles: [URL]
- Theme Customization: [URL]

---

# 5. COMPONENT SPECIFICATIONS | 组件规格

[For each component, following ComponentDoc schema...]

---
COMPONENT: [Name]
IMPORT: [Import statement]
SELECTOR: [HTML/JSX selector]
DOCS: [Direct URL]
---

WHEN_TO_USE:
  [Usage scenarios...]

EXAMPLES:
  [Example list with IDs and titles...]

API:
  VERSION: [Version]
  PROPS:
    [Property table...]

DESIGN_TOKENS:
  [Component-specific tokens...]

FAQ:
  [Common questions and answers...]

---

# 6. CONSTRAINTS | 约束

## Forbidden Patterns
[Anti-patterns and deprecated APIs...]

## Known Issues
[Version-specific bugs or workarounds...]

---

# 7. CHANGELOG | 更新日志

[Version history and breaking changes...]

============================================================
End of llms-full.txt
============================================================
```

### llms.txt Template (Summary Version)

```txt
============================================================
llms.txt - [Library Name] Quick Reference
============================================================

PROJECT: [Name]
VERSION: [Version]
DOCS: [URL]

---

## Component Catalog | 组件目录

### General
- Button: <Button> - [URL]
- Icon: <Icon> - [URL]
- Typography: <Typography> - [URL]

### Layout
- Space: <Space> - [URL]
- Divider: <Divider> - [URL]
- Grid: <Row> <Col> - [URL]

### Navigation
- Menu: <Menu> - [URL]
- Breadcrumb: <Breadcrumb> - [URL]
- Tabs: <Tabs> - [URL]

### Data Entry
- Input: <Input> - [URL]
- Select: <Select> - [URL]
- Form: <Form> - [URL]

### Data Display
- Table: <Table> - [URL]
- Card: <Card> - [URL]
- List: <List> - [URL]

### Feedback
- Modal: <Modal> - [URL]
- Message: message.xxx() - [URL]
- Notification: notification.xxx() - [URL]

---

## Design Tokens Summary | 设计令牌摘要

PRIMARY: [hex]
SUCCESS: [hex]
ERROR: [hex]
TEXT: [hex]
BG: [hex]
SPACING_MD: [px]
FONT_SIZE: [px]
BORDER_RADIUS: [px]

---

## Quick Links | 快速链接

- Full API: See llms-full.txt
- Official Docs: [URL]
- GitHub: [URL]
- Theme Config: [URL]

---

## Common Mistakes | 常见错误

[List of common anti-patterns and corrections...]

---

For complete API specifications, see llms-full.txt.
```

---

## 🔧 Extraction Workflow | 提取工作流

### Phase 1: Metadata Extraction

```markdown
1. Navigate to official documentation home page
2. Extract:
   - Library name and version
   - Framework (React/Vue/Angular)
   - NPM package name
   - GitHub repository URL
   - Total component count
```

### Phase 2: Semantic Structure Extraction

```markdown
For each component:
1. Navigate to component overview/demo page
2. Identify semantic elements:
   - Root container
   - Header/Body/Footer sections
   - Interactive elements
   - Slots/Named areas
3. Document sub-components if any
4. Record element descriptions and purposes
```

### Phase 3: Design Token Extraction

```markdown
1. Navigate to theme/design-token documentation
2. Extract all token categories:
   - Colors (brand, semantic, text, background, border)
   - Typography (family, sizes, weights, line-heights)
   - Spacing scale
   - Border radius scale
   - Shadow definitions
   - Animation/transition values
3. Use browser DevTools for CSS variable extraction if needed
```

### Phase 4: Component API Extraction

```markdown
For each component:
1. Navigate to component API documentation
2. Extract:
   - When to use scenarios
   - Example IDs and titles
   - Props table (property, description, type, default, version)
   - Events/Callbacks
   - Component-specific design tokens
   - FAQ section
3. Document import path and selector syntax
```

### Phase 5: Resource Collection

```markdown
1. Collect design resources (Figma, Sketch, XD links)
2. Gather related articles and guides
3. Document external references
4. Save icon library information if available
```

---

## � Category Organization | 分类组织

Standard component categories:

```txt
1. General | 通用
   - Button, Icon, Typography

2. Layout | 布局
   - Grid, Space, Divider, Layout

3. Navigation | 导航
   - Menu, Breadcrumb, Pagination, Steps, Tabs

4. Data Entry | 数据录入
   - Form, Input, Select, Checkbox, Radio, DatePicker, Upload

5. Data Display | 数据展示
   - Table, List, Card, Collapse, Carousel, Tree, Tag

6. Feedback | 反馈
   - Alert, Modal, Message, Notification, Progress, Spin

7. Other | 其他
   - Anchor, BackTop, ConfigProvider
```

---

## ✅ Quality Checklist | 质量检查

### Completeness
- [ ] All components documented
- [ ] All props with types and defaults
- [ ] When to use scenarios provided
- [ ] Design tokens extracted
- [ ] FAQ collected

### Accuracy
- [ ] Import paths verified
- [ ] Prop types match official docs
- [ ] Token values verified via browser
- [ ] URLs all working

### Structure
- [ ] Three-part structure followed
- [ ] Consistent formatting
- [ ] Semantic descriptions complete
- [ ] API tables properly formatted

---

## � Maintenance | 维护

### Update Triggers
- Library major/minor version update
- New components added
- Breaking API changes
- Design token updates

### Update Process
1. Check official changelog
2. Update affected component sections
3. Verify design token values
4. Update version metadata
5. Log changes in changelog section

---

## 📚 Framework Adaptations | 框架适配

### React (Ant Design, Material UI)
```txt
IMPORT: import { Button } from 'antd';
SELECTOR: <Button type="primary">Text</Button>
PROPS: JSX props (camelCase)
```

### Vue (Element Plus, Vuetify)
```txt
IMPORT: import { ElButton } from 'element-plus';
SELECTOR: <el-button type="primary">Text</el-button>
PROPS: kebab-case attributes or v-bind
```

### Angular (ng-zorro, DevUI)
```txt
IMPORT: import { NzButtonModule } from 'ng-zorro-antd/button';
SELECTOR: <button nz-button nzType="primary">Text</button>
PROPS: Input bindings [property]
```

---

**End of SKILL Document**

This skill transforms official UI library documentation into structured llms.txt format, enabling AI to efficiently generate UI code with accurate component usage, design tokens, and API specifications.
