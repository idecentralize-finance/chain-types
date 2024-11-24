import { FC, ReactNode } from 'react';
import { Config } from "wagmi";
interface AppProviderProps {
    children: ReactNode;
    config: Config<any, any>;
    solanaRpcEndpoint: string;
}
export declare const ChainTypesProvider: FC<AppProviderProps>;
export {};
//# sourceMappingURL=AppProvider.d.ts.map