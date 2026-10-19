# TDSG Website 贡献指南  

感谢你有兴趣为 TDSG 文档做出贡献！

---

## 目录
- [我能做什么](#我能做什么)
- [如何提交新文档](#提交文档)
- [开发环境搭建](#环境搭建)
- [认识目录结构](#目录结构)

## 我能做什么
|类型 | 说明 |
|------|------|
|文档改进| 通过 issues 指出错别字，拼写错误，文档内容错误 |
|翻译| 联系 TDSG 核心贡献者，确认授权后进行 |
|提交新文档|目前我们仅提供 Blog 文章的提交|


---

## 提交文档
如果你想提交文档至 TDSG Website 可以根据 [环境搭建](#环境搭建)
在你本机搭建好开发环境，遵守现有[目录结构](#目录结构) 创建 blog 并且编写内容，在 `authors.yml` 中添加你自己的作者信息，随后使用 [GitFlow](#工作流) 工作流提交 Pull Request 确保 website 能成功 build ,之后我们会对你的文章进行审核。

### 文档编写规范
- 中文之间不加空格
- 中文与英文、阿拉伯数字及 @ # $ % ^ & * . ( ) 等符号之间加空格
- 中文标点之间不加空格
- 如果括号内有中文，则使用中文括号
- 如果括号中的内容全部都是英文，则使用英文括号

## 环境搭建

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

## 工作流
使用标准的 [GitHub Flow](https://docs.github.com/zh/enterprise-cloud@latest/get-started/using-github/github-flow#1#1)

## 目录结构
请遵守现有目录
```
TDS-Graphics-Website/
├── blog/                  # 博客文章
├── docs/                  # 文档内容
├── src/                   # 自定义样式
├── static/                # 静态资源（图片等）
├── tutorials/             # 教程目录（每个含 docs/ 的子目录自动注册为一个独立教程）
│    └── unified-roadmap-course/  # 统一学习路线
├── docusaurus.config.js   # Docusaurus 配置文件
├── sidebars.js            # 文档侧边栏配置
├── package.json           # 项目依赖与脚本
└── README.md              # 本文件
```

新增教程时，只需在 `tutorials/` 下新建一个包含 `docs/` 的子目录，构建时会自动注册为独立教程（访问路径为 `/tutorials/<目录名>/`），无需修改 `docusaurus.config.js`。教程的 `docs/` 里需要有一个带 `slug: /` 的入口文档（如 `index.md` 或 `README.md`）注意教程列表只在启动时扫描，新增教程后需要重启开发服务器（`npm start`）。教程目录下可以放一个可选的 `tutorial.json`，用于在「教程总览」页展示标题、简介、排序和标签：

```json
{
  "title": "教程标题",
  "description": "一句话简介",
  "position": 1,
  "tags": ["标签一", "标签二"]
}
```

## 许可证

仓库中的源代码采用 [MIT License](./LICENSE) 发布。除另有说明外，文档、教程、博客文章和原创内容采用 [CC BY-NC-ND 4.0 International](./LICENSE-CONTENT.md) 许可。

提交内容前，请确认你拥有相应版权，并同意该内容按 CC BY-NC-ND 4.0 发布。第三方素材必须保留来源和原始许可证，不能因为提交到本仓库就自动改用项目许可证。

由于 CC BY-NC-ND 4.0 包含禁止改编条款，公开发布文档的翻译、改写或其他衍生版本前，必须先取得相应版权所有者的明确授权。
