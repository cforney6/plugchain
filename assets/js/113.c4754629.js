(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{543:function(a,t,s){"use strict";s.r(t);var r=s(57),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"收益分配"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#收益分配"}},[a._v("#")]),a._v(" 收益分配")]),a._v(" "),s("h2",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[a._v("#")]),a._v(" 简介")]),a._v(" "),s("p",[a._v("该模块负责将收集的交易费和通胀的代币分发给所有验证人和委托人。为了减少计算压力，引入了一种被动分配策略。\n"),s("code",[a._v("被动")]),a._v("意味着不会直接向贡献者自动支付利益。委托人或者验证人必须手动发送交易以取回其收益，否则，他们的收益将保留在全局收益池中。")]),a._v(" "),s("h2",{attrs:{id:"收益"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#收益"}},[a._v("#")]),a._v(" 收益")]),a._v(" "),s("h3",{attrs:{id:"收益的来源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#收益的来源"}},[a._v("#")]),a._v(" 收益的来源")]),a._v(" "),s("ol",[s("li",[a._v("交易所产生的交易费 "),s("code",[a._v("fees")]),a._v("（由交易的第一个签名者支付"),s("code",[a._v("fees")]),a._v("）")]),a._v(" "),s("li",[a._v("通胀的代币 "),s("code",[a._v("plug")]),a._v("（目前Plug Chain系统设置的通胀为13%每年，通证总量为"),s("code",[a._v("20亿")]),a._v("）")])]),a._v(" "),s("h3",{attrs:{id:"收益的去向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#收益的去向"}},[a._v("#")]),a._v(" 收益的去向")]),a._v(" "),s("ol",[s("li",[a._v("验证人")]),a._v(" "),s("li",[a._v("委托人")]),a._v(" "),s("li",[a._v("社区基金")]),a._v(" "),s("li",[a._v("出块奖励")])]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("提示")]),a._v(" "),s("p",[s("RouterLink",{attrs:{to:"/zh/concepts/general-concepts.html#staking-收益计算公式"}},[a._v("计算公式")])],1)]),a._v(" "),s("h2",{attrs:{id:"使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[a._v("#")]),a._v(" 使用场景")]),a._v(" "),s("h3",{attrs:{id:"设置收益取回地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置收益取回地址"}},[a._v("#")]),a._v(" 设置收益取回地址")]),a._v(" "),s("p",[a._v("默认情况下，收益将支付给发送委托交易的钱包。")]),a._v(" "),s("p",[a._v("委托人可以更改自己收益取回钱包的地址。将委托地址对应的钱包（标记为"),s("code",[a._v("A")]),a._v("），希望收益取回钱包地址（标记为"),s("code",[a._v("B")]),a._v("）。")]),a._v(" "),s("p",[a._v("设置钱包B为取回收益的钱包：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind tx distribution set-withdraw-addr "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("withdraw-addr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h3",{attrs:{id:"取回收益"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#取回收益"}},[a._v("#")]),a._v(" 取回收益")]),a._v(" "),s("p",[a._v("根据取回场景的不同，有2种方式可以取回收益：")]),a._v(" "),s("p",[a._v("1."),s("code",[a._v("withdraw-all-rewards")]),a._v("：提取所有在外的委托收益")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind tx distribution withdraw-all-rewards "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" --from"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --fees"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("20uplugcn --chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("plugchain_520-1\n")])])]),s("p",[a._v("2."),s("code",[a._v("withdraw-rewards")]),a._v(" ：从指定验证人处提取委托收益")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind tx distribution withdraw-rewards "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("validator-addr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" --from"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --fees"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("20uplugcn --chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("plugchain_520-1\n")])])]),s("h3",{attrs:{id:"查询收益"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询收益"}},[a._v("#")]),a._v(" 查询收益")]),a._v(" "),s("p",[a._v("查询委托人获得的所有奖励，可以选择为来自单个验证者的奖励。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind query distribution rewards "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("delegator-addr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("validator-addr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("p",[a._v("对于其它distribution相关的命令，请参考"),s("RouterLink",{attrs:{to:"/zh/cli-client/distribution.html"}},[a._v("stake-cli")])],1)])}),[],!1,null,null,null);t.default=e.exports}}]);