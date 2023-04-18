import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "SuzuBot",
  base: "/",
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
