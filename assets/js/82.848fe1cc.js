(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{509:function(t,v,_){"use strict";_.r(v);var d=_(57),e=Object(d.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"params"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#params"}},[t._v("#")]),t._v(" Params")]),t._v(" "),_("p",[t._v("Params模块允许查询系统里预设的参数,查询结果中除了Gov模块的参数,其他都可以通过"),_("RouterLink",{attrs:{to:"/zh/cli-client/gov.html"}},[t._v("Gov模块")]),t._v("发起提议来修改。")],1),t._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[t._v("plugchaind query params subspace "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("subspace"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),_("p",[_("code",[t._v("subspace")]),t._v("目前支持："),_("code",[t._v("auth")]),t._v(","),_("code",[t._v("bank")]),t._v(","),_("code",[t._v("staking")]),t._v(","),_("code",[t._v("mint")]),t._v(","),_("code",[t._v("distribution")]),t._v(","),_("code",[t._v("slashing")]),t._v(","),_("code",[t._v("gov")]),t._v(","),_("code",[t._v("crisis")]),t._v(","),_("code",[t._v("token")]),t._v("。\n其中,可用于每个"),_("code",[t._v("subspace")]),t._v("查询的参数如下：")]),t._v(" "),_("h2",{attrs:{id:"auth"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#auth"}},[t._v("#")]),t._v(" auth")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("key")]),t._v(" "),_("th",[t._v("description")]),t._v(" "),_("th",[t._v("default")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("code",[t._v("MaxMemoCharacters")])]),t._v(" "),_("td",[t._v("交易字段中备注的最大字符数")]),t._v(" "),_("td",[t._v("256")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("TxSigLimit")])]),t._v(" "),_("td",[t._v("每笔交易的最大签名数量")]),t._v(" "),_("td",[t._v("7")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("TxSizeCostPerByte")])]),t._v(" "),_("td",[t._v("交易的每个字节消耗的Gas")]),t._v(" "),_("td",[t._v("10")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("SigVerifyCostED25519")])]),t._v(" "),_("td",[t._v("edd2519算法签名验证消耗的Gas")]),t._v(" "),_("td",[t._v("590")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("SigVerifyCostSecp256k1")])]),t._v(" "),_("td",[t._v("secp256k1算法签名验证消耗的Gas")]),t._v(" "),_("td",[t._v("1000")])])])]),t._v(" "),_("h2",{attrs:{id:"bank"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#bank"}},[t._v("#")]),t._v(" bank")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("key")]),t._v(" "),_("th",[t._v("description")]),t._v(" "),_("th",[t._v("default")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("code",[t._v("SendEnabled")])]),t._v(" "),_("td",[t._v("支持转账的代币")]),t._v(" "),_("td",[t._v("{}")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("DefaultSendEnabled")])]),t._v(" "),_("td",[t._v("是否开启转账功能")]),t._v(" "),_("td",[t._v("true")])])])]),t._v(" "),_("h2",{attrs:{id:"staking"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#staking"}},[t._v("#")]),t._v(" staking")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("key")]),t._v(" "),_("th",[t._v("description")]),t._v(" "),_("th",[t._v("default")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("code",[t._v("UnbondingTime")])]),t._v(" "),_("td",[t._v("抵押解绑时间")]),t._v(" "),_("td",[t._v("3w(weeks)")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("MaxValidators")])]),t._v(" "),_("td",[t._v("最大验证人数量")]),t._v(" "),_("td",[t._v("100")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("MaxEntries")])]),t._v(" "),_("td",[t._v("解绑、转委托的最大数量")]),t._v(" "),_("td",[t._v("7")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("BondDenom")])]),t._v(" "),_("td",[t._v("可抵押的代币")]),t._v(" "),_("td",[t._v("uplugcn")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("HistoricalEntries")])]),t._v(" "),_("td",[t._v("历史条目数")]),t._v(" "),_("td",[t._v("100")])])])]),t._v(" "),_("h2",{attrs:{id:"mint"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mint"}},[t._v("#")]),t._v(" mint")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("key")]),t._v(" "),_("th",[t._v("description")]),t._v(" "),_("th",[t._v("default")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("code",[t._v("Inflation")])]),t._v(" "),_("td",[t._v("代币增发频率")]),t._v(" "),_("td",[t._v("0.04")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("MintDenom")])]),t._v(" "),_("td",[t._v("增发的代币名称")]),t._v(" "),_("td",[t._v("uplugcn")])])])]),t._v(" "),_("h2",{attrs:{id:"distribution"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#distribution"}},[t._v("#")]),t._v(" distribution")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("key")]),t._v(" "),_("th",[t._v("description")]),t._v(" "),_("th",[t._v("default")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("code",[t._v("communitytax")])]),t._v(" "),_("td",[t._v("提现收取的手续费率")]),t._v(" "),_("td",[t._v("0.02")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("baseproposerreward")])]),t._v(" "),_("td",[t._v("区块提议者的基础奖励率")]),t._v(" "),_("td",[t._v("0.01")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("bonusproposerreward")])]),t._v(" "),_("td",[t._v("区块提议者的奖励率")]),t._v(" "),_("td",[t._v("0.04")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("withdrawaddrenabled")])]),t._v(" "),_("td",[t._v("是否支持设置提现地址")]),t._v(" "),_("td",[t._v("true")])])])]),t._v(" "),_("h2",{attrs:{id:"slashing"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#slashing"}},[t._v("#")]),t._v(" slashing")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("key")]),t._v(" "),_("th",[t._v("description")]),t._v(" "),_("th",[t._v("default")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("code",[t._v("SignedBlocksWindow")])]),t._v(" "),_("td",[t._v("验证人下线的滑动窗口大小")]),t._v(" "),_("td",[t._v("100")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("MinSignedPerWindow")])]),t._v(" "),_("td",[t._v("每个窗口最低投票率")]),t._v(" "),_("td",[t._v("0.5")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("DowntimeJailDuration")])]),t._v(" "),_("td",[t._v("验证人最大的下线时间")]),t._v(" "),_("td",[t._v("10m")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("SlashFractionDoubleSign")])]),t._v(" "),_("td",[t._v("双重签名的惩罚系数")]),t._v(" "),_("td",[t._v("1/20")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("SlashFractionDowntime")])]),t._v(" "),_("td",[t._v("验证人下线的惩罚系数")]),t._v(" "),_("td",[t._v("1/100")])])])]),t._v(" "),_("h2",{attrs:{id:"gov"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#gov"}},[t._v("#")]),t._v(" gov")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("key")]),t._v(" "),_("th",[t._v("description")]),t._v(" "),_("th",[t._v("default")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("code",[t._v("depositparams")])]),t._v(" "),_("td",[t._v("提议抵押阶段的相关参数")]),t._v(" "),_("td",[_("code",[t._v("min_deposit")]),t._v(": 10000000plug; "),_("code",[t._v("max_deposit_period")]),t._v(": 2d(days)")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("votingparams")])]),t._v(" "),_("td",[t._v("提议投票阶段的相关参数")]),t._v(" "),_("td",[_("code",[t._v("voting_period")]),t._v(": 2d(days)")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("tallyparams")])]),t._v(" "),_("td",[t._v("投票统计阶段的相关参数")]),t._v(" "),_("td",[_("code",[t._v("quorum")]),t._v(": 0.334; "),_("code",[t._v("threshold")]),t._v(": 0.5; "),_("code",[t._v("veto_threshold")]),t._v(": 0.334")])])])]),t._v(" "),_("h2",{attrs:{id:"crisis"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#crisis"}},[t._v("#")]),t._v(" crisis")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("key")]),t._v(" "),_("th",[t._v("description")]),t._v(" "),_("th",[t._v("default")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("code",[t._v("ConstantFee")])]),t._v(" "),_("td",[t._v("固定费用")]),t._v(" "),_("td",[t._v("1000uplugcn")])])])]),t._v(" "),_("h2",{attrs:{id:"token"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#token"}},[t._v("#")]),t._v(" token")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("key")]),t._v(" "),_("th",[t._v("description")]),t._v(" "),_("th",[t._v("default")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("code",[t._v("IssueTokenBaseFee")])]),t._v(" "),_("td",[t._v("固定费用")]),t._v(" "),_("td",[t._v("10000uplugcn")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("OperateTokenFeeRatio")])]),t._v(" "),_("td",[t._v("操作费用比例")]),t._v(" "),_("td",[t._v("0.1")])])])])])}),[],!1,null,null,null);v.default=e.exports}}]);