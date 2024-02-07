export type NetworkType = 'testnet' | 'mainnet';

export interface NodeInfo {
  domain: string;
  port: number;
  isSsl: boolean;
  networkType: NetworkType;
  enable: boolean;
  profile: string;
}
