# TDSG Website 贡献指南  

感谢你有兴趣为 TDSG 文档做出贡献！

---

## 目录
- [我能做什么](#我能做什么)
- [开发环境搭建](#开发环境搭建)
- [认识目录结构](#认识目录结构)

## 我能做什么
|类型 | 说明 |
|------|------|
|文档改进| 通过 issues 指出错别字，拼写错误，文档内容错误 |
|翻译| 联系 TDSG 核心贡献者，确认授权后进行 |
|提交新文档|这只面向 TDSG 核心贡献者，所以我们关闭了外部 PR 能力|

## 许可证

仓库中的源代码采用 [MIT License](./LICENSE) 发布。除另有说明外，文档、教程、博客文章和原创内容采用 [CC BY-NC-ND 4.0 International](./LICENSE-CONTENT.md) 许可。

提交内容前，请确认你拥有相应版权，并同意该内容按 CC BY-NC-ND 4.0 发布。第三方素材必须保留来源和原始许可证，不能因为提交到本仓库就自动改用项目许可证。

由于 CC BY-NC-ND 4.0 包含禁止改编条款，公开发布文档的翻译、改写或其他衍生版本前，必须先取得相应版权所有者的明确授权。

---

## 开发环境搭建

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


使用标准的 [GitHub Flow](https://docs.github.com/zh/enterprise-cloud@latest/get-started/using-github/github-flow#1#1)

## 认识目录结构
请遵守现有目录
```
TDS-Graphics-Website/
├── blog/                  # 博客文章
├── docs/                  # 文档内容
├── src/                   # 自定义样式
├── static/                # 静态资源（图片等）
├── tutorials/             # 具体的教程目录
│    └── unified-roadmap-course/  # 统一学习路线
├── docusaurus.config.js   # Docusaurus 配置文件
├── sidebars.js            # 文档侧边栏配置
├── package.json           # 项目依赖与脚本
└── README.md              # 本文件
```
