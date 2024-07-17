import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "SuzuBot.Docs",
  description: "多功能 QQ 机器人",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '模块列表', link: '/module' }
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
              { text: '猫娘聊天', link: '/module/CatGirlChat/Chat' }
            ]
          },
          {
            text: 'CoreUtils', collapsed: true, items: [
              { text: '帮助', link: '/module/CoreUtils/Help' },
              { text: 'Ping', link: '/module/CoreUtils/Ping' },
              { text: '查看命令', link: '/module/CoreUtils/ShowCommands' },
              { text: '查看规则集', link: '/module/CoreUtils/ShowRules' },
              { text: '运行状态', link: '/module/CoreUtils/Status' },
              { text: '开关命令', link: '/module/CoreUtils/Toggle' },
            ]
          },
          {
            text: 'HikariSearch 聚合搜图', collapsed: true, items: [
              { text: '以图搜图', link: '/module/HikariSearch/Soutu' }
            ]
          },
          {
            text: 'LoliconAPI 色图', collapsed: true, items: [
              { text: 'LoliconAPI 色图', link: '/module/LoliconApiSetu/Setu' }
            ]
          },
          {
            text: '电棍语音', collapsed: true, items: [
              { text: '电棍语音', link: '/module/OttoVoice/Otto' }
            ]
          },
          {
            text: '表情包', collapsed: true, items: [
              { text: '天宫心', link: '/module/Sticker/Amamya' },
              { text: '丁真', link: '/module/Sticker/Dingzhen' },
              { text: '龙图', link: '/module/Sticker/Dragon' },
            ]
          },
          {
            text: '塔罗牌', collapsed: true, items: [
              { text: '抽塔罗牌', link: '/module/TarotCard/SlotTarot' }
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
