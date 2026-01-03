# 🚀 Vercel 自动部署指南

## 📋 部署前准备

### 1. 确保项目已推送到GitHub
- ✅ 项目已提交到: https://github.com/XiaoZhengTou/ai-frontend-kit
- ✅ Vercel配置文件已优化

### 2. 注册Vercel账号
访问 [Vercel](https://vercel.com) 并使用GitHub账号登录

## 🎯 自动化部署步骤（推荐）

### 方法一：GitHub集成（最简单）

1. **访问Vercel Dashboard**
   - 登录 [Vercel](https://vercel.com/dashboard)
   - 点击 "New Project"

2. **导入GitHub仓库**
   - 点击 "Import Git Repository"
   - 选择 `ai-frontend-kit` 仓库
   - 点击 "Import"

3. **配置项目设置**
   ```
   Project Name: ai-frontend-kit
   Framework Preset: Vite
   Root Directory: apps/main-frontend (对于主应用)
   Build Command: pnpm build
   Output Directory: dist
   Install Command: pnpm install
   ```

4. **部署**
   - 点击 "Deploy" 按钮
   - 等待构建完成（通常1-2分钟）
   - 获得部署URL: `https://ai-frontend-kit-xxx.vercel.app`

### 方法二：手动部署

1. **安装Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **登录Vercel**
   ```bash
   vercel login
   ```

3. **部署项目**
   ```bash
   # 在项目根目录执行
   vercel --prod
   ```

## 🔧 环境变量配置

### 在Vercel控制台设置

1. 进入项目设置页面
2. 导航到 "Environment Variables"
3. 添加以下变量：

```
NODE_VERSION=18
VITE_APP_TITLE=AI Frontend Studio
VITE_APP_DESCRIPTION=基于React+TypeScript+Vite的前端AI平台
```

### 本地开发环境变量

创建 `.env.local` 文件：

```env
NODE_VERSION=18
VITE_APP_TITLE=AI Frontend Studio
VITE_APP_DESCRIPTION=基于React+TypeScript+Vite的前端AI平台
VITE_API_BASE_URL=https://api.example.com
```

## 🌐 访问应用

部署成功后，您可以访问：

- **主应用**: `https://ai-frontend-kit-xxx.vercel.app`
- **AI功能页**: `https://ai-frontend-kit-xxx.vercel.app/ai-features`
- **开发工具页**: `https://ai-frontend-kit-xxx.vercel.app/dev-tools`

## 🔄 自动部署触发

每次推送到 `main` 分支时，Vercel会自动：
1. 拉取最新代码
2. 安装依赖
3. 构建项目
4. 部署到生产环境

## 📊 监控和日志

- **部署日志**: 在Vercel控制台查看
- **性能监控**: Vercel Analytics
- **错误追踪**: Vercel Functions日志

## 🛠️ 故障排除

### 常见问题

1. **构建失败**
   - 检查Node.js版本 (推荐18+)
   - 确认所有依赖都已安装
   - 查看构建日志

2. **路由404错误**
   - 检查 `vercel.json` 配置
   - 确保SPA路由正确配置

3. **环境变量未生效**
   - 重新部署项目
   - 检查变量名拼写

### 调试命令

```bash
# 本地测试构建
pnpm build

# 本地预览构建结果
pnpm preview

# 检查Vercel配置
vercel --prod --debug
```

## 🚀 下一步

1. **配置自定义域名**（可选）
2. **设置环境变量**用于生产环境
3. **配置GitHub分支保护**
4. **启用Vercel Analytics**
5. **集成CI/CD监控**

---

💡 **提示**: 每次代码推送到 `main` 分支都会自动触发部署，无需手动操作！