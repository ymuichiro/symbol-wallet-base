import React from "react";
import { Stack } from "expo-router";

export default function AccountLayout(): JSX.Element {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerShown: true }} />
    </Stack>
  );
}
