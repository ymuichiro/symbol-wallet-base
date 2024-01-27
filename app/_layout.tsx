import "../shim";
import React from "react";
import { usePathname, Stack, Link, router, SplashScreen } from "expo-router";
import IonIcon from "@expo/vector-icons/Ionicons";
import { Pressable, useColorScheme } from "react-native";
import { useLoadedAssets } from "@/hooks/useLoadedAssets";

// Catch any errors thrown by the Layout component.
export { ErrorBoundary } from "expo-router";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout(): JSX.Element {
  const pathname = usePathname();
  const isLoadingComplete = useLoadedAssets();
  const colorSchema = useColorScheme();
  console.log("mode", { pathname, colorSchema, isLoadingComplete });

  const handleHeaderRightClickForPage = () => {
    return (
      <Link href={"/account"}>
        <IonIcon name="person-circle-outline" size={28} />
      </Link>
    );
  };

  const handleHeaderLeftClickForModal = () => {
    return (
      <Pressable onPress={() => router.back()}>
        <IonIcon name="close" size={28} />
      </Pressable>
    );
  };

  return (
    <Stack initialRouteName="index">
      <Stack.Screen
        name="index"
        options={{
          title: "Wallets",
          headerShown: true,
          headerRight: handleHeaderRightClickForPage,
        }}
      />
      <Stack.Screen
        name="account"
        options={{
          title: "Account",
          headerShown: true,
          presentation: "modal",
          headerLeft: handleHeaderLeftClickForModal,
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="wallet"
        options={{
          headerShown: true,
        }}
      />
    </Stack>
  );
}
