import { getLocales } from 'expo-localization';

import { AsyncStorage } from '@/util/storages/AsyncStorage';

const STORAGE_KEY = 'LANGUAGE_SERVICE';

export class LanguageService {
  public static async getLanguageCode(): Promise<string> {
    const storage = new AsyncStorage(STORAGE_KEY);
    const item = await storage.getItem();
    if (!item) {
      // 端末で設定されている言語を返す
      const { languageCode } = getLocales()[0];
      return languageCode;
    }
    return item;
  }

  public static async setLanguageCode(languageCode: string) {
    const storage = new AsyncStorage(STORAGE_KEY);
    await storage.setItem(languageCode);
  }
}
