# 林晓的个人博客

一个基于 React + TypeScript + Vite 构建的现代化个人博客系统。

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-blue)](https://chris9751196.github.io/my-awesome-blog-v2/)
[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.x-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.4.x-blue)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.x-blue)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

## 🌐 在线 Demo

[https://chris9751196.github.io/my-awesome-blog-v2/](https://chris9751196.github.io/my-awesome-blog-v2/)

## ✨ 功能特性

### 📖 阅读体验
- **阅读时间估算** - 根据文章字数自动计算阅读时间
- **阅读进度条** - 顶部进度条显示当前阅读位置
- **文章目录** - 浮动侧边栏目录，自动跟随滚动高亮
- **回到顶部** - 滚动超过300px自动显示返回按钮

### 🎨 视觉体验
- **暗色/亮色模式** - 一键切换主题，自动跟随系统偏好
- **动态背景** - 渐变网格动态背景效果
- **图片懒加载** - IntersectionObserver 实现图片懒加载
- **响应式设计** - 完美适配桌面端和移动端

### 🔍 内容发现
- **全文搜索** - 支持标题、摘要、正文、标签的全文搜索
- **关键词高亮** - 搜索结果关键词自动高亮显示
- **搜索历史** - 保存最近5条搜索记录
- **标签云** - 按使用频率动态调整标签大小
- **分类筛选** - 按技术、生活、旅行等分类筛选文章
- **文章归档** - 按年月分组的时间线展示
- **热门文章** - TOP 5 热门文章排行榜

### 👤 个人品牌
- **英雄区域** - 个性化首页展示
- **打字机效果** - 动态文字展示
- **每日一言** - 随机名言展示
- **关于页面** - 个人介绍和 GitHub 活跃度展示
- **联系表单** - 支持邮件发送的联系表单

### ⌨️ 交互工具
- **键盘快捷键** - `/` 聚焦搜索、`t` 切换主题、`g` 回到顶部
- **平滑滚动** - 页面内跳转平滑动画
- **图片灯箱** - 点击图片全屏查看
- **社交分享** - 支持 Twitter、微博、LinkedIn 分享

### ❤️ 社交互动
- **文章点赞** - 点赞功能，数据持久化到 localStorage
- **文章收藏** - 收藏文章，独立收藏页面展示
- **文章浏览量** - 记录每篇文章的浏览次数
- **上/下一篇导航** - 文章间快速跳转
- **Giscus 评论** - 基于 GitHub Discussions 的真实评论系统

## 🚀 快速开始

### 环境要求
- Node.js >= 18.0.0
- npm >= 9.0.0 或 pnpm >= 8.0.0

### 安装依赖
```bash
# 使用 npm
npm install

# 使用 pnpm
pnpm install
```

### 开发模式
```bash
npm run dev
```

访问 http://localhost:5173/my-awesome-blog-v2/ 查看博客

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

### 代码检查
```bash
npm run lint
```

## 📁 项目结构

```
src/
├── components/           # UI 组件
│   ├── ArticleCard.tsx       # 文章卡片
│   ├── ArticleList.tsx       # 文章列表
│   ├── ArticleSeries.tsx     # 文章系列导航
│   ├── BackToTop.tsx         # 回到顶部按钮
│   ├── CategoryTags.tsx      # 分类标签
│   ├── CodeBlock.tsx         # 代码块（语法高亮）
│   ├── CommentSection.tsx    # 评论区（Giscus）
│   ├── DynamicBackground.tsx # 动态背景
│   ├── Footer.tsx            # 页脚
│   ├── GlobalShortcuts.tsx   # 全局键盘快捷键
│   ├── Hero.tsx              # 首页英雄区域
│   ├── HotArticles.tsx       # 热门文章排行榜
│   ├── KeyboardShortcuts.tsx # 快捷键说明弹窗
│   ├── LazyImage.tsx         # 图片懒加载
│   ├── Lightbox.tsx          # 图片灯箱
│   ├── Navbar.tsx            # 导航栏
│   ├── QuoteCard.tsx         # 每日一言
│   ├── ReadingProgress.tsx   # 阅读进度条
│   ├── ShareButtons.tsx      # 社交分享按钮
│   ├── Skeleton.tsx          # 骨架屏
│   ├── TagCloud.tsx          # 标签云
│   ├── ThemeToggle.tsx       # 主题切换
│   └── TypewriterText.tsx    # 打字机效果
├── pages/               # 页面组件
│   ├── Home.tsx              # 首页
│   ├── Articles.tsx          # 文章列表页
│   ├── ArticleDetail.tsx     # 文章详情页
│   ├── About.tsx             # 关于页
│   ├── Contact.tsx           # 联系页
│   ├── Favorites.tsx         # 收藏页
│   ├── Archive.tsx           # 归档页
│   └── NotFound.tsx          # 404页面
├── hooks/               # 自定义 Hooks
│   ├── useTheme.ts           # 主题管理
│   └── useKeyboard.ts        # 键盘快捷键
├── data/                # 数据
│   ├── mockData.ts           # 文章、分类、作者数据
│   └── quotes.ts             # 名言数据
├── utils/               # 工具函数
│   └── storage.ts            # localStorage 操作封装
├── App.tsx              # 根组件 & 路由配置
├── main.tsx             # React 应用入口
└── index.css            # 全局样式
```

## 🛠 技术栈

| 类别 | 技术 | 版本 |
|------|------|------|
| 前端框架 | React | 18.3.1 |
| 语言 | TypeScript | 5.8.x |
| 构建工具 | Vite | 6.4.x |
| CSS 框架 | Tailwind CSS | 3.4.x |
| 路由 | React Router | 7.3.x |
| 图标 | Lucide React | 0.511.x |
| 状态管理 | Zustand | 5.0.x |
| 语法高亮 | Highlight.js | 11.11.x |
| 评论系统 | Giscus | 3.1.x |
| 部署 | GitHub Pages | gh-pages |

## 📦 部署

### 部署到 GitHub Pages

1. 确保项目已推送到 GitHub 仓库

2. 运行部署命令：
```bash
npm run deploy
```

3. 在 GitHub 仓库设置中开启 Pages：
   - 进入 Settings > Pages
   - 选择 gh-pages 分支
   - 选择 / (root) 目录
   - 点击 Save

4. 等待几分钟后访问：
```
https://<username>.github.io/<repository-name>/
```

## 📝 自定义指南

### 新增文章
编辑 `src/data/mockData.ts` 文件，在 `articles` 数组中添加新文章：

```typescript
{
  id: '10',
  title: '文章标题',
  excerpt: '文章摘要',
  content: '<p>文章内容（支持 HTML）</p>',
  category: '分类',
  tags: ['标签1', '标签2'],
  date: '2024-01-01',
  readTime: 5,
  image: 'https://example.com/image.jpg',
}
```

### 修改主题色
编辑 `tailwind.config.js` 文件中的 `theme.extend.colors`：

```javascript
colors: {
  primary: '#0f172a',       // 主文字颜色
  secondary: '#64748b',     // 次要文字颜色
  cta: '#3b82f6',           // 主题按钮颜色
  accent: '#8b5cf6',        // 强调色
}
```

### 修改个人信息
编辑 `src/data/mockData.ts` 文件中的 `authorInfo`：

```typescript
export const authorInfo = {
  name: '林晓',
  title: '前端开发者 / 生活记录者',
  bio: '热爱技术，享受生活...',
  email: 'your-email@example.com',
  socialLinks: {
    github: 'https://github.com/your-username',
    twitter: 'https://twitter.com/your-username',
    linkedin: 'https://linkedin.com/in/your-username',
  },
};
```

### 修改联系表单邮箱
编辑 `src/pages/Contact.tsx` 文件中的 FormSubmit URL：

```typescript
fetch('https://formsubmit.co/ajax/your-email@example.com', {
```

## 📄 License

MIT
