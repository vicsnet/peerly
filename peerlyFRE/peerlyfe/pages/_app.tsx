"use client"
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThirdwebProvider, ChainProvider } from "thirdweb/react";
import {defineChain} from "thirdweb/chains"
import {
  QueryClient,
  QueryClientProvider,
  // useQuery,
} from '@tanstack/react-query'
import { Toaster } from "sonner";

const queryClient = new QueryClient();


const myChain = defineChain(4202)

export default function App({ Component, pageProps }: AppProps) {
  // const [QueryClient] = useState(() => new QueryClient());

  return (
    // <Web3AuthProvider config={web3AuthContextConfig}>
    // <QueryClientProvider client={queryClient}>
    //     <WagmiProvider config={config}>
    <ThirdwebProvider >

      <ChainProvider chain={myChain}>
      <QueryClientProvider client={queryClient}>

      <Component {...pageProps} />
      <Toaster/>
      </QueryClientProvider>
      </ChainProvider>

    </ThirdwebProvider>
    //     </WagmiProvider>
    //   </QueryClientProvider>
    // </Web3AuthProvider>
  );
}
