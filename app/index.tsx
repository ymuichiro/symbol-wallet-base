import { Button, View, Text } from 'react-native';
import { Link } from 'expo-router';

import { useI18n } from '@/hooks/useI18n';

export default function Root(): React.JSX.Element {
  const { t, locale, setLocale } = useI18n();
  const toggleLanguage = () => {
    const lang = locale === 'en' ? 'ja' : 'en';
    setLocale(lang);
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
      <Text>言語:{locale}</Text>
      <Text>秘密鍵を翻訳→→{t('common.privateKey')}</Text>
    </View>
  );
}
