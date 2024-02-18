/*

  Symbol Blockchain Mosaic の情報取得等、ノードとの通信・加工を行う

*/

import { Mosaic } from '@/models/MosaicModel';
import { NetworkProperty, NetworkType } from '@/models/NetworkModels';
import { BaseRestService } from '@/services/BaseRestService';
import { AccountRoutesApi, MosaicRoutesApi, NamespaceRoutesApi, UnresolvedMosaic } from '@/services/node-client';
import { NETWORK_PROPERTIES } from '@/util/configs/network-properties';
import { toAbsoluteAmount } from '@/util/symbol/amount';

export class MosaicRestService extends BaseRestService {
  private mosaicRoutes: MosaicRoutesApi;
  private accountRoutes: AccountRoutesApi;
  private namespaceRoutes: NamespaceRoutesApi;
  private networkProperty: NetworkProperty;

  public constructor(node: string, networkType: NetworkType) {
    super(node);
    this.mosaicRoutes = new MosaicRoutesApi(this.config);
    this.accountRoutes = new AccountRoutesApi(this.config);
    this.namespaceRoutes = new NamespaceRoutesApi(this.config);
    this.networkProperty = NETWORK_PROPERTIES[networkType];
  }

  /**
   * unresolvedMosaic の配列を受け取り、Amount を絶対値へ、ID は可能である場合 namespace を付加して返却する
   */
  public async resolveMosaics(mosaics: UnresolvedMosaic[]): Promise<Mosaic[]> {
    const mosaicIds = await Promise.all(mosaics.map((m) => m.id));
    // divisivility と、 namespace 情報を取得する
    const [mosaicsInfoDTO, namespaceInfoDTO] = await Promise.all([
      this.mosaicRoutes.getMosaics({ mosaicIds: { mosaicIds } }),
      this.namespaceRoutes.getMosaicsNames({ mosaicIds: { mosaicIds: mosaicIds } }),
    ]);

    // 情報を解決して返却する
    const resolvedMosaics: Mosaic[] = [];
    for (const mosaic of mosaics) {
      const mosaicInfoDTO = mosaicsInfoDTO.find((m) => m.mosaic.id === mosaic.id);
      const mosaicNamesDTO = namespaceInfoDTO.mosaicNames.find((m) => m.mosaicId === mosaic.id);
      resolvedMosaics.push({
        id: mosaic.id,
        amount: toAbsoluteAmount(Number(mosaic.amount || 0), mosaicInfoDTO.mosaic.divisibility),
        divisivility: mosaicInfoDTO.mosaic.divisibility,
        namespace: mosaicNamesDTO.names.length === 0 ? undefined : mosaicNamesDTO.names[0],
      });
    }

    return resolvedMosaics;
  }

  /**
   * 指定されたアドレスが所有する 主軸通貨 と Mosaic の一覧を返却する
   * 主軸通貨は絶対値へ変換したうえで返却し、それ以外の Mosaic はそのまま帰す
   */
  public async getBalanceByAddress(address: string) {
    const accountInfo = await this.accountRoutes.getAccountInfo({ accountId: address });
    const currency = accountInfo.account.mosaics.find((m) => m.id === this.networkProperty.currencyMosaicId);

    return {
      currency: {
        id: this.networkProperty.currencyMosaicId,
        amount: toAbsoluteAmount(Number(currency?.amount || 0), this.networkProperty.currencyDivisibility),
        divisivility: this.networkProperty.currencyDivisibility,
        namespace: this.networkProperty.currencyNamespaceId,
      },
      unresolvedMosaics: accountInfo.account.mosaics.filter((m) => m.id !== this.networkProperty.currencyMosaicId),
    };
  }
}
