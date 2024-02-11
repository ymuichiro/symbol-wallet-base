import { WalletModel } from '@/models/AccountModel';
import { StorageError } from '@/models/ErrorModels';
import { AccountService } from '@/services/account/AccountService';
import { useState, useEffect } from 'react';

type ILoadWallets = {
  isLoading: boolean;
  wallets: WalletModel[];
  error: Error | null;
};

/**
 * component のマウント時に global state 上に格納されている wallet の一覧を取得する
 * global state の length === 0 のときは SecureStorage より取得し、 global state を更新の上、返却する
 */
export function useLoadWallets(): ILoadWallets {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [wallets, setWallets] = useState<WalletModel[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let unmounted = false;
    setIsLoading(true);
    AccountService.getFromStorage()
      .then((w) => {
        if (unmounted) return;
        setWallets([...w]);
      })
      .catch(() => {
        if (unmounted) return;
        setError(new StorageError('Failed to load Wallet.'));
      })
      .finally(() => {
        if (unmounted) return;
        setIsLoading(false);
      });
    return () => {
      unmounted = true;
    };
  }, []);

  return { isLoading, wallets, error };
}
