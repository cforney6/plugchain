package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
	gogotypes "github.com/gogo/protobuf/types"
)

var (
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterInterface((*NFTI)(nil), nil)
	cdc.RegisterConcrete(&MsgIssueDenom{}, "x/nft/issue_denom", nil)
	cdc.RegisterConcrete(&MsgIssueNFT{}, "x/nft/issue_nft", nil)
	cdc.RegisterConcrete(&MsgEditNFT{}, "x/nft/edit_nft", nil)
	cdc.RegisterConcrete(&MsgBurnNFT{}, "x/nft/burn_nft", nil)
	cdc.RegisterConcrete(&MsgTransferNFT{}, "x/nft/transfer_nft", nil)
	cdc.RegisterConcrete(&MsgTransferDenom{}, "x/nft/transfer_denom", nil)
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {

	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgIssueDenom{},
		&MsgIssueNFT{},
		&MsgEditNFT{},
		&MsgBurnNFT{},
		&MsgTransferNFT{},
		&MsgTransferDenom{},
	)

	registry.RegisterInterface(
		"plugchain.nft.NFTI",
		(*NFTI)(nil),
		&NFT{},
	)
	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

// return supply protobuf code
func MustMarshalSupply(cdc codec.Codec, supply uint64) []byte {
	supplyByte := gogotypes.UInt64Value{Value: supply}
	return cdc.MustMarshal(&supplyByte)
}

// return th supply
func MustUnMarshalSupply(cdc codec.Codec, value []byte) uint64 {
	var supplyWrap gogotypes.UInt64Value
	cdc.MustUnmarshal(value, &supplyWrap)
	return supplyWrap.Value
}

func MustMarshalNFTID(cdc codec.Codec, nftID string) []byte {
	nftIDWrap := gogotypes.StringValue{Value: nftID}
	return cdc.MustMarshal(&nftIDWrap)
}

func MustUnMarshalNFTID(cdc codec.Codec, value []byte) string {
	var nftIDWrap gogotypes.StringValue
	cdc.MustUnmarshal(value, &nftIDWrap)
	return nftIDWrap.Value
}
