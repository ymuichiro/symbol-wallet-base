import { ConnectionError } from '@/models/ErrorModels';
import { NetworkType, NodeInfo } from '@/models/NetworkModels';
import { NETWORK_PROPERTIES } from '@/util/configs/network-properties';
import { STORAGE_KEYS } from '@/util/configs/storage-keys';
import { AsyncStorage } from '@/util/storages/AsyncStorage';

type StorageModel = {
  expire: number;
  nodeList: NodeInfo[];
};

/**
 * ノードの統計情報サービスより情報の取得・更新を行う
 * 取得した情報はキャッシュとしてストレージへ保存し、1日以上経過した場合、再度統計サーバーより取得してローカルストレージを更新する
 */
export class NodeStatisticsService extends AsyncStorage {
  private static readonly CACHE_EXPIRE_TIME = 1000 * 60 * 60 * 24; // 1日
  private statisticsServer: string;

  public constructor(networkType: NetworkType) {
    super(STORAGE_KEYS.async.NODESTATISTICS);
    this.statisticsServer = NETWORK_PROPERTIES[networkType].statisticsNodeServerUrl;
  }

  /** 統計サーバーよりノードの一覧を取得する */
  private async getNodeList(): Promise<NodeInfo[]> {
    try {
      const header = new Headers();
      header.append('Accept', 'application/json');
      header.append('Content-Type', 'application/json');

      const res = await fetch(this.statisticsServer, {
        method: 'GET',
        headers: header,
        cache: 'no-cache',
      });

      const statisticsResult = await res.json();
      const nodeInfoList: NodeInfo[] = [];
      for (const e of statisticsResult) {
        // apiStatus or isAvailable が false の場合は除外 かつ allnodes を除外
        if (!e.apiStatus) continue;
        if (!e.apiStatus.isHttpsEnabled || !e.apiStatus.isAvailable) continue;
        // allnodes ノードは除外
        if (e.apiStatus.restGatewayUrl.includes('.allnodes.me:')) continue;
        nodeInfoList.push({
          friendlyName: e.friendlyName,
          networkIdentifier: e.networkIdentifier,
          restGatewayUrl: e.apiStatus.restGatewayUrl,
        });
      }
      return nodeInfoList;
    } catch (err) {
      console.error(err);
      throw new ConnectionError(`Statistics Server ${this.statisticsServer} Error`);
    }
  }

  /** 最新の NodeInfo[] を AsyncStorage に格納する */
  private async setNodeList(nodeList: NodeInfo[]): Promise<void> {
    const storageData: StorageModel = {
      expire: new Date().getTime() + NodeStatisticsService.CACHE_EXPIRE_TIME,
      nodeList: nodeList,
    };
    await this.setItem(JSON.stringify(storageData));
  }

  /** ローカルストレージにキャッシュされているノード情報のリストを強制的にパージし、新しい一覧に置き換える */
  public async pargeAsyncStorage(): Promise<void> {
    const nodeList: NodeInfo[] = await this.getNodeList();
    await this.setNodeList(nodeList);
  }

  /** NodeInfo[] を取得する */
  public async getNodeInfoList(): Promise<NodeInfo[]> {
    const storageData: StorageModel | null = JSON.parse(await this.getItem());

    // storageData が null ではなく、かつ expire の期限を超過していない場合、storageData をそのまま返却する
    if (storageData && new Date().getTime() < storageData.expire) {
      return storageData.nodeList;
    } else {
      // 既存のデータが存在しない、またはキャッシュが古い場合、統計サーバーより再取得を行う
      const nodeList: NodeInfo[] = await this.getNodeList();
      this.setNodeList(nodeList);
      return nodeList;
    }
  }
}
