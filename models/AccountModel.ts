export interface WalletModel {
  privateKey?: string;
  publicKey: string;
  height?: number; // mnemonic path height
  name: string;
}
