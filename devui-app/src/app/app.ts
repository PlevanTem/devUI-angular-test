import { Component, signal } from '@angular/core';
import { ButtonModule } from 'ng-devui/button';

@Component({
  selector: 'app-root',
  imports: [ButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('devui-app');
}
