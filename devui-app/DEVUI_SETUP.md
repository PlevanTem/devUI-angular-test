# DevUI 安装完成 ✅

## 安装步骤总结

1. ✅ 已设置 npm 国内镜像源（淘宝镜像：https://registry.npmmirror.com）
2. ✅ 已安装 Angular CLI
3. ✅ 已创建 Angular 21 项目
4. ✅ 已安装 ng-devui@18.0.0（使用 --legacy-peer-deps 解决版本兼容问题）
5. ✅ 已安装 @angular/animations（DevUI 需要动画支持）
6. ✅ 已配置 DevUI 模块导入
7. ✅ 已配置 DevUI 样式文件

## 配置文件说明

### 1. app.config.ts
已添加动画支持：
```typescript
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimations()
  ]
};
```

### 2. app.ts
已导入 ButtonModule（示例）：
```typescript
import { ButtonModule } from 'ng-devui/button';

@Component({
  selector: 'app-root',
  imports: [ButtonModule],
  // ...
})
```

### 3. angular.json
已添加 DevUI 样式：
```json
"styles": [
  "src/styles.css",
  "node_modules/ng-devui/devui.min.css"
]
```

## 使用方法

### 导入需要的组件模块

在 standalone 组件中，按需导入需要的模块：

```typescript
import { ButtonModule } from 'ng-devui/button';
import { CardModule } from 'ng-devui/card';
import { InputModule } from 'ng-devui/text-input';
// ... 其他模块

@Component({
  imports: [ButtonModule, CardModule, InputModule],
  // ...
})
```

### 使用组件

```html
<d-button bsStyle="primary" bsSize="md">主要按钮</d-button>
<d-button bsStyle="common">普通按钮</d-button>
<d-button bsStyle="success">成功按钮</d-button>
<d-button bsStyle="danger">危险按钮</d-button>
```

## 运行项目

```bash
cd devui-app
npm start
# 或
ng serve
```

访问 http://localhost:4200 查看效果

## 注意事项

1. **版本兼容性**：当前使用的是 ng-devui@18.0.0，与 Angular 21 存在版本差异，使用 `--legacy-peer-deps` 安装
2. **模块导入**：在 standalone 模式下，需要导入具体的组件模块（如 ButtonModule），而不是整个 DevUIModule
3. **样式文件**：确保 angular.json 中已配置 DevUI 样式文件路径

## 官方文档

- 官网：https://devui.design/components/zh-cn/get-start
- GitHub：https://github.com/DevCloudFE/ng-devui

## 常用组件模块导入路径

```typescript
// 按钮
import { ButtonModule } from 'ng-devui/button';

// 卡片
import { CardModule } from 'ng-devui/card';

// 输入框
import { TextInputModule } from 'ng-devui/text-input';

// 表格
import { DataTableModule } from 'ng-devui/data-table';

// 表单
import { FormModule } from 'ng-devui/form';

// 模态框
import { ModalModule } from 'ng-devui/modal';

// 更多组件请参考官方文档
```
