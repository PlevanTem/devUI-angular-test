import { Component } from '@angular/core';
import { CardModule } from 'ng-devui/card';
import { IconModule } from 'ng-devui/icon';

@Component({
  selector: 'app-devui-standard-card',
  standalone: true,
  imports: [CardModule, IconModule],
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
