# Hybrid UI Generator Examples | 混合方案 UI 生成器示例

## 示例 1: 登录表单

### 需求
生成一个登录表单，包含邮箱和密码字段，使用 DevUI 组件。

### 调用方式
```
@[hybrid-ui-generator] Generate a login form with email and password fields, using DevUI components. The form should have horizontal layout and include validation.
```

### 预期输出

**TypeScript:**
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormModule } from 'ng-devui/form';
import { TextInputModule } from 'ng-devui/text-input';
import { ButtonModule } from 'ng-devui/button';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FormModule,
    TextInputModule,
    ButtonModule
  ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  email = '';
  password = '';

  onSubmit() {
    // Handle form submission
  }
}
```

**HTML:**
```html
<form class="devui-form" [attr.data-layout]="'horizontal'" (ngSubmit)="onSubmit()">
  <d-form-item>
    <d-form-label class="required-label">*Email:</d-form-label>
    <d-form-control>
      <d-text-input 
        type="email"
        [(ngModel)]="email"
        name="email"
        placeholder="Enter your email"
        [required]="true">
      </d-text-input>
    </d-form-control>
  </d-form-item>

  <d-form-item>
    <d-form-label class="required-label">*Password:</d-form-label>
    <d-form-control>
      <d-text-input 
        type="password"
        [(ngModel)]="password"
        name="password"
        placeholder="Enter your password"
        [required]="true">
      </d-text-input>
    </d-form-control>
  </d-form-item>

  <d-form-item>
    <d-form-control>
      <d-button bsStyle="primary" bsSize="md" type="submit">
        Login
      </d-button>
    </d-form-control>
  </d-form-item>
</form>
```

**CSS:**
```css
/* Using design tokens from @LLMs/llms-full.txt */
.devui-form {
  display: flex;
  flex-direction: column;
  gap: 24px; /* lg spacing */
}

.devui-form[data-layout="horizontal"] d-form-item {
  display: flex;
  align-items: flex-start;
  gap: 16px; /* md spacing */
}

.devui-form[data-layout="horizontal"] d-form-label {
  min-width: 100px;
  padding-top: 8px; /* sm spacing */
  flex-shrink: 0;
  font-size: 14px; /* font-size-body */
  color: #1D2129; /* text-primary */
}

.devui-form[data-layout="horizontal"] d-form-control {
  flex: 1;
}

.required-label::before {
  content: '*';
  color: #F53F3F; /* danger */
  margin-right: 4px; /* xs spacing */
}
```

---

## 示例 2: 产品卡片网格

### 需求
生成一个产品卡片网格，3列布局，每个卡片显示标题、描述、价格和标签。

### 调用方式
```
@[hybrid-ui-generator] Generate a product card grid with 3 columns. Each card should show title, description, price, and tags. Cards should be selectable and have hover effects.
```

### 预期输出

**TypeScript:**
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'ng-devui/card';
import { ButtonModule } from 'ng-devui/button';

@Component({
  selector: 'app-product-grid',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './product-grid.component.html',
  styleUrl: './product-grid.component.css'
})
export class ProductGridComponent {
  products = [
    {
      id: 1,
      title: 'Product 1',
      description: 'Description for product 1',
      price: 99.99,
      tags: ['new', 'sale'],
      selected: false
    },
    // ... more products
  ];

  selectProduct(productId: number) {
    this.products.forEach(p => p.selected = p.id === productId);
  }
}
```

**HTML:**
```html
<div class="product-grid">
  <d-card 
    *ngFor="let product of products"
    class="product-card"
    [class.selected]="product.selected"
    (click)="selectProduct(product.id)">
    <div class="selected-indicator" *ngIf="product.selected"></div>
    
    <d-card-header>
      <d-card-title>{{ product.title }}</d-card-title>
    </d-card-header>
    
    <d-card-content>
      <p class="product-description">{{ product.description }}</p>
      <div class="product-price">¥{{ product.price }}</div>
      <div class="product-tags">
        <span class="tag" *ngFor="let tag of product.tags">{{ tag }}</span>
      </div>
    </d-card-content>
    
    <d-card-actions>
      <d-button bsStyle="primary" bsSize="sm">Add to Cart</d-button>
    </d-card-actions>
  </d-card>
</div>
```

**CSS:**
```css
/* Using design tokens */
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px; /* md spacing */
}

.product-card {
  position: relative;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 8px; /* lg border-radius */
}

.product-card:hover {
  box-shadow: 0 2px 8px rgba(22, 93, 255, 0.1);
}

.product-card.selected {
  border: 2px solid #165DFF; /* primary */
  box-shadow: 0 2px 8px rgba(22, 93, 255, 0.15);
}

.selected-indicator {
  position: absolute;
  top: 12px; /* sm spacing */
  right: 12px;
  width: 16px; /* md spacing */
  height: 16px;
  border-radius: 50%;
  background-color: #165DFF; /* primary */
}

.product-description {
  font-size: 12px; /* font-size-small */
  color: #86909C; /* text-disabled */
  line-height: 1.5; /* line-height-base */
  margin: 0 0 12px 0; /* sm spacing */
}

.product-price {
  font-size: 20px; /* font-size-h3 */
  font-weight: 600; /* font-weight-semibold */
  color: #F53F3F; /* danger */
  margin-bottom: 12px; /* sm spacing */
}

.product-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px; /* sm spacing */
}

.tag {
  display: inline-block;
  padding: 2px 8px; /* xs and sm spacing */
  background-color: #E6F2FF;
  color: #165DFF; /* primary */
  border-radius: 12px;
  font-size: 12px; /* font-size-small */
  line-height: 20px;
}
```

---

## 示例 3: 步骤导航组件

### 需求
生成一个步骤导航组件，显示多个步骤，当前步骤高亮，已完成步骤显示勾选图标。

### 调用方式
```
@[hybrid-ui-generator] Generate a step navigation component showing multiple steps. Current step should be highlighted, completed steps should show checkmark icons. Use DevUI components where possible.
```

### 预期输出

**TypeScript:**
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from 'ng-devui/icon';

@Component({
  selector: 'app-step-navigation',
  standalone: true,
  imports: [CommonModule, IconModule],
  templateUrl: './step-navigation.component.html',
  styleUrl: './step-navigation.component.css'
})
export class StepNavigationComponent {
  steps = [
    { name: 'Step 1', completed: true, active: false },
    { name: 'Step 2', completed: false, active: true },
    { name: 'Step 3', completed: false, active: false }
  ];
}
```

**HTML:**
```html
<div class="step-navigation">
  <div 
    class="step-item" 
    *ngFor="let step of steps; let i = index"
    [class.active]="step.active"
    [class.completed]="step.completed">
    <div class="step-connector" *ngIf="i > 0"></div>
    <div class="step-content">
      <div class="step-icon">
        <d-icon 
          *ngIf="step.completed" 
          name="icon-check" 
          class="icon-completed">
        </d-icon>
        <span *ngIf="!step.completed" class="step-number">{{ i + 1 }}</span>
      </div>
      <span class="step-name">{{ step.name }}</span>
    </div>
  </div>
</div>
```

**CSS:**
```css
/* Using design tokens */
.step-navigation {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.step-item {
  position: relative;
  padding: 12px 0; /* sm spacing */
}

.step-item.active {
  border-left: 3px solid #165DFF; /* primary */
  padding-left: 21px;
}

.step-content {
  display: flex;
  align-items: center;
  gap: 12px; /* sm spacing */
}

.step-icon {
  width: 32px; /* xl spacing */
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.icon-completed {
  color: #165DFF; /* primary */
  font-size: 16px;
}

.step-number {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F2F3F5; /* bg-page */
  border-radius: 50%;
  font-size: 14px; /* font-size-body */
  color: #4E5969; /* text-secondary */
}

.step-name {
  font-size: 14px; /* font-size-body */
  color: #4E5969; /* text-secondary */
}

.step-item.active .step-name {
  color: #165DFF; /* primary */
  font-weight: 500; /* font-weight-medium */
}

.step-connector {
  position: absolute;
  left: 16px; /* md spacing */
  top: -12px;
  width: 2px;
  height: 24px; /* lg spacing */
  background-color: #E5E6EB; /* border */
}
```

---

## 使用技巧

### 1. 明确指定组件库

```
@[hybrid-ui-generator] Generate a form using DevUI components...
```

### 2. 指定布局需求

```
@[hybrid-ui-generator] Generate a card grid with 3 columns layout...
```

### 3. 指定交互需求

```
@[hybrid-ui-generator] Generate selectable cards with hover effects...
```

### 4. 引用设计令牌

Skill 会自动从 `@LLMs/llms-full.txt` 读取设计令牌，无需手动指定。

### 5. 处理版本兼容性

Skill 会自动检查版本兼容性，并在必要时使用混合方案。
