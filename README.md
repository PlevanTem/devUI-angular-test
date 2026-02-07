# DevUI Angular 组件还原与实践实验

**中文** | [English](./README_EN.md)

本项目是一个基于 **Angular** 和 **DevUI** 组件库的界面开发实践与探索项目。其核心目标是探索在高保真还原设计稿的过程中，如何平衡严格使用组件库与自定义开发之间的关系，并总结出一套最佳实践方法论。

![alt text](image.png)

## 🎯 项目目标

- **UI 还原度评估**：对比不同开发方案在还原设计稿上的表现。
- **验证「Hybrid Fusion」混合开发模式**：这是一种结合了组件库稳定性与自定义布局灵活性，并利用 Desing Token 保持风格统一的开发模式。
- **维护性评估**：分析不同开发策略在长期项目维护中的优劣势。

## 🧪 实验方法论

每个实验（Case Study）都会针对同一个设计目标，采用三种截然不同的方案进行开发：

### 1. 方案 V1：图生 UI 还原（像素级原生）
- **目标**：100% 还原图片效果，不考虑组件复用。
- **技术手段**：纯原生 HTML/CSS，人工微调像素。
- **优点**：视觉还原度极高，完全匹配设计稿。
- **缺点**：无组件库功能（验证、无障碍），难以维护，不支持主题切换。

### 2. 方案 V2：图生 UI 规范（组件库优先）
- **目标**：严格遵循 DevUI 组件库的使用规范。
- **技术手段**：仅使用 `d-*` 组件（如 `d-card`, `d-form`, `d-layout`），不进行非常规的样式覆盖。
- **优点**：高可维护性，完整的组件功能支持。
- **缺点**：当设计稿与组件库默认样式差异较大时，视觉还原度较低。

### 3. 方案 V3：Hybrid 融合性生成（推荐）
- **目标**：在保持高还原度的同时，保留组件库的核心能力与系统一致性。
- **技术手段**：
  - **灵活使用容器**：对于复杂布局，使用原生 Flex/Grid 替代受限的库容器（如 `d-form` 在 standalone 模式下的兼容问题）。
  - **组件复子级用**：内部原子元素使用库组件（`d-input`, `d-button`）。
  - **强制使用 Design Token**：所有样式必须引用 `var(--devui-*)` 变量，严禁硬编码颜色和间距。
- **优点**：高保真还原、系统风格统一、易于维护、视觉鲁棒性强。

## 📂 实验目录

| 实验名称 | 描述 | 代码位置 | 状态 |
|----------|------|----------|------|
| **Card V1** | 基础卡片组件还原 | `src/app/card-experiment/` | ✅ 完成 |
| **Card V2** | 带操作的高级卡片 | `src/app/card-experiment-v2/` | ✅ 完成 |
| **Card V3** | 实例/服务器卡片 (Hybrid) | `src/app/card-experiment-v3/` | ✅ **新实验** |
| **Page V1** | 整页布局还原 | `src/app/page-experiment/` | ✅ 完成 |
| **Page V2** | 仪表盘页面 | `src/app/page-experiment-v2/` | ✅ 完成 |
| **Page V3** | 云配置向导页 (Hybrid) | `src/app/page-experiment-v3/` | ✅ **新实验** |

![alt text](image-1.png)

## 🚀 快速开始

### 环境依赖

- Node.js (v18+)
- Angular CLI (v17+)

### 安装

```bash
git clone <repository-url>
cd devui-angular-test/devui-app
npm install
```

### 运行项目

```bash
npm start
# 或
ng serve
```

访问 `http://localhost:4200/`。应用主页是一个仪表盘，用于选择并查看各个实验案例。

## 🛠 技术栈

- **框架**: Angular 18+
- **UI 组件库**: DevUI (ng-devui) 18.0.0
- **样式**: SCSS, CSS Variables (Design Tokens)

## 💡 核心经验总结

- **Design Tokens 是关键**：使用 `var(--devui-primary)` 而非十六进制颜色代码，是让自定义混合组件看起来像系统原生组件的核心要素。
- **容器的灵活性权衡**：组件库的容器组件（如 `d-card`, `d-form`）有时缺乏复杂设计所需的布局灵活性。使用原生容器包裹库组件的混合模式往往能获得更好的效果。
- **Hybrid 协议化**：通过这些实验，我们提炼出了 "Hybrid UI Generator" 技能（文档位于 `.claude/skills`），用于标准化原生组件与库组件的选择决策过程。

---

*Verified with Gemini 3 Pro (High) & Claude 4.5 Sonnet*
