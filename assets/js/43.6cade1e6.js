(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{241:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"神策数据前端埋点源码不完全解读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#神策数据前端埋点源码不完全解读"}},[t._v("#")]),t._v(" 神策数据前端埋点源码不完全解读")]),t._v(" "),a("p",[a("code",[t._v("https://github.com/sensorsdata/sa-sdk-javascript/blob/master/sensorsdata.amd.min.js")])]),t._v(" "),a("p",[t._v("源码为压缩打包后的产物，都转为了ES5，美化后约2500行")]),t._v(" "),a("p",[t._v("整体结构和jQuery的源码有点类似")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断是否支持 CommonJS 规范")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" module "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 主体大致分三类")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. 修改浏览器自带方法 ≈ 100行")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 封装通用函数 ≈ 1000行")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. 埋点代码 ≈ 1400行")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" console "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"_1-修改浏览器自带方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-修改浏览器自带方法"}},[t._v("#")]),t._v(" 1. 修改浏览器自带方法")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toJSON\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Boolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toJSON \n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toJSON\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toJSON\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stringify\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parse\n")])])]),a("p",[t._v("给"),a("code",[t._v("Date")]),t._v("，"),a("code",[t._v("Boolean")]),t._v("，"),a("code",[t._v("Number")]),t._v("，"),a("code",[t._v("String")]),t._v("新增了"),a("code",[t._v("toJSON")]),t._v("方法，内部返回的是"),a("code",[t._v("valueOf()")]),t._v("的值")]),t._v(" "),a("p",[t._v("重写了"),a("code",[t._v("JSON")]),t._v("的序列化、反序列化方法，应该是为了兼容旧浏览器，似乎是用了"),a("code",[t._v("JSON2")]),t._v("的包，两者代码很像")]),t._v(" "),a("h2",{attrs:{id:"_2-封装通用函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-封装通用函数"}},[t._v("#")]),t._v(" 2. 封装通用函数")]),t._v(" "),a("p",[t._v("共72个函数")]),t._v(" "),a("p",[t._v("有部分是类似"),a("code",[t._v("lodash")]),t._v("里面的基础工具函数")]),t._v(" "),a("p",[t._v("其他是一些对基础功能的封装，如"),a("code",[t._v("cookie")]),t._v("、"),a("code",[t._v("storage")]),t._v("、"),a("code",[t._v("ajax")]),t._v("、"),a("code",[t._v("url")]),t._v("、"),a("code",[t._v("DOM操作")]),t._v("等")]),t._v(" "),a("h2",{attrs:{id:"_3-埋点代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-埋点代码"}},[t._v("#")]),t._v(" 3. 埋点代码")]),t._v(" "),a("p",[t._v("埋点的核心代码都在这里")]),t._v(" "),a("p",[t._v("先看一下如何使用")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requirejs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sensorsdata.amd.min"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("sensors")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//神策 SDK 初始化")]),t._v("\n  sensors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    server_url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'数据接收地址'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    heatmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认开启采集元素点击事件，not_collect 为关闭。")]),t._v("\n      clickmap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'default'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认或者设置 default 开启采集元素点击事件，not_collect 为关闭。")]),t._v("\n      scroll_notice_map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'not_collect'")]),t._v(" \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[t._v("全埋点事件")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("$pageview 浏览页面")]),t._v(" "),a("p",[t._v("调用"),a("code",[t._v("sensors.quick('autoTrack')")]),t._v(" 方法触发")])]),t._v(" "),a("li",[a("p",[t._v("$WebClick 元素点击")]),t._v(" "),a("p",[t._v("a button input 被点击时触发")]),t._v(" "),a("p",[a("code",[t._v("heatmap:{clickmap:'default'}")])])]),t._v(" "),a("li",[a("p",[t._v("$WebStay 视区停留")]),t._v(" "),a("p",[t._v("scroll 滚动时触发")]),t._v(" "),a("p",[a("code",[t._v("heatmap:{scroll_notice_map:'default'}")])])])])]),t._v(" "),a("li",[a("p",[t._v("手动追踪事件")]),t._v(" "),a("p",[a("code",[t._v("sensors.track(event_name[, properties][, callback])")])])])]),t._v(" "),a("p",[t._v("全埋点会收集以上三种类型的事件：页面访问、元素点击和视区停留，无论哪种事件，都会通过"),a("code",[t._v("sensors.track")]),t._v("收集数据发送")]),t._v(" "),a("p",[t._v("下面来一个个分析它们的实现方式")]),t._v(" "),a("h3",{attrs:{id:"pageview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pageview"}},[t._v("#")]),t._v(" $pageview")]),t._v(" "),a("p",[t._v("在之前的埋点实践中，由于是单页面的Vue项目，可以很方便的在导航守卫里获取路由变化，而神策的埋点代码是通用式的框架无关的，所以需要考虑是单页面还是多页面，hash模式还是history模式")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一下是执行过程")]),t._v("\nsensors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("quick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'autoTrack'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ")]),t._v("\ncommonWays"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("autoTrack")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// track当前页面的$pageview数据")]),t._v("\nsd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("track")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$pageview"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" _"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("extend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  $referrer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" _"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getReferrer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 即document.referrer")]),t._v("\n  $url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("href"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  $url_path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  $title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 若为单页面应用，绑定路由变化事件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 若支持history模式则监听popstate")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 否则监听hashchange事件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pushState"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("history "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"popstate"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hashchange"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 事件触发时还是track以上页面信息")]),t._v("\n")])])]),a("p",[t._v("本质上和vue-router的路由守卫原理相同，没啥可说的")]),t._v(" "),a("h3",{attrs:{id:"webclick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webclick"}},[t._v("#")]),t._v(" $WebClick")]),t._v(" "),a("p",[t._v("默认只采集"),a("code",[t._v("a")]),t._v(","),a("code",[t._v("input")]),t._v(","),a("code",[t._v("button")]),t._v("三种元素的事件，若要拓展则需要手动绑定")]),t._v(" "),a("p",[t._v("相关代码在"),a("code",[t._v("heatmap.initHeatmap()")]),t._v("里")]),t._v(" "),a("p",[t._v("绑定"),a("code",[t._v("document")]),t._v("的"),a("code",[t._v("click")]),t._v("事件，根据"),a("code",[t._v("tagName")]),t._v("过滤，执行"),a("code",[t._v("heatmap.start()")]),t._v("，在里面"),a("code",[t._v("track")]),t._v("当前事件信息")]),t._v(" "),a("p",[t._v("原理很基础，就是绑定点击事件，过滤出需要的事件，收集事件携带的信息")]),t._v(" "),a("h3",{attrs:{id:"webstay"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webstay"}},[t._v("#")]),t._v(" $WebStay")]),t._v(" "),a("p",[t._v("视区停留事件"),a("code",[t._v("heatmap.initScrollmap()")])]),t._v(" "),a("p",[t._v("绑定了两个事件"),a("code",[t._v("scroll")]),t._v("和"),a("code",[t._v("unload")])]),t._v(" "),a("p",[t._v("滚动时，有1s的debounce")]),t._v(" "),a("p",[t._v("滚动结束后的时间 - 上次记录的时间 = 视区停留时间($scroll_event_duration)")]),t._v(" "),a("p",[t._v("默认停留时间大于4s且滚动后位置变化了才会记录，且"),a("code",[t._v("scroll_event_duration")]),t._v("最大不超过18000秒")]),t._v(" "),a("p",[t._v("最后更新上次记录时间，"),a("code",[t._v("track")]),t._v("数据")]),t._v(" "),a("p",[t._v("在页面关闭前，需要收集关闭前的停留数据，所以需要绑定"),a("code",[t._v("unload")]),t._v("事件，除了该事件是立即执行的之外，其他和上面一样")]),t._v(" "),a("p",[t._v("但其实他们这种收集并不是很准，页面不可见时的事件就没有减掉，还有长时间无动作时的判断。可能这方面的数据对数据分析并没有很大的影响，也可能这些情况属于小概率事件，可以忽略，或者这也属于正常操作的范畴，总之他们不处理肯定是有一定道理的。")]),t._v(" "),a("h3",{attrs:{id:"sd-track"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sd-track"}},[t._v("#")]),t._v(" sd.track")]),t._v(" "),a("p",[t._v("所有收集到的数据都要通过"),a("code",[t._v("sd.track")]),t._v("来处理和发送，其内部有两步")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("saEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("check")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  properties"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" t\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" saEvent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"track"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  properties"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" t\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("saEvent.check")]),t._v("用来判断待发送的数据格式，"),a("code",[t._v("value")]),t._v("是否都是字符串")]),t._v(" "),a("p",[a("code",[t._v("saEvent.send")]),t._v("先对待发送数据再添加一些通用信息，如id、version什么的，在对这些信息做格式校验，还是蛮严谨的，数据准备完成，"),a("code",[t._v("sendState.getSendCall")])]),t._v(" "),a("p",[t._v("当页面是APP内的H5时，"),a("code",[t._v("use_app_track=true")]),t._v("数据可以通过"),a("code",[t._v("SensorsData_APP_JS_Bridge")]),t._v("发往APP，在APP里的SDK里统一处理，当出错后会构造一个iframe，往"),a("code",[t._v("sensorsanalytics://trackEvent?event=")]),t._v("发一个跨域请求，这其实是有点那个的，严格一点就属于数据泄露了。")]),t._v(" "),a("p",[t._v("数据发送在"),a("code",[t._v("dataSend")]),t._v("类里，请求格式有三种"),a("code",[t._v("image")]),t._v("，"),a("code",[t._v("ajax")]),t._v("，"),a("code",[t._v("beacon")]),t._v("，默认第一种，后两种在不支持的情况下会切换为第一种。")]),t._v(" "),a("ul",[a("li",[t._v("image")])]),t._v(" "),a("p",[t._v("构造一个1像素的img标签，必要时添加跨域，给src赋值的那一刻即发送了数据")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("img "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"img"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nsd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("para"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("img_use_crossorigin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("crossOrigin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"anonymous"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("server_url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dataSend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSendUrl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("server_url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("server_url\n")])])]),a("ul",[a("li",[t._v("ajax")])]),t._v(" "),a("p",[t._v("发了一个post请求，跨域且不携带cookie，不管成功失败都视为结束")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("_"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("server_url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"POST"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  credentials"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  timeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" sd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("para"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("datasend_timeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  cors"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEnd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEnd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("beacon")])]),t._v(" "),a("p",[t._v("由于beacon没有回调，所以40ms后就视为结束")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("navigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendBeacon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("server_url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEnd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("p",[t._v("以上大致分析了神策数据前端埋点的全埋点和手动埋点的实现原理，其实原理都很简单，之所以要看他们的源码，是因为我想看看业内比较成熟的解决方案是怎么个样子，至于为什么选神策而不是百度统计等产品，其实是觉得神策这个名字酷酷的。")]),t._v(" "),a("p",[t._v("以上方法适用于任何地方，但有些东西结合当前项目的框架能实现的更好，就比如上篇文章的"),a("code",[t._v("v-log")]),t._v("，可如果要实现"),a("code",[t._v("v-log")]),t._v(",就不是引入一个SDK那么方便的事了，只能说各有利弊。")]),t._v(" "),a("p",[t._v("代码没开源，只能看手动美化后的压缩代码，代码压缩后有很多反人类的写法，不关键的变量名都成了a,b,c,d，各种三元运算符与或非多重嵌套，而且所有代码合在同一个文件里，分不清东南西北。不过从里面可以看出来，他们的代码逻辑还是比较清晰的，各个模块功能明确，外部依赖几乎没有，毕竟埋点本身就不是一个很复杂的功能，收集数据只是第一步，就像吃东西，拿到数据，相当于手把食物放到了嘴里，之后还有唾液的分解，经过食道到胃，在经过小肠大肠，最后拉出来，才算是走完了一个流程。前端需要做的不仅仅是收集食物放到嘴里，还需要做个展示台，把最后的屎展示给别人看，别人通过多个角度的观察，最后得出你昨天吃了金针菇这个结论，形成了一个闭环，这就是所谓的"),a("code",[t._v("有屎有终")]),t._v("。")])])}),[],!1,null,null,null);s.default=e.exports}}]);