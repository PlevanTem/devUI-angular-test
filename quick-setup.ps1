# 快速设置脚本 - 创建 GitHub 仓库并推送代码
# 使用方法: .\quick-setup.ps1

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "DevUI Angular Test - 快速设置" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

Write-Host "📋 请先完成以下步骤:" -ForegroundColor Yellow
Write-Host "1. 打开浏览器访问: https://github.com/new" -ForegroundColor White
Write-Host "2. 填写仓库名称: devUI-angular-test" -ForegroundColor White
Write-Host "3. 选择 Public 或 Private" -ForegroundColor White
Write-Host "4. ⚠️  不要勾选 'Initialize this repository with a README'" -ForegroundColor Red
Write-Host "5. 点击 'Create repository'`n" -ForegroundColor White

$username = Read-Host "请输入您的 GitHub 用户名"
if ([string]::IsNullOrWhiteSpace($username)) {
    Write-Host "❌ 用户名不能为空" -ForegroundColor Red
    exit
}

$repoName = Read-Host "请输入仓库名称 (直接回车使用默认: devUI-angular-test)"
if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = "devUI-angular-test"
}

Write-Host "`n正在配置远程仓库..." -ForegroundColor Green

# 检查是否已存在远程仓库
$existingRemote = git remote get-url origin 2>$null
if ($existingRemote) {
    Write-Host "⚠️  检测到已存在的远程仓库: $existingRemote" -ForegroundColor Yellow
    $replace = Read-Host "是否要替换为新的远程仓库? (y/n)"
    if ($replace -eq "y" -or $replace -eq "Y") {
        git remote remove origin
        Write-Host "✅ 已移除旧远程仓库" -ForegroundColor Green
    } else {
        Write-Host "操作已取消" -ForegroundColor Yellow
        exit
    }
}

# 添加远程仓库
git remote add origin "https://github.com/$username/$repoName.git"
Write-Host "✅ 已添加远程仓库: https://github.com/$username/$repoName.git" -ForegroundColor Green

Write-Host "`n正在推送代码到远程仓库..." -ForegroundColor Green
Write-Host "如果提示需要身份验证:" -ForegroundColor Yellow
Write-Host "  - 用户名: 输入您的 GitHub 用户名" -ForegroundColor White
Write-Host "  - 密码: 输入 Personal Access Token (不是账户密码)" -ForegroundColor White
Write-Host "  - 获取 Token: https://github.com/settings/tokens`n" -ForegroundColor Cyan

git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ 成功! 代码已推送到远程仓库" -ForegroundColor Green
    Write-Host "🌐 仓库地址: https://github.com/$username/$repoName" -ForegroundColor Cyan
    Write-Host "`n远程仓库配置:" -ForegroundColor Yellow
    git remote -v
} else {
    Write-Host "`n⚠️  推送可能需要身份验证" -ForegroundColor Yellow
    Write-Host "请确保:" -ForegroundColor Yellow
    Write-Host "1. GitHub 仓库已创建" -ForegroundColor White
    Write-Host "2. 已准备好 Personal Access Token" -ForegroundColor White
    Write-Host "3. 或者配置了 SSH 密钥" -ForegroundColor White
    Write-Host "`n如需使用 SSH，请执行:" -ForegroundColor Cyan
    Write-Host "git remote set-url origin git@github.com:$username/$repoName.git" -ForegroundColor White
    Write-Host "git push -u origin main" -ForegroundColor White
}

Write-Host ""
Write-Host "完成!" -ForegroundColor Green
Write-Host ""
