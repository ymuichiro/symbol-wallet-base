import { StorageError } from '@/models/ErrorModels';
import { AsyncStorage } from '@/util/storages/AsyncStorage';
import { getLocales } from 'expo-localization';

const STORAGE_KEY = 'LANGUAGE_SERVICE';

export class LanguageService {
  public static async getLanguageCode(): Promise<string> {
    const storage = new AsyncStorage(STORAGE_KEY);
    const item = await storage.getItem();
    if (!item) {
      // 端末で設定されている言語を返す
      const { languageCode } = getLocales()[0];
      console.log('returnDefaultLanguageCode:', languageCode);
      return languageCode;
    }
    console.log('getLanguageCode:', item);
    return item;
  }

  public static async setLanguageCode(languageCode: string) {
    console.log('setLanguageCode:', languageCode);
    const storage = new AsyncStorage(STORAGE_KEY);
    await storage.setItem(languageCode);
  }
}
