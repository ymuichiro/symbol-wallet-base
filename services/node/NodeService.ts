import { ConnectionError } from "@/models/ErrorModels";
import { NetworkType, NodeInfo } from "@/models/NetworkModels";
import { Configuration, NodeRoutesApi, NetworkRoutesApi } from "@/services/node-client";

export class NodeService {
  static statisticsServer: string = process.env.EXPO_PUBLIC_STATICS_SERVER;
  private nodeRoutes: NodeRoutesApi;
  private networkRoutes: NetworkRoutesApi;
  public url: string;

  constructor(nodeUrl: string) {
    const config = new Configuration({ basePath: this.url });
    this.nodeRoutes = new NodeRoutesApi(config);
    this.networkRoutes = new NetworkRoutesApi(config);
    this.url = nodeUrl;
  }

  /** get live node list from statics server */
  static async getListFromStatisticsServer(networkType: NetworkType): Promise<NodeInfo[]> {
    const url = new URL("/nodes", this.statisticsServer);
    url.searchParams.append("networkType", networkType);
    const res = await fetch(url.toString());

    if (res.status >= 200 && res.status <= 299) {
      const json = await res.json();
      return json["nodes"];
    } else if (res.status >= 400 && res.status <= 499) {
      const json = await res.json();
      console.error("ERROR", json);
      throw new ConnectionError(`Statistics Server ${url.toString()} ${res.status} Error`);
    } else {
      throw new ConnectionError(`Statistics Server ${url.toString()} ${res.status} Error`);
    }
  }

  /** check node status */
  public async getStatus(): Promise<boolean> {
    try {
      const res = await this.nodeRoutes.getNodeHealth();
      return res.status.apiNode === "up" && res.status.db === "up";
    } catch (err) {
      console.error(err);
      const message = err instanceof Error ? `${this.url} ${err.name} ${err.message}` : this.url;
      throw new ConnectionError(`Node REST API ${message} Error`);
    }
  }

  /** get current networktype */
  public async getNetworkType(): Promise<NetworkType> {
    try {
      const res = await this.networkRoutes.getNetworkType();
      return res.name as NetworkType;
    } catch (err) {
      console.error(err);
      const message = err instanceof Error ? `${this.url} ${err.name} ${err.message}` : this.url;
      throw new ConnectionError(`Node REST API ${message} Error`);
    }
  }
}
