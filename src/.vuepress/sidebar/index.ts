import { sidebar } from "vuepress-theme-hope";

export const mySidebar = sidebar([
  {
    text: "指南",
    link: "/guide/",
    prefix: "/guide/",
    collapsible: true,
    activeMatch: "^/guide/*",
    children: "structure"
  },
  {
    text: "模块",
    link: "/module/",
    prefix: "/module/",
    activeMatch: "^/module/*",
    collapsible: true,
    children: "structure"
  },
]);
