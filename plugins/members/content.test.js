const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const {test} = require('node:test');
const {loadMembers} = require('./content');

async function createSite(t, authors, profiles = {}) {
  const siteDir = await fs.mkdtemp(path.join(os.tmpdir(), 'tdsg-members-'));
  t.after(() => fs.rm(siteDir, {recursive: true, force: true}));
  await fs.mkdir(path.join(siteDir, 'blog'));
  await fs.mkdir(path.join(siteDir, 'members'));
  await fs.writeFile(path.join(siteDir, 'blog/authors.yml'), authors);
  for (const [name, content] of Object.entries(profiles)) {
    await fs.writeFile(path.join(siteDir, 'members', name), content);
  }
  return siteDir;
}

test('includes every author in configuration order, even without a blog author page', async (t) => {
  const siteDir = await createSite(t, `Zoe:
  name: 小周
  title: 核心成员
  url: https://github.com/zoe
  image_url: /img/zoe.png
  socials:
    github: zoe
    email: zoe@example.com
Amy:
  name: Amy
  page: false
`);
  const members = await loadMembers({siteDir, baseUrl: '/TDS-Graphics-Website/'});

  assert.deepEqual(members.map(({id}) => id), ['Zoe', 'Amy']);
  assert.equal(members[0].name, '小周');
  assert.equal(members[0].title, '核心成员');
  assert.equal(members[0].image_url, '/img/zoe.png');
  assert.equal(members[0].permalink, '/TDS-Graphics-Website/members/Zoe/');
  assert.equal(members[0].source, null);
  assert.deepEqual(members[0].links, [
    {label: 'GitHub', href: 'https://github.com/zoe'},
    {label: 'Email', href: 'mailto:zoe@example.com'},
  ]);
  assert.equal(members[1].permalink, '/TDS-Graphics-Website/members/Amy/');
});

test('loads optional Markdown and MDX introductions without requiring metadata', async (t) => {
  const siteDir = await createSite(t, 'Amy:\n  name: Amy\nZoe:\n  name: Zoe\n', {
    'Amy.md': '## 关于我\n\n我喜欢实时渲染。',
    'Zoe.mdx': '## 项目\n\n<div>我的渲染器</div>',
  });
  const members = await loadMembers({siteDir, baseUrl: '/'});

  assert.equal(members[0].source, '@site/members/Amy.md');
  assert.equal(members[1].source, '@site/members/Zoe.mdx');
  assert.equal(members[1].permalink, '/members/Zoe/');
});

test('uses the default page for whitespace and front-matter-only introductions', async (t) => {
  const siteDir = await createSite(t, 'Amy:\n  name: Amy\nZoe:\n  name: Zoe\n', {
    'Amy.md': ' \n\t\n',
    'Zoe.mdx': '---\ndescription: 稍后填写\n---\n\n',
  });
  const members = await loadMembers({siteDir});

  assert.deepEqual(members.map(({source}) => source), [null, null]);
});

test('rejects ambiguous introductions instead of silently choosing one extension', async (t) => {
  const siteDir = await createSite(t, 'Amy:\n  name: Amy\n', {
    'Amy.md': 'Markdown',
    'Amy.mdx': 'MDX',
  });
  await assert.rejects(loadMembers({siteDir}), /Amy.*\.md.*\.mdx/);
});

test('keeps the configured primary GitHub URL when the social handle differs', async (t) => {
  const siteDir = await createSite(t, `Amy:
  name: Amy
  url: https://github.com/actual-account
  socials:
    github: display-name
    portfolio: https://example.com/amy
`);
  const [member] = await loadMembers({siteDir});

  assert.deepEqual(member.links, [
    {label: 'GitHub', href: 'https://github.com/actual-account'},
    {label: 'portfolio', href: 'https://example.com/amy'},
  ]);
});

test('rejects author IDs that would escape the members directory or alter a route', async (t) => {
  const siteDir = await createSite(t, '../Amy:\n  name: Amy\n');
  await assert.rejects(loadMembers({siteDir}), /作者 ID/);
});

test('preserves YAML order for numeric author IDs', async (t) => {
  const siteDir = await createSite(t, '10:\n  name: Ten\n2:\n  name: Two\nAmy:\n  name: Amy\n');
  const members = await loadMembers({siteDir});
  assert.deepEqual(members.map(({id}) => id), ['10', '2', 'Amy']);
});
