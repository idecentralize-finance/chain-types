
[![Version npm](https://img.shields.io/npm/v/@idecentralize-finance/chain-types.svg?logo=npm)](https://www.npmjs.com/package/@idecentralize-finance/chain-types)
[![Node.js CI](https://github.com/idecentralize-finance/chain-types/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/idecentralize-finance/chain-types/actions/workflows/npm-publish.yml)
[![Socket Badge](https://socket.dev/api/badge/npm/package/@idecentralize-finance/chain-types/)](https://socket.dev/npm/package/@idecentralize-finance/chain-types/overview)
[![CodeQL](https://github.com/idecentralize-finance/chain-types/actions/workflows/codeql.yml/badge.svg)](https://github.com/idecentralize-finance/chain-types/actions/workflows/codeql.yml)


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
    pnpm install @idecentralize-finance/chain-types
```
```bash
    yarn install @idecentralize-finance/chain-types
```
```bash
    npm add @idecentralize-finance/chain-types
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
import { createConfig, http } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { injected, walletConnect, coinbaseWallet } from 'wagmi/connectors';

export const config = createConfig({
    chains: [mainnet, sepolia],
    connectors: [
        injected(),
        walletConnect({
            projectId: process.env.VITE_WC_PROJECT_ID || '',
        }),
        coinbaseWallet(),
    ],
    transports: {
        [mainnet.id]: http('https://mainnet.example.com'),
        [sepolia.id]: http('https://sepolia.example.com'),
    },
});
```

### Solana:<Solana>

Create a solana.ts file to configure your Solana wallets and chains:

> Note: The name resolving feature SNS requires rpc endpoints that provide program ID and cluster information.

```jsx
export const rpcEndpoint = '<YOUR_RPC_URL>'
```

## Usage
Wrap your application with the AppProvider component to enable wallet integration and name resolution.

```jsx
import { createRoot } from 'react-dom/client'
import { ChainTypesProvider } from '@idecentralize-finance/chain-types';
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
## Styling CSS

3 classes are available for styling the wallet connector component button.
> plugin to come with default styling/theme

```css
.chain-type-connect{
    // styling for the connect button
}

.connect-shimmer{
    // styling for the shimmer effect
}

.connect-text{
    // styling for the text
}
```
