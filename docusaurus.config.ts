import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Nizar Docs",
  tagline: "Learn To Code && Have Fun Doing It",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://nextradocs-kappa.vercel.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

          // editUrl: "https://github.com/NizarAbiZaher/nextradocs/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Nizzy Starter Docs",
      logo: {
        alt: "Nizzy Starter Logo",
        src: "img/squircle.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        {
          href: "https://github.com/NizarAbiZaher/nizzy-starter",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Socials",
          items: [
            {
              label: "YouTube",
              href: "https://www.youtube.com/@NizzyABI",
            },
            {
              label: "GitHub",
              href: "https://github.com/NizarAbiZaher",
            },
            {
              label: "Discord Community",
              href: "https://discord.com/invite/nizar",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Starter Kit",
              href: "https://nizzystarter.com/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nizzy Starter. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
