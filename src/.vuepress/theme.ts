import { hopeTheme } from "vuepress-theme-hope";
import { myNavbar } from "./navbar/index";
import { mySidebar } from "./sidebar/index";

export default hopeTheme({
  hostname: "https://docs.suzubot.top/",
  author: {
    name: "AkulaKirov",
    url: "https://akula.moe/",
  },
  iconAssets: "fontawesome",
  logo: "/avatar.png",
  titleIcon: true,
  pageInfo: ["Date", "ReadingTime"],
  repo: "ProjektSuzu/SuzuBot.Docs",
  navbar: myNavbar,
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Repo", "Search"],
  },
  sidebar: mySidebar,
  plugins: {
    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});
