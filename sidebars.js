// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
  - create an ordered group of docs
  - render a sidebar for each doc of that group
  - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // Explicit sidebar definition including submodule content without modifying submodules
  tutorialSidebar: [
    // Root-level docs
    'intro',

    // Introduction section (from submodule)
    {
      type: 'category',
      label: '介绍',
      link: {
        type: 'doc',
        id: 'introduction/README',
      },
      items: [
        'introduction/profile/README',
      ],
    },

    // Unified Roadmap section (from submodule)
    {
      type: 'category',
      label: '学习路线',
      link: {
        type: 'generated-index',
        title: '学习路线',
        description: '图形组组内的统一学习方案',
        slug: '/category/unified-roadmap',
      },
      items: [
        'unified-roadmap/README',
        'unified-roadmap/stage0',
        'unified-roadmap/stage1',
        'unified-roadmap/stage2',
      ],
    },

    // Reading Resources section (from submodule)
    {
      type: 'category',
      label: '阅读资料',
      link: {
        type: 'doc',
        id: 'reading-resources/README',
      },
      items: [
        'reading-resources/reference_book_links',
      ],
    },
  ],
};

export default sidebars;