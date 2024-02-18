import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { useGetCurrentBalance } from '@/hooks/useGetCurrentBalance';

export default function Root(): React.JSX.Element {
  const { balance, error, isLoading, mosaics } = useGetCurrentBalance('NCZQM2TT6V7QET26NMW2I6ZNKB4PDWZJHUJSK3Q');
  console.log(balance, error, isLoading, mosaics);

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
