# Wallet Connector Package
A versatile React-based wallet connector package that supports Solana Name Service (SNS) and ENS (Ethereum Name Service). It simplifies wallet integration for Solana and Ethereum chains, allowing developers to seamlessly resolve domain names, avatars, and manage wallet connections.

## Features
- Wallet Integration: Supports Solana and EVM-based wallets.
- Name Services: Resolves ENS and SNS domain names and their associated avatars.
- Custom Providers: Includes a flexible AppProvider to wrap your application with all necessary wallet and query providers.
- Default Avatars: Generates unique avatars for accounts without a set profile picture. (still in progress)
- Custom RPC Support: Define and pass your own RPC endpoints.
- Extensibility: Add support for new chains and networks with existing configuration.


## Installation
Install the package using your preferred package manager.
```bash
    pnpm install wallet-connector-package
```
```bash
    yarn install wallet-connector-package
```
```bash
    npm add wallet-connector-package
```

## Configuration
The package requires a configuration object to initialize the wallet and name resolution services. The configuration object should include the following fields

### Wagmi:<EVMm>

  https://wagmi.sh

Create a wagmi.ts file to configure your EVM wallets and chains:
```jsx
import { createConfig } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { injected, walletConnect, coinbaseWallet } from 'wagmi/connectors';

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    injected(),
    walletConnect({
      projectId: process.env.VITE_WC_PROJECT_ID,
    }),
    coinbaseWallet(),
  ],
});
```

### Solana:<Solana>

Create a solana.ts file to configure your Solana wallets and chains:

> Note: The name resolving feature SNS requires rpc endpoints that provide program ID and cluster information.

```jsx
export const rpcEndpoint = '<YOUR_API_URL>'
```

## Usage
Wrap your application with the AppProvider component to enable wallet integration and name resolution.

```jsx
import { createRoot } from 'react-dom/client'
import { AppProvider } from '@idecentralize-finance/wallet-connector';
import { config } from './wagmi.ts'
import { rpcEndpoint } from "./solana.ts";
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <ChainTypesProvider config={config} solanaRpcEndpoint={rpcEndpoint}>
        <App />
    </ChainTypesProvider>
)
```

Import the WalletConnector component to enable wallet connection.

```jsx
import { WalletConnector } from '@idecentralize-finance/wallet-connector';

function App() {
    return (
        <>
            <WalletConnector/>
        </>
    );
}
```
