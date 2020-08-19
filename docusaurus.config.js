module.exports = {
  title: "飞天雕的开发之路",
  tagline: "通往云开发",
  url: "https://leosxie.github.io",
  baseUrl: "/",
  onBrokenLinks: "error",
  favicon: "http://qezuflwvp.hn-bkt.clouddn.com/logo.png",
  organizationName: "leosxie", // Usually your GitHub org/user name.
  projectName: "leosxie.github.io", // Usually your repo name.
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
          to: "docs",
          label: "文档",
          position: "left",
        },
        { to: "blog", label: "blog", position: "left" },
        {
          href: "https://github.com/leosxie",
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
              label: "Linux",
              to: "docs/linux/ssh",
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
              label: "blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/leosxie",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 前端小站, <a href="http://beian.miit.gov.cn/" target="_blank">粤ICP备15032469号</a>.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "index",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/leosxie/leosxie.github.io/tree/tcb/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/leosxie/leosxie.github.io/tree/tcb/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
