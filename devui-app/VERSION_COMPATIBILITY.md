# 版本兼容性说明

## 当前版本状态

### 项目依赖版本

- **Angular**: 21.1.3
- **DevUI**: 18.0.0
- **状态**: ⚠️ 版本不匹配（但项目可以运行）

### 版本兼容性

| 组件 | 版本 | 期望的 Angular 版本 | 实际 Angular 版本 | 状态 |
|------|------|-------------------|-----------------|------|
| ng-devui | 18.0.0 | ^18.0.0 | 21.1.3 | ⚠️ 不匹配 |

### npm 警告说明

运行 `npm list @angular/core ng-devui` 会显示：
```
invalid: @angular/core@21.1.3 from ng-devui@18.0.0
```

**这是正常的警告**，表示版本不匹配，但项目仍然可以运行。

## 已知问题和解决方案

### 问题1: `d-form` 组件无法识别

**原因**: DevUI 18.0.0 不完全支持 Angular 21 的 standalone 模式

**解决方案**: 使用混合方案
- ✅ 使用原生 `<form>` 元素作为容器
- ✅ 使用 DevUI 表单子组件（`d-form-item`, `d-form-label`, `d-form-control`）
- ✅ 通过 CSS 模拟 DevUI 表单布局

**实现位置**: 
- `src/app/page-experiment/devui-standard-page.component.html`
- `src/app/page-experiment/devui-standard-page.component.css`

### 问题2: 其他组件正常工作

以下 DevUI 组件在 Angular 21 下正常工作：
- ✅ `d-card` 及其子组件
- ✅ `d-button`
- ✅ `d-text-input`
- ✅ `d-radio`
- ✅ `d-icon`
- ✅ `d-form-item`, `d-form-label`, `d-form-control`

## 项目配置

### package.json

当前配置使用 `--legacy-peer-deps` 模式（如果需要重新安装）：

```bash
npm install --legacy-peer-deps
```

或者保持当前状态（已安装的包可以正常工作）。

### angular.json

DevUI 样式已正确配置：
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

## 最佳实践

### 当前项目

1. **继续使用混合方案**
   - 原生 form + DevUI 子组件
   - 这是最稳定的方案

2. **避免使用有问题的组件**
   - ❌ 不使用 `d-form` 容器组件
   - ✅ 使用 `d-form-item`, `d-form-label`, `d-form-control`

3. **监控 DevUI 更新**
   - 定期检查是否有支持 Angular 21 的版本
   - 关注 GitHub: https://github.com/DevCloudFE/ng-devui

### 未来升级

当 DevUI 发布支持 Angular 21 的版本时：

1. **检查新版本**
   ```bash
   npm view ng-devui versions
   npm view ng-devui@latest peerDependencies
   ```

2. **升级步骤**
   ```bash
   npm install ng-devui@<新版本>
   ```

3. **更新代码**
   - 将原生 `<form>` 替换为 `<d-form>`
   - 测试所有功能
   - 更新相关文档

## 相关文档

- [组件库问题分析](./src/app/page-experiment/COMPONENT_LIBRARY_ISSUES_ANALYSIS.md)
- [版本兼容性分析](./src/app/page-experiment/VERSION_COMPATIBILITY_ANALYSIS.md)
- [版本演进分析](./src/app/page-experiment/VERSION_EVOLUTION_ANALYSIS.md)
- [升级尝试结果](./src/app/page-experiment/UPGRADE_ATTEMPT_RESULTS.md)

## 总结

**当前状态**: 项目可以正常运行，使用了混合方案解决版本不匹配问题。

**建议**: 继续使用当前方案，等待 DevUI 官方支持 Angular 21。
