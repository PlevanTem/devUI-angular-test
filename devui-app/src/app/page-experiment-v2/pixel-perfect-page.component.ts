import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  selector: 'app-pixel-perfect-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pixel-perfect-page.component.html',
  styleUrl: './pixel-perfect-page.component.css'
})
export class PixelPerfectPageComponent {
  // 页面数据
  pageData = {
    title: '新建实例',
    currentStep: '工程配置',
    steps: [
      { name: '基础配置', completed: true, active: false },
      { name: '工程配置', completed: false, active: true }
    ],
    source: 'sample', // 'sample' | 'private' | 'none'
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
