import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'ng-devui/button';
import { LayoutModule } from 'ng-devui/layout';
import { CardModule } from 'ng-devui/card';
import { IconModule } from 'ng-devui/icon';
import { TagsModule } from 'ng-devui/tags';
import { BreadcrumbModule } from 'ng-devui/breadcrumb';
import { FormModule } from 'ng-devui/form';
import { TextInputModule } from 'ng-devui/text-input';
import { TextareaModule } from 'ng-devui/textarea';
import { SelectModule } from 'ng-devui/select';
import { DatepickerModule } from 'ng-devui/datepicker';
import { InputNumberModule } from 'ng-devui/input-number';

@Component({
    selector: 'app-page-comparison-v5',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ButtonModule,
        LayoutModule,
        CardModule,
        IconModule,
        TagsModule,
        BreadcrumbModule,
        FormModule,
        TextInputModule,
        TextareaModule,
        SelectModule,
        DatepickerModule,
        InputNumberModule
    ],
    templateUrl: './page-comparison-v5.html',
    styleUrls: ['./page-comparison-v5.component.css']
})
export class PageComparisonV5Component {
    currentView = signal<'v1' | 'v2' | 'v3'>('v3');

    // Form Data Model
    workItemForm = {
        title: 'Functions',
        tags: [
            { id: 1, tag: 'epic', labelStyle: 'primary' as const },
            { id: 2, tag: 'story', labelStyle: 'default' as const },
            { id: 3, tag: 'nodejs', labelStyle: 'default' as const }
        ],
        description: 'As a user\n\nI want to be able to create an account, log in and reset my password on the Node.js demo application.',
        type: 'Epic',
        status: 'New',
        assignedTo: 'mehmtalu@calgul',
        module: '',
        startDate: 'Sep 11, 2023',
        dueDate: 'Oct 09, 2023',
        order: 1,
        priority: 'High',
        severity: 'Major',
        notify: '',
        domain: 'Function'
    };

    // Dropdown Options
    typeOptions = [
        { label: 'Epic', value: 'Epic' },
        { label: 'Story', value: 'Story' },
        { label: 'Task', value: 'Task' },
        { label: 'Bug', value: 'Bug' }
    ];

    statusOptions = [
        { label: 'New', value: 'New' },
        { label: 'In Progress', value: 'In Progress' },
        { label: 'Resolved', value: 'Resolved' },
        { label: 'Closed', value: 'Closed' }
    ];

    priorityOptions = [
        { label: 'High', value: 'High' },
        { label: 'Medium', value: 'Medium' },
        { label: 'Low', value: 'Low' }
    ];

    severityOptions = [
        { label: 'Major', value: 'Major' },
        { label: 'Minor', value: 'Minor' },
        { label: 'Critical', value: 'Critical' }
    ];

    domainOptions = [
        { label: 'Function', value: 'Function' },
        { label: 'Performance', value: 'Performance' },
        { label: 'Security', value: 'Security' },
        { label: 'UI/UX', value: 'UI/UX' }
    ];

    // Breadcrumb Navigation
    breadcrumbItems = [
        { label: 'Homepage', link: '#' },
        { label: 'Nodejs_Project', link: '#' },
        { label: 'Work Items', link: '#' },
        { label: 'Create work item', link: '#' }
    ];

    // Sidebar Navigation
    sidebarMenuItems = [
        { id: 1, icon: 'icon-work', label: 'Work', active: true },
        { id: 2, icon: 'icon-code', label: 'Code', active: false },
        { id: 3, icon: 'icon-git', label: 'CICD', active: false },
        { id: 4, icon: 'icon-archive', label: 'Artifact', active: false },
        { id: 5, icon: 'icon-test', label: 'Testing', active: false },
        { id: 6, icon: 'icon-book', label: 'Documentation', active: false },
        { id: 7, icon: 'icon-setting', label: 'Settings', active: false }
    ];

    // Tabs
    tabItems = [
        { id: 'plans', label: 'Plans' },
        { id: 'workItems', label: 'Work Items' },
        { id: 'sprints', label: 'Sprints' },
        { id: 'statistics', label: 'Statistics' },
        { id: 'reports', label: 'Reports' }
    ];
    activeTab = 'workItems';

    // Rich Text Toolbar Items
    toolbarItems = [
        { icon: 'icon-bold', tooltip: 'Bold' },
        { icon: 'icon-italic', tooltip: 'Italic' },
        { icon: 'icon-underline', tooltip: 'Underline' },
        { icon: 'icon-strikethrough', tooltip: 'Strikethrough' }
    ];

    // State Management
    characterCount = 88;
    maxCharacters = 50000;
    showMoreMetadata = false;

    setView(view: 'v1' | 'v2' | 'v3') {
        this.currentView.set(view);
    }

    onAddTag() {
        console.log('Add tag clicked');
    }

    onSave() {
        console.log('Save clicked', this.workItemForm);
    }

    onCancel() {
        console.log('Cancel clicked');
    }

    toggleShowMore() {
        this.showMoreMetadata = !this.showMoreMetadata;
    }

    onFileSelect() {
        console.log('File select clicked');
    }

    // Format functions
    getCharacterCountText(): string {
        return `${this.characterCount}/${this.maxCharacters} characters`;
    }
}
