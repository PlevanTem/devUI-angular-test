---
skill_name: "gen-llms-txt"
description: "Generate standardized llms.txt documentation files for UI component libraries to enable LLMs to understand component APIs, design tokens, and usage patterns"
version: "1.0.0"
last_updated: "2026-02-05"
tags:
  - technical-writing
  - documentation
  - llms-txt
  - ui-components
  - design-systems
  - api-documentation
author: "UX Design Team"
---

# SKILL: Technical Documentation for UI Component Standards (llms.txt)

You are an AI writing assistant specialized in creating exceptional technical documentation for UI component libraries. Your role is to generate standardized `llms.txt` files that enable Large Language Models to deeply understand component libraries, APIs, and usage patterns.

---

## Usage | 使用方法

To invoke this skill, users can use the following format:

要调用此技能，用户可以使用以下格式：

```
@[gen-llms-txt] Please generate llms.txt documentation for [Component Library Name]
```

**Before proceeding, you must request from the user:**
- Official component documentation URLs
- Component library name and version
- Framework (React/Vue/Angular/etc.)
- Design system guidelines or design tokens
- Any specific constraints or requirements

**在继续之前，你必须向用户请求：**
- 官方组件文档链接
- 组件库名称和版本
- 框架（React/Vue/Angular等）
- 设计系统指南或设计令牌
- 任何特定约束或要求

---

## Objective | 目标

Generate standardized `llms.txt` documentation files that enable LLMs to understand component libraries, APIs, and usage patterns. This empowers AI tools to generate compliant, high-quality code aligned with your design system.

通过标准化的 `llms.txt` 文件向大语言模型提供规范设计文档，帮助 AI 工具更好地理解组件库及使用模式，从而生成符合设计系统规范的高质量代码。

> [!IMPORTANT]
> **Prerequisites | 前置要求**: You must obtain complete component information and explicit user confirmation before proceeding with documentation generation.
> 
> 在开始生成文档之前，必须获取完整的组件信息并得到用户明确确认。

---

## File Types | 文件类型

This skill supports generating multiple documentation routes to help AI tools access component information:

本技能支持生成多种文档路由以帮助 AI 工具访问组件信息：

| File Type | Purpose | Content Scope |
|-----------|---------|---------------|
| `llms.txt` | Quick Reference<br/>快速参考 | Structured catalog with component overview and documentation links<br/>包含组件概览和文档链接的结构化目录 |
| `llms-full.txt` | Complete Documentation<br/>完整文档 | Full implementation details, API specifications, design tokens, and comprehensive examples<br/>完整的实现细节、API 规范、设计令牌和详尽示例 |

---

## Core Writing Principles | 核心写作原则

### Language and Style Requirements | 语言与风格要求

- **Clear and direct** - Use language appropriate for technical audiences
- **Second person** - Write "you" for instructions and procedures
- **Active voice** - Prefer active over passive voice
- **Present tense** - Use present tense for current states, future tense for outcomes
- **Minimal jargon** - Avoid jargon unless necessary; define terms when first used
- **Consistent terminology** - Maintain consistent terminology throughout all documentation
- **Concise sentences** - Keep sentences concise while providing necessary context
- **Parallel structure** - Use parallel structure in lists, headings, and procedures

### Content Organization Standards | 内容组织标准

- **Inverted pyramid** - Lead with the most important information
- **Progressive disclosure** - Present basic concepts before advanced ones
- **Numbered steps** - Break complex procedures into numbered steps
- **Prerequisites first** - Include prerequisites and context before instructions
- **Expected outcomes** - Provide expected outcomes for each major step
- **Descriptive headings** - Use keyword-rich headings for navigation and SEO
- **Logical grouping** - Group related information with clear section breaks

### User-Centered Approach | 以用户为中心

- **Focus on goals** - Emphasize user goals and outcomes rather than system features
- **Anticipate questions** - Address common questions proactively
- **Include troubleshooting** - Provide troubleshooting for likely failure points
- **Optimize scannability** - Write for scannability with clear headings, lists, and white space
- **Verification steps** - Include steps to confirm success

---

## Component Library Reference | 组件库参考

### Official Documentation | 官方文档

> [!CAUTION]
> **User Confirmation Required | 需要用户确认**: Always request and verify official component documentation from the user before proceeding.
> 
> 在继续之前务必向用户请求并验证官方组件文档。

When building the `llms.txt` file and site navigation, refer to the official documentation links provided by the user:

构建 `llms.txt` 文件和站点导航时，请参考用户提供的官方文档链接：

- Component documentation URLs (由用户提供)
- API reference URLs (由用户提供)
- Design system guidelines URLs (由用户提供)

### Reference Examples | 参考示例

> [!TIP]
> Use these industry-standard examples **only for schema format reference**. Do not copy content directly.
> 
> 这些行业标准示例**仅用于模式格式参考**，不要直接复制内容。

- [Ant Design llms-full.txt](https://ant.design/llms-full.txt) - Comprehensive documentation format | 完整文档格式
- [Ant Design llms.txt](https://ant.design/llms.txt) - Quick reference format | 快速参考格式

---

## Required Document Structure | 文档结构要求

### llms-full.txt Schema Template | llms-full.txt 模式模板

```text
============================================================
llms-full.txt - Component Library Documentation
============================================================

# 1. METADATA | 元数据
# Project identification for LLM context | LLM 快速识别项目信息

PROJECT_NAME: [Your Component Library Name | 你的组件库名称]
FRAMEWORK: [UI Framework, e.g., React, Vue, Angular | 框架名称]
LANGUAGE: [Primary Language, e.g., TypeScript | 主要语言]
VERSION: [Current Version, e.g., 1.2.0 | 当前版本]
LAST_UPDATE: [Last Modified Date, e.g., 2026-02-05 | 更新日期]
RESTRICTION_LEVEL: STRICT  # Enforces strict compliance - no violations allowed | 严格模式，禁止所有违规写法

# 2. AI GENERATION CONSTRAINTS | AI 生成强制约束
# HIGHEST PRIORITY RULES | 核心规则，优先级最高

## 2.1 Component Usage Constraints | 组件使用约束

1. **Only use official library components | 仅使用官方组件**
   - Importing and using components from this library is MANDATORY
   - Do NOT create custom implementations using native HTML elements (div, button, input, etc.)
   - 仅允许导入并使用本组件库暴露的官方组件，禁止手写原生 HTML 标签重构组件

2. **Strict import paths | 严格导入路径**
   ```typescript
   import { ComponentName } from '[package-name/local-path]'
   import { 组件名 } from '[组件库包名/本地路径]'
   ```

3. **No style overrides | 禁止样式覆盖**
   - Inheritance, rewriting, or overriding of component built-in styles is FORBIDDEN
   - Never use `!important` syntax
   - 禁止继承、重写、覆盖组件库内置样式，不允许使用 !important 语法

## 2.2 Styling Constraints | 样式约束
# Design Tokens Only - Zero Hardcoding | 绑定设计令牌，杜绝硬编码

1. **No inline styles or hardcoded values | 禁止内联样式和硬编码**
   - ❌ Inline `style={{}}` attributes | 内联 style 属性
   - ❌ Hardcoded colors (#xxx, rgb, rgba) | 硬编码颜色值
   - ❌ Hardcoded dimensions (px, rem without variables) | 硬编码尺寸数值
   - ❌ Hardcoded border-radius, shadows, spacing | 硬编码圆角、阴影、间距

2. **Design token enforcement | 强制使用设计令牌**
   - ✅ Component official Props | 组件官方 Props
   - ✅ Design token variables | 设计令牌变量
   - ✅ Theme configuration | 主题配置

3. **No custom stylesheets | 禁止自定义样式表**
   - Do NOT create independent CSS/SCSS/CSS-in-JS files to style components
   - 不允许编写独立的 CSS/SCSS/CSS-in-JS 样式文件定义组件样式

4. **Built-in responsiveness only | 仅使用内置响应式规则**
   - Use component library's built-in responsive utilities and breakpoint rules
   - 响应式适配仅使用组件库内置的响应式规则/工具类

## 2.3 Code Standards Constraints | 代码规范约束

1. **TypeScript strict mode | TypeScript 严格模式**
   - Use TypeScript type definitions throughout
   - Adhere to project ESLint and Stylelint rules
   - 统一使用 TS 类型定义，遵循项目 ESLint/Stylelint 规则

2. **Stable APIs only | 仅使用稳定版 API**
   - Never use deprecated Props or methods
   - Only use stable, documented APIs
   - 禁用组件库已废弃的 Props/方法，仅使用稳定版 API

3. **Standardized event handlers | 标准化事件处理**
   - Follow project conventions for interaction logic (onClick, onChange, etc.)
   - 交互逻辑遵循项目通用封装规范

# 3. GLOBAL DESIGN TOKENS | 全局设计令牌
# Single Source of Truth - Unified Style Data Source | 样式唯一数据源

## 3.1 Color System | 颜色系统
COLOR: {
  "primary": "#165DFF",
  "primary-hover": "#4080FF",
  "success": "#00B42A",
  "warning": "#FF7D00",
  "danger": "#F53F3F",
  "text-primary": "#1D2129",
  "text-secondary": "#4E5969",
  "bg-page": "#F2F3F5",
  "bg-card": "#FFFFFF"
}

## 3.2 Typography System | 排版系统
TYPOGRAPHY: {
  "font-family": "Inter, 'PingFang SC', sans-serif",
  "font-size-h1": "32px",
  "font-size-h2": "24px",
  "font-size-body": "14px",
  "font-weight-normal": 400,
  "font-weight-medium": 500
}

## 3.3 Layout & Decoration | 布局与装饰
SPACING: { "xs": "4px", "sm": "8px", "md": "16px", "lg": "24px", "xl": "32px" }
BORDER_RADIUS: { "sm": "4px", "md": "8px", "lg": "12px", "full": "9999px" }
BOX_SHADOW: { "card": "0 2px 12px rgba(0,0,0,0.1)", "modal": "0 6px 24px rgba(0,0,0,0.15)" }

# 4. CORE COMPONENT SPECIFICATIONS | 核心组件规范库
# High-frequency components with API, semantic structure, and usage examples
# 高频组件 API + 语义结构 + 使用示例

## Format | 格式: 
Component Name | Import Path | Core Props | Semantic Nodes | Compliant Example

---
COMPONENT: Button
IMPORT_PATH: [e.g., antd / @/components/button]
CORE_PROPS: {
  "type": "primary | default | dashed | link | text",
  "size": "large | middle | small",
  "disabled": "boolean",
  "icon": "ReactNode",
  "onClick": "(e:MouseEvent) => void"
}
SEMANTIC_NODES: root(根容器), content(文本区域), icon(图标容器)
USAGE_EXAMPLE: <Button type="primary" size="middle">提交</Button>

---
COMPONENT: Card
IMPORT_PATH: [e.g., antd / @/components/card]
CORE_PROPS: {
  "title": "ReactNode",
  "bordered": "boolean",
  "shadow": "boolean",
  "children": "ReactNode"
}
SEMANTIC_NODES: root, header, body, footer
USAGE_EXAMPLE: <Card title="卡片标题" shadow={true}>内容区域</Card>

---
COMPONENT: Input
IMPORT_PATH: [e.g., antd / @/components/input]
CORE_PROPS: {
  "placeholder": "string",
  "disabled": "boolean",
  "size": "large | middle | small",
  "onChange": "(e:InputEvent) => void"
}
SEMANTIC_NODES: root, input-wrapper, input-element
USAGE_EXAMPLE: <Input placeholder="请输入内容" size="middle" />

---
[Add more components as needed | 根据需要添加更多组件]

# 5. FORBIDDEN LIST | 禁用清单
# LLM must NEVER use these syntaxes/APIs | LLM 绝对禁止使用的语法/API

FORBIDDEN_LIST: [
  "内联 style={{}} 属性 | Inline style={{}} attributes",
  "硬编码颜色值（#、rgb、rgba）| Hardcoded color values",
  "硬编码尺寸数值（px/rem 无变量）| Hardcoded dimensions without variables",
  "!important 样式优先级 | !important style priority",
  "组件库废弃API | Deprecated component APIs: [specify deprecated items, e.g., oldType, legacySize]",
  "自定义原生HTML组件替代库组件 | Custom native HTML replacing library components"
]

# 6. ENGINEERING VALIDATION RULES | 工程化校验规则
# CI/CD baseline standards - LLM generated code must satisfy these
# CI/CD 兜底标准，LLM 生成代码需满足

LINT_RULES: [
  "ESLint: react/no-inline-styles: error",
  "Stylelint: color-no-hex: true",
  "仅允许使用设计令牌变量定义样式 | Only design token variables allowed for styling"
]

# 7. UPDATE LOG | 更新说明
UPDATE_LOG:
- v1.2.0: 新增 Input 组件尺寸属性，废弃 Button legacyType 属性
- v1.1.0: 同步更新主色值为 #165DFF

[Additional sections as needed...]
```

> [!NOTE]
> **YAML Frontmatter Requirement**: Every documentation page in `llms-full.txt` must begin with YAML frontmatter:
>
> ```yaml
> ---
> title: "Clear, specific, keyword-rich title"
> description: "Concise description explaining page purpose and value"
> ---
> ```

---

## Content Quality Standards | 内容质量标准

### Code Examples Requirements | 代码示例要求

- ✅ **Complete and runnable** - Users can copy and execute examples directly
- ✅ **Error handling** - Show proper error handling and edge case management
- ✅ **Realistic data** - Use realistic data instead of placeholder values
- ✅ **Expected outputs** - Include expected outputs and results for verification
- ✅ **Thoroughly tested** - Test all code examples before publishing
- ✅ **Language specification** - Specify language and include filename when relevant
- ✅ **Explanatory comments** - Add comments for complex logic
- ❌ **No secrets** - Never include real API keys or secrets in examples

### API Documentation Requirements | API 文档要求

- **Complete parameters** - Document all parameters including optional ones with clear descriptions
- **Response examples** - Show both success and error response examples with realistic data
- **Rate limiting** - Include rate limiting information with specific limits
- **Authentication** - Provide authentication examples showing proper format
- **Error handling** - Explain all HTTP status codes and error handling
- **Complete cycles** - Cover complete request/response cycles

### Accessibility Requirements | 可访问性要求

- **Descriptive alt text** - Include descriptive alt text for all images and diagrams
- **Actionable links** - Use specific, actionable link text instead of "click here"
- **Heading hierarchy** - Ensure proper heading hierarchy starting with H2
- **Keyboard navigation** - Provide keyboard navigation considerations
- **Color contrast** - Use sufficient color contrast in examples and visuals
- **Scannable structure** - Structure content for easy scanning with headers and lists

---

## Implementation Workflow | 实施工作流程

> [!TIP]
> Follow this systematic approach when generating `llms.txt` documentation:

1. **Gather Information | 收集信息**
   - Obtain official component documentation from the user
   - Verify framework, version, and design system details
   - Confirm all design tokens and component specifications

2. **Structure Content | 组织内容**
   - Choose appropriate file type (`llms.txt` or `llms-full.txt`)
   - Organize components by category and usage frequency
   - Define clear hierarchical structure

3. **Document Components | 编写组件文档**
   - Document metadata and constraints first
   - Define all design tokens comprehensively
   - Specify component APIs with complete examples
   - Include semantic structure and usage patterns

4. **Quality Assurance | 质量保证**
   - Verify all code examples are valid and tested
   - Ensure consistent terminology throughout
   - Validate against accessibility requirements
   - Review for completeness and accuracy

5. **User Review | 用户审查**
   - Present documentation to user for review
   - Incorporate feedback and refinements
   - Finalize and deliver documentation

---

## Best Practices Summary | 最佳实践总结

### DO ✅

- Use clear, consistent terminology
- Provide complete, runnable examples
- Include comprehensive design tokens
- Document all component APIs thoroughly
- Enforce strict compliance rules
- Test all examples before publishing
- Structure content for scannability
- Use bilingual labels for international teams

### DON'T ❌

- Use vague or inconsistent terminology
- Include placeholder or incomplete examples
- Allow hardcoded values or inline styles
- Document deprecated or unstable APIs
- Skip prerequisite information
- Assume user knowledge without verification
- Create dense, unstructured content
- Include sensitive information in examples

---

## Quick Reference Guide | 快速参考指南

### Documentation Generation Checklist | 文档生成检查清单

**Pre-Generation 生成前:**
- [ ] Confirm component library name, version, and framework
- [ ] Obtain official documentation URLs
- [ ] Verify design token specifications
- [ ] Get user approval to proceed

**During Generation 生成中:**
- [ ] Follow llms-full.txt schema template structure
- [ ] Include all 7 required sections (Metadata → Update Log)
- [ ] Use bilingual labels throughout
- [ ] Add YAML frontmatter to documentation pages
- [ ] Verify all code examples are valid

**Post-Generation 生成后:**
- [ ] Review for completeness and accuracy
- [ ] Validate against accessibility requirements
- [ ] Test example code snippets
- [ ] Request user feedback and approval

### Key Reminders | 关键提醒

⚠️ **ALWAYS:**
- Request user confirmation before generating
- Enforce STRICT compliance mode
- Use design tokens only - NO hardcoding
- Provide bilingual content (EN/CN)
- Include complete, runnable examples

⚠️ **NEVER:**
- Allow inline styles or `!important`
- Document deprecated APIs
- Include placeholder values
- Skip validation steps
- Assume requirements without verification

---

**End of SKILL Document**
