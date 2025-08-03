import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VSCode Links Docs",
  description: "The docs for the VSCode Links extension.",
  themeConfig: {
    nav: [
      { text: "Getting Started", link: "/getting-started" },
      { text: "Examples", link: "/examples" },
    ],
    sidebar: [
      {
        text: "",
        items: [
          { text: "Getting Started", link: "/getting-started" },
          { text: "Examples", link: "/examples" },
          { text: "Commands", link: "/commands" },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/webry-com/vsc-links",
      },
    ],
  },
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png",
      },
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#0e0e0e",
      },
    ],
  ],
});
