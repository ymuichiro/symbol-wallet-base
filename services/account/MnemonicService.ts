import { InvalidValueError } from "@/models/ErrorModels";
import { MnemonicPassPhrase, ExtendedKey, Wallet, Network } from "symbol-hd-wallets";

export class MnemonicService {
  public readonly privateKey: string;
  public readonly publicKey: string;

  /**
   * @param mnemonic format: "text text text"
   * @param seed hex string
   */
  private constructor(public mnemonic: string, public seed: string) {
    this.privateKey = "";
    this.publicKey = "";
  }

  public getChildPrivateKey(height: number): string {
    const xkey = ExtendedKey.createFromSeed(this.seed, Network.SYMBOL);
    const wallet = new Wallet(xkey);
    return wallet.getChildAccountPrivateKey(`m/44'/4343'/0'/0'/${height}'`);
  }

  static createRandom(): MnemonicService {
    const mnemonic = MnemonicPassPhrase.createRandom();
    const seed = mnemonic.toSeed().toString("hex");
    return new MnemonicService(mnemonic.plain, seed);
  }

  static generateFromPhrase(mnemonicPhrase: string): MnemonicService {
    const mnemonic = new MnemonicPassPhrase(mnemonicPhrase);

    if (!mnemonic.isValid()) {
      throw new InvalidValueError("Incorrect mnemonic format");
    }

    const seed = mnemonic.toSeed().toString("hex");
    return new MnemonicService(mnemonic.plain, seed);
  }
}
