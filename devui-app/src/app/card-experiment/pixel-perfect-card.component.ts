import { Component } from '@angular/core';

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
