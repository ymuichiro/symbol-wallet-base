/*

  Symbol Blockchain Node の AsyncStorage への書き込みや変更、削除機能を提供します。
  また、ノードの状態を取得する API を提供します。

*/
import { NetworkType } from '@/models/NetworkModels';
import { Configuration, NodeRoutesApi } from '@/services/NodeClientService';
import { STORAGE_KEYS } from '@/util/configs/storage-keys';
import { AsyncStorage } from '@/util/storages/AsyncStorage';

type StorageModel = {
  /** key = Networktype */
  [key: string]: {
    restGatewayUrl: string;
  };
};

export class NetworkService extends AsyncStorage {
  private nodeRoutes: NodeRoutesApi;
  private networkType: NetworkType;
  public restGatewayUrl: string;

  constructor(restGatewayUrl: string, networkType: NetworkType) {
    super(STORAGE_KEYS.async.NETWORK);
    const config = new Configuration({ basePath: restGatewayUrl });
    this.nodeRoutes = new NodeRoutesApi(config);
    this.networkType = networkType;
    this.restGatewayUrl = restGatewayUrl;
  }

  /** ノード情報をストレージへ書き込む */
  public async setStorage(): Promise<void> {
    const oldStorageData: StorageModel | null = JSON.parse(await this.getItem());
    const storageData: StorageModel = {
      ...oldStorageData,
      [this.networkType]: {
        restGatewayUrl: this.restGatewayUrl,
      },
    };
    await this.setItem(JSON.stringify(storageData));
  }

  /** ノードが生きているか確認する */
  public async getStatus(): Promise<boolean> {
    try {
      const res = await this.nodeRoutes.getNodeHealth();
      return res.status.apiNode === 'up' && res.status.db === 'up';
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  /** AsyncStorage のノード情報を元に、NetworkService を呼び出す */
  static async createByAsyncStorage(networkType: NetworkType): Promise<NetworkService | null> {
    const storage = new AsyncStorage(STORAGE_KEYS.async.NETWORK);
    const storageData: StorageModel | null = JSON.parse(await storage.getItem());
    if (!storageData) {
      return null;
    }
    return new NetworkService(storageData[networkType].restGatewayUrl, networkType);
  }
}
