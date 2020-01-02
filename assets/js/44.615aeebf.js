(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{244:function(t,e,n){"use strict";n.r(e);var v=n(0),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"第一届缤纷-滨江前端技术沙龙总结与感想"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第一届缤纷-滨江前端技术沙龙总结与感想"}},[t._v("#")]),t._v(" 第一届缤纷-滨江前端技术沙龙总结与感想")]),t._v(" "),n("p",[t._v("这本来是杭州那边的一些大公司组织的，据说原本是公司内部的沙龙，后来发现议题内容还不错，就做成了一次公开活动。在九月底网上冲浪的时候偶然发现了这个活动，一看是免费的，但是需要审核，于是就厚着脸皮填了些信息，没想到竟然通过了。")]),t._v(" "),n("p",[t._v("10月26日阿里的一个园区，有两个厅，根据官网上公布的议题，选择了一号厅。一个厅大概一百多个人，空间不大，坐的满满当当的。")]),t._v(" "),n("p",[t._v("前两个议题都是关于node，偏后端。一个是微医的关于SSR的应用，我觉得SSR的位置蛮尴尬的，它的好处无非是首屏加载快和SEO优化。")]),t._v(" "),n("p",[t._v("对于SEO，只要百度不死，就没有钱解决不了的，就算你SEO做的再好，只要触及了它的利益或者有人给了足够的钱，你的网站就得乖乖被人家踩在脚底下。做不做，又有什么意义，除非是像简书、CSDN那种做内容的，不过同是做内容的，掘金的内容比前面两个好多了，搜索的时候又出现过几次掘金的身影呢？")]),t._v(" "),n("p",[t._v("首屏加载，现在绝大多数页面，首屏加载真的慢吗？网络都上5G了，硬件设备也一年比一年好，恐怕故意拖慢首屏加载都很难吧。就算慢，用户又真的在意吗？页面秒开是用户的需求还是开发的需求？需要页面秒开的场景恐怕只有支付宝扫码支付的时候吧。")]),t._v(" "),n("p",[t._v("在大公司里，node一般处于后端偏辅助的位置，比如网易云音乐的静态文件服务，他们会有很多活动页面，又有很多用户，像每年的听歌报告，这就需要对资源做缓存什么的，这块我也不是很懂，场景也很局限，毕竟首先我要搞到这几亿的用户再说...")]),t._v(" "),n("p",[t._v("闪电分享是关于阿里的扁鹊，一个错误监控平台，把前后端的错误统一收集起来，再分析归类，配合叮叮报警，在后台能看到报错的一整条链。实现这个的前提是前后端的代码都要做统一格式的错误收集，那这个格式谁来定就是一个问题。还有在分析的时候结合深度学习可能会有点用，市面上的Fundebug感觉做的比这个好，我两个都没用过，只是感觉！")]),t._v(" "),n("p",[t._v("如何量化FMP，即First Meaningful Paint，首次有效绘制，页面首要内容绘制完成的时间，不同页面有不同的首要内容。要量化FMP，一是定位找出首要内容，二是计算出该区域的渲染时长。chrome的lighthouse里有这个指标，不过这里的量化并没有依赖lighthouse，而是手动计算DOM父子区块的面积，通过一个比较逻辑得出首要内容的区块。而时间则是通过MutationObserver监听DOM树的改变，通过目标区块的深度得出改变时的时间。我不知道总结的对不对，没试过，不过这个东西的实用性如何？可以封装成一个性能监控插件，类似于民间版的lighthouse。量化后得出的数值有什么价值，对于SSR的页面岂不是接近于0？")]),t._v(" "),n("p",[t._v("这次沙龙最期待的就是Vue Cli的维护者蒋豪群了，上次在Vue Conf里是第一次见，当时他说的是一些Vue编译的东西，很惭愧没听懂，这次分享的是维护开源项目的一些经验。这离我还是有点远，毕竟我还没能做出一个哪怕稍微流行一点点的开源项目，以前做的东西不管有没有人用都不维护了，我也不想这样的啊，刚开始做的时候可都是热情满满呢，发布一个初始版本后就开始转去做其他东西了，可能这就是渣男吧...总之一个开源项目要流行起来，首先要抓住人们的痛点，需要它才会用它；其次质量要好，至少能正常用；然后要经常维护，别让用户以为你死了。至于形成社区，发展生态，我还很远很远很远。")]),t._v(" "),n("p",[t._v("最后一个是关于文档转成代码的议题，现在有很多自动生成代码的工具，有通过设计稿生成网站框架的，有利用拖拽控件生成网站的，甚至还有语音转成代码的，这次是把文档转成网站。把产品经理按照一定规则编写需求文档，就能确定网站的大致布局和功能，在通过开发人员加上一些个性化的样式和功能及接口，就能生成一个网站。其实这种类似的提高效率的方式，提高的只是简单页面的工作效率，而简答页面从头写起来也很快，真正花时间的复杂页面的效率问题还是没有解决，而对文档格式的制定反而会增加产品和开发的困扰，有些产品写个markdown都不会更别提这个了。复杂页面为什么复杂，还不是产品提的奇葩需求，网上开发的吐槽对象十个里面至少有8个是产品，我也是服了。")]),t._v(" "),n("p",[t._v("本来不打算写总结的，有些东西写着写着就写成吐槽了，不过三天后还是写了，出尔反尔，可能这就是渣男吧。总的来说，没有上次Vue Conf好，不过也是值得我跑去听一次的。这些内容可以扩展视野，但实际的应用性不是很大，要么不成熟要么很鸡肋，不过万一呢，要是从这里面发现一个亮点，跑一百次也值了。")])])}),[],!1,null,null,null);e.default=_.exports}}]);