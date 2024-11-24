import { ValidChainsType } from "../hooks/useChainType";
import { Dispatch, SetStateAction } from "react";
interface DisconnectButtonProps {
    chainType: ValidChainsType;
    onCloseModal: () => void;
    onDisconnect: Dispatch<SetStateAction<boolean>>;
}
declare const DisconnectButton: React.FC<DisconnectButtonProps>;
export default DisconnectButton;
//# sourceMappingURL=DisconnectButton.d.ts.map