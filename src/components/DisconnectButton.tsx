import {useChainTypes, ValidChainsType} from "../hooks/useChainType.tsx";
import {Dispatch, SetStateAction} from "react";
import ConnectButton from "./button/ConnectButton.tsx";

interface DisconnectButtonProps {
    chainType: ValidChainsType;
    onCloseModal: () => void;
    onDisconnect: Dispatch<SetStateAction<boolean>>;
}

const DisconnectButton: React.FC<DisconnectButtonProps> = ({chainType, onCloseModal}) => {
    const chainTypes = useChainTypes();
    const handleClick = () => {
        chainTypes[chainType]!.disconnect!();
        onCloseModal();
    };

    return (
        <>
            <ConnectButton text={"Disconnect"} onClick={handleClick}/>
        </>
    );
};

export default DisconnectButton;
