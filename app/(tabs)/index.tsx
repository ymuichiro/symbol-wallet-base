import { router, usePathname } from "expo-router";
import { View, Text, Button } from "react-native";

interface Props {}
export default function Taba(props: Props): JSX.Element {
  const pathname = usePathname();

  console.log(pathname);

  return (
    <View className="flex-1">
      <Text>taba</Text>
      <Button title="to tabb" onPress={() => router.push("/tabb")} />
    </View>
  );
}
