import { MnemonicModel } from '@/models/AccountModel';
import { InvalidValueError, StorageError } from '@/models/ErrorModels';
import { SecureStorage } from '@/util/storages/SecureStorage';
import { MnemonicPassPhrase, ExtendedKey, Wallet, Network } from 'symbol-hd-wallets';

const SECURE_STORAGE_KEY: string = 'MNEMONIC_SERVICE';

export class MnemonicService {
  public readonly privateKey: string;
  public readonly publicKey: string;

  /**
   * @param mnemonic format: "text text text"
   * @param seed hex string
   */
  private constructor(
    public mnemonic: string,
    public seed: string
  ) {
    this.privateKey = '';
    this.publicKey = '';
  }

  public getChildPrivateKey(height: number): string {
    const xkey = ExtendedKey.createFromSeed(this.seed, Network.SYMBOL);
    const wallet = new Wallet(xkey);
    return wallet.getChildAccountPrivateKey(`m/44'/4343'/0'/0'/${height}'`);
  }

  public static createRandom(): MnemonicService {
    const mnemonic = MnemonicPassPhrase.createRandom();
    const seed = mnemonic.toSeed().toString('hex');
    return new MnemonicService(mnemonic.plain, seed);
  }

  /** ローカルストレージに保存されたニーモニックを返却する */
  public static async getFromStorage() {
    const storage = new SecureStorage(SECURE_STORAGE_KEY);
    const item = await storage.getItem();
    if (!item) {
      throw new StorageError('Failed to read from storage.');
    }
    return JSON.parse(item) as MnemonicModel;
  }

  public static generateFromPhrase(mnemonicPhrase: string): MnemonicService {
    const mnemonic = new MnemonicPassPhrase(mnemonicPhrase);
    if (!mnemonic.isValid()) {
      throw new InvalidValueError('Incorrect mnemonic format');
    }
    const seed = mnemonic.toSeed().toString('hex');
    return new MnemonicService(mnemonic.plain, seed);
  }

  /** ニーモニックをストレージへ保存する。デバイスにつきニーモニックは1つとする */
  public async replaceToStorage(): Promise<void> {
    try {
      const storage = new SecureStorage(SECURE_STORAGE_KEY);
      const item = JSON.stringify({ mnemonic: this.mnemonic } as MnemonicModel);
      await storage.setItem(item);
    } catch (err) {
      console.error(err);
    }
  }

  /** ニーモニックに紐づくアドレスを指定した height まで取得する */
  public getChildAddresses(start: number = 0, end: number = 30): string[] {
    const xkey = ExtendedKey.createFromSeed(this.seed, Network.SYMBOL);
    const wallet = new Wallet(xkey);
    let addresses: string[] = [];
    for (let i = start; i <= end; i++) {
      addresses.push(wallet.getChildAccountPrivateKey(`m/44'/4343'/0'/0'/${i}'`));
    }
    return addresses;
  }
}
