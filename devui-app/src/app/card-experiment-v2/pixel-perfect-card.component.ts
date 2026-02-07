import { Component } from '@angular/core';

/**
 * 方案1：像素级还原方案
 * 
 * 目标：100%还原图片视觉效果
 * 特点：
 * - 使用原生HTML元素
 * - 精确匹配图片中的颜色值和尺寸
 * - 完全自定义CSS样式
 * - 不依赖组件库
 */
@Component({
  selector: 'app-pixel-perfect-card',
  standalone: true,
  templateUrl: './pixel-perfect-card.component.html',
  styleUrl: './pixel-perfect-card.component.css'
})
export class PixelPerfectCardComponent {
  // 卡片数据
  cardData = {
    title: 'test01',
    subtitle: 'All in One',
    description: 'test01',
    timestamp: '2023-02-09 14:14:42',
    status: '已停止',
    cpuMemory: '4U8G',
    cpuArch: 'arm',
    storage: '5GB'
  };
}
