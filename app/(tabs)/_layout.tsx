import { Tabs } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import colors from "../../constants/colors";
import { StyleSheet, Platform} from "react-native";
// import { BlurView } from "expo-blur";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        headerShown: true,
        tabBarStyle: styles.container,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="reviews"
        options={{
          headerTitle: "My Reviews",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="rate-review" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
  position: "absolute",
  alignItems: "center",
  bottom: 30,
  left: "5%",
  right: "5%",
  height: 70,
  width: "80%",
  borderRadius: 35,
  borderWidth: 1,
  borderColor: "rgba(255, 255, 255, 0.1)",
  paddingBottom: 8,
  paddingTop: 8,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 10 },
  shadowOpacity: 0.5,
  shadowRadius: 20,
  elevation: 20,
  overflow: "hidden",
  marginLeft: 40
  },
});
