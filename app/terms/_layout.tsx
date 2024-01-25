import React from "react";
import { Stack } from "expo-router";

export default function TermsLayout(): JSX.Element {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerShown: true }} />
      <Stack.Screen name="terms" options={{ headerShown: true }} />
      <Stack.Screen name="policy" options={{ headerShown: true }} />
      <Stack.Screen name="license" options={{ headerShown: true }} />
    </Stack>
  );
}
