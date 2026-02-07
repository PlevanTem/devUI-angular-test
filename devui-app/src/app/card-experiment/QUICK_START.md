# 快速启动指南

## 运行实验

1. **安装依赖**（如果尚未安装）
   ```bash
   cd devui-app
   npm install
   ```

2. **启动开发服务器**
   ```bash
   npm start
   ```

3. **访问应用**
   打开浏览器访问 `http://localhost:4200`

4. **查看对比页面**
   页面会自动显示两种方案的对比效果

## 文件说明

### 方案一：像素级还原
- `pixel-perfect-card.component.*` - 完全自定义实现，精确还原图片效果

### 方案二：DevUI规范
- `devui-standard-card.component.*` - 使用DevUI组件库实现

### 对比展示
- `card-comparison.component.*` - 对比展示页面

## 注意事项

1. **图标名称**：如果DevUI Icon组件中的图标名称不正确（如`icon-code`、`icon-play`），请根据实际可用的图标名称进行调整。

2. **样式调整**：如果发现样式与预期不符，可以：
   - 方案一：直接修改CSS文件中的值
   - 方案二：使用DevUI的设计令牌进行调整

3. **浏览器兼容性**：确保浏览器支持CSS Grid和Flexbox

## 常见问题

### Q: 图标不显示？
A: 检查DevUI Icon组件的图标名称是否正确，参考[DevUI图标文档](https://devui.design/components/zh-cn/icon/demo)

### Q: 样式不对？
A: 检查`angular.json`中是否正确引入了DevUI样式文件：
```json
"styles": [
  "src/styles.css",
  "node_modules/ng-devui/devui.min.css"
]
```

### Q: 组件报错？
A: 确保已正确导入所需的DevUI模块（CardModule、IconModule等）
