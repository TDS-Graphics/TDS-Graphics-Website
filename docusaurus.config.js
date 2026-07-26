// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

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
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorials',
        path: 'tutorials/unified-roadmap-course/docs',
        routeBasePath: 'tutorials',
        sidebarPath: './tutorialsSidebars.js',
        remarkPlugins: mathRemarkPlugins,
        rehypePlugins: mathRehypePlugins,
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        editUrl:
          'https://github.com/TDS-Graphics/TDS-Graphics-Website/edit/main/',
      },
    ],
  ],

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
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 全部共享`,
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
