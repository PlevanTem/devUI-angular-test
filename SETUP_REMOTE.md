# 远程仓库设置指南

## 快速设置（推荐方式）

### 方式一：使用脚本自动设置

运行 PowerShell 脚本：

```powershell
.\setup-remote-repo.ps1
```

脚本会引导您完成：
1. 选择创建方式
2. 创建 GitHub 仓库
3. 配置远程仓库
4. 推送代码

### 方式二：手动设置（最简单）

#### 步骤 1: 创建 GitHub 仓库

1. 访问 https://github.com/new
2. 填写仓库信息：
   - **Repository name**: `devUI-angular-test`
   - **Description**: `DevUI Angular 组件库测试项目`
   - 选择 **Public** 或 **Private**
   - ⚠️ **不要勾选** "Initialize this repository with a README"
3. 点击 **Create repository**

#### 步骤 2: 配置并推送

在项目目录执行以下命令（替换 `YOUR_USERNAME` 为您的 GitHub 用户名）：

```powershell
# 添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/devUI-angular-test.git

# 推送代码
git push -u origin main
```

如果提示需要身份验证：
- **用户名**: 您的 GitHub 用户名
- **密码**: 使用 Personal Access Token（不是账户密码）

#### 步骤 3: 创建 Personal Access Token（如果需要）

1. 访问 https://github.com/settings/tokens
2. 点击 **Generate new token** → **Generate new token (classic)**
3. 填写信息：
   - **Note**: `devUI-angular-test`
   - **Expiration**: 选择过期时间
   - **Scopes**: 勾选 `repo`（完整仓库权限）
4. 点击 **Generate token**
5. **复制并保存 token**（只显示一次）

### 方式三：使用 SSH（推荐用于频繁推送）

#### 步骤 1: 检查 SSH 密钥

```powershell
# 检查是否已有 SSH 密钥
ls ~/.ssh
```

#### 步骤 2: 生成 SSH 密钥（如果没有）

```powershell
ssh-keygen -t ed25519 -C "178316470@qq.com"
# 按 Enter 使用默认路径
# 设置密码（可选）
```

#### 步骤 3: 添加 SSH 密钥到 GitHub

```powershell
# 复制公钥内容
cat ~/.ssh/id_ed25519.pub
```

1. 访问 https://github.com/settings/keys
2. 点击 **New SSH key**
3. **Title**: `DevUI Project`
4. **Key**: 粘贴刚才复制的公钥内容
5. 点击 **Add SSH key**

#### 步骤 4: 使用 SSH URL 配置远程仓库

```powershell
# 添加远程仓库（使用 SSH）
git remote add origin git@github.com:YOUR_USERNAME/devUI-angular-test.git

# 推送代码
git push -u origin main
```

## 验证设置

检查远程仓库配置：

```powershell
git remote -v
```

应该看到：
```
origin  https://github.com/YOUR_USERNAME/devUI-angular-test.git (fetch)
origin  https://github.com/YOUR_USERNAME/devUI-angular-test.git (push)
```

## 后续推送

设置完成后，以后只需要：

```powershell
git add .
git commit -m "你的提交信息"
git push
```

## 常见问题

### Q: 推送时提示 "Authentication failed"
**A**: 使用 Personal Access Token 而不是账户密码，或者配置 SSH 密钥

### Q: 提示 "remote origin already exists"
**A**: 先删除现有远程仓库：
```powershell
git remote remove origin
```
然后重新添加

### Q: 想使用不同的仓库名称
**A**: 在创建 GitHub 仓库时使用您想要的名称，然后在命令中替换 `devUI-angular-test`

## 需要帮助？

如果遇到问题，请检查：
1. GitHub 账户是否已登录
2. 仓库是否已创建
3. 是否有推送权限
4. 网络连接是否正常
