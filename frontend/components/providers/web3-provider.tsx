'use client'

/*import '@rainbow-me/rainbowkit/styles.css'
import {
  darkTheme,
  getDefaultWallets,
  lightTheme,
  RainbowKitProvider
} from '@rainbow-me/rainbowkit'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import {
  baseSepolia,
  holesky,
  polygonMumbai,
  sepolia
} from 'wagmi/chains'
//import { mantleSepolia } from '@/lib/mantle-sepolia'
import { useTheme } from 'next-themes'*/

{/*import {
    getDefaultConfig,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
} from 'wagmi/chains';
import {
    QueryClientProvider,
    QueryClient,
} from "@tanstack/react-query";*/}

/*const { chains, publicClient } = configureChains(
  [baseSepolia, holesky, polygonMumbai, sepolia],
  [
    alchemyProvider({ apiKey: `${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}` }),
    publicProvider()
  ]
)

const { connectors } = getDefaultWallets({
  appName: 'Web3 GPT',
  projectId: `${process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID}`,
  chains
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})*/

{/*const config = getDefaultConfig({
    appName: 'My RainbowKit App',
    projectId: '1e66cf4cef155ebb3dd7ff035778977d',
    chains: [mainnet, polygon, optimism, arbitrum, base],
    ssr: true, // If your dApp uses server side rendering (SSR)
  });*/}

//const queryClient = new QueryClient();


export function Web3Provider({ children }: { children: React.ReactNode }) {
  //const { resolvedTheme } = useTheme()

  return (
    <div>
      {/*<WagmiConfig config={wagmiConfig}>
              <RainbowKitProvider
                  chains={chains}
                  initialChain={polygonMumbai}
                  theme={
                  resolvedTheme === 'dark'
                      ? darkTheme({
                          accentColor: '#21C55E',
                          accentColorForeground: 'black'
                      })
                      : lightTheme({
                          accentColor: '#21C55E',
                          accentColorForeground: 'white'
                      })
                  }
              >
              <RainbowKitProvider>
                  
              </RainbowKitProvider>
      </WagmiConfig>*/}
    </div>
  )
}