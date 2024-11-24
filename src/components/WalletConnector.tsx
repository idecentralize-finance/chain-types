import styled from "styled-components";
import {useEffect, useState} from "react";
import {useWallet} from "@solana/wallet-adapter-react";
import {WalletName, WalletReadyState} from "@solana/wallet-adapter-base";
import {useAccount, useConnect} from "wagmi";
import {useChainTypes, evmType, solanaType, ValidChainsType} from "../hooks/useChainType.tsx";
import {ValidWalletType, walletTypes} from "../utils/walletTypes.tsx";
import {ValidNetworkType} from "../utils/networkTypes.tsx";
import {defaultWalletLogoData} from "../utils/logos.tsx";
import {Logo} from "../types";
import {toCamelCase} from "../helpers/index.tsx";

import Button from "./button/ConnectButton.tsx";
import DisconnectButton from "./DisconnectButton.tsx";
import ConnectedWallet from "./ConnectedWallet.tsx";

function getWalletLogo(key: string): Logo | null {
    const camelCaseKey = toCamelCase(key);
    if (camelCaseKey in walletTypes) {
        return walletTypes[camelCaseKey as ValidWalletType].logo;
    }
    return defaultWalletLogoData;
}

export const WalletConnector = () => {

    // React hooks
    const [chainType, setChainType] = useState<ValidChainsType | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [walletConnected, setWalletConnected] = useState(false);
    const [walletConnecting, setWalletConnecting] = useState(false);
    const [showChainSelection, setShowChainSelection] = useState(false);

    // custom hooks
    const chainTypes = useChainTypes();

    // Solana hooks
    const {publicKey, connected, connect, select, wallets, connecting} = useWallet();

    // Wagmi hooks
    const {connectors, connect: connectEVM} = useConnect();
    const {address, isConnected, chainId, isConnecting} = useAccount();

    // modal control functions
    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    // chain selection functions
    const toggleChainSelection = () => setShowChainSelection((prev) => !prev);
    const handleChainTypeSelection = (type: ValidChainsType | null) => {
        setChainType(type);
    };

    // wallet selection functions
    const handleSolanaWalletSelect = async (walletName: WalletName) => {
        try {
            const wallet = wallets.find((w) => w.adapter.name === walletName);
            if (!wallet) throw new Error(`Wallet ${walletName} not found.`);
            if (
                wallet.readyState !== WalletReadyState.Installed &&
                wallet.readyState !== WalletReadyState.Loadable
            ) {
                alert(`Wallet ${walletName} is not ready. Please install it.`);
                return;
            }

            select(walletName);
            if (!connected) {
                await connect();
            }
        } catch (error) {
            console.error("Error connecting Solana wallet:", error);
        }
    };
    // loading component
    useEffect(() => {
        // Check if a supported connector is installed
        const solanaInstalledWallet = wallets;
        const evmInstalledWallet = connectors;

        if (!solanaInstalledWallet.length) {
            console.warn("No walletTypes detected. Please ensure a Solana wallet is installed.");
        }
        if (!evmInstalledWallet.length) {
            console.warn("No connectors detected. Please ensure an EVM wallet is installed.");
        }

        // Check if wallet is connecting
        if (isConnecting || connecting) {
            setWalletConnecting(true);
        } else {
            setWalletConnecting(false);
        }

        // Check if wallet is connected
        if (connected || isConnected) {
            setChainType(connected ? solanaType : evmType);
            setWalletConnected(true);
            // TODO: Update this to use chainId and check if it's a default network

        } else {
            setWalletConnected(false);
        }
    }, [wallets, isConnected, connected, isConnecting, connecting]);


    return (
        <Container>
            <WalletList>
                {/* Account Info or Connect Button */}
                {chainType && (walletConnected) ? (
                    <SelectedWalletInfo onClick={openModal}>
                        <ConnectedWallet
                            chainType={chainType}
                            address={address}
                            publicKey={publicKey}
                            shortenAddress={(addr) => addr.slice(0, 6) + '...' + addr.slice(-4)}
                            chainId={chainId as ValidNetworkType}
                            isConnected={walletConnected}
                            isConnecting={walletConnecting}
                        />
                    </SelectedWalletInfo>
                ) : (
                    <Button text={"Connect Wallet"} onClick={openModal}/>
                )}

                {/* Modal for Chain/Wallet Selection or Account Info */}
                {modalOpen && (
                    <ModalBackground onClick={closeModal}>
                        <ModalContent onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                            <CloseButton onClick={closeModal}>×</CloseButton>

                            {/* If Connected: Show Account Info & Disconnect */}
                            {(walletConnected) && chainType ? (
                                <>
                                    <ConnectedWallet
                                        chainType={chainType}
                                        address={address}
                                        publicKey={publicKey}
                                        shortenAddress={(addr) => addr.slice(0, 6) + '...' + addr.slice(-4)}
                                        chainId={chainId as ValidNetworkType}
                                        isConnected={walletConnected}
                                        isConnecting={walletConnecting}
                                    />

                                    <DisconnectButton onCloseModal={closeModal} chainType={chainType}
                                                      onDisconnect={() => setWalletConnected(false)}/>

                                </>
                            ) : (
                                <>
                                    {/* If Not Connected: Show Chain and Wallet Selection */}
                                    {!chainType || showChainSelection ? (
                                        <>
                                            <h2>Select Chain</h2>
                                            <ChainSelectionContainer>
                                                {Object.entries(chainTypes).map(([key, chain]) => (
                                                    <ChainRow
                                                        key={key}
                                                        onClick={() => {
                                                            handleChainTypeSelection(key as ValidChainsType);
                                                            setShowChainSelection(false);
                                                        }}
                                                    >
                                                        <ChainImage src={chain.logo.src} alt={chain.logo.alt}/>
                                                        <ChainLabel>{chain.name}</ChainLabel>
                                                    </ChainRow>
                                                ))}
                                            </ChainSelectionContainer>
                                        </>
                                    ) : (
                                        <>
                                            <SelectedChain onClick={toggleChainSelection}>
                                                <ChainImage
                                                    src={chainTypes[chainType].logo.src}
                                                    alt={chainType}
                                                />
                                                <ChainLabel>
                                                    {chainTypes[chainType].name} (Click to Change)
                                                </ChainLabel>
                                            </SelectedChain>
                                            <h2>Select Wallet</h2>
                                            <WalletOptions>
                                                {chainType === solanaType &&
                                                    wallets.map((wallet) => (
                                                        <WalletRow
                                                            key={wallet.adapter.name}
                                                            onClick={() => {
                                                                handleSolanaWalletSelect(wallet.adapter.name);
                                                                closeModal();
                                                                setWalletConnected(true);
                                                            }}
                                                        >
                                                            <WalletImage src={getWalletLogo(wallet.adapter.name)?.src}
                                                                         alt={wallet.adapter.name}/>
                                                            <WalletLabel>{wallet.adapter.name}</WalletLabel>
                                                        </WalletRow>
                                                    ))}

                                                {chainType === evmType &&
                                                    connectors.map((connector) => (
                                                        <WalletRow
                                                            key={connector.id}
                                                            onClick={() => {
                                                                connectEVM({connector});
                                                                closeModal();
                                                                setWalletConnected(true);
                                                            }}
                                                        >
                                                            <WalletImage src={getWalletLogo(connector.name)?.src}
                                                                         alt={connector.name}/>
                                                            <WalletLabel>{connector.name}</WalletLabel>
                                                        </WalletRow>
                                                    ))}
                                            </WalletOptions>
                                        </>
                                    )}
                                </>
                            )}
                        </ModalContent>
                    </ModalBackground>
                )}
            </WalletList>
        </Container>
    );
}


const SelectedChain = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 10px;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 10px;
    transition: background-color 0.3s, border-color 0.3s;

    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 0 0 #252628;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const WalletList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
`;

const SelectedWalletInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const WalletRow = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 5px;
    border: 2px solid #3c3737;
    border-radius: 10px;
    transition: background-color 0.3s, border-color 0.3s;

    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 0 0 #252628;
    }
`;

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background: #363636;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(255, 0, 0, 0.5),
    0 8px 20px rgba(0, 255, 0, 0.5),
    0 12px 30px rgba(0, 0, 255, 0.5);
`;
const ModalBackground = styled(Modal)`
    /* Modal background inherits styles from Modal */
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    font-size: 1.5em;
    cursor: pointer;
`;

const ChainSelectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const ChainRow = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 10px;
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 10px;

    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 0 0 #252628;
    }
`;

const ChainImage = styled.img`
    width: 40px;
    height: 40px;
`;

const ChainLabel = styled.span`
    font-size: 1.2em;
    color: #555;
`;

const WalletOptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    &:hover {
        color: #0073e6;
    }
`;
const WalletImage = styled.img`
    width: 40px;
    height: 40px;
`;

const WalletLabel = styled.span`
    font-size: 1.2em;
    color: #6b6a6a;
`;


