import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PixelPerfectCardComponent } from './pixel-perfect-card.component';
import { DevuiStandardCardComponent } from './devui-standard-card.component';

@Component({
  selector: 'app-card-comparison',
  standalone: true,
  imports: [CommonModule, PixelPerfectCardComponent, DevuiStandardCardComponent],
  templateUrl: './card-comparison.component.html',
  styleUrl: './card-comparison.component.css'
})
export class CardComparisonComponent {
  // 实验说明
  experimentInfo = {
    title: '卡片组件还原实验',
    description: '对比两种实现方案：像素级还原 vs DevUI规范组件',
    approach1: {
      title: '方案一：像素级还原',
      description: '目标：100%还原图片视觉效果，使用精确的像素值和颜色值',
      features: [
        '精确匹配图片中的颜色值（#F8F8F8, #EE3E3E等）',
        '精确匹配字体大小和间距',
        '自定义样式实现所有细节',
        '完全控制视觉效果'
      ]
    },
    approach2: {
      title: '方案二：DevUI规范组件',
      description: '目标：使用DevUI组件库和设计令牌，符合设计规范',
      features: [
        '使用d-card组件及其子组件',
        '使用DevUI设计令牌（颜色、间距、字体）',
        '遵循DevUI设计规范',
        '保持组件库一致性'
      ]
    }
  };
}
