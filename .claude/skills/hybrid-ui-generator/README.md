# Hybrid UI Generator Skill | 混合方案 UI 生成器技能

## 简介

这个 Skill 帮助生成使用混合方案的 UI 组件，平衡灵活性、视觉一致性和可维护性。

## 使用方法

```
@[hybrid-ui-generator] Generate a [component type] with the following requirements: [description]
```

## 核心特性

1. **混合方案策略** - 原生 HTML 容器 + 组件库子组件
2. **设计令牌支持** - 自动使用设计系统令牌
3. **版本兼容性** - 处理版本不匹配问题
4. **可维护性** - 易于更新和迁移

## 参考文件

- `SKILL.md` - 完整的技能文档
- `@LLMs/llms-full.txt` - 设计规范和组件库完整规范
- `@LLMs/llms.txt` - 组件库快速参考
## 示例

### 生成表单组件

```
@[hybrid-ui-generator] Generate a login form with email and password fields, using DevUI components
```

### 生成卡片网格

```
@[hybrid-ui-generator] Generate a card grid layout with 3 columns, each card showing title, description, and tags
```

## 最佳实践

1. 优先使用组件库组件
2. 仅在必要时使用原生 HTML
3. 始终使用设计令牌
4. 保持视觉一致性
5. 记录决策原因