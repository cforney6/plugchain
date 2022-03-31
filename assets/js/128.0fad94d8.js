(window.webpackJsonp=window.webpackJsonp||[]).push([[128],{558:function(s,a,t){"use strict";t.r(a);var e=t(57),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"keys-migrate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keys-migrate"}},[s._v("#")]),s._v(" Keys Migrate")]),s._v(" "),t("p",[s._v("Plug Chain Hub v0.2.x 的密钥文件（私钥）使用数据库存储。 新版本 将提供一种存储用户私钥的新方法。为了支持将旧密钥文件迁移到新版本，提供了两种解决方案。")]),s._v(" "),t("h2",{attrs:{id:"助记词"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#助记词"}},[s._v("#")]),s._v(" 助记词")]),s._v(" "),t("p",[s._v("这种方式适用于具有助记词的用户。创建新帐户时，系统将为用户随机分配一个助记词，并使用该助记词恢复用户的私钥。 无论是 v0.2.x，助记词都保持不变。您可以在 "),t("code",[s._v("add")]),s._v(" 命令中添加 "),t("code",[s._v("--recover")]),s._v(" 使用助记词还原帐户，例如：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("plugchaind keys "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" n2 --recover\n")])])]),t("h2",{attrs:{id:"keystore"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#keystore"}},[s._v("#")]),s._v(" Keystore")]),s._v(" "),t("p",[s._v("这种方法适用于丢失了助记词但保存了密钥的 db 文件或密钥文件的用户。Plug Chain Hub v0.2.x 的密钥文件的格式与以太坊的格式相似，并且也完全兼容。因此，用户可以使用密钥库导出旧的私钥，新版本导入密钥库以完成密钥迁移，操作流程如下：")]),s._v(" "),t("p",[t("strong",[s._v("1. 通过 Plug Chain Hub v0.2.x 导出 keystore 文件")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("plugcli keys "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" test1 --output-file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("key.json --home ./plugcli_test \n")])])]),t("p",[s._v("输出：")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"address"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gx1k2j3ws7ghwl9qha36xdcmwuu4rend2yr9tw05q"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"crypto"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cipher"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aes-128-ctr"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ciphertext"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"b5e586baf1126f982ee89ffa9fd23fc68e0a25e1d561d6d59896a0b4878a4d5f"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"cipherparams"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"iv"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"d02a7b40ce35b6e87f9a395850372bbc"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"kdf"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pbkdf2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"kdfparams"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"c"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("262144")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dklen"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"prf"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hmac-sha256"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"salt"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8c77a3a8a75a76da203b262e7fa0187bafbd2ab8bfd3b21ba99f88dcc550d1a6"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"mac"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"4bdf3fd116a4b9d7eb8846d078399f41a6e271a80678ce8979e4fa86f793cdeb"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"id"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"c63bdcd2-c470-4c9a-90eb-a4ef6d3d5937"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("p",[t("strong",[s._v("2. 通过 Plug Chain Hub  导入 keystore 文件")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("plugchaind keys "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" n2 key.json --keyring-backend "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" \n")])])]),t("p",[t("strong",[s._v("3. 验证导入的账户信息")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("plugchaind keys show n2 --keyring-backend "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n")])])]),t("p",[s._v("输出：")]),s._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('Enter keyring passphrase:\n- name: n2\ntype: local\naddress: gx1k2j3ws7ghwl9qha36xdcmwuu4rend2yr9tw05q\npubkey: gxpub1addwnpepqgrj4yshwmq7v7akp04empq9rrn6w26e8q6gpl7jkfjaexk93deq2pwa3m6\nmnemonic: ""\nthreshold: 0\npubkeys: []\n')])])]),t("p",[s._v("输出帐户地址与密钥库文件中的地址一致，且迁移成功。")])])}),[],!1,null,null,null);a.default=r.exports}}]);