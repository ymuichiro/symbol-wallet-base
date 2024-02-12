import { useEffect, useState, FC } from 'react';

import { Link } from 'expo-router';
import { Button, View, Text, TextInput } from 'react-native';

import { useStateContext } from 'states/context';

interface Props {}

const NetworkPage: FC<Props> = (props: Props) => {
  const { state, dispatch } = useStateContext();
  const [nodeInput, setNodeInput] = useState('');

  useEffect(() => {
    setNodeInput(state.node);
  }, [state.node]);

  const handleChangeNodeInput = (value: string) => {
    setNodeInput(value);
  };
  const handlePressSetNode = () => {
    // TODO validation
    dispatch({ type: 'SET_NODE', payload: nodeInput });
  };

  return (
    <View className='flex-1 justify-center items-center gap-3'>
      <Text className='font-bold'>ネットワークタイプ、ノード変更</Text>
      <Text>ノード設定</Text>
      <Text>設定されているノード: {state.node}</Text>
      <TextInput
        value={nodeInput}
        onChangeText={handleChangeNodeInput}
        placeholder='e,g) https://node.example.com:3000'
      />
      <Button title='設定' onPress={handlePressSetNode} />
      <Link href={'/_sitemap'} className='text-blue-700 underline'>
        to sitemap
      </Link>
    </View>
  );
};

export default NetworkPage;
