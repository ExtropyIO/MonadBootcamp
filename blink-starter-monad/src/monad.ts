import { defineChain } from "viem";

// Monad chain definition
export const monad = /*#__PURE__*/ defineChain({
  id: 10143,
  name: "Monad Testnet",
  nativeCurrency: { name: "Monad", symbol: "MON", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["testnet-rpc.monad.xyz/"],
    },
  },
  testnet: true,
});