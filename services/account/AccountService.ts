import { WalletModel } from "@/models/AccountModel";
import { StorageError } from "@/models/ErrorModels";
import { NetworkType } from "@/models/NetworkModels";
import { SecureStorage } from "@/util/storages/SecureStorage";

const SECURE_STORAGE_KEY: string = "ACCOUNT_SERVICE";

export class AccountService {
  public publicKey: string;
  public privateKey: string;
  public address: string;

  private constructor() {
    this.privateKey = "";
    this.address = "";
    this.publicKey = "";
  }

  static generateNewAccount(networkType: NetworkType): AccountService {
    return new AccountService();
  }

  static createFromPrivateKey(privateKey: string, networkType: NetworkType): AccountService {
    return new AccountService();
  }

  public async getAccountsFromStorage() {
    const storage = new SecureStorage(SECURE_STORAGE_KEY);
    const item = await storage.getItem();
    if (!item) {
      throw new StorageError("Failed to read from storage.");
    }

    return JSON.parse(item) as WalletModel[];
  }

  public async addAccountToStorage(value: WalletModel) {
    const storage = new SecureStorage(SECURE_STORAGE_KEY);
    const item = await storage.getItem();
    if (item) {
      const existingValues = JSON.parse(item) as WalletModel[];
      await storage.setItem(JSON.stringify([...existingValues, value])); // mnemonic は別
    } else {
      await storage.setItem(JSON.stringify([value]));
    }
  }

  public async deleteAccountFromStorage(name: string) {
    const storage = new SecureStorage(SECURE_STORAGE_KEY);
    const item = await storage.getItem();
    if (!item) {
      throw new StorageError("Failed to read from storage.");
    }

    const existingValues = JSON.parse(item) as WalletModel[];
    const specifiedValue = existingValues.filter((e) => e.name === name);

    if (specifiedValue.length !== 1) {
      throw new StorageError("Failed to read from storage.");
    }

    const writeValue = existingValues.filter((e) => e.name !== name);
    await storage.setItem(JSON.stringify(writeValue));
  }
}
