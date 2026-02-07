import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from 'ng-devui/layout';
import { CardModule } from 'ng-devui/card';
import { FormModule } from 'ng-devui/form';
import { TextInputModule } from 'ng-devui/text-input';
import { RadioModule } from 'ng-devui/radio';
import { ButtonModule } from 'ng-devui/button';
import { IconModule } from 'ng-devui/icon';

@Component({
  selector: 'app-devui-standard-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LayoutModule,
    CardModule,
    FormModule,
    TextInputModule,
    RadioModule,
    ButtonModule,
    IconModule
  ],
  templateUrl: './devui-standard-page.component.html',
  styleUrl: './devui-standard-page.component.css'
})
export class DevuiStandardPageComponent {
  // 页面数据
  pageData = {
    title: '新建实例',
    currentStep: '工程配置',
    steps: [
      { name: '基础配置', completed: true, active: false },
      { name: '工程配置', completed: false, active: true }
    ],
    source: 'sample', // 'sample' | 'private' | 'none'
    projectName: '',
    templateSearch: '',
    selectedTemplate: 'java-web-spring-sample',
    templates: [
      {
        id: 'java-web-spring-sample',
        title: 'java-web-spring-sample',
        description: 'A basic example using Spring servlets. The app returns values entered into a submit form.',
        tags: ['maven', 'spring', 'java', 'web'],
        selected: true
      },
      {
        id: 'java-chassis-basic-sample',
        title: 'java-chassis-basic-sample',
        description: 'ServiceComb Java Chassis 微服务框架基础底座',
        tags: ['java', 'ServiceComb'],
        selected: false
      },
      {
        id: 'java-chassis-springmvc-sample',
        title: 'java-chassis-springmvc-sample',
        description: '基于ServiceComb框架,支持SpringMVC注解, 使用SpringMVC风格开发微服务',
        tags: ['java', 'ServiceComb'],
        selected: false
      },
      {
        id: 'java-chassis-jax-rs-sample',
        title: 'java-chassis-jax-rs-sample',
        description: '基于ServiceComb框架,支持JAX-RS注解,使用 JAX-RS风格开发微服务',
        tags: ['java', 'ServiceComb'],
        selected: false
      },
      {
        id: 'java-chassis-pojo-sample',
        title: 'java-chassis-pojo-sample',
        description: '基于ServiceComb框架,支持POJO注解,使用 POJO风格开发微服务',
        tags: ['java', 'ServiceComb'],
        selected: false
      },
      {
        id: 'spring-cloud-huawei-sample',
        title: 'spring-cloud-huawei-sample',
        description: 'Spring Cloud应用接入ServiceComb引擎样例',
        tags: ['java', 'ServiceComb'],
        selected: false
      },
      {
        id: 'java-console-sample',
        title: 'java-console-sample',
        description: 'A hello world Java application.',
        tags: ['java', 'maven', 'console'],
        selected: false
      }
    ],
    cost: '¥1.2049/小时'
  };

  selectSource(source: string) {
    this.pageData.source = source;
  }

  selectTemplate(templateId: string) {
    this.pageData.templates.forEach(t => t.selected = t.id === templateId);
    this.pageData.selectedTemplate = templateId;
  }
}
