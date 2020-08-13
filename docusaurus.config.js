module.exports = {
  title: "飞天雕的开发之路",
  tagline: "通往云开发",
  url: "https://lovesmilesha.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "http://qezuflwvp.hn-bkt.clouddn.com/logo.png",
  organizationName: "lovesmilesha", // Usually your GitHub org/user name.
  projectName: "lovesmilesha.github.io", // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
    },
    navbar: {
      title: "首页",
      logo: {
        alt: "My Site Logo",
        src: "http://qezuflwvp.hn-bkt.clouddn.com/logo.png",
      },
      items: [
        {
          to: "docs/docusaurus/doc1/",
          activeBasePath: "docs/docusaurus",
          label: "文档",
          position: "left",
        },
        { to: "blog", label: "文章", position: "left" },
        {
          href: "https://github.com/lovesmilesha",
          label: "我的GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "文档",
          items: [
            {
              label: "Docusaurus",
              to: "docs/docusaurus/doc1",
            },
            {
              label: "Javascript",
              to: "docs/",
            },
          ],
        },
        {
          title: "我的",
          items: [
            {
              label: "我的知乎主页",
              href: "https://www.zhihu.com/people/fei-tian-diao",
            },
            {
              label: "我的掘金主页",
              href: "https://juejin.im/user/1609340753310055",
            },
          ],
        },
        {
          title: "更多",
          items: [
            {
              label: "文章",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/lovesmilesha",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 前端小站, <a href="http://www.beian.miit.gov.cn/" target="_blank">粤ICP备15032469号</a>.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "doc1",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/lovesmilesha/lovesmilesha.github.io/tree/tcb/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/lovesmilesha/lovesmilesha.github.io/tree/tcb/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
