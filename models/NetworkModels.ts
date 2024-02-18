export type NetworkType = 'testnet' | 'mainnet';

export interface NodeInfo {
  networkIdentifier: 104 | 152;
  restGatewayUrl: string;
  friendlyName: string;
}

export interface NetworkProperty {
  identifier: string;
  currencyMosaicId: string;
  generationHashSeed: string;
  epochAdjustment: number;
  explorerServerUrl: string;
  statisticsNodeServerUrl: string;
}
