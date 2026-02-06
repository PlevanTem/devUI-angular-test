# DevUI Angular Test - 远程仓库设置脚本
# 此脚本将帮助您创建 GitHub 仓库并推送代码

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "DevUI Angular Test - 远程仓库设置" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 检查是否已配置远程仓库
$remoteExists = git remote -v
if ($remoteExists) {
    Write-Host "⚠️  检测到已存在的远程仓库配置:" -ForegroundColor Yellow
    git remote -v
    Write-Host ""
    $continue = Read-Host "是否要添加新的远程仓库? (y/n)"
    if ($continue -ne "y" -and $continue -ne "Y") {
        Write-Host "操作已取消" -ForegroundColor Yellow
        exit
    }
}

Write-Host "请选择创建远程仓库的方式:" -ForegroundColor Green
Write-Host "1. 使用 GitHub CLI (gh) - 需要先安装 GitHub CLI" -ForegroundColor White
Write-Host "2. 手动创建 GitHub 仓库 (推荐) - 我会提供详细步骤" -ForegroundColor White
Write-Host "3. 使用 GitHub API (需要 Personal Access Token)" -ForegroundColor White
Write-Host ""
$choice = Read-Host "请选择 (1/2/3)"

switch ($choice) {
    "1" {
        # 使用 GitHub CLI
        Write-Host "`n正在使用 GitHub CLI 创建仓库..." -ForegroundColor Green
        $repoName = Read-Host "请输入仓库名称 (默认: devUI-angular-test)"
        if ([string]::IsNullOrWhiteSpace($repoName)) {
            $repoName = "devUI-angular-test"
        }
        
        $isPrivate = Read-Host "是否创建私有仓库? (y/n, 默认: n)"
        $privateFlag = if ($isPrivate -eq "y" -or $isPrivate -eq "Y") { "--private" } else { "--public" }
        
        Write-Host "`n正在创建 GitHub 仓库: $repoName" -ForegroundColor Yellow
        gh repo create $repoName $privateFlag --source=. --remote=origin --push
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "`n✅ 仓库创建成功并已推送代码!" -ForegroundColor Green
            git remote -v
        } else {
            Write-Host "`n❌ 创建失败，请检查 GitHub CLI 是否已登录: gh auth login" -ForegroundColor Red
        }
    }
    
    "2" {
        # 手动创建
        Write-Host "`n========================================" -ForegroundColor Cyan
        Write-Host "手动创建 GitHub 仓库步骤:" -ForegroundColor Cyan
        Write-Host "========================================" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "1. 打开浏览器访问: https://github.com/new" -ForegroundColor Yellow
        Write-Host "2. 填写仓库信息:" -ForegroundColor Yellow
        Write-Host "   - Repository name: devUI-angular-test" -ForegroundColor White
        Write-Host "   - Description: DevUI Angular 组件库测试项目" -ForegroundColor White
        Write-Host "   - 选择 Public 或 Private" -ForegroundColor White
        Write-Host "   - ⚠️  不要勾选 'Initialize this repository with a README'" -ForegroundColor Red
        Write-Host "3. 点击 'Create repository'" -ForegroundColor Yellow
        Write-Host ""
        
        $continue = Read-Host "创建完成后，请输入您的 GitHub 用户名"
        if ([string]::IsNullOrWhiteSpace($continue)) {
            Write-Host "❌ 用户名不能为空" -ForegroundColor Red
            exit
        }
        
        $username = $continue
        $repoName = Read-Host "请输入仓库名称 (默认: devUI-angular-test)"
        if ([string]::IsNullOrWhiteSpace($repoName)) {
            $repoName = "devUI-angular-test"
        }
        
        Write-Host "`n正在配置远程仓库..." -ForegroundColor Green
        git remote add origin "https://github.com/$username/$repoName.git"
        
        Write-Host "`n正在推送代码到远程仓库..." -ForegroundColor Green
        git push -u origin main
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "`n✅ 代码已成功推送到远程仓库!" -ForegroundColor Green
            Write-Host "仓库地址: https://github.com/$username/$repoName" -ForegroundColor Cyan
            git remote -v
        } else {
            Write-Host "`n❌ 推送失败，请检查:" -ForegroundColor Red
            Write-Host "1. 仓库是否已创建" -ForegroundColor Yellow
            Write-Host "2. 是否有推送权限" -ForegroundColor Yellow
            Write-Host "3. 是否需要身份验证" -ForegroundColor Yellow
            Write-Host ""
            Write-Host "如果使用 HTTPS，可能需要输入 GitHub 用户名和 Personal Access Token" -ForegroundColor Yellow
            Write-Host "如果使用 SSH，请确保已配置 SSH 密钥" -ForegroundColor Yellow
        }
    }
    
    "3" {
        # 使用 GitHub API
        Write-Host "`n使用 GitHub API 创建仓库" -ForegroundColor Green
        $token = Read-Host "请输入您的 GitHub Personal Access Token (需要 repo 权限)"
        if ([string]::IsNullOrWhiteSpace($token)) {
            Write-Host "❌ Token 不能为空" -ForegroundColor Red
            exit
        }
        
        $repoName = Read-Host "请输入仓库名称 (默认: devUI-angular-test)"
        if ([string]::IsNullOrWhiteSpace($repoName)) {
            $repoName = "devUI-angular-test"
        }
        
        $isPrivate = Read-Host "是否创建私有仓库? (y/n, 默认: n)"
        $private = if ($isPrivate -eq "y" -or $isPrivate -eq "Y") { $true } else { $false }
        
        Write-Host "`n正在创建 GitHub 仓库..." -ForegroundColor Yellow
        
        $body = @{
            name = $repoName
            description = "DevUI Angular 组件库测试项目"
            private = $private
        } | ConvertTo-Json
        
        $headers = @{
            Authorization = "token $token"
            Accept = "application/vnd.github.v3+json"
        }
        
        try {
            $response = Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Method Post -Body $body -Headers $headers
            
            Write-Host "✅ 仓库创建成功!" -ForegroundColor Green
            Write-Host "仓库地址: $($response.html_url)" -ForegroundColor Cyan
            
            # 配置远程仓库
            git remote add origin $response.clone_url
            Write-Host "`n正在推送代码..." -ForegroundColor Green
            git push -u origin main
            
            if ($LASTEXITCODE -eq 0) {
                Write-Host "`n✅ 代码已成功推送!" -ForegroundColor Green
                git remote -v
            } else {
                Write-Host "`n⚠️  仓库已创建，但推送失败。请手动执行: git push -u origin main" -ForegroundColor Yellow
            }
        } catch {
            Write-Host "`n❌ 创建失败: $($_.Exception.Message)" -ForegroundColor Red
            Write-Host "请检查 Token 是否有 repo 权限" -ForegroundColor Yellow
        }
    }
    
    default {
        Write-Host "❌ 无效的选择" -ForegroundColor Red
    }
}

Write-Host "`n完成!" -ForegroundColor Green
