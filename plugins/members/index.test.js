const assert = require('node:assert/strict');
const {test} = require('node:test');
// Docusaurus skips eager MDX processor creation in tests; route generation stays real.
process.env.NODE_ENV = 'test';
const membersPlugin = require('./index');

test('member IDs cannot overwrite directory data or plugin context', async () => {
  const plugin = await membersPlugin({
    siteDir: process.cwd(),
    siteConfig: {baseUrl: '/TDS-Graphics-Website/', staticDirectories: [], markdown: {}},
  }, {});
  const files = new Map([['__plugin.json', {name: 'tdsg-members'}]]);
  const routes = [];
  const members = ['members', '__plugin'].map((id) => ({
    id,
    name: id,
    permalink: `/TDS-Graphics-Website/members/${id}/`,
    source: null,
  }));

  await plugin.contentLoaded({
    content: members,
    actions: {
      async createData(name, data) {
        files.set(name, JSON.parse(data));
        return name;
      },
      addRoute(route) { routes.push(route); },
    },
  });

  assert.ok(Array.isArray(files.get(routes[0].modules.members)));
  assert.deepEqual(files.get('__plugin.json'), {name: 'tdsg-members'});
  assert.equal(files.get(routes[1].modules.member).id, 'members');
  assert.equal(files.get(routes[2].modules.member).id, '__plugin');
});
