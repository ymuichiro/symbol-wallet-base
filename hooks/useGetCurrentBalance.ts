import { StorageError } from '@/models/ErrorModels';
import { AccountService } from '@/services/AccountService';
import { AccountRoutesApi, Configuration, UnresolvedMosaic } from '@/services/node-client';
import { useState, useEffect } from 'react';

type IResult = {
  isLoading: boolean;
  /** 主軸通過の絶対値残高 */
  balance: number;
  /** 主軸通過以外の MosaicId と 絶対値 MosaicAmount 情報の配列。デフォルトは最大10件迄取得する。 */
  mosaics: UnresolvedMosaic[];
  /** 残高を再取得する */
  refresh: () => Promise<void>;
  /** mosaic を 10件以上の全てを取得する */
  loadAllMosaic: () => void;
  /** エラー */
  error: Error | null;
};

const config = new Configuration({ basePath: 'https://symbolnode.blockchain-authn.app:3001' });
const AccountRoutes = new AccountRoutesApi(config);

/**
 * 指定されたアドレスの残高を取得する
 *
 * - reload を呼ばれた場合、残高情報を再取得する
 * - mosaic は divisivility を取得し、絶対値に変更した値を返却する
 * - mosaic の取得件数は 10件迄。追加取得する場合は loadAllMosaic を実行する
 */
export function useGetCurrentBalance(address: string): IResult {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [balance, setBalance] = useState<number>(0);
  const [mosaics, setMosaics] = useState([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let unmounted = false;
    setIsLoading(true);
    AccountRoutes.getAccountInfo({ accountId: address }).then((res) => {
      // 主軸通過の Mosaic ID を検出し、balance を取得する
      console.log(res.account.mosaics);

      // 主軸通貨以外の Mosaic ID を検出し、それぞれの Balance を取得する
    });
    // AccountService.getFromStorage()
    //   .then((w) => {
    //     if (unmounted) return;
    //     setWallets([...w]);
    //   })
    //   .catch(() => {
    //     if (unmounted) return;
    //     setError(new StorageError('Failed to load Wallet.'));
    //   })
    //   .finally(() => {
    //     if (unmounted) return;
    //     setIsLoading(false);
    //   });
    return () => {
      unmounted = true;
    };
  }, []);

  const loadAllMosaic = async () => {};
  const refresh = async () => {};

  return { isLoading, balance, mosaics, error, loadAllMosaic, refresh };
}
