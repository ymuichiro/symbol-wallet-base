import { PrivateKeyModel, WalletModel } from '@/models/AccountModel';
import { StorageError } from '@/models/ErrorModels';
import { NetworkType } from '@/models/NetworkModels';
import { MnemonicService } from '@/services/MnemonicService';
import { STORAGE_KEYS } from '@/util/configs/storage-keys';
import { SecureStorage } from '@/util/storages/SecureStorage';
import { strNetworkTypeToHexadecimal } from '@/util/symbol/network';
import { Account } from 'symbol-sdk';

type SecureStorageModel = PrivateKeyModel[];

export class AccountService {
  private constructor(
    public name: string,
    public publicKey: string,
    public privateKey: string,
    public address: string,
    public networkType: NetworkType
  ) {}

  private toJSON(): any {
    return {
      name: this.name,
      publicKey: this.publicKey,
      privateKey: this.privateKey,
      address: this.address,
      networkType: this.networkType,
    };
  }

  /** ニーモニックを SecureStorage より取り出し、新しいアカウントを生成する */
  public static async generateNewAccountByMnemonic(height: number, networkType: NetworkType): Promise<AccountService> {
    const mnemonicStorage = await MnemonicService.getFromStorage();
    const mnemonic = MnemonicService.generateFromPhrase(mnemonicStorage.mnemonic);
    const childPrivateKey = mnemonic.getChildPrivateKey(height);
    const account = Account.createFromPrivateKey(childPrivateKey, strNetworkTypeToHexadecimal(networkType));
    const address = account.address.plain();
    const name = `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
    return new AccountService(name, account.publicKey, account.privateKey, address, networkType);
  }

  /** 新しい秘密鍵アカウントを生成する */
  public static async generateNewAccount(networkType: NetworkType): Promise<AccountService> {
    const account = Account.generateNewAccount(strNetworkTypeToHexadecimal(networkType));
    const address = account.address.plain();
    const name = `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
    return new AccountService(name, account.publicKey, account.privateKey, address, networkType);
  }

  /** 秘密鍵を import してアカウントインスタンスを作成する */
  public static createFromPrivateKey(privateKey: string, networkType: NetworkType): AccountService {
    const account = Account.createFromPrivateKey(privateKey, strNetworkTypeToHexadecimal(networkType));
    const address = account.address.plain();
    const name = `${address.substring(0, 4)}...${address.substring(address.length - 4)}`;
    return new AccountService(name, account.publicKey, account.privateKey, address, networkType);
  }

  /** ローカルストレージに保存されたアカウント情報の一覧を取得する */
  public static async getFromStorage(networkType: NetworkType): Promise<WalletModel[] | null> {
    const storage = new SecureStorage(STORAGE_KEYS.secure.ACCOUNT);
    const item: WalletModel[] | null = JSON.parse(await storage.getSecretItem());
    if (!item) {
      return null;
    }
    return item.filter((e) => e.networkType === networkType);
  }

  /** ローカルストレージへ現在のアカウントの情報を保存する */
  public async addToStorage() {
    const item: WalletModel[] | null = JSON.parse(await this.getSecretItem());
    if (item) {
      // 格納済みの WALLET 情報一覧を取得し、重複している秘密鍵がなければ書き込みを行う
      for (const v of item) {
        if (!v.privateKey) continue;
        if (v.networkType !== this.networkType) continue;
        if (v.privateKey && v.privateKey === this.privateKey) {
          throw new StorageError('Duplicate accounts');
        }
      }
      const storageData: SecureStorageModel = [...item, this.toJSON()];
      await this.setSecretItem(JSON.stringify(storageData));
    } else {
      // 未格納の場合は、新規に格納する
      await this.setSecretItem(JSON.stringify([this.toJSON()]));
    }
  }

  /** 現在のアカウントをローカルストレージより削除する */
  public async deleteFromStorage() {
    const storage = new SecureStorage(STORAGE_KEYS.secure.ACCOUNT);
    const item = await storage.getSecretItem();
    if (!item) {
      throw new StorageError('Failed to read from storage.');
    }

    const existingValues = JSON.parse(item) as WalletModel[];
    const specifiedValue = existingValues.filter((e) => e.name === name);

    if (specifiedValue.length !== 1) {
      throw new StorageError('Failed to read from storage.');
    }

    const writeValue = existingValues.filter((e) => e.name !== name);
    await storage.setSecretItem(JSON.stringify(writeValue));
  }
}
