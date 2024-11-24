import {useChainTypes, ValidChainsType} from "../hooks/useChainType.tsx";
import {Dispatch, SetStateAction} from "react";
import Button from "./Button.tsx";

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
            <Button text={"Disconnect"} onClick={handleClick}/>
        </>
    );
};

export default DisconnectButton;
