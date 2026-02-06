# DevUI llms.txt 文档说明

## 文件说明

已为 DevUI Angular 组件库生成两个标准化文档文件：

### 1. `llms.txt` - 快速参考文档
- **用途**: 快速查找组件导入路径、选择器和文档链接
- **内容**: 
  - 组件目录（按分类）
  - 快速开始指南
  - 文档链接索引
  - 关键约束提醒

### 2. `llms-full.txt` - 完整文档
- **用途**: 详细的 API 规范、设计令牌、使用示例和约束规则
- **内容**:
  - 元数据信息
  - AI 生成强制约束
  - 全局设计令牌（颜色、排版、布局）
  - 核心组件详细规范（Button, Card, TextInput, Select, Modal, DataTable, Form, Pagination, Toast, Loading）
  - 禁用清单
  - 工程化校验规则
  - 安装配置指南
  - 更新日志

## 使用方法

### 对于 AI 工具
将这两个文件放在项目根目录，AI 工具可以自动读取并理解：
- 组件库的导入路径和使用方式
- 设计令牌和样式规范
- 禁止使用的模式和 API
- 正确的代码示例

### 对于开发者
- 参考 `llms.txt` 快速查找组件信息
- 参考 `llms-full.txt` 了解详细的 API 和约束

## 文档特点

✅ **严格模式**: 禁止使用原生 HTML 元素替代组件
✅ **设计令牌**: 强制使用设计令牌，禁止硬编码
✅ **完整 API**: 包含核心组件的完整 Props、Outputs 和示例
✅ **双语支持**: 中英文对照，便于国际化团队使用
✅ **实用示例**: 提供可直接运行的代码示例

## 维护建议

当 DevUI 版本更新时，请更新：
1. `VERSION` 字段
2. `LAST_UPDATE` 日期
3. `UPDATE_LOG` 部分
4. 新增或变更的组件规范
5. 废弃的 API 列表

## 相关链接

- DevUI 官网: https://devui.design/components/zh-cn/get-start
- GitHub: https://github.com/DevCloudFE/ng-devui
- npm: https://www.npmjs.com/package/ng-devui
