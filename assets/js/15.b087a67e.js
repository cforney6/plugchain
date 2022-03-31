(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{443:function(t,v,_){"use strict";_.r(v);var e=_(57),d=Object(e.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"introduction"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),_("p",[_("code",[t._v("plugchaind")]),t._v(" is a command line client for the Plug Chain Hub network. Plug Chain Hub users can use "),_("code",[t._v("plugchaind")]),t._v(" to send transactions and query the blockchain data.")]),t._v(" "),_("h2",{attrs:{id:"working-directory"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#working-directory"}},[t._v("#")]),t._v(" Working Directory")]),t._v(" "),_("p",[t._v("The default working directory for the "),_("code",[t._v("plugchaind")]),t._v(" is "),_("code",[t._v("$HOME/.plugchain")]),t._v(", which is mainly used to save configuration files and data. The Plug Chain Hub "),_("code",[t._v("key")]),t._v(" data is saved in the working directory of "),_("code",[t._v("plugchaind")]),t._v(". You can also specify the "),_("code",[t._v("plugchaind")]),t._v("  working directory by "),_("code",[t._v("--home")]),t._v(".")]),t._v(" "),_("h2",{attrs:{id:"connecting-to-a-full-node"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-a-full-node"}},[t._v("#")]),t._v(" Connecting to a Full Node")]),t._v(" "),_("p",[t._v("The "),_("code",[t._v("plugchaind")]),t._v(" node provides a RPC interface, transactions and query requests are sent to the process listening to it. The default rpc address the "),_("code",[t._v("plugchaind")]),t._v(" is connected to is "),_("code",[t._v("tcp://localhost:26657")]),t._v(", it can also be specified by "),_("code",[t._v("--node")]),t._v(".")]),t._v(" "),_("h2",{attrs:{id:"global-flags"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#global-flags"}},[t._v("#")]),t._v(" Global Flags")]),t._v(" "),_("h3",{attrs:{id:"get-commands"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#get-commands"}},[t._v("#")]),t._v(" GET Commands")]),t._v(" "),_("p",[t._v("All GET commands has the following global flags:")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Name, shorthand")]),t._v(" "),_("th",[t._v("type")]),t._v(" "),_("th",[t._v("Required")]),t._v(" "),_("th",[t._v("Default Value")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("--chain-id")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("Chain ID of tendermint node")])]),t._v(" "),_("tr",[_("td",[t._v("--home")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("/Users/userName/.plugchain")]),t._v(" "),_("td",[t._v("Directory for config and data")])]),t._v(" "),_("tr",[_("td",[t._v("--trace")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("Print out full stack trace on errors")])])])]),t._v(" "),_("h3",{attrs:{id:"post-commands"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#post-commands"}},[t._v("#")]),t._v(" POST Commands")]),t._v(" "),_("p",[t._v("All POST commands have the following global flags:")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Name, shorthand")]),t._v(" "),_("th",[t._v("type")]),t._v(" "),_("th",[t._v("Required")]),t._v(" "),_("th",[t._v("Default")]),t._v(" "),_("th",[t._v("Description")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("--account-number")]),t._v(" "),_("td",[t._v("int")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("AccountNumber to sign the tx")])]),t._v(" "),_("tr",[_("td",[t._v("--broadcast-mode")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("sync")]),t._v(" "),_("td",[t._v("Transaction broadcasting mode (sync | async | block)")])]),t._v(" "),_("tr",[_("td",[t._v("--dry-run")]),t._v(" "),_("td",[t._v("bool")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("Ignore the --gas flag and perform a simulation of a transaction, but don't broadcast it")])]),t._v(" "),_("tr",[_("td",[t._v("--fees")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("Fees to pay along with transaction")])]),t._v(" "),_("tr",[_("td",[t._v("--from")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("Name of private key with which to sign")])]),t._v(" "),_("tr",[_("td",[t._v("--gas")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("50000")]),t._v(" "),_("td",[t._v('Gas limit to set per-transaction; set to "simulate" to calculate required gas automatically')])]),t._v(" "),_("tr",[_("td",[t._v("--gas-adjustment")]),t._v(" "),_("td",[t._v("float")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("1.5")]),t._v(" "),_("td",[t._v("Adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set")])]),t._v(" "),_("tr",[_("td",[t._v("--gas-prices")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("Gas prices in decimal format to determine the transaction fee")])]),t._v(" "),_("tr",[_("td",[t._v("--generate-only")]),t._v(" "),_("td",[t._v("bool")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("Build an unsigned transaction and write it to STDOUT")])]),t._v(" "),_("tr",[_("td",[t._v("--help, -h")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("Print help message")])]),t._v(" "),_("tr",[_("td",[t._v("--keyring-backend")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("os")]),t._v(" "),_("td",[t._v("Select keyring's backend")])]),t._v(" "),_("tr",[_("td",[t._v("--ledger")]),t._v(" "),_("td",[t._v("bool")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("false")]),t._v(" "),_("td",[t._v("Use a connected Ledger device")])]),t._v(" "),_("tr",[_("td",[t._v("--memo")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("Memo to send along with transaction")])]),t._v(" "),_("tr",[_("td",[t._v("--node")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("tcp://localhost:26657")]),t._v(" "),_("td",[t._v("<host>:<port> to tendermint rpc interface for this chain")])]),t._v(" "),_("tr",[_("td",[t._v("--offline")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("Offline mode (does not allow any online functionality)")])]),t._v(" "),_("tr",[_("td",[t._v("--sequence")]),t._v(" "),_("td",[t._v("int")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td",[t._v("Sequence number to sign the tx")])]),t._v(" "),_("tr",[_("td",[t._v("--sign-mode")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("Choose sign mode (direct | amino-json), this is an advanced feature")])]),t._v(" "),_("tr",[_("td",[t._v("--trust-node")]),t._v(" "),_("td",[t._v("bool")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("Don't verify proofs for responses")])]),t._v(" "),_("tr",[_("td",[t._v("--yes")]),t._v(" "),_("td",[t._v("bool")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("true")]),t._v(" "),_("td",[t._v("Skip tx broadcasting prompt confirmation")])]),t._v(" "),_("tr",[_("td",[t._v("--chain-id")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("Chain ID of tendermint node")])]),t._v(" "),_("tr",[_("td",[t._v("--home")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v('Directory for config and data (default "/Users/bianjie/.plugchain")')])]),t._v(" "),_("tr",[_("td",[t._v("--trace")]),t._v(" "),_("td",[t._v("string")]),t._v(" "),_("td"),t._v(" "),_("td"),t._v(" "),_("td",[t._v("Print out full stack trace on errors")])])])]),t._v(" "),_("h2",{attrs:{id:"module-commands"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#module-commands"}},[t._v("#")]),t._v(" Module Commands")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("Subcommand")])]),t._v(" "),_("th",[_("strong",[t._v("Description")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",[_("RouterLink",{attrs:{to:"/cli-client/bank.html"}},[t._v("bank")])],1),t._v(" "),_("td",[t._v("Bank subcommands for querying acccounts and sending coins etc.")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/cli-client/debug.html"}},[t._v("debug")])],1),t._v(" "),_("td",[t._v("Debug subcommands")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/cli-client/distribution.html"}},[t._v("distribution")])],1),t._v(" "),_("td",[t._v("Distribution subcommands for rewards management")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/cli-client/gov.html"}},[t._v("gov")])],1),t._v(" "),_("td",[t._v("Governance and voting subcommands")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/cli-client/keys.html"}},[t._v("keys")])],1),t._v(" "),_("td",[t._v("Keys allows you to manage your local keystore for tendermint")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/cli-client/params.html"}},[t._v("params")])],1),t._v(" "),_("td",[t._v("Query parameters of modules")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/cli-client/slashing.html"}},[t._v("slashing")])],1),t._v(" "),_("td",[t._v("Slashing subcommands")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/cli-client/staking.html"}},[t._v("staking")])],1),t._v(" "),_("td",[t._v("Staking subcommands for validators and delegators")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/cli-client/status.html"}},[t._v("status")])],1),t._v(" "),_("td",[t._v("Query remote node for status")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/cli-client/tendermint.html"}},[t._v("tendermint")])],1),t._v(" "),_("td",[t._v("Tendermint state querying subcommands")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/cli-client/tx.html"}},[t._v("tx")])],1),t._v(" "),_("td",[t._v("Tx subcommands")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/cli-client/upgrade.html"}},[t._v("upgrade")])],1),t._v(" "),_("td",[t._v("Software Upgrade subcommands")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/cli-client/token.html"}},[t._v("token")])],1),t._v(" "),_("td",[t._v("Token subcommands")])]),t._v(" "),_("tr",[_("td",[_("RouterLink",{attrs:{to:"/cli-client/liquidity.html"}},[t._v("liquidity")])],1),t._v(" "),_("td",[t._v("Liquidity subcommands")])])])])])}),[],!1,null,null,null);v.default=d.exports}}]);