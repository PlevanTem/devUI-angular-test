import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PixelPerfectPageComponent } from './pixel-perfect-page.component';
import { DevuiStandardPageComponent } from './devui-standard-page.component';

@Component({
  selector: 'app-page-comparison',
  standalone: true,
  imports: [CommonModule, PixelPerfectPageComponent, DevuiStandardPageComponent],
  templateUrl: './page-comparison.component.html',
  styleUrl: './page-comparison.component.css'
})
export class PageComparisonComponent {
  // 实验说明
  experimentInfo = {
    title: '页面级还原实验',
    description: '对比两种实现方案：像素级还原 vs DevUI规范组件',
    approach1: {
      title: '方案一：像素级还原',
      description: '目标：100%还原页面视觉效果，使用精确的像素值和颜色值',
      features: [
        '精确匹配页面中的颜色值（#F5F5F5, #165DFF等）',
        '精确匹配字体大小、间距和布局',
        '自定义样式实现所有细节（侧边栏、表单、卡片网格）',
        '完全控制页面视觉效果',
        '包含完整的交互逻辑'
      ]
    },
    approach2: {
      title: '方案二：DevUI规范组件',
      description: '目标：使用DevUI组件库和设计令牌，符合设计规范',
      features: [
        '使用d-form、d-card、d-radio等DevUI组件',
        '使用DevUI设计令牌（颜色、间距、字体）',
        '遵循DevUI设计规范',
        '保持组件库一致性',
        '利用组件库的交互能力'
      ]
    }
  };
}
