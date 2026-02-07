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
   - 在主页菜单中点击"卡片组件还原 (V2)"
   - 页面会显示三种方案的并排对比

## 三种方案说明

### 方案1：像素级还原
- **目标**：100%还原图片视觉效果
- **特点**：使用原生HTML，精确匹配每个像素
- **文件**：`pixel-perfect-card.component.*`

### 方案2：DevUI规范
- **目标**：使用DevUI组件库和设计令牌
- **特点**：代码简洁，易于维护
- **文件**：`devui-standard-card.component.*`

### 方案3：Hybrid融合
- **目标**：结合DevUI规范和灵活布局
- **特点**：保持组件库功能，实现高还原度
- **文件**：`hybrid-card.component.*`

## 对比展示

对比页面包含：
- 三种方案的并排展示
- 方案对比表格
- 详细的优势劣势分析
- 适用场景说明

## 注意事项

1. **图标实现**：所有方案都使用SVG图标以确保兼容性
2. **样式调整**：如需调整样式，参考各方案的CSS文件
3. **浏览器兼容性**：确保浏览器支持CSS Grid和Flexbox

## 常见问题

### Q: 如何切换方案？
A: 在主页菜单选择"卡片组件还原 (V2)"，页面会同时显示三种方案

### Q: 如何修改卡片数据？
A: 编辑各组件TypeScript文件中的`cardData`对象

### Q: 如何调整样式？
A: 
- 方案1：直接修改`pixel-perfect-card.component.css`
- 方案2：修改`devui-standard-card.component.css`，使用DevUI设计令牌
- 方案3：修改`hybrid-card.component.css`，结合设计令牌和精确值

## 下一步

- 查看`README.md`了解详细的实验记录
- 查看`EXPERIMENT_SUMMARY.md`了解实验总结
- 参考各方案的代码实现细节
