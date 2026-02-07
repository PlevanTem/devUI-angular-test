import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'ng-devui/card';
import { FormModule } from 'ng-devui/form';
import { TextInputModule } from 'ng-devui/text-input';
import { RadioModule } from 'ng-devui/radio';
import { ButtonModule } from 'ng-devui/button';
import { IconModule } from 'ng-devui/icon';

/**
 * 方案3：Hybrid融合方案
 * 
 * 目标：结合DevUI规范和灵活布局
 * 特点：
 * - 使用DevUI Card组件作为容器（保持组件库特性）
 * - 使用DevUI子组件（d-form-item, d-card-title等）
 * - 使用DevUI设计令牌（颜色、间距、字体）
 * - 在必要时使用原生HTML实现精确布局
 * - 通过CSS微调实现像素级还原
 */
@Component({
  selector: 'app-hybrid-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    FormModule,
    TextInputModule,
    RadioModule,
    ButtonModule,
    IconModule
  ],
  templateUrl: './hybrid-page.component.html',
  styleUrl: './hybrid-page.component.css'
})
export class HybridPageComponent {
  // 页面数据
  pageData = {
    title: '新建实例',
    currentStep: '工程配置',
    steps: [
      { name: '基础配置', completed: true, active: false },
      { name: '工程配置', completed: false, active: true }
    ],
    source: 'sample',
    sourceOptions: [
      { value: 'sample', label: '样例工程' },
      { value: 'private', label: '私有仓库' },
      { value: 'none', label: '不创建工程' }
    ],
    projectName: '',
    templateSearch: '',
    selectedTemplate: 'java-web-spring-sample',
    templates: [
      {
        id: 'java-web-spring-sample',
        name: 'java-web-spring-sample',
        description: 'A basic example using Spring servlets. The app returns values entered into a submit form.',
        tags: ['maven', 'spring', 'java', 'web']
      },
      {
        id: 'java-chassis-basic-sample',
        name: 'java-chassis-basic-sample',
        description: 'A basic example using ServiceComb framework.',
        tags: ['ServiceComb', 'console', 'java']
      },
      {
        id: 'java-web-spring-sample-2',
        name: 'java-web-spring-sample-2',
        description: 'Another Spring example with different configuration.',
        tags: ['maven', 'spring', 'java']
      }
    ],
    cost: {
      value: '1.2049',
      unit: '/小时'
    }
  };

  selectSource(value: string) {
    this.pageData.source = value;
  }

  selectTemplate(templateId: string) {
    this.pageData.selectedTemplate = templateId;
  }
}
