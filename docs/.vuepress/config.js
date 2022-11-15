module.exports = {
  title: "Hz-Cool",
  //base: '/', // 【域名用/】
  base: '/blog/', // 【Github用 /blog/】
  description: '怕什么真理无穷,进一寸有一寸的欢喜！',
  head: [
    ['link', { rel: 'icon', href: './favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    noFoundPageByTencent: false,
    lastUpdated: true,
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      {
        text: "关于",
        icon: "reco-message",
        items: [
          {
            text: "关于我",
            link: "/about/",
            icon: "reco-account"
          },
          {
            text: "GitHub",
            link: "https://github.com/Hz-Cool",
            icon: "reco-github",
          },
          {
            text: "CSDN",
            link: "https://blog.csdn.net/qq_36267404",
            icon: "reco-csdn",
          },
        ]
      }
    ],
    sidebar: {
    },
    logo: '/1.jpg',
    authorAvatar: '/1.jpg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    subSidebar: 'auto',
    // 最后更新时间
    //lastUpdated: 'Last Updated',
    // 作者
    author: 'Hz',
    // 项目开始时间
    startYear: '2018',
    plugins: {
      // 阅读进度条: "vuepress-plugin-reading-progress": "^1.0.10",
      "reading-progress": true,
      // 最后更改时间插件(内置)+moment 格式化为中国地区的样式
      '@vuepress/last-updated': {
        transformer: (timestamp, lang) => {
          return moment(timestamp).format('LLLL')
        }
      },
      // 看板娘插件 https://github.com/vuepress-reco/vuepress-plugin-kan-ban-niang
      // "@vuepress-reco/vuepress-plugin-kan-ban-niang":
      // {
      //     theme: ['z16', 'blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku'],
      //     clean: false,
      //     messages: {
      //         welcome: '我是bookbook,欢迎你的关注 ',
      //         home: '心里的花，我想要带你回家。',
      //         theme: '好吧，希望你能喜欢我的其他小伙伴。',
      //         close: '再见哦'
      //     },
      //     width: 150,
      //     height: 219,
      // },
      // 点击爆炸的彩带效果
      "cursor-effects": {
        size: 3,                    // size of the particle, default: 2
        shape: ['circle'],  // shape of the particle, default: 'star'
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      },
    }
  },
}