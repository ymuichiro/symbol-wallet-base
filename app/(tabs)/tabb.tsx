import { router } from "expo-router";
import { View, Text, Button } from "react-native";

interface Props {}
export default function Tabsb(props: Props): JSX.Element {
  return (
    <View className="flex-1">
      <Text>tabb</Text>
      <Button title="to taba" onPress={() => router.push("/")} />
    </View>
  );
}
