import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'ng-devui/button';
import { CardModule } from 'ng-devui/card';
import { IconModule } from 'ng-devui/icon';
import { BadgeModule } from 'ng-devui/badge';
import { AvatarModule } from 'ng-devui/avatar';
import { SearchModule } from 'ng-devui/search';

/** 流程节点：规则卡片 或 占位符 */
export type FlowNode =
  | { type: 'card'; title: string; rules: string }
  | { type: 'placeholder' };

/** 业务场景行 */
export interface ScenarioRow {
  name: string;
  nodes: FlowNode[];
  collapsed?: boolean;
}

@Component({
  selector: 'app-page-comparison-v6',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    IconModule,
    BadgeModule,
    AvatarModule,
    SearchModule
  ],
  templateUrl: './page-comparison-v6.html',
  styleUrls: ['./page-comparison-v6.component.css']
})
export class PageComparisonV6Component {
  /** 主导航项 */
  navItems = [
    { label: '运输经理工作台', active: true },
    { label: '应收', active: false },
    { label: '订单', active: false },
    { label: '库存', active: false },
    { label: '采购履行', active: false }
  ];

  /** 业务规则配置场景列表 */
  scenarios: ScenarioRow[] = [
    {
      name: '应收发票创建场景',
      nodes: [
        {
          type: 'card',
          title: '应收发票创建',
          rules: '可配规则: 1.应收发票接入门禁规则、2.发票类型转化规则、3.应收发票创建规则、4.金额计算规则、5.弹性域赋值规则、6.提交校验规则'
        },
        {
          type: 'card',
          title: '应收发票审批',
          rules: '可配规则: 7.接工作流流程配置页面'
        },
        {
          type: 'card',
          title: '应收核算',
          rules: '可配规则: 8.弹性域赋值规则、9.入账控制规则'
        }
      ]
    },
    {
      name: '应收发票核销场景',
      nodes: [
        {
          type: 'card',
          title: '应收发票核销',
          rules: '可配规则: 发票核销校验规则'
        },
        { type: 'placeholder' },
        { type: 'placeholder' },
        {
          type: 'card',
          title: '应收核算',
          rules: '可配规则: 弹性域赋值规则、入账控制规则'
        }
      ]
    },
    {
      name: '应收发票调整场景',
      nodes: [
        {
          type: 'card',
          title: '应收发票调整',
          rules: '可配规则: 发票调整校验规则'
        },
        { type: 'placeholder' },
        { type: 'placeholder' },
        {
          type: 'card',
          title: '应收核算',
          rules: '可配规则: 弹性域赋值规则、入账控制规则'
        }
      ]
    },
    {
      name: '收款单创建场景',
      nodes: [
        {
          type: 'card',
          title: '收款单创建',
          rules: '可配规则: 1.收款单接入门禁规则、2.收款单款项识别规则、3.收款单创建规则、4.收款单编号规则'
        },
        {
          type: 'card',
          title: '应收发票审批',
          rules: '可配规则: 5.收款单提交校验规则'
        },
        {
          type: 'card',
          title: '应收核算',
          rules: '可配规则: 6.弹性域赋值规则、7.入账控制规则'
        }
      ]
    },
    {
      name: '收款单核销场景',
      nodes: [
        {
          type: 'card',
          title: '收款单核销',
          rules: '可配规则: 收款单核销校验规则'
        },
        { type: 'placeholder' },
        { type: 'placeholder' },
        {
          type: 'card',
          title: '应收核算',
          rules: '可配规则: 弹性域赋值规则、入账控制规则'
        }
      ]
    }
  ];

  notificationCount = 22;

  onSearch(value: string): void {
    // 可接入实际搜索逻辑
  }

  toggleRow(row: ScenarioRow): void {
    row.collapsed = !row.collapsed;
  }

  isCard(node: FlowNode): node is { type: 'card'; title: string; rules: string } {
    return node.type === 'card';
  }
}
