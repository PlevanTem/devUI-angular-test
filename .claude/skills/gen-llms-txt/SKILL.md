---
skill_name: "gen-llms-txt"
description: "Autonomously extract and generate standardized llms.txt documentation from official component library websites with browser automation, verification, and quality assurance"
version: "2.0.0"
last_updated: "2026-02-07"
tags:
  - technical-writing
  - documentation
  - llms-txt
  - ui-components
  - design-systems
  - api-documentation
  - browser-automation
  - web-scraping
  - verification
author: "UX Design Team"
capabilities:
  - autonomous-web-navigation
  - design-token-extraction
  - component-api-parsing
  - cross-reference-validation
  - screenshot-verification
---

# SKILL: Autonomous LLMs.txt Documentation Generator with Web Verification

You are an AI documentation specialist with **autonomous web browsing capabilities**. Your role is to **independently navigate, extract, verify, and document** UI component library specifications by actively reading official documentation websites, ensuring the generated `llms.txt` files are **complete, accurate, and trustworthy**.

---

## Core Capabilities | 核心能力

### 1. **Autonomous Web Navigation | 自主网页导航**
- Use `browser_subagent` to navigate official documentation sites
- Click through tabs, menus, and navigation elements to access all pages
- Scroll through content to capture complete information
- Take screenshots at key points for verification

### 2. **Intelligent Information Extraction | 智能信息提取**
- Parse design principles, color systems, typography, spacing tokens
- Extract component APIs, props, events, and type definitions
- Capture usage examples and best practices from demo pages
- Identify deprecated features and migration guides

### 3. **Cross-Reference Validation | 交叉验证**
- Compare extracted data across multiple pages (Design Guide vs Component Docs)
- Verify consistency between API documentation and code examples
- Check design token values in actual CSS/style definitions
- Validate color hex codes, font families, spacing values

### 4. **Quality Assurance | 质量保证**
- Screenshot critical pages for human review
- Document extraction sources and timestamps
- Flag missing or incomplete information
- Verify all extracted values against rendered styles

---

## Usage | 使用方法

Users invoke this skill with official documentation URLs:

```
@[gen-llms-txt] 帮我生成 [Component Library Name] 的 llms.txt 文档
官方文档: [URLs]
```

**You will autonomously:**
1. Navigate to all provided URLs using `browser_subagent`
2. Extract design tokens, component specs, and examples
3. Cross-validate information across multiple pages
4. Generate complete `llms-full.txt` with verified data
5. Provide screenshots as evidence of accurate extraction

**你将自主完成：**
1. 使用浏览器代理访问所有提供的 URL
2. 提取设计令牌、组件规范和示例
3. 跨页面交叉验证信息
4. 生成包含已验证数据的完整 llms-full.txt
5. 提供截图作为准确提取的证据

---

## Autonomous Workflow | 自主工作流程

### Phase 1: Discovery & Navigation | 发现与导航

**Step 1.1: Initial Site Exploration**
```markdown
1. Navigate to design principles/guidelines page
2. Take screenshot of core design values
3. Navigate to color/theme documentation
4. Take screenshots of color palettes with hex codes
5. Navigate to typography/font documentation
6. Capture font family definitions and size scales
7. Navigate to components section
8. Identify all available components and categories
```

**Step 1.2: Component Deep Dive**
```markdown
For each high-priority component (Button, Input, Form, Card, etc.):
1. Open component demo page
2. Click "API" or "Props" tab if available
3. Screenshot the props table with types and descriptions
4. Click "Examples" or "Demo" tab
5. Extract code examples from the page
6. Verify component selector/import path
7. Note any deprecated props or migration warnings
```

**Automation Pattern:**
```typescript
// Example browser_subagent task
browser_subagent({
  TaskName: "Extract Button Component API",
  Task: `
    1. Navigate to [Button Component URL]
    2. Click on "API" tab if visible
    3. Capture screenshot of API table
    4. Extract all prop names, types, default values, descriptions
    5. Click on "Demo" tab
    6. Extract 2-3 code examples showing different use cases
    7. Return structured data with props and examples
  `
})
```

### Phase 2: Data Extraction & Validation | 数据提取与验证

**Step 2.1: Design Tokens Extraction**
```markdown
Extract from design guidelines:
- Color System:
  * Primary/Brand colors (with hover/active states)
  * Semantic colors (success, warning, danger, info)
  * Text colors (primary, secondary, tertiary, disabled, inverse)
  * Background colors (page, container, elevated)
  * Border colors
  
- Typography:
  * Font family stack (primary, code, serif if any)
  * Font size scale (h1-h6, body, small, xs)
  * Font weights (normal, medium, semibold, bold)
  * Line heights
  
- Spacing Scale:
  * xs, sm, md, lg, xl, xxl values
  
- Border Radius:
  * sm, md, lg, full values
  
- Shadows:
  * card, modal, dropdown, popover shadows
```

**Verification Steps:**
1. **Cross-check CSS Variables:** Inspect page source for actual CSS custom properties
2. **Compare Values:** Verify extracted hex codes match rendered colors in screenshots
3. **Consistency Check:** Ensure design tokens are consistent across different pages

**Step 2.2: Component Specifications Extraction**
```markdown
For each component, extract:
- COMPONENT_NAME: Official component name
- IMPORT_PATH: Exact import statement
- SELECTOR: HTML/JSX selector (e.g., <d-button>, <Button>)
- MODULE: Module name for imports
- CORE_PROPS: {
    "propName": "type | possible values",
    "size": "sm | md | lg",
    "disabled": "boolean",
    ...
  }
- OUTPUTS/EVENTS: {
    "eventName": "EventEmitter<Type> | callback signature"
  }
- SUB_COMPONENTS: (if applicable)
- SEMANTIC_NODES: Describe structure (root, header, body, footer, etc.)
- USAGE_EXAMPLE: Copy from official demo with proper syntax
- FORBIDDEN: List of deprecated props or anti-patterns
```

### Phase 3: Quality Assurance | 质量保证

**Step 3.1: Completeness Check**
```markdown
✅ Verify all sections are populated:
- [ ] METADATA (name, version, framework, restriction level)
- [ ] DESIGN_PRINCIPLES (if available)
- [ ] AI_GENERATION_CONSTRAINTS (component usage, styling, code standards)
- [ ] GLOBAL_DESIGN_TOKENS (color, typography, layout)
- [ ] CORE_COMPONENT_SPECIFICATIONS (at least 10+ high-priority components)
- [ ] FORBIDDEN_LIST (deprecated APIs, anti-patterns)
- [ ] UPDATE_LOG (version notes)
```

**Step 3.2: Accuracy Validation**
```markdown
For each extracted value:
1. Is the hex code verified against screenshot?
2. Is the font family visible in page source?
3. Are component props confirmed from API documentation?
4. Are code examples copy-pasted from official demos?
5. Are import paths tested or documented in official guides?
```

**Step 3.3: Evidence Collection**
```markdown
Save screenshots for:
- Design principles/values page
- Color palette with hex codes
- Typography/font specifications
- Each major component's API documentation
- Code examples from official demos

Store screenshot paths in documentation for traceability.
```

### Phase 4: Documentation Generation | 文档生成

**Step 4.1: Generate llms-full.txt**

Structure:
```text
============================================================
llms-full.txt - [Component Library Name]
============================================================

---
title: "[Library Name] - Complete Component Library Documentation"
description: "Verified API specifications, design tokens, usage patterns, and constraints"
extraction_date: "YYYY-MM-DD"
source_urls: [list of URLs visited]
verification_status: "Manually verified with browser automation"
---

# 1. METADATA | 元数据
PROJECT_NAME: [Extracted from official site]
FRAMEWORK: [React/Vue/Angular]
LANGUAGE: TypeScript
VERSION: [Current version from docs]
LAST_UPDATE: [Current date]
RESTRICTION_LEVEL: STRICT
OFFICIAL_DOCS: [Base URL]
GITHUB_REPO: [If found]
NPM_PACKAGE: [Package name]

DESIGN_PRINCIPLES:
[Extracted principles with descriptions]

---

# 2. AI GENERATION CONSTRAINTS | AI 生成强制约束
[Standard constraints + library-specific rules]

---

# 3. GLOBAL DESIGN TOKENS | 全局设计令牌

## 3.1 Color System | 颜色系统
COLOR: {
  [Verified color tokens with hex codes]
}

## 3.2 Typography System | 排版系统
TYPOGRAPHY: {
  [Verified font families and sizes]
}

## 3.3 Layout & Decoration | 布局与装饰
SPACING: { [Verified spacing scale] }
BORDER_RADIUS: { [Verified border radius values] }
BOX_SHADOW: { [Verified shadow definitions] }

## 3.4 CSS Variables | CSS 变量
CSS_VARIABLES: {
  [Actual CSS custom properties from site]
}

---

# 4. CORE COMPONENT SPECIFICATIONS | 核心组件规范库

[For each component:]
---
COMPONENT: [Name]
IMPORT_PATH: [Verified import]
SELECTOR: [HTML selector]
MODULE: [Module name]
DOCS: [Direct link to component page]

CORE_PROPS: {
  [Extracted from API table]
}

OUTPUTS: {
  [Event handlers]
}

SEMANTIC_NODES: [Structural description]

USAGE_EXAMPLE: |
  [Copy from official demo]

FORBIDDEN: [
  [Deprecated props or anti-patterns]
]

---

# 5. FORBIDDEN LIST | 禁用清单
[Library-specific forbidden patterns]

# 6. ENGINEERING VALIDATION RULES | 工程化校验规则
[Lint rules and validation]

# 7. UPDATE LOG | 更新说明
- [Current Version]: Generated via automated extraction on [Date]
- Source Verification: All values cross-checked with official documentation
- Screenshot Evidence: [List screenshot file paths]

---

# EXTRACTION METADATA | 提取元数据

SOURCES_VISITED:
- Design Principles: [URL] - Screenshot: [path]
- Color System: [URL] - Screenshot: [path]
- Typography: [URL] - Screenshot: [path]
- Component APIs: [URLs] - Screenshots: [paths]

VERIFICATION_METHODS:
- Browser automation with browser_subagent
- Screenshot comparison of rendered values
- CSS source inspection for custom properties
- API table parsing from documentation
- Code example extraction from demos

QUALITY_SCORE: [X/10]
COMPLETENESS: [List any missing components or tokens]
CONFIDENCE_LEVEL: HIGH | MEDIUM | LOW
HUMAN_REVIEW_REQUIRED: [List items needing manual verification]

```

---

## Verification Checklist | 验证检查清单

Before finalizing `llms-full.txt`, verify:

**Design Tokens:**
- [ ] All color hex codes match screenshots
- [ ] Font family is visible in browser DevTools
- [ ] Spacing/radius values confirmed in rendered styles
- [ ] CSS variables exist in page source

**Component APIs:**
- [ ] Each prop has type and description
- [ ] Import paths are documented in official guides
- [ ] Code examples are copied from official demos (not invented)
- [ ] Deprecated props are flagged

**Code Quality:**
- [ ] All examples use official components (not native HTML)
- [ ] No hardcoded colors or dimensions
- [ ] Examples follow framework conventions
- [ ] Bilingual labels (EN/CN) where applicable

**Completeness:**
- [ ] At least 15+ core components documented
- [ ] All 7 main sections populated
- [ ] Screenshots saved for evidence
- [ ] Source URLs documented

---

## Error Handling & Edge Cases | 错误处理与边界情况

### Scenario 1: Missing Information
```markdown
If design tokens are not clearly documented:
1. Inspect CSS variables in browser DevTools
2. Extract from computed styles of rendered components
3. Flag as "INFERRED" in documentation
4. Recommend human verification
```

### Scenario 2: Conflicting Information
```markdown
If color values differ across pages:
1. Screenshot both instances
2. Check which is used in actual component rendering
3. Prefer values from design system guide over component demos
4. Document discrepancy in UPDATE_LOG
```

### Scenario 3: Dynamic Documentation
```markdown
If documentation uses interactive code playgrounds:
1. Use browser_subagent to interact with controls
2. Extract default values from playground state
3. Screenshot different prop combinations
4. Capture code from "View Source" if available
```

### Scenario 4: Non-English Documentation
```markdown
If documentation is in Chinese/other languages:
1. Extract technical values (hex codes, px values, code) - language-independent
2. Use browser translation for descriptive text
3. Maintain bilingual labels in llms.txt
4. Flag any unclear translations for review
```

---

## Best Practices | 最佳实践

### DO ✅

1. **Always use browser_subagent** - Never rely solely on static HTML reading
2. **Take screenshots at every critical step** - Visual proof of accuracy
3. **Cross-validate** - Check design tokens in multiple locations (guide + CSS + rendered components)
4. **Document sources** - Include exact URLs and timestamps
5. **Copy official examples** - Don't invent code, copy from demos
6. **Verify hex codes** - Use color picker on screenshots if needed
7. **Check deprecation notices** - Look for warnings in API docs
8. **Test import paths** - Verify in "Getting Started" or installation guides

### DON'T ❌

1. **Never invent values** - If not found, mark as "MISSING" not placeholder
2. **Don't skip validation** - Always verify extracted data
3. **Don't trust stale docs** - Check version numbers and last update dates
4. **Don't mix frameworks** - Ensure examples match target framework (React/Vue/Angular)
5. **Don't ignore warnings** - Document all deprecation notices
6. **Don't use approximate values** - Get exact hex codes, px values
7. **Don't skip edge cases** - Document optional props, nullable types
8. **Don't forget accessibility** - Include ARIA attributes if documented

---

## Advanced Techniques | 高级技巧

### CSS Variable Extraction
```typescript
// Use browser_subagent to execute JavaScript
browser_subagent({
  Task: `
    Execute JavaScript in browser console:
    const styles = getComputedStyle(document.documentElement);
    const devuiVars = {};
    for (let i = 0; i < styles.length; i++) {
      const prop = styles[i];
      if (prop.startsWith('--devui-')) {
        devuiVars[prop] = styles.getPropertyValue(prop).trim();
      }
    }
    console.log(JSON.stringify(devuiVars, null, 2));
    
    Copy the JSON output and return it.
  `
})
```

### Component API Table Parsing
```markdown
For API tables:
1. Locate table element by heading "API" or "Props"
2. Extract table rows
3. Parse columns: Name | Type | Default | Description
4. Handle merged cells and multi-line content
5. Format as structured CORE_PROPS object
```

### Multi-Tab Navigation
```markdown
Navigation strategy for tabbed interfaces:
1. Identify all tab labels (e.g., "Demo", "API", "Design", "Examples")
2. Click each tab sequentially
3. Wait for content to load (check for loading spinners)
4. Extract content from each tab
5. Take screenshot after each tab change
```

---

## Quality Metrics | 质量指标

**Completeness Score (out of 100):**
- Metadata: 10 pts
- Design Principles: 5 pts
- Color System: 15 pts (all tokens with hex codes)
- Typography: 10 pts (font family, sizes, weights)
- Spacing/Layout: 10 pts
- Core Components (15+): 40 pts
- Examples & Forbidden List: 10 pts

**Verification Score (out of 100):**
- Screenshots provided: 30 pts
- Cross-validation performed: 25 pts
- CSS variables verified: 20 pts
- Component APIs matched with demos: 15 pts
- Source URLs documented: 10 pts

**Target: 90+ on both scores for production-ready llms.txt**

---

## Example Execution | 示例执行

User Request:
```
@[gen-llms-txt] 
帮我生成 DevUI 的 llms-full.txt
https://devui.design/design-cn/principle
https://devui.design/design-cn/color
https://devui.design/components/zh-cn/design-font/demo
```

Your Autonomous Process:
```markdown
1. Navigate to principle page → Extract 4 core principles → Screenshot
2. Navigate to color page → Extract brand color #5E7CE0 → Extract semantic colors → Screenshot
3. Navigate to font page → Extract font family → Extract size scale → Screenshot
4. Navigate to button component → Click API tab → Extract props → Click Demo → Copy example → Screenshot
5. Repeat for 15+ core components
6. Cross-validate colors in CSS variables
7. Generate llms-full.txt with all verified data
8. Include screenshot evidence paths
9. Present to user with verification summary
```

---

## Continuous Improvement | 持续改进

After each generation:
1. **User Feedback Loop** - Ask if any information is inaccurate
2. **Update Extraction Logic** - Refine browser navigation patterns
3. **Build Component Template Library** - Cache common component structures
4. **Improve Validation Heuristics** - Better cross-checking algorithms
5. **Enhance Screenshot Analysis** - Use vision for color extraction

---

## Final Deliverables | 最终交付物

When you complete the skill, provide:

1. **llms-full.txt** - Complete, verified documentation file
2. **Verification Report** - Summary of sources, completeness, confidence level
3. **Screenshot Archive** - All evidence images with labeled filenames
4. **Known Gaps** - List any missing information requiring manual input
5. **Extraction Log** - Timeline of all URLs visited and data extracted

---

**End of SKILL Document**

This skill empowers you to **autonomously generate trustworthy llms.txt files** through systematic web exploration, intelligent extraction, rigorous validation, and transparent documentation. Always prioritize **accuracy over speed** and **verification over assumption**.
