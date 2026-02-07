# DevUI llms.txt 文档说明

## 文件说明

已为 DevUI Angular 组件库生成两个标准化文档文件：

### 1. `llms.txt` - 快速参考文档
- **用途**: 快速查找组件导入路径、选择器和文档链接
- **内容**: 
  - 组件目录（按分类）
  - 设计令牌 CSS 变量列表
  - 文档链接索引
  - 关键约束提醒

### 2. `llms-full.txt` - 完整文档
- **用途**: 详细的设计规范、设计令牌、约束规则、使用示例、API等资源索引
- **内容**:
  - 元数据信息（包含版本兼容性说明）
  - AI 生成强制约束
  - 全局设计令牌（颜色、排版、布局）
  - CSS 变量完整列表（基于实际代码库使用）
  - 核心组件详细规范（Button, Card, TextInput, Select, Modal, DataTable, Form, Pagination, Toast, Loading, Icon, Radio, Layout）
  - 已知问题和解决方案（d-form 在 standalone 组件中的兼容性问题）
  - 禁用清单
  - 工程化校验规则
  - 安装配置指南
  - 版本兼容性说明
  - 更新日志
  - 常见使用模式

## 使用方法

### 对于 AI 工具
将这两个文件放在项目根目录，AI 工具可以自动读取并理解：
- 组件库的导入路径和使用方式
- 设计令牌和样式规范（包括 CSS 变量）
- 禁止使用的模式和 API
- 正确的代码示例
- 版本兼容性问题和解决方案

### 对于开发者
- 参考 `llms.txt` 快速查找组件信息和设计令牌
- 参考 `llms-full.txt` 了解详细的 API 和约束
- 查看版本兼容性部分了解已知问题和解决方案

## 文档特点

✅ **严格模式**: 禁止使用原生 HTML 元素替代组件  
✅ **设计令牌**: 强制使用设计令牌，禁止硬编码  
✅ **CSS 变量**: 提供完整的 CSS 变量列表，基于实际代码库使用  
✅ **完整 API**: 包含核心组件的完整 Props、Outputs 和示例  
✅ **双语支持**: 中英文对照，便于国际化团队使用  
✅ **实用示例**: 提供可直接运行的代码示例  
✅ **版本兼容性**: 明确说明 Angular 21.1.0 与 DevUI 18.0.0 的兼容性问题和解决方案  
✅ **已知问题**: 详细说明 d-form 在 standalone 组件中的问题及混合解决方案

## 版本信息

- **DevUI**: 18.0.0
- **Angular**: 21.1.0 (实际使用版本)
- **最后更新**: 2026-02-07

### 版本兼容性

⚠️ **注意**: DevUI 18.0.0 声明支持 Angular ^18.0.0，但项目实际使用 Angular 21.1.0。虽然版本不匹配，但项目可以正常运行。

### 已知问题

- `d-form` 容器组件在 Angular 21 standalone 组件中可能无法正常工作
- **解决方案**: 使用原生 `<form>` 元素配合 DevUI 表单子组件（`d-form-item`, `d-form-label`, `d-form-control`）

详细说明请参考 `llms-full.txt` 中的版本兼容性章节。

## 设计令牌

文档包含完整的设计令牌信息：

- **颜色系统**: primary, danger, success, warning, text-primary, text-secondary 等
- **间距系统**: xs (4px), sm (8px), md (16px), lg (24px), xl (32px)
- **排版系统**: 字体大小、字重、行高等
- **CSS 变量**: 完整的 CSS 变量列表，可直接在自定义样式中使用

## 维护建议

当 DevUI 版本更新时，请更新：
1. `VERSION` 字段
2. `ANGULAR_VERSION` 字段（如果变化）
3. `LAST_UPDATE` 日期
4. `UPDATE_LOG` 部分
5. 新增或变更的组件规范
6. 废弃的 API 列表
7. CSS 变量列表（如果有新增或变更）
8. 版本兼容性说明（如果有变化）

## 相关链接

- DevUI 官网: https://devui.design/components/zh-cn/get-start
- 组件概览: https://devui.design/components/zh-cn/overview
- 设计令牌: https://devui.design/design-tokens/zh-cn/overview
- 设计颜色: https://devui.design/components/zh-cn/design-color/demo#color
- GitHub: https://github.com/DevCloudFE/ng-devui
- npm: https://www.npmjs.com/package/ng-devui

## 更新历史

- **2026-02-07**: 
  - 更新了完整的 CSS 变量列表（基于实际代码库使用）
  - 添加了版本兼容性说明
  - 添加了 d-form 在 standalone 组件中的已知问题和解决方案
  - 更新了组件规范，包含更多实际使用的组件（Icon, Radio, Layout）
  - 添加了常见使用模式示例
