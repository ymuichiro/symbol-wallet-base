import "react-native-get-random-values";
import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect, useState } from "react";
import { Text, View } from "react-native";
import { Account, NetworkType } from "symbol-sdk";

export default function App() {
  const [privateKey, setPrivateKey] = useState<string>("");
  const [address, setAddress] = useState<string>("");

  useLayoutEffect(() => {
    const account = Account.generateNewAccount(NetworkType.TEST_NET);
    setPrivateKey(account.privateKey);
    setAddress(account.address.pretty());
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
      <Text>Hello Symbol BlockChain!!</Text>
      <Text style={{ marginTop: 20, textAlign: "left" }}>
        アカウントの秘密鍵（第三者には共有してはなりません）
      </Text>
      <Text style={{ marginTop: 10, textAlign: "left" }}>{privateKey}</Text>
      <Text style={{ marginTop: 20, textAlign: "left" }}>
        アカウントのアドレス
      </Text>
      <Text style={{ marginTop: 10, textAlign: "left" }}>{address}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
