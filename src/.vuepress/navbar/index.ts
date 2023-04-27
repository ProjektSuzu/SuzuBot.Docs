import { navbar } from "vuepress-theme-hope";

export const myNavbar = navbar([
  { text: "主页", icon: "home", link: "/" },
  { text: "指南", icon: "lightbulb", link: "/guide/" },
  {
    text: "模块",
    icon: "layer-group",
    link: "/module/"
  },
  {
    text: "其他",
    icon: "book",
    link: "/misc/"
  }
  ]);
