(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{441:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一、diff"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、diff"}},[t._v("#")]),t._v(" "),a("strong",[t._v("一、Diff")])]),t._v(" "),a("p",[t._v("React 采用虚拟 DOM（VDOM）\n"),a("br"),t._v("\n每次属性（props）和状态（state）发生变化，render 函数会返回不同的元素树\n"),a("br"),t._v("\nReact 会检测当前返回的元素树和上次渲染的元素树之间的差异\n"),a("br"),t._v("\n针对差异进行更新，最后渲染为真实 DOM\n"),a("br"),t._v("\n这就是整个 "),a("code",[t._v("Reconciliation")]),t._v(" 过程，其核心是进行新旧 DOM 树对比的 diff 算法")]),t._v(" "),a("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/19/16de3834ffcc66f4~tplv-t2oaga2asx-watermark.awebp",alt:"Reconciliation"}}),t._v(" "),a("h2",{attrs:{id:"二、shouldcomponentupdate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、shouldcomponentupdate"}},[t._v("#")]),t._v(" "),a("strong",[t._v("二、shouldComponentUpdate")])]),t._v(" "),a("p",[t._v("shouldComponentUpdate 是React生命周期中的一个， 会在 props 或 state 发生变化时触发（浅比较）\n"),a("br"),t._v("\n返回 true ，表示重新渲染，从而调用 render 函数\n"),a("br"),t._v("\n返回 false ，则不更新当前组件，可以控制 VDOM 树的 Diff 过程\n"),a("br")]),t._v(" "),a("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/19/16de39cf997a808f~tplv-t2oaga2asx-watermark.awebp",alt:"shouldComponentUpdate"}}),t._v(" "),a("p",[t._v("上图是一个官方的实例，一个完成的 Recinciliation 过程\n"),a("br"),t._v("\nSCU 及 shouldComponentUpdate 的简写\n"),a("br"),t._v("\n红色节点表示 SCU 返回 true ，需要调用 render 进行新旧 VDOOM 树的 diff 过程\n"),a("br"),t._v("\n绿色节点表示 SCU 返回 false ，不需要进行 diff 更新")]),t._v(" "),a("p",[t._v("React 还推出了 PureComponent 这个 API，会在 props 或者 state 改变时对两者的数据进行浅比较")]),t._v(" "),a("h2",{attrs:{id:"三、react-虚拟-dom-的-diff-过程-原理解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、react-虚拟-dom-的-diff-过程-原理解析"}},[t._v("#")]),t._v(" "),a("strong",[t._v("三、React 虚拟 DOM 的 Diff （过程）原理解析")])]),t._v(" "),a("p",[t._v("React 虚拟 DOM 的 Diff 算法核心是它对于 "),a("code",[t._v("边界情况和其他细节的处理")])]),t._v(" "),a("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/19/16de41554a3ff3e2~tplv-t2oaga2asx-watermark.awebp",alt:"shouldComponentUpdate"}}),t._v(" "),a("h3",{attrs:{id:"设计思想"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计思想"}},[t._v("#")]),t._v(" "),a("strong",[t._v("设计思想")])]),t._v(" "),a("p",[t._v("从一个节点树参照另一颗节点树进行更新，常规做法是递归对每一个节点进行比较，算法的复杂度是 O (n^3)，\n1000个节点的树，要对比10亿次。")]),t._v(" "),a("p",[t._v("React 的 diff 能达到 O (n) 级别，它有一套自己方法论，简单叙述：")]),t._v(" "),a("p",[a("strong",[t._v("1.元素类型不同时")])]),t._v(" "),a("ul",[a("li",[t._v("永远只比较同层节点，不会跨层级比较节点")]),t._v(" "),a("li",[t._v("不同的两个节点产生不同的树，把该节点及其后代元素全部干掉，替换成新的")]),t._v(" "),a("li",[t._v("通过 key 值制定那些元素是相同的")])]),t._v(" "),a("p",[a("strong",[t._v("2.元素类型相同时")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("都是DOM节点时")])])]),t._v(" "),a("p",[t._v("React只会修改 DOM 元素上的 className 属性和 title 属性，然后对子节点进行递归处理")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("className")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("old"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("老节点"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("className")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("new"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("新节点"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("ul",[a("li",[a("strong",[t._v("都是组件元素")])])]),t._v(" "),a("p",[t._v("组件实例保持不变，更新props。\n"),a("br"),t._v("\n这时会触发 componentWillReceiveProps()\n"),a("br"),t._v("\n然后通过 shouldComponentUpdate 返回值决定是否 render")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("特殊情况：遍历子元素")])])]),t._v(" "),a("p",[t._v("React 引入 key 值的概念，遍历子元素时，都需要增加一个 key")]),t._v(" "),a("p",[t._v("作用是提升效率，快速定位到元素进行 update。")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("third"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("3"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("second"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("key 的选取："),a("strong",[a("code",[t._v("不需要全局唯一，但必须保持列表唯一")])])]),t._v(" "),a("p",[t._v("非常多的人喜欢用数组下标作为 key 值，在元素顺序不改变的情况是没有问题的，一旦顺序发生改变，diff性能极具下降")]),t._v(" "),a("img",{attrs:{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/10/19/16de474300409e90~tplv-t2oaga2asx-watermark.awebp",alt:"shouldComponentUpdate"}}),t._v(" "),a("p",[t._v("由于 F 的插入，后面的 C、D、E 索引值都改变，即 key 值改变，因此后面的节点都得更新。\n"),a("br"),t._v("\n而且，数组乱序或者在头部插入都会导致同样的更新问题。")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("因此，不用数组索引做 key 的原因在于：数组下标值不稳定，修改顺序会修改当前 key")])])]),t._v(" "),a("p",[a("br")]),a("hr"),a("p"),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/book/6844733816460804104/section/6844733816549048333",target:"_blank",rel:"noopener noreferrer"}},[t._v("React 的 Reconciliation 算法原理"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);