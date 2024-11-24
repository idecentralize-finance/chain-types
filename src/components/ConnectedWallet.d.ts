import { ValidChainsType } from "../hooks/useChainType";
import { PublicKey } from "@solana/web3.js";
import { ValidNetworkType } from "../utils/networkTypes";
interface WalletProps {
    chainType: ValidChainsType;
    address: `0x${string}` | undefined;
    publicKey: PublicKey | null;
    shortenAddress: (address: string) => string;
    chainId: ValidNetworkType;
    isConnected: boolean;
    isConnecting: boolean;
}
declare const ConnectedWallet: React.FC<WalletProps>;
export default ConnectedWallet;
//# sourceMappingURL=ConnectedWallet.d.ts.map