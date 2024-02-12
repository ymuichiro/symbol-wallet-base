import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { useLoadWallets } from '@/hooks/useLoadWallets';

export default function Root(): React.JSX.Element {
  const { isLoading, error, wallets } = useLoadWallets();

  console.log(isLoading, error, wallets);

  return (
    <View className='flex-1 justify-center items-center gap-3'>
      <Text className='font-bold'>wallet 一覧と情報の表示</Text>
      <Text>未ログイン時は /login へリダイレクト</Text>
      <Text>詳細 Navigation は Drawer で</Text>
      <Link href={'/_sitemap'} className='text-blue-700 underline'>
        to sitemap
      </Link>
    </View>
  );
}
