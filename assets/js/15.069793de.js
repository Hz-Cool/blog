(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{425:function(t,r,a){"use strict";a.r(r);var e=a(2),_=Object(e.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("img",{attrs:{src:t.$withBase("/assets/images/210413_1.png"),alt:"log"}}),t._v(" "),r("h2",{attrs:{id:"一、前置信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、前置信息"}},[t._v("#")]),t._v(" 一、前置信息")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/views/fiddle/computer_monitor/210224.html"}},[t._v("电脑监控(一)：H5简单监控")])],1),t._v(" "),r("p",[t._v("阅读上面这篇文章得知：")]),t._v(" "),r("p",[t._v("通过本地运行一个网页(Javascript+HTML)，实时监控“挖矿”电脑的状态信息。")]),t._v(" "),r("p",[t._v("当电脑状态异常时，通过发邮件、发短信的方式实时预警。")]),t._v(" "),r("h3",{attrs:{id:"弊端"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#弊端"}},[t._v("#")]),t._v(" 弊端")]),t._v(" "),r("p",[t._v("唯一的不足就是需要在本地运行一个浏览器，如果没有实时运行的电脑，就是独木难支。")]),t._v(" "),r("h2",{attrs:{id:"二、知识储备"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、知识储备"}},[t._v("#")]),t._v(" 二、知识储备")]),t._v(" "),r("p",[t._v("空闲时会关注一些关系行业相关的信息\n"),r("br"),t._v("\n如：吾爱破解、V2ex")]),t._v(" "),r("p",[t._v("在无意识的阅读状态中，总会出现一些行业的高频词汇，无形之中就被加加强了联系、加深了印象\n"),r("br"),t._v("\n如："),r("a",{attrs:{href:"https://cloud.tencent.com/document/product/436",target:"_blank",rel:"noopener noreferrer"}},[t._v("对象存储"),r("OutboundLink")],1),t._v("、"),r("a",{attrs:{href:"https://cloud.tencent.com/document/product/583",target:"_blank",rel:"noopener noreferrer"}},[t._v("云函数"),r("OutboundLink")],1),t._v("、良心云")]),t._v(" "),r("p",[t._v("我的简单理解：\n"),r("br"),t._v("\n对象存储就相当于一个数据库，云函数就相当于一个云服务")]),t._v(" "),r("p",[t._v("看到论坛有人通过云函数实现游戏自动签到\n"),r("br"),t._v("\n这让我联想到我是否也能通过云函数实现零成本监控呢？")]),t._v(" "),r("img",{attrs:{src:t.$withBase("/assets/images/210413_2.png"),alt:"腾讯云"}}),t._v(" "),r("img",{attrs:{src:t.$withBase("/assets/images/210413_3.png"),alt:"腾讯云"}}),t._v(" "),r("h2",{attrs:{id:"三、实际应用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、实际应用"}},[t._v("#")]),t._v(" 三、实际应用")]),t._v(" "),r("p",[t._v("从腾讯云官网中得知，云函数和对象存储都有免费的配额\n"),r("br"),t._v("\n通过完善的文档和不断尝试后，可较好的食用这些服务")]),t._v(" "),r("p",[t._v("最大的问题在于没写过 NodeJS 项目\n"),r("br"),t._v('\n虽写过 Java 和 Javascript，但"人生地不熟"的状态还是走了很多弯路')]),t._v(" "),r("p",[t._v("通过网上大量代码案例、摸着石头过河、大量试错后最终实现了一个版本\n"),r("br"),t._v("\n这个版本也在良好的运行中 😂😁")]),t._v(" "),r("h3",{attrs:{id:"思路"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),r("ul",[r("li",[t._v("设置云函数 定时执行")]),t._v(" "),r("li",[t._v("调用向日葵硬件接口数据")]),t._v(" "),r("li",[t._v("把这些数据 Log 在对象存储中。保存为 JSON 格式")]),t._v(" "),r("li",[t._v("遍历 Log 末尾 4 条数据判断状态")]),t._v(" "),r("li",[t._v("异常时调用邮件服务，邮件自动触发 139 短信服务")])]),t._v(" "),r("p",[t._v("NodeJS 邮件服务 - "),r("a",{attrs:{href:"https://www.npmjs.com/package/emailjs",target:"_blank",rel:"noopener noreferrer"}},[t._v("emailjs"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"四、项目地址"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、项目地址"}},[t._v("#")]),t._v(" 四、项目地址")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/Hz-Cool/Computer_Monitor",target:"_blank",rel:"noopener noreferrer"}},[t._v("Computer_Monitor"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=_.exports}}]);