import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { config } from './config/wagmiCfg.ts'
import { rpcEndpoint } from "./config/solWeb3Cfg.ts";
import './index.css'
import App from './App.tsx'
import {ChainTypesProvider} from "./index.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ChainTypesProvider config={config} solanaRpcEndpoint={rpcEndpoint}>
              <App />
      </ChainTypesProvider>
  </StrictMode>,
)
