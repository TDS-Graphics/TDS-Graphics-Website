const fs = require('node:fs/promises');
const path = require('node:path');
const yaml = require('yaml');
const {aliasedSitePath, normalizeUrl, DEFAULT_PARSE_FRONT_MATTER} = require('@docusaurus/utils');

const socialPlatforms = {
  github: {label: 'GitHub', prefix: 'https://github.com/'},
  email: {label: 'Email', prefix: 'mailto:'},
  twitter: {label: 'Twitter', prefix: 'https://twitter.com/'},
  x: {label: 'X', prefix: 'https://x.com/'},
  linkedin: {label: 'LinkedIn', prefix: 'https://www.linkedin.com/in/'},
  bluesky: {label: 'Bluesky', prefix: 'https://bsky.app/profile/'},
  instagram: {label: 'Instagram', prefix: 'https://www.instagram.com/'},
  threads: {label: 'Threads', prefix: 'https://www.threads.net/@'},
  youtube: {label: 'YouTube', prefix: 'https://youtube.com/@'},
  twitch: {label: 'Twitch', prefix: 'https://twitch.tv/'},
  mastodon: {label: 'Mastodon', prefix: 'https://mastodon.social/@'},
  stackoverflow: {label: 'Stack Overflow', prefix: 'https://stackoverflow.com/users/'},
};

function getLinks(author) {
  const links = [];
  const addLink = (label, href) => {
    if (!/^(https?:\/\/|mailto:)/i.test(href)) {
      return;
    }
    if (!links.some((link) => link.label === label || link.href === href)) {
      links.push({label, href});
    }
  };

  if (author.url) {
    // Prefer the author's primary URL when a social handle points elsewhere.
    const platform = Object.values(socialPlatforms).find(({prefix}) =>
      author.url.startsWith(prefix),
    );
    addLink(platform?.label ?? '个人主页', author.url);
  }
  for (const [key, value] of Object.entries(author.socials ?? {})) {
    const platform = socialPlatforms[key.toLowerCase()];
    const href = /^(https?:\/\/|mailto:)/i.test(String(value))
      ? String(value)
      : platform ? `${platform.prefix}${value}` : '';
    addLink(platform?.label ?? key, href);
  }
  return links;
}

async function loadMembers({siteDir, baseUrl = '/'}) {
  const document = yaml.parseDocument(await fs.readFile(path.join(siteDir, 'blog/authors.yml'), 'utf8'));
  if (document.errors.length > 0) {
    throw document.errors[0];
  }
  if (document.contents && !yaml.isMap(document.contents)) {
    throw new Error('blog/authors.yml 必须是以作者 ID 为键的配置列表。');
  }
  const authors = document.toJS() ?? {};
  // JavaScript object enumeration sorts numeric keys; read IDs from the YAML tree instead.
  const ids = document.contents?.items.map(({key}) => String(key.value)) ?? [];
  const membersDir = path.join(siteDir, 'members');
  const files = await fs.readdir(membersDir).catch((error) => {
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  });

  return Promise.all(ids.map(async (id) => {
    const author = authors[id];
    if (!/^[\p{L}\p{N}_-]+$/u.test(id)) {
      throw new Error(`无效的作者 ID「${id}」：请使用字母、数字、下划线或连字符。`);
    }

    // Match case exactly so development on Windows agrees with deployment on Linux.
    const profiles = [`${id}.md`, `${id}.mdx`].filter((name) => files.includes(name));
    if (profiles.length > 1) {
      throw new Error(`成员 ${id} 同时存在 .md 和 .mdx 介绍，请只保留其中一个文件。`);
    }

    let source = null;
    if (profiles.length === 1) {
      const filePath = path.join(membersDir, profiles[0]);
      const {content} = await DEFAULT_PARSE_FRONT_MATTER({
        filePath,
        fileContent: await fs.readFile(filePath, 'utf8'),
      });
      if (content.trim()) {
        source = aliasedSitePath(filePath, siteDir);
      }
    }

    return {
      id,
      name: author.name ?? id,
      title: author.title ?? null,
      image_url: author.image_url ?? null,
      links: getLinks(author),
      permalink: normalizeUrl([baseUrl, 'members', encodeURIComponent(id), '/']),
      source,
    };
  }));
}

module.exports = {loadMembers};
