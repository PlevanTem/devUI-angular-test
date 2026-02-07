# V5 Work Item Form - Enhanced UI Spec (基于增强框架)

## A. UI描述 (UI Description)

```yaml
ui_description:
  整体描述: |
    华为云 DevCloud 工作项创建表单页面，采用经典的三栏布局：
    - 顶部全宽导航栏（品牌标识、区域选择、用户控件）
    - 左侧固定宽度侧边栏（项目导航菜单）
    - 中间主内容区（工作项表单：标题、标签、富文本编辑器）
    - 右侧元数据面板（类型、状态、负责人、日期等字段）
    底部为表单操作按钮区
  
  核心功能: |
    - 创建新的工作项（Epic/Story/Task/Bug）
    - 填写工作项标题和详细描述（支持富文本）
    - 添加/删除工作项标签
    - 设置工作项元数据（状态、负责人、优先级、严重性等）
    - 上传附件文件
    - 保存或取消操作
  
  产品场景: |
    - 行业领域：软件研发项目管理、敏捷开发
    - 目标用户：研发团队成员、项目经理、Scrum Master
    - 使用场景：创建新需求、记录用户故事、追踪任务
  
  页面类型: form
```

## B. 视觉风格 (Visual Style)

```yaml
visual_style:
  整体调性: "企业级、专业、高效、简洁"
  
  色彩体系:
    主色调: 
      recognized: "#5E7CE0"
      calibrated: "var(--devui-primary)"
      usage: "主按钮、活动状态、链接、强调元素"
    
    背景色:
      page_bg:
        recognized: "#F2F5F8"
        calibrated: "var(--devui-global-bg, #f2f3f5)"
      card_bg:
        recognized: "#FFFFFF"
        calibrated: "var(--devui-base-bg, #ffffff)"
      header_bg:
        recognized: "#2E3033"
        calibrated: "var(--devui-base-bg, #2e3033)" # 深色主题
      toolbar_bg:
        recognized: "#FAFAFA"
        calibrated: "var(--devui-list-item-hover-bg, #f8f9fa)"
    
    文字色:
      primary:
        recognized: "#252B3A"
        calibrated: "var(--devui-text, #252b3a)"
      secondary:
        recognized: "#575D6C"
        calibrated: "var(--devui-text-weak, #575d6c)"
      placeholder:
        recognized: "#8A8E99"
        calibrated: "var(--devui-aide-text, #8a8e99)"
      light:
        recognized: "#FFFFFF"
        calibrated: "var(--devui-light-text, #ffffff)"
    
    状态色:
      success:
        recognized: "#3AC295"
        calibrated: "var(--devui-success, #3ac295)"
      warning:
        recognized: "#FA9841"
        calibrated: "var(--devui-warning, #fa9841)"
      danger:
        recognized: "#F66F6A"
        calibrated: "var(--devui-danger, #f66f6a)"
    
    边框色:
      recognized: "#DFE1E6"
      calibrated: "var(--devui-dividing-line, #dfe1e6)"
    
    标签色:
      epic_bg: "#E8F4FF"
      epic_text: "#0E42D2"
      story_bg: "#F2F3F5"
      story_text: "#575D6C"
  
  间距系统:
    base_unit: "8px"
    spacing_scale:
      xs: "4px   -> var(--devui-spacing-xs)"
      sm: "8px   -> var(--devui-spacing-sm)"
      md: "16px  -> var(--devui-spacing-md)"
      lg: "24px  -> var(--devui-spacing-lg)"
      xl: "32px  -> var(--devui-spacing-xl)"
  
  字体系统:
    font_family: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'PingFang SC'"
    type_scale:
      body: "12px  -> var(--devui-font-size-body)"
      card_title: "14px  -> var(--devui-font-size-card-title)"
      page_title: "16px  -> var(--devui-font-size-page-title)"
    font_weights:
      regular: "400"
      medium: "500"
      semibold: "600"
      bold: "700"
```

## C. 区域划分 (Region Decomposition)

```yaml
region_decomposition:
  - 区域名称: "顶部导航栏 (Header)"
    区域位置: "grid-area: header"
    区域尺寸:
      width: "100%"
      height: "48px"
    背景样式: "var(--devui-base-bg, #2e3033)"
    包含组件:
      - Logo区 (品牌标识 + 控制台标签)
      - 区域选择器 (AP-Singapore下拉)
      - 功能按钮组 (首页、工作台、设置、帮助、用户)
    可用DevUI组件: "d-button (text style), d-icon, d-dropdown"
  
  - 区域名称: "左侧边栏 (Sidebar)"
    区域位置: "grid-area: sidebar"
    区域尺寸:
      width: "200px"
      height: "calc(100vh - 48px)"
    背景样式: "var(--devui-base-bg, #ffffff)"
    边框: "右侧 1px solid var(--devui-dividing-line)"
    包含组件:
      - 项目选择器 (图标 + 项目名 + 下拉箭头)
      - 导航菜单列表 (图标 + 文字，10项)
    可用DevUI组件: "d-icon, d-menu 或 自定义列表"
    Hybrid策略: "使用原生列表 + d-icon，因为 d-menu 样式较难匹配"
  
  - 区域名称: "面包屑导航 (Breadcrumb)"
    区域位置: "主内容区顶部"
    区域尺寸:
      width: "auto"
      height: "auto"
    包含组件:
      - 面包屑 (Homepage / Nodejs_Project / Work Items / Create work item)
    可用DevUI组件: "d-breadcrumb, d-breadcrumb-item"
    Hybrid策略: "完全使用 DevUI 组件"
  
  - 区域名称: "标签页导航 (Tabs)"
    区域位置: "面包屑下方"
    区域尺寸:
      width: "100%"
      height: "40px"
    包含组件:
      - 5个标签页 (Plans, Work Items*, Sprints, Statistics, Reports)
    可用DevUI组件: "d-tabs 或 自定义tab样式"
    Hybrid策略: "使用原生样式模拟，因为需要精确匹配下划线样式"
  
  - 区域名称: "主表单区 (Main Form)"
    区域位置: "grid-area: main"
    区域尺寸:
      width: "flex (1fr)"
      height: "auto"
    背景样式: "var(--devui-base-bg, #ffffff)"
    包含组件:
      - 标题输入框
      - 标签容器 (多个标签 + 添加按钮)
      - 富文本工具栏
      - 用户故事标签
      - 文本域
      - 字符计数
      - 文件上传区
      - 操作按钮 (Save, Cancel)
    可用DevUI组件: |
      ✅ d-text-input (标题)
      ✅ d-tag (标签)
      ✅ d-button (工具栏、操作按钮)
      ✅ d-textarea (文本域)
      ⚠️ 富文本工具栏需要自定义布局
    Hybrid策略: "表单结构使用原生 <form>，控件全部使用 DevUI"
  
  - 区域名称: "右侧元数据面板 (Metadata Panel)"
    区域位置: "grid-area: panel"
    区域尺寸:
      width: "280px"
      height: "auto"
    背景样式: "var(--devui-base-bg, #ffffff)"
    边框: "左侧 1px solid var(--devui-dividing-line)"
    包含组件:
      - 类型显示 (Epic标签)
      - 状态下拉 (New)
      - 负责人输入 ⭐
      - 模块下拉 ⭐
      - 开始日期 ⭐
      - 截止日期 ⭐
      - 顺序输入 ⭐
      - 优先级下拉 ⭐
      - 严重性下拉 ⭐
      - 通知人下拉 ⭐
      - 领域下拉 ⭐
      - 展开更多链接
    可用DevUI组件: |
      ✅ d-form-item, d-form-label, d-form-control (表单结构)
      ✅ d-tag (类型标签)
      ✅ d-select (下拉框)
      ✅ d-text-input (文本输入)
      ✅ d-input-number (数字输入)
      ✅ d-datepicker (日期选择)
    Hybrid策略: "完全使用 DevUI 表单组件结构"
```

## D. 组件级详细规格

### D.1 标题输入框

```yaml
component_specification:
  组件类型: "TextInput"
  组件ID: "work-item-title"
  
  组件详细说明: |
    单行文本输入框，占据表单区域全宽
    边框颜色 #DFE1E6，聚焦时边框变为主色调
    内边距 12px，字体 14px
  
  承担的功能: "输入工作项标题"
  承载的信息: "Functions"
  
  组件内的布局样式:
    display: "block"
    width: "100%"
  
  visual_specs:
    width: "100%"
    height: "40px"
    padding: "8px 12px"
    border_radius: "2px"
    background: "var(--devui-base-bg)"
    border: "1px solid var(--devui-dividing-line)"
  
  typography_specs:
    font_size: "14px"
    font_weight: "400"
    color: "var(--devui-text)"
  
  library_mapping:
    recommended_component: "d-text-input"
    mapping_confidence: "high"
    customization_needed: "size='lg' for larger height"
```

### D.2 标签系统

```yaml
component_specification:
  组件类型: "Tag"
  组件ID: "work-item-tags"
  
  组件详细说明: |
    水平排列的标签列表，每个标签可删除
    标签样式：圆角矩形，不同类型有不同背景色
    - epic: 蓝色背景 #E8F4FF，蓝色文字
    - story/nodejs: 灰色背景 #F2F3F5，灰色文字
    最后有 "+ Add a tag" 文字按钮
  
  承担的功能: "显示和管理工作项标签"
  承载的信息: "epic, story, nodejs"
  
  组件内的布局样式:
    display: "flex"
    direction: "row"
    alignment: "center"
    gap: "8px"
    flex_wrap: "wrap"
  
  visual_specs:
    tag_padding: "2px 8px"
    tag_border_radius: "2px"
    tag_height: "22px"
  
  typography_specs:
    font_size: "12px"
    font_weight: "400"
  
  library_mapping:
    recommended_component: "d-tag"
    mapping_confidence: "high"
    customization_needed: |
      [labelStyle]="primary" for epic
      [labelStyle]="default" for others
      [deletable]="true" for close button
```

### D.3 富文本工具栏

```yaml
component_specification:
  组件类型: "Toolbar"
  组件ID: "rich-text-toolbar"
  
  组件详细说明: |
    水平排列的工具栏，包含多组格式化按钮
    背景色 #FAFAFA，边框 #DFE1E6
    按钮分组：
    - 编辑/附件组 (2按钮)
    - 格式化组：Normal下拉, B, I, U, S, A颜色
    - 列表/链接组 (8按钮)
    按钮尺寸约 28x28px
  
  承担的功能: "提供富文本格式化操作"
  承载的信息: "格式化图标"
  
  组件内的布局样式:
    display: "flex"
    direction: "row"
    alignment: "center"
    gap: "16px (组间), 4px (组内)"
  
  visual_specs:
    width: "100%"
    height: "44px"
    padding: "8px 12px"
    background: "var(--devui-list-item-hover-bg)"
    border: "1px solid var(--devui-dividing-line)"
    border_bottom: "none"
    border_radius: "4px 4px 0 0"
  
  library_mapping:
    recommended_component: "d-button (text style)"
    mapping_confidence: "medium"
    customization_needed: |
      需要自定义工具栏容器布局
      每个按钮使用 d-button bsStyle="text" bsSize="sm"
      图标使用 d-icon
```

### D.4 元数据表单字段

```yaml
component_specification:
  组件类型: "FormField"
  组件ID: "metadata-field"
  
  组件详细说明: |
    标准的表单字段结构：
    - 左侧标签 (label)，部分带红色星号表示必填
    - 右侧控件 (input/select/datepicker)
    水平布局，标签与控件垂直居中对齐
  
  承担的功能: "收集工作项元数据"
  承载的信息: "Status, Assigned To, Priority等字段值"
  
  组件内的布局样式:
    display: "flex / grid"
    direction: "row"
    alignment: "center"
    label_width: "~90px"
    control_flex: "1"
    gap: "8px"
    margin_bottom: "16px"
  
  visual_specs:
    label:
      font_size: "12px"
      color: "var(--devui-text-weak)"
    control:
      height: "28px"
      font_size: "12px"
      border_radius: "2px"
  
  library_mapping:
    recommended_component: "d-form-item + d-form-label + d-form-control"
    mapping_confidence: "high"
    customization_needed: |
      使用 DevUI 表单结构可以自动对齐
      控件使用 size="sm" 匹配高度
```

## E. Hybrid 策略决策矩阵

```yaml
hybrid_decision_matrix:
  # 完全使用 DevUI 组件
  full_devui:
    - d-text-input (标题、文本字段)
    - d-tag (标签)
    - d-button (所有按钮)
    - d-select (下拉框)
    - d-input-number (数字输入)
    - d-textarea (文本域)
    - d-breadcrumb (面包屑)
    - d-icon (所有图标)
    - d-form-item/label/control (表单结构)
  
  # 原生容器 + DevUI 组件
  hybrid_native_container:
    - 页面布局 (CSS Grid)
    - 侧边栏导航 (原生 nav + d-icon)
    - 标签页 (原生 div + 样式)
    - 富文本工具栏 (原生 div + d-button)
    - 文件上传区 (原生 div + d-icon)
  
  # 原生容器原因
  native_reasons:
    layout: "CSS Grid 提供精确的三栏布局控制"
    sidebar: "d-menu 样式较难匹配原图的简洁风格"
    tabs: "需要精确匹配下划线位置和动画"
    toolbar: "需要自定义分组和间距"
  
  # 样式策略
  styling_strategy:
    - 所有颜色使用设计令牌
    - 所有间距校正到 8px 网格
    - 所有字体使用类型比例
    - 禁止硬编码值
```

## F. 还原度目标

```yaml
fidelity_targets:
  layout_accuracy: "95%"
  color_accuracy: "98% (通过设计令牌)"
  spacing_accuracy: "90% (校正到 8px 网格)"
  component_coverage: "85% (DevUI 组件使用率)"
  
  # V3 改进目标
  v3_improvements:
    - 使用 d-form 完整表单结构替代散乱的输入框
    - 元数据面板使用标准表单布局
    - 标签页使用更接近原图的样式
    - 工具栏按钮分组更清晰
    - 侧边栏菜单激活状态更明显
```
