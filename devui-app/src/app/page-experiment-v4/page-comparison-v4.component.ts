import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'ng-devui/button';
import { LayoutModule } from 'ng-devui/layout';
import { CardModule } from 'ng-devui/card';
import { TabsModule } from 'ng-devui/tabs';
import { IconModule } from 'ng-devui/icon';
import { AccordionModule } from 'ng-devui/accordion';
import { BadgeModule } from 'ng-devui/badge';
import { StatusModule } from 'ng-devui/status';
import { TagsModule } from 'ng-devui/tags';
import { BreadcrumbModule } from 'ng-devui/breadcrumb';

@Component({
    selector: 'app-page-comparison-v4',
    standalone: true,
    imports: [
        CommonModule,
        ButtonModule,
        LayoutModule,
        CardModule,
        TabsModule,
        IconModule,
        AccordionModule,
        BadgeModule,
        StatusModule,
        TagsModule,
        BreadcrumbModule
    ],
    templateUrl: './page-comparison-v4.html',
    styleUrls: ['./page-comparison-v4.component.css']
})
export class PageComparisonV4Component {
    currentView = signal<'v1' | 'v2' | 'v3'>('v3');

    // Dashboard Metrics Data
    metrics = {
        linesOfCode: 95,
        criticalIssues: 0,
        majorIssues: 0,
        gateResult: 'Passed',
        checkedTime: 'Sep 11, 2023 10:25:56 GMT+03:00',
        gatesPassed: 2,
        cards: [
            { title: 'All Issues', value: 0, icon: 'icon-standard', color: '#FF7D00' },
            { title: 'Unresolved New Issues', value: 0, icon: 'icon-error', color: '#F66F6A' },
            { title: 'Resolved', value: 0, icon: 'icon-success', color: '#3AC295' },
            { title: 'Average Cyclomatic Complexity', value: 0, icon: 'icon-code', color: '#2FC25B' },
            { title: 'Duplication Rate', value: '0.0%', icon: 'icon-copy', color: '#8855FF' },
            { title: 'NBNC', value: 84, icon: 'icon-go-document', color: '#2FC25B' }
        ]
    };

    // Navigation for Sidebar
    menuItems = [
        { title: 'Work', icon: 'icon-work', expand: false },
        { title: 'Code', icon: 'icon-code', expand: false },
        { title: 'Repo', icon: 'icon-git', expand: false },
        { title: 'Check', icon: 'icon-standard', expand: true, Active: true },
        { title: 'CICD', icon: 'icon-pipeline', expand: false },
        { title: 'Artifact', icon: 'icon-archive', expand: false },
        { title: 'Testing', icon: 'icon-test', expand: false },
        { title: 'Documentation', icon: 'icon-book', expand: false },
        { title: 'Settings', icon: 'icon-setting', expand: false }
    ];

    // Breadcrumb
    breadcrumbItems = [
        { label: 'Home', link: '#' },
        { label: 'Nodejs_Project', link: '#' },
        { label: 'Check', link: '#' },
        { label: 'View Task Details', link: '#' }
    ];

    tabs = [
        { id: 'overview', title: 'Overview' },
        { id: 'issues', title: 'Issues' },
        { id: 'metrics', title: 'Metrics' },
        { id: 'logs', title: 'Logs' },
        { id: 'settings', title: 'Settings' }
    ];
    activeTab = 'overview';

    setView(view: 'v1' | 'v2' | 'v3') {
        this.currentView.set(view);
    }
}
