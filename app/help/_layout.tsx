import React from "react";
import { Stack } from "expo-router";

export default function HelpLayout(): JSX.Element {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerShown: true }} />
      <Stack.Screen name="contract" options={{ headerShown: true }} />
      <Stack.Screen name="qa" options={{ headerShown: true }} />
    </Stack>
  );
}
