import React from 'react';
import { Button, View, Text } from 'react-native';
import { Link } from 'expo-router';

import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';

// ロケールファイルのインポート
import en from '@/locales/en.json';
import ja from '@/locales/ja.json';

const { languageCode } = getLocales()[0];

// I18nの設定
const i18n = new I18n({
  en,
  ja,
});
i18n.defaultLocale = 'en';
i18n.locale = languageCode;

export default function Root(): React.JSX.Element {
  const [lang, setLang] = React.useState<string>(languageCode);
  const toggleLanguage = () => {
    const _lang = lang === 'en' ? 'ja' : 'en';
    i18n.locale = _lang;
    setLang(_lang);
  };

  return (
    <View className='flex-1 justify-center items-center gap-3'>
      <Text className='font-bold'>wallet 一覧と情報の表示</Text>
      <Text>未ログイン時は /login へリダイレクト</Text>
      <Text>詳細 Navigation は Drawer で</Text>
      <Link href={'/_sitemap'} className='text-blue-700 underline'>
        to sitemap
      </Link>

      <Button title='言語を切り替え' onPress={toggleLanguage} />
      <Text>言語:{lang}</Text>
      <Text>秘密鍵を翻訳:{i18n.t('common.privateKey')}</Text>
    </View>
  );
}
