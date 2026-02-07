# DevUI Angular 测试项目

## 项目简介

这是一个用于测试和演示 DevUI Angular 组件库的项目，包含两个实验案例：
1. **卡片组件还原实验** - 对比像素级还原和 DevUI 规范组件
2. **页面级还原实验** - 对比完整页面的两种实现方案

## 技术栈

- **Angular**: 21.1.3
- **DevUI**: 18.0.0
- **TypeScript**: 5.9.2

## ⚠️ 版本兼容性说明

**重要**: 项目使用 Angular 21.1.3，而 DevUI 18.0.0 期望 Angular ^18.0.0。

虽然存在版本不匹配，但项目可以正常运行。我们使用了混合方案来解决兼容性问题：
- 使用原生 `<form>` + DevUI 表单子组件
- 通过 CSS 模拟 DevUI 布局

详细说明请查看 [VERSION_COMPATIBILITY.md](./VERSION_COMPATIBILITY.md)

## 快速开始

### 安装依赖

```bash
npm install
```

如果遇到版本冲突警告，这是正常的。项目已经配置为可以正常运行。

### 启动开发服务器

```bash
npm start
```

访问 `http://localhost:4200` 查看应用。

### 构建项目

```bash
npm run build
```

## 项目结构

```
devui-app/
├── src/
│   ├── app/
│   │   ├── card-experiment/      # 卡片组件还原实验
│   │   │   ├── pixel-perfect-card.component.*
│   │   │   ├── devui-standard-card.component.*
│   │   │   └── card-comparison.component.*
│   │   ├── page-experiment/      # 页面级还原实验
│   │   │   ├── pixel-perfect-page.component.*
│   │   │   ├── devui-standard-page.component.*
│   │   │   └── page-comparison.component.*
│   │   └── app.*                 # 主应用组件
│   └── styles.css
├── VERSION_COMPATIBILITY.md      # 版本兼容性说明
└── package.json
```

## 实验说明

### 卡片组件还原实验

对比两种实现方案：
1. **像素级还原**: 100%还原图片视觉效果
2. **DevUI规范**: 使用 DevUI 组件库和设计令牌

### 页面级还原实验

对比两种实现方案：
1. **像素级还原**: 完整页面的像素级还原
2. **DevUI规范**: 使用 DevUI 组件库实现

## 已知问题

### d-form 组件

由于版本不匹配，`d-form` 容器组件无法在 standalone 模式下正常工作。

**解决方案**: 使用原生 `<form>` + DevUI 表单子组件。

**实现位置**: 
- `src/app/page-experiment/devui-standard-page.component.html`

### 其他组件

以下组件正常工作：
- ✅ d-card
- ✅ d-button
- ✅ d-text-input
- ✅ d-radio
- ✅ d-icon
- ✅ d-form-item, d-form-label, d-form-control

## 相关文档

- [版本兼容性说明](./VERSION_COMPATIBILITY.md)
- [组件库问题分析](./src/app/page-experiment/COMPONENT_LIBRARY_ISSUES_ANALYSIS.md)
- [版本兼容性分析](./src/app/page-experiment/VERSION_COMPATIBILITY_ANALYSIS.md)
- [版本演进分析](./src/app/page-experiment/VERSION_EVOLUTION_ANALYSIS.md)
- [升级尝试结果](./src/app/page-experiment/UPGRADE_ATTEMPT_RESULTS.md)

## 开发说明

### 代码规范

- 使用 TypeScript 严格模式
- 使用 Angular Standalone Components
- 遵循 DevUI 设计令牌（颜色、间距、字体）

### 样式规范

- 优先使用 DevUI 设计令牌
- 避免硬编码颜色值
- 使用 DevUI 间距系统

## 未来计划

1. 监控 DevUI 更新，等待 Angular 21 支持
2. 当有支持 Angular 21 的版本时，更新代码使用完整的 DevUI 组件
3. 持续完善实验案例

## 参考资源

- [DevUI 官方文档](https://devui.design/components/zh-cn/get-start)
- [DevUI GitHub](https://github.com/DevCloudFE/ng-devui)
- [Angular 文档](https://angular.io/docs)

## 许可证

本项目仅用于学习和测试目的。
