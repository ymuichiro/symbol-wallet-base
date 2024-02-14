import { WalletModel } from '@/models/AccountModel';
import { StorageError } from '@/models/ErrorModels';
import { NetworkType } from '@/models/NetworkModels';
import { MnemonicService } from '@/services/account/MnemonicService';
import { SecureStorage } from '@/util/storages/SecureStorage';
import { Account } from 'symbol-sdk';

const SECURE_STORAGE_KEY: string = 'ACCOUNT_SERVICE';

export class AccountService {
  private constructor(
    public publicKey: string,
    public privateKey: string,
    public address: string
  ) {}

  public static async generateNewAccountByMnemonic(height: number, networkType: NetworkType): Promise<AccountService> {
    // ニーモニックを取得。ない場合 throw error
    const mnemonicStorage = await MnemonicService.getFromStorage();
    const mnemonic = MnemonicService.generateFromPhrase(mnemonicStorage.mnemonic);
    const childPrivateKey = mnemonic.getChildPrivateKey(height);
    // 生成してストレージへ保存
    const account = Account.createFromPrivateKey(childPrivateKey, this.switchStrNetworkTypeToInt(networkType));
    const address = account.address.plain();
    const name = `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
    this.addToStorage({ name, height, publicKey: account.publicKey, privateKey: account.privateKey });
    return new AccountService(account.publicKey, account.privateKey, address);
  }

  public static async generateNewAccount(networkType: NetworkType): Promise<AccountService> {
    // 生成してストレージへ保存
    const account = Account.generateNewAccount(this.switchStrNetworkTypeToInt(networkType));
    const address = account.address.plain();
    const name = `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
    this.addToStorage({ name, height: null, publicKey: account.publicKey, privateKey: account.privateKey });
    // インスタンス返却
    return new AccountService(account.publicKey, account.privateKey, address);
  }

  public static createFromPrivateKey(privateKey: string, networkType: NetworkType): AccountService {
    const account = Account.createFromPrivateKey(privateKey, this.switchStrNetworkTypeToInt(networkType));
    return new AccountService(account.publicKey, account.privateKey, account.address.plain());
  }

  /** ローカルストレージに保存されたアカウント情報の一覧を取得する */
  public static async getFromStorage() {
    const storage = new SecureStorage(SECURE_STORAGE_KEY);
    const item = await storage.getItem();
    if (!item) {
      throw new StorageError('Failed to read from storage.');
    }

    return JSON.parse(item) as WalletModel[];
  }

  public static async addToStorage(value: WalletModel) {
    const storage = new SecureStorage(SECURE_STORAGE_KEY);
    const item = await storage.getItem();
    if (item) {
      // 格納済みの WALLET 情報一覧を取得し、重複している秘密鍵がなければ書き込みを行う
      const existingValues = JSON.parse(item) as WalletModel[];
      for (const v of existingValues) {
        if (!value.privateKey) break;
        if (v.privateKey && v.privateKey === value.privateKey) {
          throw new StorageError('Duplicate accounts');
        }
      }
      await storage.setItem(JSON.stringify([...existingValues, value])); // mnemonic は別
    } else {
      await storage.setItem(JSON.stringify([value]));
    }
  }

  public static async deleteFromStorage(name: string) {
    const storage = new SecureStorage(SECURE_STORAGE_KEY);
    const item = await storage.getItem();
    if (!item) {
      throw new StorageError('Failed to read from storage.');
    }

    const existingValues = JSON.parse(item) as WalletModel[];
    const specifiedValue = existingValues.filter((e) => e.name === name);

    if (specifiedValue.length !== 1) {
      throw new StorageError('Failed to read from storage.');
    }

    const writeValue = existingValues.filter((e) => e.name !== name);
    await storage.setItem(JSON.stringify(writeValue));
  }

  /** sdk v3 形式の文字列 NetworkType を sdk v2 形式の int 型 NetworkType へ変換する */
  private static switchStrNetworkTypeToInt(networkType: NetworkType): number {
    return networkType === 'mainnet' ? 104 : 152;
  }
}
