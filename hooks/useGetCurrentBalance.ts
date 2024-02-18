import { MosaicRestService } from '@/services/MosaicRestService';
import { Mosaic } from '@/models/MosaicModel';
import { getNetworkTypeToAddressChatAt0 } from '@/util/symbol/network';
import { useState, useEffect } from 'react';

type IResult = {
  isLoading: boolean;
  /** 主軸通過の絶対値残高 */
  balance: number;
  /** 主軸通過以外の MosaicId と 絶対値 MosaicAmount 情報の配列。デフォルトは最大10件迄取得する。 */
  mosaics: Mosaic[];
  /** 残高を再取得する */
  refresh: () => Promise<void>;
  /** エラー */
  error: Error | null;
};

/**
 * 指定されたアドレスの残高を取得する
 *
 * - reload を呼ばれた場合、残高情報を再取得する
 * - mosaic は divisivility を取得し、絶対値に変更した値を返却する
 *
 * TODO: global context より現在選択されているノードを取得し、動的にノードを切り替える実装を行う
 */
export function useGetCurrentBalance(address: string): IResult {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [balance, setBalance] = useState<number>(0);
  const [mosaics, setMosaics] = useState<Mosaic[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const node = 'https://symbolnode.blockchain-authn.app:3001'; // 暫定

  useEffect(() => {
    let unmounted = false;
    setIsLoading(true);
    setError(null);
    const run = async () => {
      try {
        const networkType = getNetworkTypeToAddressChatAt0(address);
        const mosaicRest = new MosaicRestService(node, networkType);
        const { currency, unresolvedMosaics } = await mosaicRest.getBalanceByAddress(address);
        // 主軸通貨の情報更新
        if (!unmounted) setBalance(currency.amount);

        // モザイク情報の解決と情報更新
        const resolvedMosaics = await mosaicRest.resolveMosaics(unresolvedMosaics);
        if (!unmounted) setMosaics(resolvedMosaics);
      } catch (err) {
        console.error(err);
        if (!unmounted) setError(err);
      } finally {
        if (!unmounted) setIsLoading(false);
      }
    };
    run();
    return () => {
      unmounted = true;
    };
  }, []);

  const refresh = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const networkType = getNetworkTypeToAddressChatAt0(address);
      const mosaicRest = new MosaicRestService(node, networkType);
      const { currency, unresolvedMosaics } = await mosaicRest.getBalanceByAddress(address);
      // 主軸通貨の情報更新
      setBalance(currency.amount);
      // モザイク情報の解決と情報更新
      const resolvedMosaics = await mosaicRest.resolveMosaics(unresolvedMosaics);
      setMosaics(resolvedMosaics);
    } catch (err) {
      console.error(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, balance, mosaics, error, refresh };
}
