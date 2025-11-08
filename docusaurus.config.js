module.exports = {
  title: "Foundation",
  tagline:
    "Our Ethereum infrastructure is open, permissionless, and transparent because our future is collective.",
  url: "https://fnd.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/fnd.svg",
  organizationName: "f8n",
  projectName: "fnd-docs",
  themeConfig: {
    navbar: {
      logo: {
        alt: "Foundation Logo",
        src: "img/fnd.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "https://discord.foundation.app",
          label: "Discord",
          position: "left",
        },
        {
          href: "https://github.com/f8n",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      // Açmak isterseniz buraya link bloklarını ekleyebilirsiniz.
      copyright: `foundation.app`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/f8n/fnd-docs/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
