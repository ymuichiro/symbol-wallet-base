import "../shim";
import React from "react";
import { Stack, usePathname } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function RootLayout(): JSX.Element {
  const pathname = usePathname();
  console.log("current path", pathname);

  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer>
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: "Wallets",
              title: "Wallets",
              headerShown: true,
            }}
          />
          <Drawer.Screen
            name="advanced"
            options={{
              drawerLabel: "Advanced",
              title: "Advanced",
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name="help"
            options={{
              drawerLabel: "Help",
              title: "Help",
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name="terms"
            options={{
              drawerLabel: "Terms",
              title: "Terms",
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name="account"
            options={{
              drawerLabel: "Account",
              title: "Account",
              headerShown: false,
            }}
          />
          {/* hidden screens */}
          <Drawer.Screen
            name="login"
            options={{
              drawerItemStyle: { display: "none" },
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name="wallet"
            options={{
              drawerItemStyle: { display: "none" },
              headerShown: false,
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </>
  );
}
