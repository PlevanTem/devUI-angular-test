import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'ng-devui/card';
import { IconModule } from 'ng-devui/icon';
import { ButtonModule } from 'ng-devui/button';
import { TooltipModule } from 'ng-devui/tooltip';

@Component({
    selector: 'app-card-comparison-v3',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        CardModule,
        IconModule,
        ButtonModule,
        TooltipModule
    ],
    templateUrl: './card-comparison-v3.html',
    styleUrls: ['./card-comparison-v3.component.css']
})
export class CardComparisonV3Component {
    currentView = signal<'v1' | 'v2' | 'v3'>('v3');

    // Mock Data matching the image exactly
    cardData = {
        title: 'test01',
        subtitle: 'All in One',
        date: '2023-02-09 14:14:42',
        description: 'test01',
        status: '已停止',
        cpuArch: 'arm',
        cpuMem: '4U8G',
        storage: '5GB',
        iconUrl: 'assets/app-icon-placeholder.png' // Would need an asset, I'll simulate with CSS/Icon
    };

    constructor() { }

    setView(view: 'v1' | 'v2' | 'v3') {
        this.currentView.set(view);
    }
}
