import { Link, Stack } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../../../constants/colors";
import { View, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "UNIVERSITY NAME",
          headerShown: true,
          headerLargeTitle: false,
          headerTransparent: true,
          headerBlurEffect: 'regular',
          headerShadowVisible: false,
          headerStyle: {},

          headerRight: () => (
            <View style={styles.rightHeader}>
              <TouchableOpacity>
                <MaterialIcons
                  name="tune"
                  size={27}
                  color={colors.primary}
                  style={{ padding: -5, marginLeft: 5 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialIcons
                  name="notifications"
                  size={27}
                  color={colors.primary}
                  style={{ padding: -5, marginLeft: 5 }}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </Stack>
  );
};

const styles = StyleSheet.create({
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
