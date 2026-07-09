# TDS Graphics 文档站

这是 **TDS Graphics** 图形兴趣组的官方文档站，基于 [Docusaurus](https://docusaurus.io/) 构建，使用 **React** 框架与 **MDX** 编写内容。

## 项目简介

TDS Graphics 是一个专注于计算机图形学的学习小组。本项目作为小组的学习文档与博客网站，包含了：

- **统一学习路线图（Unified Roadmap）** — 组内成员的硬性学习方案，覆盖从图形学入门到深入实践的三个阶段
- **阅读资料（Reading Resources）** — 精选教材、参考书及《实时渲染（第四版）》文献引用大全
- **团队介绍（Introduction）** — 小组概况与成员信息
- **博客（Blog）** — 组内分享与学习笔记

## 技术栈

| 类别     | 技术                                                                 |
| -------- | -------------------------------------------------------------------- |
| 框架     | [Docusaurus](https://docusaurus.io/) v3                              |
| 前端     | React 19 + MDX                                                       |
| 构建工具 | Webpack / Rspack（Docusaurus Faster 模式）                           |
| 代码高亮 | Prism React Renderer                                                 |
| 样式     | 自定义 CSS（src/css/custom.css）                                     |
| 国际化   | 简体中文（zh-Hans）                                                  |

## 快速开始

### 环境要求

- **Node.js** >= 20.0
- **npm**（推荐）或 **yarn**

### 安装依赖

```bash
npm install
# 或
yarn
```

### 本地开发

```bash
npm start
# 或
yarn start
```

启动本地开发服务器，默认打开 http://localhost:3000。大部分改动会自动热更新。

### 构建

```bash
npm run build
# 或
yarn build
```

生成静态文件到 build/ 目录，可部署到任何静态托管服务。

### 部署到 GitHub Pages

```bash
USE_SSH=true npm run deploy
# 或
GIT_USER=<你的 GitHub 用户名> npm run deploy
```

## 项目结构

```
TDS-Graphics/
├── blog/                  # 博客文章
├── docs/                  # 文档内容
│   ├── intro.md           # 欢迎页
│   ├── introduction/      # 团队介绍
│   ├── reading-resources/ # 阅读资料与参考书
│   └── unified-roadmap/   # 统一学习路线图
├── src/
│   └── css/
│       └── custom.css     # 自定义样式
├── static/                # 静态资源（图片等）
├── docusaurus.config.js   # Docusaurus 配置文件
├── sidebars.js            # 文档侧边栏配置
├── package.json           # 项目依赖与脚本
└── README.md              # 本文件
```

## 贡献指南

欢迎组内成员通过 Pull Request 提交内容改进或新增文档/博客。

1. Fork 本仓库
2. 创建特性分支：git checkout -b feat/my-content
3. 提交改动：git commit -m feat: add ...
4. 推送到远程：git push origin feat/my-content
5. 提交 Pull Request

### 文档规范

- 文档使用 Markdown 或 MDX 编写
- 博客文章放到 blog/ 目录下，以 YYYY-MM-DD-title.md 格式命名
- 图片等静态资源统一存放在 static/img/ 下

## 社区

- **QQ 群**：[点击加入](https://qm.qq.com/q/BGivOKlOIo)
- **Bilibili**：[TDS 空间](https://space.bilibili.com/370118971)
- **GitHub 组织**：[TDS-Graphics](https://github.com/TDS-Graphics)

## 许可

本项目内容采用 **全部共享** 方式公开（详见网站页脚）。
