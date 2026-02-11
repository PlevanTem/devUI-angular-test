/**
 * 测试用例配置页 (Page V7) - Hybrid 方案
 * [库组件] imports 来自 ng-devui：ButtonModule, LayoutModule, IconModule, ToggleModule, CardModule, TextInputModule, SearchModule, AvatarModule
 * [自定义] 本组件类、数据结构、模板逻辑为业务自定义；模板中容器为原生 HTML，控件为 d-* 库组件（见模板内 [库组件]/[自定义] 注释）
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'ng-devui/button';
import { LayoutModule } from 'ng-devui/layout';
import { IconModule } from 'ng-devui/icon';
import { ToggleModule } from 'ng-devui/toggle';
import { CardModule } from 'ng-devui/card';
import { TextInputModule } from 'ng-devui/text-input';
import { SearchModule } from 'ng-devui/search';
import { AvatarModule } from 'ng-devui/avatar';
/** 自定义选项行 */
export interface CustomOptionRow {
  fieldName: string;
  fieldType: string;
  fieldValue: string;
}

/** 自定义字段行 */
export interface CustomFieldRow {
  fieldZh: string;
  fieldEn: string;
}

@Component({
  selector: 'app-page-comparison-v7',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    LayoutModule,
    IconModule,
    ToggleModule,
    CardModule,
    TextInputModule,
    SearchModule,
    AvatarModule
  ],
  templateUrl: './page-comparison-v7.html',
  styleUrls: ['./page-comparison-v7.component.css']
})
export class PageComparisonV7Component {
  /** 功能控制 */
  enableCasePermission = false;
  allowManualMarkResult = true;
  requireReasonOnFail = false;
  enablePreciseTest = false;

  /** 自定义选项表格 */
  customOptions: CustomOptionRow[] = [
    { fieldName: 'tags', fieldType: '枚举', fieldValue: 'good,bad,wating' },
    { fieldName: 'field2', fieldType: '枚举', fieldValue: '1,2,3,4,5' }
  ];

  /** 自定义字段表格 */
  customFields: CustomFieldRow[] = [
    { fieldZh: '应用平台', fieldEn: 'Application Platform' }
  ];

  /** 侧栏菜单（含图标，对应设计稿每项左侧图标） */
  sidebarMenus = [
    { label: '通用配置', icon: 'icon-setting', active: false },
    { label: '项目设置', icon: 'icon-folder', active: false },
    { label: '代码托管', icon: 'icon-git', active: false },
    { label: '代码检查', icon: 'icon-code', active: false },
    { label: '流水线', icon: 'icon-pipeline', active: false },
    { label: '编译构建', icon: 'icon-code', active: false },
    { label: '部署', icon: 'icon-run', active: false },
    { label: '发布', icon: 'icon-upload', active: false },
    { label: '运维', icon: 'icon-standard', active: false },
    { label: '测试', icon: 'icon-test', active: false },
    { label: '服务配置', icon: 'icon-menu', active: false },
    { label: '测试用例配置', icon: 'icon-document', active: true },
    { label: '自动任务和脚本', icon: 'icon-run', active: false },
    { label: '其他', icon: 'icon-more-oper', active: false },
    { label: 'wiki', icon: 'icon-book', active: false },
    { label: '文档', icon: 'icon-document', active: false },
    { label: '私有依赖库', icon: 'icon-archive', active: false },
    { label: '资源池管理', icon: 'icon-database', active: false },
    { label: '安全', icon: 'icon-info', active: false }
  ];

  showToast = false;

  addCustomOption(): void {
    this.customOptions = [...this.customOptions, { fieldName: '', fieldType: '枚举', fieldValue: '' }];
  }

  removeCustomOption(index: number): void {
    this.customOptions = this.customOptions.filter((_, i) => i !== index);
  }

  addCustomField(): void {
    this.customFields = [...this.customFields, { fieldZh: '', fieldEn: '' }];
  }

  removeCustomField(index: number): void {
    this.customFields = this.customFields.filter((_, i) => i !== index);
  }

  saveOptions(): void {
    this.showToast = true;
    setTimeout(() => (this.showToast = false), 3000);
  }

  saveFields(): void {
    this.showToast = true;
    setTimeout(() => (this.showToast = false), 3000);
  }
}
