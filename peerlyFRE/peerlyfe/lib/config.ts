import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
// import { Web3AuthConnector } from '@web3auth/wagmi-connector' 

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    // new Web3AuthConnector({
    //   chains: [mainnet, sepolia],
    //   options: {
    //     clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID!, // ✅ Set this in `.env.local`
    //     web3AuthNetwork: 'mainnet',
    //   }
    // })
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
  ssr: true,
});