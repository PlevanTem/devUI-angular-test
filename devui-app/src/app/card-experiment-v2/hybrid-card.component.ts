import { Component } from '@angular/core';
import { CardModule } from 'ng-devui/card';
import { IconModule } from 'ng-devui/icon';
import { ButtonModule } from 'ng-devui/button';

/**
 * 方案3：Hybrid融合方案
 * 
 * 目标：结合像素级还原和DevUI规范的灵活性
 * 特点：
 * - 使用DevUI Card组件作为容器（保持组件库特性）
 * - 使用DevUI子组件（d-card-header, d-card-title等）
 * - 使用DevUI设计令牌（颜色、间距、字体）
 * - 在必要时使用原生HTML实现精确布局
 * - 通过CSS微调实现像素级还原
 * 
 * 优势：
 * - 保持组件库的功能（验证、可访问性、主题）
 * - 使用设计令牌保持一致性
 * - 灵活处理组件库无法满足的布局需求
 * - 易于维护和迁移
 */
@Component({
  selector: 'app-hybrid-card',
  standalone: true,
  imports: [CardModule, IconModule, ButtonModule],
  templateUrl: './hybrid-card.component.html',
  styleUrl: './hybrid-card.component.css'
})
export class HybridCardComponent {
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
