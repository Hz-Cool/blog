(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{431:function(t,r,s){"use strict";s.r(r);var a=s(2),e=Object(a.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"一、初衷"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、初衷"}},[t._v("#")]),t._v(" 一、"),r("strong",[t._v("初衷")])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://goodbye.qqtz.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("QQTZ-2016 befor"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"http://qqtz.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("QQTZ-2016 after"),r("OutboundLink")],1)])]),t._v(" "),r("p",[t._v("QQTZ 是年少时的回忆。当时各路“水怪”，我也想争当做一个灌水大王。\n"),r("br"),t._v("\n现在 QQTZ 已彻底没落，成为灌水大王的念头一直未曾消散。\n"),r("br"),t._v("\n现各项资源都非常契合，遂开始进化。")]),t._v(" "),r("p",[t._v("秉持着增强专业技能、求索精神、和对编程的爱好，促使完成了这个项目。")]),t._v(" "),r("h2",{attrs:{id:"二、v1-0"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、v1-0"}},[t._v("#")]),t._v(" 二、"),r("strong",[t._v("V1.0")])]),t._v(" "),r("p",[r("code",[t._v("这是最初版 V1 ， 只能应用于浏览器")])]),t._v(" "),r("h3",{attrs:{id:"观察到"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#观察到"}},[t._v("#")]),t._v(" "),r("strong",[t._v("观察到")])]),t._v(" "),r("p",[t._v("回帖时，整个页面并不会全刷,只会在原来基础上追加 HTML。")]),t._v(" "),r("h3",{attrs:{id:"实现方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实现方式"}},[t._v("#")]),t._v(" "),r("strong",[t._v("实现方式")])]),t._v(" "),r("p",[t._v("通过操作 DOM 的方式填写回帖内容，模拟点击回帖按钮，提交数据。")]),t._v(" "),r("h3",{attrs:{id:"缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" "),r("strong",[t._v("缺点")])]),t._v(" "),r("ol",[r("li",[t._v("登录状态不可控\n"),r("br")]),t._v(" "),r("li",[t._v("有并发限制：FORM并发限制 和 浏览器并发上限")])]),t._v(" "),r("h3",{attrs:{id:"其他"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" "),r("strong",[t._v("其他")])]),t._v(" "),r("p",[t._v("Form 表单有防抖限制，一个浏览器窗口每秒只能提交一次请求。\n"),r("br"),t._v("\n如果需要高并发，则需要多开窗口，非常损耗性能。")]),t._v(" "),r("p",[t._v("搜索得知常规浏览器限制同时最多六个请求在并发，但火狐浏览器可以修改请求上限。")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://blog.csdn.net/xfjjs_net/article/details/89145546",target:"_blank",rel:"noopener noreferrer"}},[t._v("Firefox 修改最大 TCP 并发连接数"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"三、v2-0"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、v2-0"}},[t._v("#")]),t._v(" "),r("strong",[t._v("三、V2.0")])]),t._v(" "),r("p",[r("code",[t._v("作用于浏览器上的插件")])]),t._v(" "),r("h3",{attrs:{id:"打通任脉-chrome-devtools-copy-选项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#打通任脉-chrome-devtools-copy-选项"}},[t._v("#")]),t._v(" "),r("strong",[t._v("打通任脉 Chrome DevTools， Copy 选项")])]),t._v(" "),r("p",[t._v("在 Chrome DevTools 调试时发现 Network 下的所有请求都可以被原样复制\n"),r("br"),t._v("\nCookie、Headers、Body 都是可以被复制拿到\n"),r("br"),t._v("\n比如点击 Copy as fetch 后，粘贴在控制台即可发送请求")]),t._v(" "),r("img",{attrs:{src:t.$withBase("/assets/images/210802_copy.png"),alt:"copy"}}),t._v(" "),r("div",{staticClass:"language-javascript extra-class"},[r("pre",{pre:!0,attrs:{class:"language-javascript"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.baidu.com/sugrec?prod=pc_his&from="')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("headers")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("accept")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application/json, text/javascript, */*; q=0.01"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"accept-language"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zh-CN,zh;q=0.9"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"sec-ch-ua"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n      "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"\'')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"sec-ch-ua-mobile"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"?0"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"sec-fetch-dest"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"empty"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"sec-fetch-mode"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cors"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"sec-fetch-site"')]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"same-origin"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("referrer")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.baidu.com/"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("referrerPolicy")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unsafe-url"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("body")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("method")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GET"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mode")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cors"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),r("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("credentials")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"include"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),r("p",[t._v("通过 Copy as fetch 获取登录、发帖的 Body 传参，以及 Headers 配置项，完成请求编写")]),t._v(" "),r("h3",{attrs:{id:"打通督脉-tampermonkey-编写插件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#打通督脉-tampermonkey-编写插件"}},[t._v("#")]),t._v(" "),r("strong",[t._v("打通督脉 Tampermonkey 编写插件")])]),t._v(" "),r("p",[t._v("最开始在 Chrome DevTools > Sources > Snippets 中写临时脚本，但是 Snippets 的局限性太大")]),t._v(" "),r("ol",[r("li",[t._v("无法自己启动")]),t._v(" "),r("li",[t._v("无法刷新")])]),t._v(" "),r("p",[t._v("由于编写一个 Chrome extensions 难度较大\n"),r("br"),t._v("\n无意间想起 Tampermonkey 可以自己编写插件，简单易行\n"),r("br"),t._v("\n也和当前业务逻辑非常贴合也非常简单")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.xiaoz.me/archives/11122",target:"_blank",rel:"noopener noreferrer"}},[t._v("编写第一个油猴脚本（Tamper monkey）"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"小周天成"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#小周天成"}},[t._v("#")]),t._v(" "),r("strong",[t._v("小周天成")])]),t._v(" "),r("p",[t._v("通过 Chrome DevTools 和 Tampermonkey 的配合")]),t._v(" "),r("ul",[r("li",[t._v("可自动登录")]),t._v(" "),r("li",[t._v("可自动清理内存（刷新）\n"),r("ul",[r("li",[t._v("并发时会产生大量积压的请求，积压的请求一多内存就会爆掉")]),t._v(" "),r("li",[t._v("网速慢和 CPU 配置不高也会爆")])])])]),t._v(" "),r("p",[t._v("刷新记录：\n"),r("br"),t._v("\n当日最高记录 280W 回帖\n实际可以更高，12G内存爆掉过几次")]),t._v(" "),r("h3",{attrs:{id:"不足"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#不足"}},[t._v("#")]),t._v(" "),r("strong",[t._v("不足")])]),t._v(" "),r("ol",[r("li",[t._v("无法持久化登录、记录日志")]),t._v(" "),r("li",[t._v("内存易爆")]),t._v(" "),r("li",[t._v("论坛编码为 GBK，js 脚本无法解析 GBK\n"),r("ul",[r("li",[t._v("代码里变量 "),r("code",[t._v("Code")]),t._v(" 部分就是 GBK 编码后的内容，看上去比较奇怪")])])]),t._v(" "),r("li")]),t._v(" "),r("h2",{attrs:{id:"三、last"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、last"}},[t._v("#")]),t._v(" "),r("strong",[t._v("三、Last")])]),t._v(" "),r("p",[r("code",[t._v("作用于ECS上的NodeJS程序")])]),t._v(" "),r("p",[t._v("这次有点类似于微服务的味道")]),t._v(" "),r("ul",[r("li",[t._v("登录微服务，管理着登录日志")]),t._v(" "),r("li",[t._v("发帖微服务，管理者发帖日志")]),t._v(" "),r("li",[t._v("通过腾讯COS，存储着这些日志")])]),t._v(" "),r("h3",{attrs:{id:"功能模块"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#功能模块"}},[t._v("#")]),t._v(" "),r("strong",[t._v("功能模块")])]),t._v(" "),r("ol",[r("li",[r("p",[t._v("登录日志")]),t._v(" "),r("ul",[r("li",[t._v("登录时间")]),t._v(" "),r("li",[t._v("系统发帖量")]),t._v(" "),r("li",[t._v("账户发帖量")]),t._v(" "),r("li",[r("code",[t._v("周期发帖增量")]),t._v(" = 系统发帖量 - 上一次登录时系统发帖量")]),t._v(" "),r("li",[r("code",[t._v("周期每秒平均发帖量")]),t._v(" = 周期发帖增量 / ( 当前时间 - 上一次登录时时间 )")]),t._v(" "),r("li",[r("code",[t._v("当天每秒平均发帖量")]),t._v(" =  系统发帖量 / 已过时间")])])]),t._v(" "),r("li",[r("p",[t._v("发帖日志")]),t._v(" "),r("ul",[r("li",[t._v("时间")]),t._v(" "),r("li",[t._v("运行次数")]),t._v(" "),r("li",[t._v("发送量")]),t._v(" "),r("li",[t._v("最快和最慢耗时")])])]),t._v(" "),r("li",[r("p",[t._v("配置文件")]),t._v(" "),r("ul",[r("li",[t._v("运行一次发送条数")]),t._v(" "),r("li",[t._v("单条超时时间")]),t._v(" "),r("li",[t._v("批次超时时间")]),t._v(" "),r("li",[t._v("提交日志频率")]),t._v(" "),r("li",[t._v("休眠时常")]),t._v(" "),r("li",[t._v("登录频率")]),t._v(" "),r("li",[t._v("发帖频率")])])]),t._v(" "),r("li",[r("p",[t._v("观察到的")]),t._v(" "),r("ul",[r("li",[t._v("请求并不是越多越好，网络抖动响应慢,会造成请求积压")]),t._v(" "),r("li",[t._v("但是暴力堆积请求，又是总量最高的方式")])])]),t._v(" "),r("li",[r("p",[t._v("记录")]),t._v(" "),r("ul",[r("li",[t._v("现在账号T币在6000W左右，实际发帖也就是6000W")]),t._v(" "),r("li",[t._v("账号发帖数在1000W，6000-1000=5000 这些可能被系统吞了")]),t._v(" "),r("li",[t._v("最高一天在390W，可惜没破400W")]),t._v(" "),r("li",[t._v("理想目标是500W，由于服务器在国外，跨境流量经常丢失")]),t._v(" "),r("li",[t._v("近7天流量走势 Up:24G Down:204G")]),t._v(" "),r("li",[t._v("现网站已瘫痪，无法访问到 😭 每天这么DDOS,估计是数据库炸了")]),t._v(" "),r("li",[t._v("搜索引擎也没了，👴爷青结")])])])]),t._v(" "),r("h2",{attrs:{id:"四、项目地址"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、项目地址"}},[t._v("#")]),t._v(" 四、项目地址")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/Hz-Cool/qqtz",target:"_blank",rel:"noopener noreferrer"}},[t._v("QQTZ"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=e.exports}}]);