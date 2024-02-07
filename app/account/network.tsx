import { Link } from 'expo-router';
import { View, Text } from 'react-native';

interface Props {}
export default function NetworkPage(props: Props): JSX.Element {
  return (
    <View className='flex-1 justify-center items-center gap-3'>
      <Text className='font-bold'>ネットワークタイプ、ノード変更</Text>
      <Link href={'/_sitemap'} className='text-blue-700 underline'>
        to sitemap
      </Link>
    </View>
  );
}
