import { NetworkType } from '@/models/NetworkModels';

export interface WalletModel {
  /** PrivateKeyModel との参照 */
  privateKeyId: string | null;
  publicKey: string;
  height: number | null; // mnemonic path height
  networkType: NetworkType;
  name: string;
  id: string; // uuid
}

export interface PrivateKeyModel {
  id: string; // uuid
  networkType: NetworkType;
  privateKey: string;
}

export interface MnemonicModel {
  mnemonic: string;
}
