import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PixelPerfectPageComponent } from './pixel-perfect-page.component';
import { DevuiStandardPageComponent } from './devui-standard-page.component';
import { HybridPageComponent } from './hybrid-page.component';

/**
 * 页面组件对比展示页面 - V2
 * 
 * 展示三种实现方案的对比：
 * 1. 像素级还原方案
 * 2. DevUI规范方案
 * 3. Hybrid融合方案
 */
@Component({
  selector: 'app-page-comparison-v2',
  standalone: true,
  imports: [
    CommonModule,
    PixelPerfectPageComponent,
    DevuiStandardPageComponent,
    HybridPageComponent
  ],
  templateUrl: './page-comparison-v2.component.html',
  styleUrl: './page-comparison-v2.component.css'
})
export class PageComparisonV2Component {
  activeTab: 'pixel' | 'devui' | 'hybrid' = 'pixel';
  
  // 方案对比数据
  comparisonData = {
    pixelPerfect: {
      name: '像素级还原方案',
      description: '100%还原图片视觉效果',
      pros: [
        '精确还原设计稿的每个细节',
        '完全控制所有样式和布局',
        '不依赖组件库，独立性强',
        '可以实现任何视觉效果'
      ],
      cons: [
        '维护成本高，需要手动维护所有样式',
        '代码量大，需要编写大量自定义CSS',
        '可能与整体设计系统不一致',
        '设计系统更新时需要手动同步',
        '缺少组件库的功能（验证、可访问性等）'
      ],
      useCase: '适用于需要100%还原设计稿的特殊场景，如营销页面'
    },
    devuiStandard: {
      name: 'DevUI规范方案',
      description: '使用DevUI组件库和设计令牌',
      pros: [
        '代码简洁，使用组件库减少代码量',
        '易于维护，跟随组件库更新自动维护',
        '设计一致性，符合整体设计规范',
        '可复用性强，组件可在其他项目中复用',
        '保留组件库功能（验证、可访问性、主题）'
      ],
      cons: [
        '灵活性较低，受限于组件库的能力',
        '某些设计细节可能需要妥协',
        '依赖组件库版本兼容性',
        '还原度可能略低于100%'
      ],
      useCase: '适用于大多数标准业务场景，优先推荐'
    },
    hybrid: {
      name: 'Hybrid融合方案',
      description: '结合DevUI规范和灵活布局',
      pros: [
        '保持组件库功能（验证、可访问性、主题）',
        '使用设计令牌保持一致性',
        '灵活处理组件库无法满足的布局需求',
        '易于维护和迁移',
        '高还原度（约95%）'
      ],
      cons: [
        '需要理解两种方案的结合点',
        '可能需要更多代码来协调两者',
        '需要平衡设计令牌和精确值'
      ],
      useCase: '适用于需要精确布局但又要保持设计系统一致性的场景'
    }
  };
}
