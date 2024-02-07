import * as SecureStore from 'expo-secure-store';

export class SecureStorage {
  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  public async getItem(): Promise<string | null> {
    try {
      return (await SecureStore.getItemAsync(this.key)) as string | null;
    } catch (error) {
      throw new Error(`Error when trying to get item from SecureStore: ${error}`);
    }
  }

  public async setItem(value: string): Promise<void> {
    try {
      await SecureStore.setItemAsync(this.key, value);
    } catch (error) {
      throw new Error(`Error when trying to set item in SecureStore: ${error}`);
    }
  }

  public async removeItem(): Promise<void> {
    try {
      await SecureStore.deleteItemAsync(this.key);
    } catch (error) {
      throw new Error(`Error when trying to remove item from SecureStore: ${error}`);
    }
  }

  // Note: SecureStore does not provide a clear all method similar to AsyncStorage.
}
