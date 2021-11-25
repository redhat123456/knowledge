// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tanger的知识库',
  tagline: '专注 、 认真  、 知识总结',
  url: 'https://tanger.ltd/knowledge/',
  baseUrl: '/knowledge/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'redhat123456', // Usually your GitHub org/user name.
  projectName: 'knowledge', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
       
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Tanger的知识库',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '知识库',
          },
          {to: '/blog', label: '历程', position: 'left'},
          {
            href: 'https://github.com/redhat123456/',
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
                label: '前端',
                to: '/docs/0web/0read',
              },
            ],
          },
          {
            title: '与他相关',
            items: [
              {
                label: '七院创新基地',
                href: 'https://xn--7gqr3hs9ecxao51c822e.cn/',
              },
              {
                label: '知乎',
                href: 'https://www.zhihu.com/people/lan-de-qi-ming-liao-5',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Tanger77300402',
              },
              {
                label: 'Blog',
                href: 'https://redhat123456.github.io/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/redhat123456',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '七院创新基地',
                href: 'https://xn--7gqr3hs9ecxao51c822e.cn/',
              },
              {
                label: '三院科协',
                href: 'https://hello.kexie.space/',
              },
              {
                label: '校基地软件部',
                href: 'https://csd.guet.ltd/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
