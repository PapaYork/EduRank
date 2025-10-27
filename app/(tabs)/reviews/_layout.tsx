import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Layout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
       <Stack.Screen
         name="index"
         options={{
         title: "My Reviews",
         headerShown: true,
         headerLargeTitle: true,
         headerTransparent: false,
         headerLargeTitleShadowVisible: false,
  }}
/>
    </Stack>
    </GestureHandlerRootView>
  );
};

export default Layout;
