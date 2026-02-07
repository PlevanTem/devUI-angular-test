
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'ng-devui/button';
import { FormModule } from 'ng-devui/form';
import { TextInputModule } from 'ng-devui/text-input';
import { RadioModule } from 'ng-devui/radio';
import { CardModule } from 'ng-devui/card';
import { IconModule } from 'ng-devui/icon';
import { SearchModule } from 'ng-devui/search';
import { LayoutModule } from 'ng-devui/layout';
import { TagsInputModule } from 'ng-devui/tags-input'; // Or specific Tag component if available

// Mock Data
interface ProjectTemplate {
    id: string;
    title: string;
    description: string;
    tags: string[];
    selected?: boolean;
}

@Component({
    selector: 'app-page-comparison-v3',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ButtonModule,
        FormModule,
        TextInputModule,
        RadioModule,
        CardModule,
        IconModule,
        SearchModule,
        LayoutModule,
        TagsInputModule
    ],
    templateUrl: './page-comparison-v3.html',
    styleUrls: ['./page-comparison-v3.component.css']
})
export class PageComparisonV3Component {
    currentView = signal<'v1' | 'v2' | 'v3'>('v1');

    // Model Data
    sourceType = 'sample';
    projectName = '';
    selectedTemplateId = 'java-web-spring-sample';
    templates: ProjectTemplate[] = [
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
            tags: ['java', 'ServiceComb']
        },
        {
            id: 'java-chassis-springmvc-sample',
            title: 'java-chassis-springmvc-sample',
            description: '基于ServiceComb框架，支持SpringMVC注解，使用SpringMVC风格开发微服务',
            tags: ['java', 'ServiceComb']
        },
        {
            id: 'java-chassis-jax-rs-sample',
            title: 'java-chassis-jax-rs-sample',
            description: '基于ServiceComb框架，支持JAX-RS注解，使用JAX-RS风格开发微服务',
            tags: ['java', 'ServiceComb']
        },
        {
            id: 'java-chassis-pojo-sample',
            title: 'java-chassis-pojo-sample',
            description: '基于ServiceComb框架，支持POJO注解，使用POJO风格开发微服务',
            tags: ['java', 'ServiceComb']
        },
        {
            id: 'spring-cloud-huawei-sample',
            title: 'spring-cloud-huawei-sample',
            description: 'Spring Cloud应用接入ServiceComb引擎样例',
            tags: ['java', 'ServiceComb']
        },
        {
            id: 'java-console-sample',
            title: 'java-console-sample',
            description: 'A hello world Java application.',
            tags: ['java', 'maven', 'console']
        }
    ];

    selectTemplate(id: string) {
        this.selectedTemplateId = id;
        this.templates.forEach(t => t.selected = t.id === id);
    }

    // View Switching
    setView(view: 'v1' | 'v2' | 'v3') {
        this.currentView.set(view);
    }
}
