(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{503:function(a,t,s){"use strict";s.r(t);var r=s(57),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"gov"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gov"}},[a._v("#")]),a._v(" Gov")]),a._v(" "),s("p",[a._v("此模块提供"),s("RouterLink",{attrs:{to:"/features/governance.html"}},[a._v("治理")]),a._v("的基本功能。")],1),a._v(" "),s("h2",{attrs:{id:"可用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可用命令"}},[a._v("#")]),a._v(" 可用命令")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("名称")]),a._v(" "),s("th",[a._v("描述")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-query-gov-proposal"}},[a._v("proposal")])]),a._v(" "),s("td",[a._v("查询单个提案的详细信息")])]),a._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-query-gov-proposals"}},[a._v("proposals")])]),a._v(" "),s("td",[a._v("使用可选过滤器提案")])]),a._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-query-gov-vote"}},[a._v("vote")])]),a._v(" "),s("td",[a._v("查询一次投票的详细信息")])]),a._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-query-gov-votes"}},[a._v("votes")])]),a._v(" "),s("td",[a._v("查询提案的投票")])]),a._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-query-gov-deposit"}},[a._v("deposit")])]),a._v(" "),s("td",[a._v("查询摸个抵押人在某个提案的抵押信息")])]),a._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-query-gov-deposits"}},[a._v("deposits")])]),a._v(" "),s("td",[a._v("查询提案的所有抵押信息")])]),a._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-query-gov-tally"}},[a._v("tally")])]),a._v(" "),s("td",[a._v("汇总提案投票")])]),a._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-query-gov-param"}},[a._v("param")])]),a._v(" "),s("td",[a._v("查询参数")])]),a._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-query-gov-params"}},[a._v("params")])]),a._v(" "),s("td",[a._v("查询治理流程的参数")])]),a._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-query-gov-proposer"}},[a._v("proposer")])]),a._v(" "),s("td",[a._v("通过提议ID查询提案的发起人地址")])]),a._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-tx-gov-submit-proposal"}},[a._v("submit-proposal")])]),a._v(" "),s("td",[a._v("提交提案")])]),a._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-tx-gov-deposit"}},[a._v("deposit")])]),a._v(" "),s("td",[a._v("为有效的提案抵押代币")])]),a._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-tx-gov-vote"}},[a._v("vote")])]),a._v(" "),s("td",[a._v("为活跃的提案投票，可选值： yes/no/no_with_veto/abstain")])])])]),a._v(" "),s("h2",{attrs:{id:"plugchaind-query-gov-proposal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-query-gov-proposal"}},[a._v("#")]),a._v(" plugchaind query gov proposal")]),a._v(" "),s("p",[a._v("查询单个提案的详细信息。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind query gov proposal "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("proposal-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h3",{attrs:{id:"查询单个提案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询单个提案"}},[a._v("#")]),a._v(" 查询单个提案")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind query gov proposal "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("proposal-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-query-gov-proposals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-query-gov-proposals"}},[a._v("#")]),a._v(" plugchaind query gov proposals")]),a._v(" "),s("p",[a._v("使用可选过滤器提案。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind query gov proposals "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("p",[s("strong",[a._v("标识：")])]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("名称，速记")]),a._v(" "),s("th",[a._v("类型")]),a._v(" "),s("th",[a._v("必须")]),a._v(" "),s("th",[a._v("默认")]),a._v(" "),s("th",[a._v("描述")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("--depositor")]),a._v(" "),s("td",[a._v("Address")]),a._v(" "),s("td"),a._v(" "),s("td"),a._v(" "),s("td",[a._v("按抵押人地址过滤提案")])]),a._v(" "),s("tr",[s("td",[a._v("--limit")]),a._v(" "),s("td",[a._v("uint")]),a._v(" "),s("td"),a._v(" "),s("td"),a._v(" "),s("td",[a._v("返回最新[数量]个提案。 默认为所有提案")])]),a._v(" "),s("tr",[s("td",[a._v("--status")]),a._v(" "),s("td",[a._v("string")]),a._v(" "),s("td"),a._v(" "),s("td"),a._v(" "),s("td",[a._v("按状态过滤提案")])]),a._v(" "),s("tr",[s("td",[a._v("--voter")]),a._v(" "),s("td",[a._v("Address")]),a._v(" "),s("td"),a._v(" "),s("td"),a._v(" "),s("td",[a._v("按投票人地址过滤提案")])])])]),a._v(" "),s("h3",{attrs:{id:"查询所有提案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询所有提案"}},[a._v("#")]),a._v(" 查询所有提案")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind query gov proposals\n")])])]),s("h3",{attrs:{id:"按条件查询提案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#按条件查询提案"}},[a._v("#")]),a._v(" 按条件查询提案")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind query gov proposals --limit"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" --status"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Passed --depositor"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("gx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-query-gov-vote"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-query-gov-vote"}},[a._v("#")]),a._v(" plugchaind query gov vote")]),a._v(" "),s("p",[a._v("查询一次投票的详细信息。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind query gov vote "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("proposal-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("voter-addr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h3",{attrs:{id:"查询单个投票的信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询单个投票的信息"}},[a._v("#")]),a._v(" 查询单个投票的信息")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind query gov vote "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("proposal-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("gx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-query-gov-votes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-query-gov-votes"}},[a._v("#")]),a._v(" plugchaind query gov votes")]),a._v(" "),s("p",[a._v("查询提案的投票信息。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind query gov votes "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("proposal-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h3",{attrs:{id:"查询提案的所有投票"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询提案的所有投票"}},[a._v("#")]),a._v(" 查询提案的所有投票")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind query gov votes "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("proposal-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-query-gov-deposit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-query-gov-deposit"}},[a._v("#")]),a._v(" plugchaind query gov deposit")]),a._v(" "),s("p",[a._v("通过提案ID查询提案中的某个抵押人的抵押信息。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind query gov deposit "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("proposal-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("depositer-addr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h3",{attrs:{id:"查询单个抵押信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询单个抵押信息"}},[a._v("#")]),a._v(" 查询单个抵押信息")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind query gov deposit "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("proposal-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("gx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-query-gov-deposits"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-query-gov-deposits"}},[a._v("#")]),a._v(" plugchaind query gov deposits")]),a._v(" "),s("p",[a._v("查询提案中所有抵押信息。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind query gov deposits "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("proposal-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h3",{attrs:{id:"查询提案的所有抵押信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询提案的所有抵押信息"}},[a._v("#")]),a._v(" 查询提案的所有抵押信息")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind query gov deposits "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("proposal-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-query-gov-tally"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-query-gov-tally"}},[a._v("#")]),a._v(" plugchaind query gov tally")]),a._v(" "),s("p",[a._v("查询提案的计票结果。 您可以通过运行"),s("code",[a._v("plugchaind query gov proposal")]),a._v("来查询提案ID。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind query gov tally "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("proposal-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h3",{attrs:{id:"查询提案统计信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询提案统计信息"}},[a._v("#")]),a._v(" 查询提案统计信息")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind query gov tally "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("proposal-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-query-gov-param"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-query-gov-param"}},[a._v("#")]),a._v(" plugchaind query gov param")]),a._v(" "),s("p",[a._v("查询治理过程的参数 （"),s("code",[a._v("voting")]),a._v(" |"),s("code",[a._v("tallying")]),a._v("| "),s("code",[a._v("deposit")]),a._v("）。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind query gov param "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("param-type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("p",[a._v("例如：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" plugchaind query gov param voting\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" plugchaind query gov param tallying\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" plugchaind query gov param deposit\n")])])]),s("h2",{attrs:{id:"plugchaind-query-gov-params"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-query-gov-params"}},[a._v("#")]),a._v(" plugchaind query gov params")]),a._v(" "),s("p",[a._v("查询治理过程的所有参数。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind query gov params "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-query-gov-proposer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-query-gov-proposer"}},[a._v("#")]),a._v(" plugchaind query gov proposer")]),a._v(" "),s("p",[a._v("通过提议ID查询提案的发起人地址。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind query gov proposer "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("proposal-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-tx-gov-submit-proposal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-tx-gov-submit-proposal"}},[a._v("#")]),a._v(" plugchaind tx gov submit-proposal")]),a._v(" "),s("p",[a._v("提交提案并附带初始委托。 提案标题、描述、类型和抵押可以直接提供，也可以通过JSON文件提供。\n可用命令："),s("code",[a._v("community-pool-spend")]),a._v("，"),s("code",[a._v("param-change")]),a._v("，"),s("code",[a._v("software-upgrade")]),a._v("，"),s("code",[a._v("cancel-software-upgrade")]),a._v(" 。")]),a._v(" "),s("h3",{attrs:{id:"plugchaind-tx-gov-submit-proposal-community-pool-spend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-tx-gov-submit-proposal-community-pool-spend"}},[a._v("#")]),a._v(" plugchaind tx gov submit-proposal community-pool-spend")]),a._v(" "),s("p",[a._v("提交提案并附带初始委托，提案详细信息必须通过JSON文件提供。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind tx gov submit-proposal community-pool-spend "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("path/to/proposal.json"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --from"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key_or_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[s("code",[a._v("proposal.json")]),a._v(" 包含：")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Community Pool Spend"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Pay me some Atoms!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"recipient"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"gx1mjk4p68mmulwla3x5uzlgjwsc3zrms448rel3q"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"amount"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1000uplugcn"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"deposit"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1000uplugcn"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"plugchaind-tx-gov-submit-proposal-param-change"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-tx-gov-submit-proposal-param-change"}},[a._v("#")]),a._v(" plugchaind tx gov submit-proposal param-change")]),a._v(" "),s("p",[a._v("提交参数修改提案。提案详细信息必须通过JSON文件提供。 对于包含的值，只有非空字段将被更新。")]),a._v(" "),s("p",[a._v("重要说明：目前，对参数更改进行了评估，但尚未验证，因此，对于任何“值”更改，对其各自的参数都是有效的（即正确的类型和范围之内），例如 "),s("code",[a._v("MaxValidators")]),a._v("应为整数而不是十进制。")]),a._v(" "),s("p",[a._v("对参数更改建议进行适当的审核应防止这种情况的发生（在治理过程中不应出现任何沉积物），但无论如何都应注意。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind tx gov submit-proposal param-change "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("path/to/proposal.json"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --from"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key_or_address"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[s("code",[a._v("proposal.json")]),a._v(" 包含：")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Staking Param Change"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Update max validators"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"changes"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"subspace"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"staking"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"key"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"MaxValidators"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"value"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("105")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"deposit"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"1000uplugcn"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h3",{attrs:{id:"plugchaind-tx-gov-submit-proposal-software-upgrade"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-tx-gov-submit-proposal-software-upgrade"}},[a._v("#")]),a._v(" plugchaind tx gov submit-proposal software-upgrade")]),a._v(" "),s("p",[a._v("提交软件升级提案，指定唯一的名称和高度或时间，以使升级生效。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind tx gov submit-proposal software-upgrade "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("--upgrade-height "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" --upgrade-time "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("--upgrade-info "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("p",[s("strong",[a._v("标识：")])]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("名称，速记")]),a._v(" "),s("th",[a._v("类型")]),a._v(" "),s("th",[a._v("必须")]),a._v(" "),s("th",[a._v("默认")]),a._v(" "),s("th",[a._v("描述")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("--deposit")]),a._v(" "),s("td",[a._v("Coin")]),a._v(" "),s("td",[a._v("Yes")]),a._v(" "),s("td"),a._v(" "),s("td",[a._v("提案抵押的代币")])]),a._v(" "),s("tr",[s("td",[a._v("--title")]),a._v(" "),s("td",[a._v("string")]),a._v(" "),s("td",[a._v("Yes")]),a._v(" "),s("td"),a._v(" "),s("td",[a._v("提案的标题")])]),a._v(" "),s("tr",[s("td",[a._v("--description")]),a._v(" "),s("td",[a._v("string")]),a._v(" "),s("td",[a._v("Yes")]),a._v(" "),s("td"),a._v(" "),s("td",[a._v("提案的描述")])]),a._v(" "),s("tr",[s("td",[a._v("--upgrade-height")]),a._v(" "),s("td",[a._v("int64")]),a._v(" "),s("td"),a._v(" "),s("td"),a._v(" "),s("td",[a._v("升级必须发生的高度（不要与"),s("code",[a._v("--upgrade-time")]),a._v("一起使用）")])]),a._v(" "),s("tr",[s("td",[a._v("--time")]),a._v(" "),s("td",[a._v("string")]),a._v(" "),s("td"),a._v(" "),s("td"),a._v(" "),s("td",[a._v("升级必须发生的时间（不要与"),s("code",[a._v("--upgrade-height")]),a._v("一起使用）")])]),a._v(" "),s("tr",[s("td",[a._v("--info")]),a._v(" "),s("td",[a._v("string")]),a._v(" "),s("td"),a._v(" "),s("td"),a._v(" "),s("td",[a._v("计划升级的可选信息，例如提交哈希等。")])])])]),a._v(" "),s("h3",{attrs:{id:"plugchaind-tx-gov-submit-proposal-cancel-software-upgrade"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-tx-gov-submit-proposal-cancel-software-upgrade"}},[a._v("#")]),a._v(" plugchaind tx gov submit-proposal cancel-software-upgrade")]),a._v(" "),s("p",[a._v("取消软件升级提案。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind tx gov submit-proposal cancel-software-upgrade "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("p",[s("strong",[a._v("标识：")])]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("名称，速记")]),a._v(" "),s("th",[a._v("类型")]),a._v(" "),s("th",[a._v("必须")]),a._v(" "),s("th",[a._v("默认")]),a._v(" "),s("th",[a._v("描述")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("--deposit")]),a._v(" "),s("td",[a._v("Coin")]),a._v(" "),s("td",[a._v("Yes")]),a._v(" "),s("td"),a._v(" "),s("td",[a._v("提案抵押的代币")])]),a._v(" "),s("tr",[s("td",[a._v("--title")]),a._v(" "),s("td",[a._v("string")]),a._v(" "),s("td",[a._v("Yes")]),a._v(" "),s("td"),a._v(" "),s("td",[a._v("提案的标题")])]),a._v(" "),s("tr",[s("td",[a._v("--description")]),a._v(" "),s("td",[a._v("string")]),a._v(" "),s("td",[a._v("Yes")]),a._v(" "),s("td"),a._v(" "),s("td",[a._v("提案的描述")])])])]),a._v(" "),s("h2",{attrs:{id:"plugchaind-tx-gov-deposit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-tx-gov-deposit"}},[a._v("#")]),a._v(" plugchaind tx gov deposit")]),a._v(" "),s("p",[a._v("为某个提案抵押代币。 您可以通过运行"),s("code",[a._v("plugchaind query gov proposal")]),a._v("来查询提案ID。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind tx gov deposit "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("proposal-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("deposit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h3",{attrs:{id:"为有效的提案抵押"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为有效的提案抵押"}},[a._v("#")]),a._v(" 为有效的提案抵押")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind tx gov deposit "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("proposal-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("deposit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-tx-gov-vote"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-tx-gov-vote"}},[a._v("#")]),a._v(" plugchaind tx gov vote")]),a._v(" "),s("p",[a._v("为一个活跃的提案投票，可选值：yes/no/no_with_veto/abstain。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind tx gov vote "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("proposal-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("option"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h3",{attrs:{id:"为活跃的提案投票"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为活跃的提案投票"}},[a._v("#")]),a._v(" 为活跃的提案投票")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("plugchaind tx gov vote "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("proposal-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("option"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --from"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("key-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --fees"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("20uplugcn\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);