# 安装和配置指南

## 前置要求

- Node.js 18+ 
- npm 9+

## 安装步骤

### 1. 安装依赖

```bash
npm install
```

### 2. 版本兼容性说明

项目使用 Angular 21.1.3，而 DevUI 18.0.0 期望 Angular ^18.0.0。

**npm 可能会显示版本不匹配警告**，这是正常的。项目已经配置为可以正常运行。

如果遇到安装问题，可以使用：

```bash
npm install --legacy-peer-deps
```

### 3. 验证安装

检查版本：

```bash
npm list @angular/core ng-devui
```

预期输出会显示版本不匹配警告，但这是正常的。

### 4. 启动项目

```bash
npm start
```

访问 `http://localhost:4200`

## 配置说明

### package.json

当前配置：
- Angular: 21.1.3
- DevUI: 18.0.0

### angular.json

DevUI 样式已配置：
```json
"styles": [
  "src/styles.css",
  "node_modules/ng-devui/devui.min.css"
]
```

### app.config.ts

动画支持已配置：
```typescript
providers: [
  provideAnimations()
]
```

## 常见问题

### Q: npm 显示版本不匹配警告怎么办？

A: 这是正常的。项目可以正常运行。警告表示 DevUI 期望 Angular 18，但我们使用 Angular 21。我们已经使用混合方案解决了兼容性问题。

### Q: 如何解决 d-form 组件无法识别的问题？

A: 我们已经解决了这个问题。查看 `src/app/page-experiment/devui-standard-page.component.html` 可以看到我们使用原生 `<form>` + DevUI 子组件的方案。

### Q: 可以升级 DevUI 到支持 Angular 21 的版本吗？

A: 目前 DevUI 还没有支持 Angular 21 的版本。最新稳定版（18.0.0）支持 Angular 18，Alpha 版（19.0.0-alpha.1）支持 Angular 19。需要等待官方更新。

### Q: 项目可以正常构建和运行吗？

A: 是的。虽然存在版本不匹配警告，但项目可以正常构建和运行。我们使用的混合方案确保了功能的完整性。

## 相关文档

- [版本兼容性说明](./VERSION_COMPATIBILITY.md)
- [README](./README.md)
