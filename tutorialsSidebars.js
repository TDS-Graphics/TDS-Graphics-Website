// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const tutorialsSidebars = {
  tutorialsSidebar: [
    'README',
    {
      type: 'category',
      label: '统一学习路线',
      collapsed: false,
      items: ['stage0/stage0', 'stage1/stage1', 'stage2/stage2'],
    },
  ],
};

export default tutorialsSidebars;
