import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SuzuBot.Docs",
  description: "多功能 QQ 机器人",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '模块列表', link: '/modules' }
    ],

    sidebar: [
      {
        text: '首页',
        items: [
          { text: '简介', link: '/introduction' },
        ]
      },
      {
        text: '模块列表',
        items: [
          {
            text: '猫娘聊天', collapsed: true, items: [
              { text: '猫娘聊天', link: '/modules/CatGirlChat/Chat' }
            ]
          },
          {
            text: 'CoreUtils', collapsed: true, items: [
              { text: '帮助', link: '/modules/CoreUtils/Help' },
              { text: 'Ping', link: '/modules/CoreUtils/Ping' },
              { text: '查看命令', link: '/modules/CoreUtils/ShowCommands' },
              { text: '查看规则集', link: '/modules/CoreUtils/ShowRules' },
              { text: '运行状态', link: '/modules/CoreUtils/Status' },
              { text: '开关命令', link: '/modules/CoreUtils/Toggle' },
            ]
          },
          {
            text: 'HikariSearch 聚合搜图', collapsed: true, items: [
              { text: '以图搜图', link: '/modules/HikariSearch/Soutu' }
            ]
          },
          {
            text: 'LoliconAPI 色图', collapsed: true, items: [
              { text: 'LoliconAPI 色图', link: '/modules/LoliconApiSetu/Setu' }
            ]
          }, 
          {
            text: '塔罗牌', collapsed: true, items: [
              { text: '抽塔罗牌', link: '/modules/TarotCard/SlotTarot' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ProjektSuzu/SuzuBot' }
    ]
  }
})
