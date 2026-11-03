const path = require('node:path');
const {createMDXLoaderRule} = require('@docusaurus/mdx-loader');
const {addTrailingPathSeparator, normalizeUrl} = require('@docusaurus/utils');
const {loadMembers} = require('./content');

module.exports = async function membersPlugin(context, options) {
  const {siteDir, siteConfig} = context;
  const membersDir = path.join(siteDir, 'members');
  const mdxRule = await createMDXLoaderRule({
    include: [addTrailingPathSeparator(membersDir)],
    options: {
      siteDir,
      staticDirs: siteConfig.staticDirectories.map((dir) => path.resolve(siteDir, dir)),
      markdownConfig: siteConfig.markdown,
      remarkPlugins: options.remarkPlugins,
      rehypePlugins: options.rehypePlugins,
    },
  });

  return {
    name: 'tdsg-members',
    getPathsToWatch() {
      return [
        path.join(siteDir, 'blog/authors.yml'),
        `${membersDir.replaceAll('\\', '/')}/*.{md,mdx}`,
      ];
    },
    loadContent() {
      return loadMembers({siteDir, baseUrl: siteConfig.baseUrl});
    },
    async contentLoaded({content: members, actions: {createData, addRoute}}) {
      const membersData = await createData('members.json', JSON.stringify(members));
      addRoute({
        path: normalizeUrl([siteConfig.baseUrl, 'members', '/']),
        component: '@site/src/components/Members/List',
        exact: true,
        modules: {members: membersData},
      });

      for (const member of members) {
        const memberData = await createData(`member-${member.id}.json`, JSON.stringify(member));
        addRoute({
          path: member.permalink,
          component: '@site/src/components/Members/Profile',
          exact: true,
          modules: {
            member: memberData,
            ...(member.source ? {content: member.source} : {}),
          },
        });
      }
    },
    configureWebpack() {
      return {module: {rules: [mdxRule]}};
    },
  };
};
