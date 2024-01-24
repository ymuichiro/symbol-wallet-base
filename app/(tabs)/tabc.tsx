import { router } from "expo-router";
import { View, Text, Button } from "react-native";

interface Props {}
export default function Tabsc(props: Props): JSX.Element {
  return (
    <View className="flex-1">
      <Text>tabc</Text>
      <Button title="to taba" onPress={() => router.push("/")} />
    </View>
  );
}
