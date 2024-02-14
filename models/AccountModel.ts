export interface WalletModel {
  privateKey?: string;
  publicKey: string;
  height?: number | null; // mnemonic path height
  name: string;
}

export interface MnemonicModel {
  mnemonic: string;
}
