(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{506:function(t,a,s){"use strict";s.r(a);var r=s(57),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"liquidity"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#liquidity"}},[t._v("#")]),t._v(" Liquidity")]),t._v(" "),s("p",[t._v("流动性模块通过提供流动性活动和硬币交换功能，为自动做市商 (AMM) 式的去中心化流动性提供服务。")]),t._v(" "),s("p",[t._v("该模块使用户能够创建流动性池，进行存款和取款，并从流动性池中请求硬币掉期。")]),t._v(" "),s("h2",{attrs:{id:"可用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可用命令"}},[t._v("#")]),t._v(" 可用命令")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-tx-liquidity-create-pool"}},[t._v("create-pool")])]),t._v(" "),s("td",[t._v("创建流动性池")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-tx-liquidity-deposit"}},[t._v("deposit")])]),t._v(" "),s("td",[t._v("将硬币存入流动性池")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-tx-liquidity-swap"}},[t._v("swap")])]),t._v(" "),s("td",[t._v("用流动性池中的活期硬币与给定订单价格进行交换")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-tx-liquidity-withdraw"}},[t._v("withdraw")])]),t._v(" "),s("td",[t._v("从指定的流动性池中提取池硬币")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-q-liquidity-batch"}},[t._v("batch")])]),t._v(" "),s("td",[t._v("查询流动性池批次的详细信息")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-q-liquidity-deposit"}},[t._v("deposit")])]),t._v(" "),s("td",[t._v("查询流动性池批次上的存款消息")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-q-liquidity-deposits"}},[t._v("deposits")])]),t._v(" "),s("td",[t._v("查询流动性池批次的所有存款消息")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-q-liquidity-params"}},[t._v("params")])]),t._v(" "),s("td",[t._v("查询设置为流动性参数的值")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-q-liquidity-pool"}},[t._v("pool")])]),t._v(" "),s("td",[t._v("查询流动资金池的详细信息")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-q-liquidity-pools"}},[t._v("pools")])]),t._v(" "),s("td",[t._v("查询所有流动性池")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-q-liquidity-swap"}},[t._v("swap")])]),t._v(" "),s("td",[t._v("查询流动性池指定池id和消息索引批次上的掉期消息")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-q-liquidity-swaps"}},[t._v("swaps")])]),t._v(" "),s("td",[t._v("查询流动性池批处理中的所有掉期消息")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-q-liquidity-withdraw"}},[t._v("withdraw")])]),t._v(" "),s("td",[t._v("查询流动性池批次中的提款消息")])]),t._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#plugchaind-q-liquidity-withdraws"}},[t._v("withdraws")])]),t._v(" "),s("td",[t._v("查询流动性池批次上的所有提款消息")])])])]),t._v(" "),s("h2",{attrs:{id:"plugchaind-tx-liquidity-create-pool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-tx-liquidity-create-pool"}},[t._v("#")]),t._v(" plugchaind tx liquidity create-pool")]),t._v(" "),s("p",[t._v("创建一个新流动性池。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind tx liquidity create-pool "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pool-type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("deposit-coins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[s("strong",[t._v("标识：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称,速记")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("必须")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("pool-type")]),t._v(" "),s("td",[t._v("uint64")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("流动性池类型的id。唯一支持的池类型是1(即时交换）")])]),t._v(" "),s("tr",[s("td",[t._v("deposit-coins")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("存入流动性池的硬币数量。在池类型1中，存款硬币的数量必须为2。")])])])]),t._v(" "),s("h3",{attrs:{id:"创建新流动性池"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建新流动性池"}},[t._v("#")]),t._v(" 创建新流动性池")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind tx liquidity create-pool "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" 1000000000uatom,50000000000uusd  --from"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("key-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --fees"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("fee"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-tx-liquidity-deposit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-tx-liquidity-deposit"}},[t._v("#")]),t._v(" plugchaind tx liquidity deposit")]),t._v(" "),s("p",[t._v("将硬币存入流动资金池。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind tx liquidity deposit "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pool-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("deposit-coins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[s("strong",[t._v("标识：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称,速记")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("必须")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("pool-id")]),t._v(" "),s("td",[t._v("uint64")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("流动性池的池id")])]),t._v(" "),s("tr",[s("td",[t._v("deposit-coins")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("存入流动性池的硬币数量")])])])]),t._v(" "),s("h3",{attrs:{id:"将硬币存入流动资金池"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将硬币存入流动资金池"}},[t._v("#")]),t._v(" 将硬币存入流动资金池")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind tx liquidity deposit "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" 100000000uatom,5000000000uusd  --from"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("key-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --fees"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("fee"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-tx-liquidity-swap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-tx-liquidity-swap"}},[t._v("#")]),t._v(" plugchaind tx liquidity swap")]),t._v(" "),s("p",[t._v("用流动性池中的活期硬币与给定订单价格进行交换")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind tx liquidity swap "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pool-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("swap-type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("offer-coin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("demand-coin-denom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("order-price"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("swap-fee-rate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[s("strong",[t._v("标识：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称,速记")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("必须")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("pool-id")]),t._v(" "),s("td",[t._v("uint64")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("流动性池的池id")])]),t._v(" "),s("tr",[s("td",[t._v("swap-type")]),t._v(" "),s("td",[t._v("uint64")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("交换消息的交换类型。唯一支持的交换类型是1（即时交换）。")])]),t._v(" "),s("tr",[s("td",[t._v("offer-coin")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("要交换的硬币数量")])]),t._v(" "),s("tr",[s("td",[t._v("demand-coin-denom")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("与报价硬币交换的硬币的面额")])]),t._v(" "),s("tr",[s("td",[t._v("order-price")]),t._v(" "),s("td",[t._v("float")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("订单的限制订单价格。价格是X/Y的交换比率，其中X是第一枚硬币的数量，Y是第二枚硬币的数量，当其名称按字母顺序排序时")])]),t._v(" "),s("tr",[s("td",[t._v("swap-fee-rate")]),t._v(" "),s("td",[t._v("float")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("与掉期金额成比例的掉期费率。掉期费率必须是当前网络中设置为流动性参数的值。")])])])]),t._v(" "),s("h3",{attrs:{id:"发起交换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发起交换"}},[t._v("#")]),t._v(" 发起交换")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind tx liquidity swap "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" 50000000uusd uatom "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.019")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.003")]),t._v("  --from"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("key-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --fees"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("fee"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-tx-liquidity-withdraw"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-tx-liquidity-withdraw"}},[t._v("#")]),t._v(" plugchaind tx liquidity withdraw")]),t._v(" "),s("p",[t._v("从指定的流动性池中提取池硬币。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind tx liquidity withdraw "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pool-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pool-coin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[s("strong",[t._v("标识：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称,速记")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("必须")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("pool-id")]),t._v(" "),s("td",[t._v("uint64")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("流动性池的池id")])]),t._v(" "),s("tr",[s("td",[t._v("pool-coin")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("是")]),t._v(" "),s("td",[t._v("从流动性池中提取的池币金额")])])])]),t._v(" "),s("h3",{attrs:{id:"提取池硬币"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提取池硬币"}},[t._v("#")]),t._v(" 提取池硬币")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind tx liquidity withdraw "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" 10000pool96EF6EA6E5AC828ED87E8D07E7AE2A8180570ADD212117B2DA6F0B75D17A6295 --from"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("key-name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("chain-id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --fees"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("fee"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-q-liquidity-batch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-q-liquidity-batch"}},[t._v("#")]),t._v(" plugchaind  q liquidity batch")]),t._v(" "),s("p",[t._v("查询流动性池批次的详细信息")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity batch "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pool-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"查询流动性池批次的详细信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询流动性池批次的详细信息"}},[t._v("#")]),t._v(" 查询流动性池批次的详细信息")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind q liquidity batch "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" \n")])])]),s("h2",{attrs:{id:"plugchaind-q-liquidity-deposit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-q-liquidity-deposit"}},[t._v("#")]),t._v(" plugchaind q liquidity deposit")]),t._v(" "),s("p",[t._v("查询流动性池指定池id和消息索引的批次存款消息")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity deposit "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pool-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("msg-index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"查询流动性池批次上指定池id和消息索引的存款消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询流动性池批次上指定池id和消息索引的存款消息"}},[t._v("#")]),t._v(" 查询流动性池批次上指定池id和消息索引的存款消息")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity deposit "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-q-liquidity-deposits"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-q-liquidity-deposits"}},[t._v("#")]),t._v(" plugchaind q liquidity deposits")]),t._v(" "),s("p",[t._v("查询指定池上流动性池的所有批次存款消息")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity deposits "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pool-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"查询指定池上流动性池的所有批次存款消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询指定池上流动性池的所有批次存款消息"}},[t._v("#")]),t._v(" 查询指定池上流动性池的所有批次存款消息")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity deposits "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-q-liquidity-params"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-q-liquidity-params"}},[t._v("#")]),t._v(" plugchaind q liquidity params")]),t._v(" "),s("p",[t._v("设置为流动性参数的查询值。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity params "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-q-liquidity-pool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-q-liquidity-pool"}},[t._v("#")]),t._v(" plugchaind q liquidity pool")]),t._v(" "),s("p",[t._v("查询流动资金池的详细信息")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity pool "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pool-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[s("strong",[t._v("标识：")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("名称,速记")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("必须")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("--pool-coin-denom")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("币的面额")])]),t._v(" "),s("tr",[s("td",[t._v("--reserve-acc")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("否")]),t._v(" "),s("td",[t._v("储备账户的Bech32地址")])])])]),t._v(" "),s("h3",{attrs:{id:"查询流动资金池的详细信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询流动资金池的详细信息"}},[t._v("#")]),t._v(" 查询流动资金池的详细信息")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity pool "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-q-liquidity-pools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-q-liquidity-pools"}},[t._v("#")]),t._v(" plugchaind q liquidity pools")]),t._v(" "),s("p",[t._v("查询网络上所有流动性池的详细信息。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity pools "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-q-liquidity-swap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-q-liquidity-swap"}},[t._v("#")]),t._v(" plugchaind q liquidity swap")]),t._v(" "),s("p",[t._v("查询流动性池指定池id和消息索引批次的掉期消息")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity swap "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pool-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("msg-index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"查询流动性池指定池id和消息索引批次的掉期消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询流动性池指定池id和消息索引批次的掉期消息"}},[t._v("#")]),t._v(" 查询流动性池指定池id和消息索引批次的掉期消息")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity swap "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-q-liquidity-swaps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-q-liquidity-swaps"}},[t._v("#")]),t._v(" plugchaind q liquidity swaps")]),t._v(" "),s("p",[t._v("查询流动性池批次中指定池id的所有掉期消息")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity swaps "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pool-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"查询流动性池批次中指定池id的所有掉期消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询流动性池批次中指定池id的所有掉期消息"}},[t._v("#")]),t._v(" 查询流动性池批次中指定池id的所有掉期消息")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity swaps "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-q-liquidity-withdraw"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-q-liquidity-withdraw"}},[t._v("#")]),t._v(" plugchaind q liquidity withdraw")]),t._v(" "),s("p",[t._v("在流动性池批次中查询指定池id和消息索引的提款消息")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity withdraw "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pool-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("msg-index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"在流动性池批次中查询指定池id和消息索引的提款消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在流动性池批次中查询指定池id和消息索引的提款消息"}},[t._v("#")]),t._v(" 在流动性池批次中查询指定池id和消息索引的提款消息")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity withdraw "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n")])])]),s("h2",{attrs:{id:"plugchaind-q-liquidity-withdraws"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugchaind-q-liquidity-withdraws"}},[t._v("#")]),t._v(" plugchaind q liquidity withdraws")]),t._v(" "),s("p",[t._v("查询流动性池批次上指定池id的所有提款消息")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity withdraws "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pool-id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h3",{attrs:{id:"查询流动性池批次上指定池id的所有提款消息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询流动性池批次上指定池id的所有提款消息"}},[t._v("#")]),t._v(" 查询流动性池批次上指定池id的所有提款消息")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("plugchaind query liquidity withdraws "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);