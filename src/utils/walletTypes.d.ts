export declare const walletTypes: {
    readonly metaMask: {
        readonly name: "MetaMask";
        readonly logo: import("../types").Logo;
    };
    readonly walletConnect: {
        readonly name: "WalletConnect";
        readonly logo: import("../types").Logo;
    };
    readonly coinbaseWallet: {
        readonly name: "Coinbase Wallet";
        readonly logo: import("../types").Logo;
    };
    readonly phantom: {
        readonly name: "Phantom";
        readonly logo: import("../types").Logo;
    };
    readonly braveWallet: {
        readonly name: "Brave Wallet";
        readonly logo: import("../types").Logo;
    };
    readonly injected: {
        readonly name: "Injected";
        readonly logo: import("../types").Logo;
    };
};
export type ValidWalletType = keyof typeof walletTypes;
//# sourceMappingURL=walletTypes.d.ts.map