import "../shim";
import React from "react";
import { Stack } from "expo-router";

export default function App(): JSX.Element {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: true }} />
    </Stack>
  );
}
