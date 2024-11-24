import {evmType, solanaType, ValidChainsType} from "../hooks/useChainType.tsx";
import {Connection, PublicKey} from "@solana/web3.js";
import {networkTypes, ValidNetworkType} from "../utils/networkTypes.tsx";
import {useEffect, useState} from "react";
import {useEnsAvatar, useEnsName} from "wagmi";
import {normalize} from "viem/ens";
import styled from "styled-components";
import {getPrimaryDomain} from "@bonfida/spl-name-service";
import {useConnection} from "@solana/wallet-adapter-react";
import defaultAvatar from '../assets/default-avatar.png';


interface WalletProps {
    chainType: ValidChainsType;
    address: `0x${string}` | undefined;
    publicKey: PublicKey | null;
    shortenAddress: (address: string) => string;
    chainId: ValidNetworkType;
    isConnected: boolean;
    isConnecting: boolean;
}

const ConnectedWallet: React.FC<WalletProps> = (walletProps) => {
    const {
        chainType,
        address,
        publicKey,
        shortenAddress,
        chainId,
        isConnecting
    } = walletProps

    const [loadedAvatar, setLoadedAvatar] = useState<string>(defaultAvatar);
    const [name, setName] = useState<string | null>(null);
    const [LoadedAddress, setLoadedAddress] = useState<string | null>(null);
    const {connection} = useConnection()

    // Hooks for ENS data (for EVM addresses)
    const ensName = useEnsName({address: address || undefined});
    const {data: avatar} = useEnsAvatar({
        name: ensName.data ? normalize(ensName.data) : undefined,
    });

    // Determine the account display values
    const isSolana = chainType === solanaType;
    const isEVM = chainType === evmType;

    // Effect for EVM (ENS)
    useEffect(() => {
        if (isEVM) {
            setLoadedAddress(address || null);
            setName(ensName.data || null);
            setLoadedAvatar(avatar || defaultAvatar);
        }
    }, [isEVM, address, ensName.data, avatar]);

    // Resolve Solana Name Service (SNS) domain
    useEffect(() => {
        const fetchSolanaName = async (connection: Connection, publicKey: PublicKey) => {

            if (publicKey) {
                try {
                    const domainName = await getPrimaryDomain(connection, publicKey);
                    setName(domainName.reverse + '.sol');
                } catch (error) {
                    console.error('Error resolving Solana Name:', error);
                    return null;
                }
            }
        };
        if (isSolana) {
            fetchSolanaName(connection, publicKey as PublicKey)
        }
    }, [isSolana, publicKey]);

    useEffect(() => {
        if (loadedAvatar) {
            setLoadedAvatar(loadedAvatar);
        } else if (address || publicKey) {

        }
    }, [loadedAvatar]);

    return (
        <WalletRow>
            {chainId && (
                <Network src={networkTypes[chainId].logo.src} alt={`${chainType} Network`}/>
            )}
            {isConnecting ? (
                <WalletAddress>
                    Connecting...
                </WalletAddress>
            ) : (
                <>
                    <Avatar
                        src={loadedAvatar} alt={`${name || 'Default'} Avatar`}/>
                    <WalletAddress>
                        {name || shortenAddress(LoadedAddress || '')}
                    </WalletAddress>
                </>
            )}
        </WalletRow>
    );
};

export default ConnectedWallet;

const WalletAddress = styled.p`
    font-size: 1.2em;
    color: #555;
    margin: 0;
    word-break: break-word;
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

const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`;

const Network = styled.img`
    position: relative;
    margin-left: 0;
    margin-right: auto;
    width: 20px;
    height: 20px;
    border-radius: 50%;
`;

