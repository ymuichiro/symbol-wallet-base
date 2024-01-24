import { Tabs } from "expo-router";

interface Props {}
export default function TabsIndex(props: Props): JSX.Element {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: true,
          title: "Home",
        }}
      />
      <Tabs.Screen
        name="tabb"
        options={{ headerShown: true, title: "Tab B" }}
      />
      <Tabs.Screen
        name="tabc"
        options={{ headerShown: true, title: "Tab B" }}
      />
    </Tabs>
  );
}
