import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View, TouchableOpacity, StyleSheet, Text, Button } from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import colors from "../../../constants/colors";
import { useState } from "react";


const Layout = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "",
          headerShown: true,
          headerLargeTitle: false,
          headerTransparent: true,
          headerBlurEffect: 'regular',
          headerShadowVisible: false,
          headerTitleAlign: 'left',
          headerLeft: () => (
            <View style={styles.leftHeader}>
             <Text style={styles.profileText}>Profile</Text>
              <TouchableOpacity onPress={() => setIsDarkMode(!isDarkMode)} >
                 <Ionicons
                  name={isDarkMode ? 'moon' : 'sunny'} size={30} color={colors.primary} />
              </TouchableOpacity>
             
            </View>
          ),

        headerRight: () => (
            <View style={styles.rightHeader}>
             
              {/* <TouchableOpacity>
                <MaterialIcons
                  name="notifications"
                  size={27}
                  color={colors.primary}
                  style={{ padding: -5, marginLeft: 5 }}
                />
              </TouchableOpacity> */}
              <TouchableOpacity>
                <Entypo name="dots-three-vertical" size={18} color={colors.primary} style={{ padding: -5, marginLeft: 10 }} />
              </TouchableOpacity>
            </View>
          ),     
      }}
    />
    </Stack>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  leftHeader: {
    flexDirection: "row",
    gap: 17,
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    width: "auto",
  },
  profileText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  rightHeader: {
    flexDirection: "row",
    gap: 17,
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    width: "auto",
  },
});
export default Layout;
