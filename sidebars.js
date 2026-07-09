// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Check if a document file actually exists (submodule content may be absent).
 * @param {string} docPath - Relative path from docs/ dir (e.g. 'introduction/README')
 * @returns {boolean}
 */
function docExists(docPath) {
  const fullPath = path.join(__dirname, 'docs', `${docPath}.md`);
  return fs.existsSync(fullPath);
}

/**
 * Build a sidebar category if its leading document exists.
 * Returns an empty array if the document is missing, so we can spread it
 * without producing null entries.
 *
 * @param {object} options
 * @param {string} options.label
 * @param {string} options.linkDoc
 * @param {string[]} options.items
 * @param {string} [options.indexTitle]
 * @param {string} [options.indexDescription]
 * @param {string} [options.indexSlug]
 * @returns {object[]}
 */
function buildCategory({ label, linkDoc, items, indexTitle, indexDescription, indexSlug }) {
  if (!docExists(linkDoc)) {
    console.warn(`[sidebars] Submodule doc "${linkDoc}" not found. Skipping category "${label}".`);
    return [];
  }

  const existingItems = items.filter((item) => docExists(item));

  const category = {
    type: 'category',
    label,
    ...(indexTitle
      ? {
          link: {
            type: 'generated-index',
            title: indexTitle,
            description: indexDescription,
            slug: indexSlug,
          },
        }
      : {
          link: {
            type: 'doc',
            id: linkDoc,
          },
        }),
    items: existingItems,
  };

  return [category];
}

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
  tutorialSidebar: [
    // Root-level docs
    ...(docExists('intro') ? ['intro'] : []),

    // Introduction section (from submodule)
    ...buildCategory({
      label: '介绍',
      linkDoc: 'introduction/README',
      items: ['introduction/profile/README'],
    }),

    // Unified Roadmap section (from submodule)
    ...buildCategory({
      label: '学习路线',
      linkDoc: 'unified-roadmap/README',
      items: ['unified-roadmap/README', 'unified-roadmap/stage0', 'unified-roadmap/stage1', 'unified-roadmap/stage2'],
      indexTitle: '学习路线',
      indexDescription: '图形组组内的统一学习方案',
      indexSlug: '/category/unified-roadmap',
    }),

    // Reading Resources section (from submodule)
    ...buildCategory({
      label: '阅读资料',
      linkDoc: 'reading-resources/README',
      items: ['reading-resources/reference_book_links'],
    }),
  ],
};

export default sidebars;