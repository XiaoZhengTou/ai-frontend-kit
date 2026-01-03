# AI Frontend Studio

一个基于 React + TypeScript + Vite 的前端 AI 学习与开发平台，集成 3 个月学习成果。

![AI Frontend Studio](https://img.shields.io/badge/AI-Frontend%20Studio-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.0+-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-4.5+-purple?style=flat-square&logo=vite)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)

## 🚀 核心特性

- **🎯 流式渲染**: 高性能实时内容渲染
- **🤖 多模态 AI**: 集成文本、图像、语音处理能力
- **🛠️ SDK 模块化**: 高度可复用的 AI 前端工具包
- **⚡ 开发工作流**: 完整的 CI/CD 自动化流程
- **🌐 云端部署**: 一键部署到 Vercel 平台

## 📦 项目架构

```
ai-frontend-studio/
├── apps/
│   ├── main-frontend/          # 核心应用（Vercel 主入口）
│   └── dev-tools/              # 调试工具子应用
├── packages/
│   ├── ai-frontend-kit/        # SDK 核心包
│   └── shared-components/      # 通用组件库
├── .github/
│   └── workflows/
│       └── vercel.yml          # 自动部署配置
└── README.md                   # 项目说明 + 部署指南
```

## 🛠️ 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite 4.5 + pnpm workspace
- **状态管理**: React Context + Custom Hooks
- **UI 组件**: 自定义组件库 + Tailwind CSS
- **AI 集成**: 流式处理 + 多模态交互
- **部署平台**: Vercel 自动部署

## 🚀 快速开始

### 环境要求

- **Node.js**: 18.0 或更高版本
- **pnpm**: 8.0 或更高版本
- **Git**: 最新版本

### 安装依赖

```bash
# 克隆项目
git clone https://github.com/your-username/ai-frontend-studio.git
cd ai-frontend-studio

# 安装 pnpm（如果未安装）
npm install -g pnpm

# 安装项目依赖
pnpm install
```

### 开发模式

```bash
# 启动主应用 (http://localhost:5173)
pnpm dev:main

# 启动调试工具 (http://localhost:5174)
pnpm dev:tools

# 同时启动所有应用
pnpm dev
```

### 构建生产版本

```bash
# 构建所有应用
pnpm build

# 构建特定应用
pnpm build:main
pnpm build:tools
```

## 🌐 Vercel 部署

### 🚀 自动化部署（推荐）

1. **Fork 仓库**: 点击右上角 Fork 按钮
2. **连接 Vercel**: 访问 [Vercel](https://vercel.com) 并登录
3. **导入项目**: 点击 "New Project" 并选择您 Fork 的仓库
4. **自动配置**: Vercel 自动检测到 pnpm workspace 并配置构建
5. **完成部署**: 等待构建完成，获得您的专属域名

### 📋 手动部署步骤

```bash
# 1. 推送代码到 GitHub
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/ai-frontend-studio.git
git push -u origin main

# 2. Vercel 将自动检测到推送并开始部署
# 3. 访问 Vercel 控制台查看部署状态
```

### ✅ 部署验证

- **主应用**: 访问您的 Vercel 域名（如：`https://ai-frontend-studio-xxx.vercel.app`）
- **调试工具**: 访问 `{域名}/tools`（如：`https://ai-frontend-studio-xxx.vercel.app/tools`）

### 🔧 Vercel 配置

项目已预配置以下 Vercel 设置：

```json
// apps/main-frontend/vercel.json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist",
  "installCommand": "pnpm install"
}
```

```json
// apps/dev-tools/vercel.json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist",
  "routes": [
    { "src": "/tools(.*)", "dest": "/dev-tools$1" }
  ]
}
```

## 📈 3 个月学习成果展示

### ✅ 已实现功能

- **流式渲染技术**: 实时更新界面，无需刷新页面
- **多模态 AI 交互**: 支持文本、图像、语音的智能处理
- **SDK 模块化设计**: 可复用的 AI 前端开发工具包
- **开发工作流优化**: 完整的自动化构建和部署流程

### 🎯 核心技术亮点

- **高性能渲染**: 基于 Vite 的快速构建和热更新
- **类型安全**: 完整的 TypeScript 类型系统
- **组件化架构**: 高度可复用的组件设计
- **云原生部署**: Vercel 平台的自动化部署

## 🤝 贡献指南

我们欢迎所有形式的贡献！

1. **Fork** 此仓库
2. 创建您的功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 **Pull Request**

## 📝 更新日志

### v1.0.0 (2026-01-02)
- ✨ 初始版本发布
- 🎯 完整的 monorepo 项目结构
- 🚀 Vercel 自动部署配置
- 🛠️ 核心 AI 前端功能模块

## 📄 许可证

此项目基于 [MIT 许可证](LICENSE) 开源。

## 🙏 致谢

感谢所有为前端 AI 技术发展做出贡献的开发者和研究者！

---

**⭐ 如果这个项目对您有帮助，请给我们一个 Star！**

[![Star on GitHub](https://img.shields.io/github/stars/your-username/ai-frontend-studio?style=social)](https://github.com/your-username/ai-frontend-studio)