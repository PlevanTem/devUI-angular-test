import { Component, signal } from '@angular/core';
import { CardComparisonComponent } from './card-experiment/card-comparison.component';
import { PageComparisonComponent } from './page-experiment/page-comparison.component';
import { CardComparisonV2Component } from './card-experiment-v2/card-comparison-v2.component';
import { PageComparisonV2Component } from './page-experiment-v2/page-comparison-v2.component';
import { PageComparisonV3Component } from './page-experiment-v3/page-comparison-v3.component';
import { CardComparisonV3Component } from './card-experiment-v3/card-comparison-v3.component';
import { PageComparisonV4Component } from './page-experiment-v4/page-comparison-v4.component';
import { ButtonModule } from 'ng-devui/button';

@Component({
  selector: 'app-root',
  imports: [CardComparisonComponent, PageComparisonComponent, CardComparisonV2Component, PageComparisonV2Component, PageComparisonV3Component, CardComparisonV3Component, PageComparisonV4Component, ButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  currentView = signal<'menu' | 'card' | 'page' | 'card-v2' | 'page-v2' | 'page-v3' | 'card-v3' | 'page-v4'>('menu');

  showCardComparison() {
    this.currentView.set('card');
  }

  showCardComparisonV2() {
    this.currentView.set('card-v2');
  }

  showPageComparison() {
    this.currentView.set('page');
  }

  showPageComparisonV2() {
    this.currentView.set('page-v2');
  }

  showPageComparisonV3() {
    this.currentView.set('page-v3');
  }

  showCardComparisonV3() {
    this.currentView.set('card-v3');
  }

  showPageComparisonV4() {
    this.currentView.set('page-v4');
  }

  showMenu() {
    this.currentView.set('menu');
  }
}
