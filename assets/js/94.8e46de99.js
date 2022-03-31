(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{520:function(t,_,v){"use strict";v.r(_);var d=v(57),a=Object(d.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"治理参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#治理参数"}},[t._v("#")]),t._v(" 治理参数")]),t._v(" "),v("p",[t._v("在Plug Chain中，存在一些特殊的参数，它们可通过链上治理被修改。持有plug通证的用户都可以参与到参数修改的链上治理。\n如果社区对某些可修改的参数不满意，可以发起"),v("RouterLink",{attrs:{to:"/zh/features/governance.html#usage-scenario-of-parameter-change"}},[t._v("参数修改提案")]),t._v("，社区投票通过后即可在线自动完成修改。")],1),t._v(" "),v("h2",{attrs:{id:"auth-模块可治理参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#auth-模块可治理参数"}},[t._v("#")]),t._v(" Auth 模块可治理参数")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("字段")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("有效范围")]),t._v(" "),v("th",[t._v("当前值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("auth/MaxMemoCharacters")])]),t._v(" "),v("td",[t._v("交易的memo字段的最大字符数")]),t._v(" "),v("td",[t._v("(0, 18446744073709551615]")]),t._v(" "),v("td",[t._v("256")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("auth/TxSigLimit")])]),t._v(" "),v("td",[t._v("每个交易的最大签名数")]),t._v(" "),v("td",[t._v("(0, 18446744073709551615]")]),t._v(" "),v("td",[t._v("7")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("auth/TxSizeCostPerByte")])]),t._v(" "),v("td",[t._v("交易每个字节消耗的gas量")]),t._v(" "),v("td",[t._v("(0, 18446744073709551615]")]),t._v(" "),v("td",[t._v("10")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("auth/SigVerifyCostED25519")])]),t._v(" "),v("td",[t._v("在ED25519算法签名验证上花费的gas")]),t._v(" "),v("td",[t._v("(0, 18446744073709551615]")]),t._v(" "),v("td",[t._v("590")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("auth/SigVerifyCostSecp256k1")])]),t._v(" "),v("td",[t._v("在Secp256k1算法签名验证上花费的gas")]),t._v(" "),v("td",[t._v("(0, 18446744073709551615]")]),t._v(" "),v("td",[t._v("1000")])])])]),t._v(" "),v("h2",{attrs:{id:"bank-模块可治理参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#bank-模块可治理参数"}},[t._v("#")]),t._v(" Bank 模块可治理参数")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("字段")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("有效范围")]),t._v(" "),v("th",[t._v("当前值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("bank/SendEnabled")])]),t._v(" "),v("td",[t._v("支持transfer的token集合")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("[]")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("bank/DefaultSendEnabled")])]),t._v(" "),v("td",[t._v("默认是否支持转账功能")]),t._v(" "),v("td",[t._v("{true,false}")]),t._v(" "),v("td",[t._v("true")])])])]),t._v(" "),v("p",[t._v("详见 "),v("RouterLink",{attrs:{to:"/zh/features/bank.html"}},[t._v("Bank")])],1),t._v(" "),v("h2",{attrs:{id:"distribution-模块可治理参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#distribution-模块可治理参数"}},[t._v("#")]),t._v(" Distribution 模块可治理参数")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("字段")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("有效范围")]),t._v(" "),v("th",[t._v("当前值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("distribution/communitytax")])]),t._v(" "),v("td",[t._v("提现收取的手续费率")]),t._v(" "),v("td",[t._v("[0, 1]")]),t._v(" "),v("td",[t._v("0.02")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("distribution/baseproposerreward")])]),t._v(" "),v("td",[t._v("区块提议者的基础奖励率")]),t._v(" "),v("td",[t._v("[0, 1]")]),t._v(" "),v("td",[t._v("0.01")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("distribution/bonusproposerreward")])]),t._v(" "),v("td",[t._v("区块提议者的奖励率")]),t._v(" "),v("td",[t._v("[0, 1]")]),t._v(" "),v("td",[t._v("0.04")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("distribution/withdrawaddrenabled")])]),t._v(" "),v("td",[t._v("是否支持设置提现地址")]),t._v(" "),v("td",[t._v("{true,false}")]),t._v(" "),v("td",[t._v("true")])])])]),t._v(" "),v("p",[t._v("详见 "),v("RouterLink",{attrs:{to:"/zh/features/distribution.html"}},[t._v("Distribution")])],1),t._v(" "),v("h2",{attrs:{id:"gov-模块可治理参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#gov-模块可治理参数"}},[t._v("#")]),t._v(" Gov 模块可治理参数")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("字段")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("有效范围")]),t._v(" "),v("th",[t._v("当前值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("gov/depositparams")])]),t._v(" "),v("td",[t._v("提议抵押阶段的相关参数")]),t._v(" "),v("td",[t._v("max_deposit_period:(0, 9223372036854775807]")]),t._v(" "),v("td",[t._v('{"min_deposit": [{"denom": "uplugcn", "amount": "10000000"}], "max_deposit_period": "604800s" },')])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("gov/votingparams")])]),t._v(" "),v("td",[t._v("提议投票阶段的相关参数")]),t._v(" "),v("td",[t._v("voting_period:(0, 9223372036854775807]")]),t._v(" "),v("td",[t._v('{"voting_period": "1209600s"}')])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("gov/tallyparams")])]),t._v(" "),v("td",[t._v("投票统计阶段的相关参数")]),t._v(" "),v("td",[t._v("quorum:[0,1]"),v("br"),t._v("threshold:(0,1]"),v("br"),t._v("veto_threshold:(0,1]")]),t._v(" "),v("td",[t._v('{"quorum":"0.334000000000000000","threshold": "0.500000000000000000","veto_threshold": "0.334000000000000000"}')])])])]),t._v(" "),v("p",[t._v("详见 "),v("RouterLink",{attrs:{to:"/zh/features/governance.html"}},[t._v("Governance")])],1),t._v(" "),v("h2",{attrs:{id:"ibc-模块可治理参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ibc-模块可治理参数"}},[t._v("#")]),t._v(" IBC 模块可治理参数")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("字段")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("有效范围")]),t._v(" "),v("th",[t._v("当前值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("ibc/AllowedClients")])]),t._v(" "),v("td",[t._v("支持ibc的客户端")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v('["06-solomachine","07-tendermint"]')])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("transfer/SendEnabled")])]),t._v(" "),v("td",[t._v("是否开启交易功能")]),t._v(" "),v("td",[t._v("{true,false}")]),t._v(" "),v("td",[t._v("true")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("transfer/ReceiveEnabled")])]),t._v(" "),v("td",[t._v("是否开启接收功能")]),t._v(" "),v("td",[t._v("{true,false}")]),t._v(" "),v("td",[t._v("true")])])])]),t._v(" "),v("h2",{attrs:{id:"mint-模块可治理参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mint-模块可治理参数"}},[t._v("#")]),t._v(" Mint 模块可治理参数")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("字段")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("有效范围")]),t._v(" "),v("th",[t._v("当前值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("mint/Inflation")])]),t._v(" "),v("td",[t._v("代币增发频率")]),t._v(" "),v("td",[t._v("[0, 0.2]")]),t._v(" "),v("td",[t._v("0.13")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("mint/MintDenom")])]),t._v(" "),v("td",[t._v("增发的代币名称")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("uplugcn")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("mint/params")])]),t._v(" "),v("td",[t._v("增发参数")]),t._v(" "),v("td",[t._v("[]")]),t._v(" "),v("td",[t._v('{"mint_denom": "uplugcn","inflation_rate_change": "0.130000000000000000","inflation_max": "0.200000000000000000","inflation_min": "0.070000000000000000","goal_bonded": "0.670000000000000000","blocks_per_year": "6311520"}')])])])]),t._v(" "),v("p",[t._v("详见 "),v("RouterLink",{attrs:{to:"/zh/features/mint.html"}},[t._v("Mint")])],1),t._v(" "),v("h2",{attrs:{id:"slashing-模块可治理参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#slashing-模块可治理参数"}},[t._v("#")]),t._v(" Slashing 模块可治理参数")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("字段")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("有效范围")]),t._v(" "),v("th",[t._v("当前值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("slashing/DowntimeJailDuration")])]),t._v(" "),v("td",[t._v("验证人最大的下线时间")]),t._v(" "),v("td",[t._v("(0, 9223372036854775807]")]),t._v(" "),v("td",[t._v("600s")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("slashing/MinSignedPerWindow")])]),t._v(" "),v("td",[t._v("每个窗口最低投票率")]),t._v(" "),v("td",[t._v("[0, 1]")]),t._v(" "),v("td",[t._v("0.5")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("slashing/SignedBlocksWindow")])]),t._v(" "),v("td",[t._v("验证人下线的滑动窗口大小")]),t._v(" "),v("td",[t._v("(0, 18446744073709551615]")]),t._v(" "),v("td",[t._v("100")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("slashing/SlashFractionDoubleSign")])]),t._v(" "),v("td",[t._v("双重签名的惩罚系数")]),t._v(" "),v("td",[t._v("[0, 1]")]),t._v(" "),v("td",[t._v("0.05")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("slashing/SlashFractionDowntime")])]),t._v(" "),v("td",[t._v("验证人下线的惩罚系数")]),t._v(" "),v("td",[t._v("[0, 1]")]),t._v(" "),v("td",[t._v("0.01")])])])]),t._v(" "),v("p",[t._v("详见 "),v("RouterLink",{attrs:{to:"/zh/features/slashing.html"}},[t._v("Slashing")])],1),t._v(" "),v("h2",{attrs:{id:"staking-模块可治理参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#staking-模块可治理参数"}},[t._v("#")]),t._v(" Staking 模块可治理参数")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("字段")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("有效范围")]),t._v(" "),v("th",[t._v("当前值")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("staking/UnbondingTime")])]),t._v(" "),v("td",[t._v("抵押解绑时间")]),t._v(" "),v("td",[t._v("(0, 9223372036854775807]")]),t._v(" "),v("td",[t._v("1814400s")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("staking/MaxValidators")])]),t._v(" "),v("td",[t._v("最大验证人数量")]),t._v(" "),v("td",[t._v("(0, 4294967295]")]),t._v(" "),v("td",[t._v("100")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("staking/MaxEntries")])]),t._v(" "),v("td",[t._v("解绑、转委托的最大数量")]),t._v(" "),v("td",[t._v("(0, 4294967295]")]),t._v(" "),v("td",[t._v("7")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("staking/BondDenom")])]),t._v(" "),v("td",[t._v("可抵押的代币")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("uplugcn")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("staking/HistoricalEntries")])]),t._v(" "),v("td",[t._v("历史条目")]),t._v(" "),v("td",[t._v("[0, 4294967295]")]),t._v(" "),v("td",[t._v("10000")])])])]),t._v(" "),v("p",[t._v("详见 "),v("RouterLink",{attrs:{to:"/zh/features/staking.html"}},[t._v("Staking")])],1)])}),[],!1,null,null,null);_.default=a.exports}}]);