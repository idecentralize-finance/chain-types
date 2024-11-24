// Chain type definition
export interface ChainType {
    name: string;
    logo: Logo;
    disconnect?: () => void;
}

export interface Logo {
    alt: string;
    src: string;
}

