# 成员介绍维护

成员列表位于 `/members/`，直接使用 `blog/authors.yml` 中的全部作者，并按该文件的顺序展示。每位成员都有 `/members/<作者 ID>/` 个人页；是否发表过博客、是否启用博客作者页，不影响成员展示。

## 编写自己的介绍

在本目录创建 `<作者 ID>.md` 或 `<作者 ID>.mdx`，二选一。例如，作者配置中的 ID 是 `Artichoke`，就创建 `members/Artichoke.mdx`，个人页地址为 `/members/Artichoke/`。

**文件名大小写必须与作者 ID 完全一致。** 不需要设置 front matter、标题、路由或导入页面布局；页面顶部会统一展示作者配置中的姓名、头像、头衔和外部链接。正文建议从二级标题开始：

```md
## 关于我

我对实时渲染和物理模拟感兴趣。

## 项目

- [我的渲染器](https://github.com/your-account/your-renderer)：项目简介。

## 联系方式

- Email：your-name@example.com
```

`.md` 支持 Markdown，`.mdx` 还支持 JSX 和导入组件。两种格式都支持本站现有的代码高亮和数学公式。

也可以链接到其他成员的个人页，例如 `[Artichoke](/members/Artichoke/)`。

## 使用图片

个人介绍中使用的图片建议放在 `members/assets/<作者 ID>/` 下，每位成员单独维护自己的图片目录。例如：

```text
members/
├── Artichoke.md
└── assets/
    └── Artichoke/
        ├── render.png
        └── project.jpg
```

在 `members/Artichoke.md` 或 `members/Artichoke.mdx` 中使用相对路径引用：

```md
![渲染结果](./assets/Artichoke/render.png)
```

目录中的作者 ID 大小写应与 `blog/authors.yml` 一致。图片文件名建议使用英文、数字和短横线，例如 `path-tracing-result.png`。

相对路径可以适配本站的 `/TDS-Graphics-Website/` 部署路径，无需手动添加网站前缀。

全站共用的图片，例如 logo、首页背景，继续放在 `static/img/` 下。

## 默认页面

没有介绍文件、文件只有空白，或者只有 front matter 而没有正文时，个人页会展示作者基本信息，以及“这位成员还没有填写个人介绍。”。头像未配置或加载失败时，使用姓名文字作为替代。

本说明文件不会出现在成员列表中。只有与作者 ID 对应的介绍文件会生成个人页。同一个 ID 同时存在 `.md` 和 `.mdx` 时，构建会报错并提示只保留一个文件。

## 修改基本信息或新增成员

在 `blog/authors.yml` 中维护姓名 `name`、头像 `image_url`、头衔 `title`、个人主页 `url` 和社交链接 `socials`，介绍文件中无需重复填写这些信息。新增作者后，即使不添加介绍文件，也会自动获得成员列表入口和默认个人页。

`socials` 中的 GitHub 等常见平台可以使用用户名；自定义平台请填写完整的 `https://` 链接，Email 可以填写邮箱地址。同一平台同时配置了主链接 `url` 和 `socials` 时，个人页优先展示 `url`。

运行 `npm start` 预览。编辑介绍正文时支持热更新；新增或删除介绍文件后，请刷新浏览器查看页面。若开发服务器遇到编译缓存错误，停止服务后运行 `npm run clear`，再重新执行 `npm start`。

运行 `npm test` 检查成员数据与路由逻辑，运行 `npm run build` 验证完整站点。
