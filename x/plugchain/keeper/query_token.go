package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/oracleNetworkProtocol/plugchain/x/plugchain/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (q Querier) TokenList(goCtx context.Context, req *types.QueryTokenListRequest) (*types.QueryTokenListResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	store := ctx.KVStore(q.storeKey)
	tokenStore := prefix.NewStore(store, types.TokenKeyPrefix)
	var tokens []types.MsgCreateToken

	pageRes, err := query.Paginate(tokenStore, req.Pagination, func(key, value []byte) error {
		var token types.MsgCreateToken
		err := q.cdc.UnmarshalBinaryBare(value, &token)
		if err != nil {
			return err
		}
		tokens = append(tokens, token)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}
	if len(tokens) == 0 {
		return nil, status.Error(codes.NotFound, "There are no tokens present.")
	}

	return &types.QueryTokenListResponse{
		Tokens:     tokens,
		Pagination: pageRes,
	}, nil
}
