import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Account, NetworkType } from "symbol-sdk";

export default function App(): JSX.Element {
  React.useEffect(() => {
    const tanaka = Account.generateNewAccount(NetworkType.TEST_NET);
    const suzuki = Account.generateNewAccount(NetworkType.TEST_NET);
    console.log("tanaka key", tanaka.privateKey);
    console.log(
      "tanaka encrypted",
      tanaka.encryptMessage("hello", suzuki.publicAccount)
    );
  }, []);
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-bold">
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
