(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{549:function(s,a,t){"use strict";t.r(a);var e=t(57),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"staking"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#staking"}},[s._v("#")]),s._v(" Staking")]),s._v(" "),t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),t("p",[s._v("本文简要介绍了staking模块的功能以及常见用户接口。")]),s._v(" "),t("h2",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),t("h3",{attrs:{id:"投票权重"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#投票权重"}},[s._v("#")]),s._v(" 投票权重")]),s._v(" "),t("p",[s._v("投票权重是一个共识层面的概念。Plug Chain Hub是一个拜占庭容错的POS区块链网络。在共识过程中，一个验证人集将对提案区块进行投票。如果验证人认为提案块有效，它将投赞成票，否则，它将投反对票。来自不同验证人的投票所占权重不同。投票的权重称为相应验证人的投票权重。")]),s._v(" "),t("h3",{attrs:{id:"验证人节点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证人节点"}},[s._v("#")]),s._v(" 验证人节点")]),s._v(" "),t("p",[s._v("验证人节点是一个Plug Chain Hub全节点。如果其投票权重为零，则它只是一般的全节点或候选验证人。一旦其投票权重为正数，那么它就是一个真正的验证人。")]),s._v(" "),t("h3",{attrs:{id:"委托人"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#委托人"}},[s._v("#")]),s._v(" 委托人")]),s._v(" "),t("p",[s._v("不能或不想运行验证人节点的人仍然可以作为委托人参与到POS网络中。委托人可以将token委托给验证人，委托人将从相应的验证人那里获得一定的token份额。委托token也称为绑定token给验证人。稍后我们将对其进行详细说明。此外，验证节点的所有者也是委托人。验证节点的所有者不仅可以在其自己的验证节点上抵押token，而且也可以在其他验证节点上抵押token。")]),s._v(" "),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[s._v("警告")]),s._v(" "),t("p",[t("strong",[s._v("验证节点的所有者在解绑自己抵押的代币时，切勿完全解绑。 一旦完全解绑，该验证人节点将被处于jailed状态，该节点将收不到任何奖励或者佣金， 在该节点上委托代币的投资人的利益也会收到相应的损失。 所以，无论如何请保留至少"),t("code",[s._v("1*10^6 plug")]),s._v("plug在抵押状态。")]),s._v(" "),t("strong",[s._v("如果一旦验证人全部解委托，可以通过重新"),t("code",[s._v("delegate")]),s._v("和"),t("code",[s._v("unjail")]),s._v("的命令来恢复")])])]),s._v(" "),t("h3",{attrs:{id:"候选验证人"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#候选验证人"}},[s._v("#")]),s._v(" 候选验证人")]),s._v(" "),t("p",[s._v("验证人的数量不能无限增加。太多验证人可能会导致低效的共识，从而降低区块链吞吐率。因此，拜占庭容错的POS区块链网络都有验证人数量上限。通常，这个上限是100。如果有超过100个全节点申请加入验证人集，那么只有具有抵押token数量排名前100的节点才能成为真正的验证人，其他人将是候选验证人，并将根据他们抵押token的数量进行降序排序。一旦一个或多个验证人被从验证人集中踢出，则顶部候选验证人将被自动添加到验证人集中。")]),s._v(" "),t("h3",{attrs:{id:"绑定-解绑和解绑期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#绑定-解绑和解绑期"}},[s._v("#")]),s._v(" 绑定，解绑和解绑期")]),s._v(" "),t("p",[s._v("验证人节点的所有者必须将他们自己流通的token绑定到自己的验证人节点。验证人节点投票权重与绑定的token数量成正比，包括所有者自己绑定的token和来自其他委托人的token。\n验证人节点的所有者可以通过发送解绑交易来降低自己的绑定token。委托方还可以通过发送解绑交易来降低自己的绑定token。然而，这些解除了绑定的token不会立即变成流通token。\n执行解除绑定交易后，相应的验证人节点或委托方在解除绑定周期结束之前不能在相同的验证人节点上再次发送解除绑定交易。\n通常解除绑定的周期为三周。解除绑定周期结束后，解除绑定的token将自动成为流通token。解绑定周期机制对POS区块链网络的安全性做出了很大的贡献。此外，如果一个验证人节点绑定的token数量等于零，则此验证人节点将从验证人节点集合中删除。")]),s._v(" "),t("h3",{attrs:{id:"转委托"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#转委托"}},[s._v("#")]),s._v(" 转委托")]),s._v(" "),t("p",[s._v("委托人可以将其令牌从一个验证节点转移到另一个验证节点。转委托可以分为两个步骤：从第一个验证节点处取消绑定并绑定到另一个验证节点。如上所述，在解除绑定期结束之前无法立即完成未绑定操作，这意味着委托人无法立即发送其他转委托交易。")]),s._v(" "),t("h3",{attrs:{id:"证据-惩罚"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#证据-惩罚"}},[s._v("#")]),s._v(" 证据&&惩罚")]),s._v(" "),t("p",[s._v("拜占庭容错的POS区块链网络假定拜占庭节点的投票权不到总投票权的1/3。这些拜占庭节点必须受到惩罚。因此，有必要收集拜占庭行为的证据。根据证据，放样模块将自动从相应的验证者和委托者处削减一定数量的令牌。此外，拜占庭验证人节点将从验证人集合中删除并投入监狱，这意味着其投票权为零。在监禁期间，这些节点不是验证人的候选对象。监禁期结束后，他们可以发送交易取消监禁并再次成为验证者候选人。")]),s._v(" "),t("h3",{attrs:{id:"奖励"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#奖励"}},[s._v("#")]),s._v(" 奖励")]),s._v(" "),t("p",[s._v("作为委托人，他在验证人节点上拥有的令牌越多，它将获得的奖励就越多。对于验证人，它将获得额外的奖励：验证者佣金。奖励来自令牌通货膨胀和交易费。至于如何计算奖励以及如何获得奖励，请参考"),t("RouterLink",{attrs:{to:"/zh/features/mint.html"}},[s._v("mint")]),s._v("和"),t("RouterLink",{attrs:{to:"/zh/features/distribution.html"}},[s._v("distribution")]),s._v("。")],1),s._v(" "),t("h2",{attrs:{id:"用户操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户操作"}},[s._v("#")]),s._v(" 用户操作")]),s._v(" "),t("ul",[t("li",[s._v("查询自己的验证人节点")])]),s._v(" "),t("p",[s._v("查询验证人地址的编码格式的钱包地址：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("plugchaind keys show "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("p",[s._v("示例输出：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("- name: node0\n  type: "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v("\n  address: gx1w9lvhwlvkwqvg08q84n2k4nn896u9pqx93velx\n  pubkey: gxpub1addwnpepq03g7u43y3gwfz3pd4gkwz7d4mt600kzsc5cj2ysx58a5hp84qyduxtw28r\n  mnemonic: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n  threshold: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  pubkeys: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("p",[s._v("查询验证人信息：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("plugchaind q staking validator gxvaloper14n9md3sq9xwscs96za8n85m0j9y2yu3cagxgke\n")])])]),t("p",[s._v("示例输出：")]),s._v(" "),t("div",{staticClass:"language-log extra-class"},[t("pre",{pre:!0,attrs:{class:"language-log"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v("commission:")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("commission_rates:")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("max_change_rate:")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.010000000000000000"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("max_rate:")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.200000000000000000"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("rate:")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.130000000000000000"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("update_time:")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2021-07-19T01:11:11.703062549Z"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("consensus_pubkey:")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@type'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token file-path string"}},[s._v("/cosmos.crypto.ed25519.PubKey")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("key:")]),s._v(" 6LKWi3Ol0uegkVsgiJG6rPSgVf1seQiAPpiROCHCvzc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("delegator_shares:")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5535916331518.000000000000000000"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("description:")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("details:")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("identity:")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("moniker:")]),s._v(" node3\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("security_contact:")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("website:")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("jailed:")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("min_self_delegation:")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1200000"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("operator_address:")]),s._v(" gxvaloper13e5nwry8ck62553p6dfur5yep685ghfgs9u8ju\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("status:")]),s._v(" BOND_STATUS_BONDED\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("tokens:")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5535916331518"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("unbonding_height:")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("unbonding_time:")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1970-01-01T00:00:00Z"')]),s._v("\n")])])]),t("ul",[t("li",[s._v("修改验证人信息")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("plugchaind tx staking edit-validator --from"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --chain-id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("plugchain_520-1 --fees"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("20uplugcn --commission-rate"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.15")]),s._v(" --moniker"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("new-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("ul",[t("li",[s._v("委托")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("plugchaind tx staking delegate gxvaloper14n9md3sq9xwscs96za8n85m0j9y2yu3cagxgke 1000000uplugcn --chain-id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("plugchain_520-1 --from"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --fees"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("20uplugcn\n")])])]),t("ul",[t("li",[s._v("解绑")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("plugchaind tx staking unbond gxvaloper14n9md3sq9xwscs96za8n85m0j9y2yu3cagxgke 1000000uplugcn --chain-id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("plugchain_520-1 --from"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --fees"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("20uplugcn\n")])])]),t("ul",[t("li",[s._v("转委托")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("plugchaind tx staking redelegate gxvaloper14n9md3sq9xwscs96za8n85m0j9y2yu3cagxgke gxvaloper1l2rsakp388kuv9k8qzq6lrm9taddae7fpx59wm 100uplugcn --from mykey --chain-id"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("plugchain_520-1 --from"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("key-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" --fees"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("20uplugcn\n")])])]),t("p",[s._v("对于其它Staking相关的命令，请参考"),t("RouterLink",{attrs:{to:"/zh/cli-client/staking.html"}},[s._v("stake-cli")])],1)])}),[],!1,null,null,null);a.default=r.exports}}]);