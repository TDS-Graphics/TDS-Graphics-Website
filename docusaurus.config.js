// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import fs from 'fs';
import path from 'path';
import {themes as prismThemes} from 'prism-react-renderer';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

const mathRemarkPlugins = [remarkMath];
const mathRehypePlugins = [
  [
    rehypeKatex,
    {
      throwOnError: false,
      strict: 'warn',
    },
  ],
];

// 自动扫描 tutorials/ 目录：每个包含 docs/ 的子目录都会注册为一个独立教程。
// 教程目录下可选放 tutorial.json 提供 title/description/position/tags。
const tutorialsRoot = path.join(__dirname, 'tutorials');

const tutorials = (fs.existsSync(tutorialsRoot)
  ? fs.readdirSync(tutorialsRoot, {withFileTypes: true})
  : []
)
  .filter(
    (entry) =>
      entry.isDirectory() &&
      !entry.name.startsWith('.') &&
      !entry.name.startsWith('_') &&
      fs.existsSync(path.join(tutorialsRoot, entry.name, 'docs')),
  )
  .map((entry) => {
    const metadataPath = path.join(tutorialsRoot, entry.name, 'tutorial.json');
    const metadata = fs.existsSync(metadataPath)
      ? JSON.parse(fs.readFileSync(metadataPath, 'utf8'))
      : {};
    return {
      name: entry.name,
      title: metadata.title ?? entry.name,
      description: metadata.description ?? '',
      position: metadata.position ?? Number.MAX_SAFE_INTEGER,
      tags: metadata.tags ?? [],
    };
  })
  .sort((a, b) => a.position - b.position || a.name.localeCompare(b.name));

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TDS Graphics',
  tagline: '兴趣的力量',
  favicon: 'img/logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://tds-graphics.github.io',
  baseUrl: '/TDS-Graphics-Website/',

  organizationName: 'TDS-Graphics',
  projectName: 'TDS-Graphics-Website',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: mathRemarkPlugins,
          rehypePlugins: mathRehypePlugins,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/TDS-Graphics/TDS-Graphics-Website/edit/main/',
        },
        blog: {
          showReadingTime: true,
          remarkPlugins: mathRemarkPlugins,
          rehypePlugins: mathRehypePlugins,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/TDS-Graphics/TDS-Graphics-Website/edit/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    ...tutorials.map((tutorial) => [
      '@docusaurus/plugin-content-docs',
      {
        id: tutorial.name,
        path: `tutorials/${tutorial.name}/docs`,
        routeBasePath: `tutorials/${tutorial.name}`,
        sidebarPath: './tutorialsSidebars.js',
        remarkPlugins: mathRemarkPlugins,
        rehypePlugins: mathRehypePlugins,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editUrl:
          'https://github.com/TDS-Graphics/TDS-Graphics-Website/edit/main/',
      },
    ]),
  ],

  customFields: {
    tutorials,
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'TDS Graphics',
        logo: {
          alt: 'TDS Graphics Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          {
            to: '/tutorials/',
            position: 'left',
            label: '教程',
          },
          {to: '/blog', label: '博客', position: 'right'},
          {
            href: 'https://github.com/TDS-Graphics',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '整体文档',
                to: '/docs/intro',
              },
              {
                label: '学习教程',
                to: '/tutorials/',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'QQ',
                href: 'https://qm.qq.com/q/BGivOKlOIo',
              },
              {
                label: 'BiliBili',
                href: 'https://space.bilibili.com/370118971',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/TDS-Graphics',
              },
              {
                label: '许可证说明',
                to: '/license',
              },
              {
                label: '内容许可（CC BY-NC-ND 4.0）',
                href: 'https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh-hans/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TDS Graphics · 源代码 MIT · 内容 CC BY-NC-ND 4.0`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
          'c',
          'cpp',
          'glsl',
          'hlsl',
          'wgsl',
          'cmake',
          'bash',
          'python',
        ],
      },
    }),
};

export default config;
