package cli

import (
	"context"
	"fmt"

	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"

	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/oracleNetworkProtocol/plugchain/x/plugchain/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group plugchain queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}
	cmd.AddCommand(
		QueryTokenList(),
		QueryTokensByAccAddr(),
		QueryTokenInfo(),
	)
	return cmd
}

func QueryTokenList() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "token-list",
		Short: "query token-list",
		Args:  cobra.NoArgs,
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}
			queryClient := types.NewQueryClient(clientCtx)
			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}
			res, err := queryClient.TokenList(context.Background(), &types.QueryTokenListRequest{Pagination: pageReq})
			if err != nil {
				return err
			}
			return clientCtx.PrintProto(res)
		},
	}
	flags.AddQueryFlagsToCmd(cmd)
	return cmd
}
func QueryTokensByAccAddr() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "token-address [address]",
		Short: "query tokens by address",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			address := string(args[0])
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}
			queryClient := types.NewQueryClient(clientCtx)

			if _, err := sdk.AccAddressFromBech32(address); err != nil {
				return err
			}
			res, err := queryClient.TokensByAccAddr(context.Background(), &types.QueryTokensByAccAddrRequest{Address: address})
			if err != nil {
				return err
			}
			return clientCtx.PrintProto(res)
		},
	}
	flags.AddQueryFlagsToCmd(cmd)
	return cmd
}

func QueryTokenInfo() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "token-info [symbol]",
		Short: "query tokens by symbol",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			symbol := string(args[0])
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}
			queryClient := types.NewQueryClient(clientCtx)

			res, err := queryClient.TokenInfo(context.Background(), &types.QueryTokenInfoRequest{Symbol: symbol})
			if err != nil {
				return err
			}
			return clientCtx.PrintProto(res)
		},
	}
	flags.AddQueryFlagsToCmd(cmd)
	return cmd
}
