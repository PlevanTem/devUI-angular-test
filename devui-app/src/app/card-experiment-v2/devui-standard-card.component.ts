import { Component } from '@angular/core';
import { CardModule } from 'ng-devui/card';
import { IconModule } from 'ng-devui/icon';
import { ButtonModule } from 'ng-devui/button';

/**
 * 方案2：DevUI规范方案
 * 
 * 目标：使用DevUI组件库和设计令牌还原
 * 特点：
 * - 使用DevUI Card组件及其子组件
 * - 使用DevUI设计令牌（颜色、间距、字体）
 * - 遵循DevUI设计规范
 * - 保持设计系统一致性
 */
@Component({
  selector: 'app-devui-standard-card',
  standalone: true,
  imports: [CardModule, IconModule, ButtonModule],
  templateUrl: './devui-standard-card.component.html',
  styleUrl: './devui-standard-card.component.css'
})
export class DevuiStandardCardComponent {
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
