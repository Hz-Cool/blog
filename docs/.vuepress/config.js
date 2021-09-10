module.exports = {
    title: "Hz-Cool",
    base: '/',
    description: '怕什么真理无穷,进一寸有一寸的欢喜！',
    head: [
        ['link', { rel: 'icon', href: './favicon.ico' }],
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    theme: 'reco',
    themeConfig: {
        type: 'blog',
        noFoundPageByTencent: false,
        lastUpdated: false,
        nav: [
            { text: 'Home', link: '/', icon: 'reco-home' },
        ],
        sidebar: {
        },
        logo: './1.jpg',
        authorAvatar: './1.jpg',
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        // 自动形成侧边导航
        subSidebar: 'auto',
        // 最后更新时间
        //lastUpdated: 'Last Updated',
        // 作者
        author: 'hz',
        // 项目开始时间
        startYear: '2018',
    },
}

// module.exports = {
//     title: "Notes",
//     base: '/testNotes/',
//     description: '怕什么真理无穷,进一寸有一寸的欢喜！',
//     head: [
//         ['link', { rel: 'icon', href: './favicon.ico' }],
//         ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
//     ],
//     theme: 'reco',
//     //theme: '@vuepress/blog',
//     themeConfig: {
//         type: 'blog',
//         noFoundPageByTencent: false,
//         lastUpdated: false,
//         nav: [
//             { text: 'Home', link: '/', icon: 'reco-home' },
//             { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
//             { text: 'sidebar', link: '/views/sidebar/' },
//             { text: 'sidebar', link: '/views/sidebargroup/' }
//         ],
//         sidebar: {
//             '/views/sidebar/': [
//                 '',
//                 'bar1',
//                 'bar2'
//             ],
//             '/views/sidebargroup/': [
//                 {
//                     title: '基础',
//                     collapsable: true,
//                     children: [
//                         '',
//                         'bar1'
//                     ]
//                 },
//                 {
//                     title: '进阶',
//                     collapsable: true,
//                     children: [
//                         'bar2'
//                     ]
//                 },
//             ]
//         },
//         logo: './1.png',
//         authorAvatar: './1.png',
//         // 搜索设置
//         search: true,
//         searchMaxSuggestions: 10,
//         // 自动形成侧边导航
//         subSidebar: 'auto',
//         sidebarDepth: 4,
//         // 最后更新时间
//         // lastUpdated: 'Last Updated',
//         // 作者
//         author: 'hz',
//         // 备案号
//         //record: 'xxxx',
//         //recordLink: 'http://www.baidu.com',
//         //cyberSecurityRecord: '2222',
//         //cyberSecurityLink: 'http://www.baidu.com',
//         // 项目开始时间
//         startYear: '2017',
//         /**
//          * 密钥 (if your blog is private)
//          */
//         // friendLink: [
//         //     {
//         //         title: '午后南杂',
//         //         desc: 'Enjoy when you can, and endure when you must.',
//         //         email: '1156743527@qq.com',
//         //         link: 'https://www.recoluan.com'
//         //     },
//         //     {
//         //         title: 'vuepress-theme-reco',
//         //         desc: 'A simple and beautiful vuepress Blog & Doc theme.',
//         //         avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
//         //         link: 'https://vuepress-theme-reco.recoluan.com'
//         //     },
//         // ],
//         /**
//          * support for
//          * '' | 'default'
//          * 'coy'
//          * 'dark'
//          * 'funky'
//          * 'okaidia'
//          * 'solarizedlight'
//          * 'tomorrow'
//          * 'twilight'
//          */
//     },
//     // plugins: [
//     //     ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
//     //         body: [
//     //             {
//     //                 type: 'title',
//     //                 content: '欢迎加入QQ交流群 🎉🎉🎉',
//     //                 style: 'text-aligin: center;'
//     //             },
//     //             {
//     //                 type: 'image',
//     //                 src: '/rvcode_qq.png'
//     //             }
//     //         ],
//     //         footer: [
//     //             {
//     //                 type: 'button',
//     //                 text: '打赏',
//     //                 link: '/donate'
//     //             },
//     //             {
//     //                 type: 'button',
//     //                 text: '打赏',
//     //                 link: '/donate'
//     //             }
//     //         ]
//     //     }]
//     // ]
// }

