import { Stack } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../../../constants/colors';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'UNIVERSITY NAME',
          headerShown: true,
          headerLargeTitle: false,
          headerTransparent: true,
          headerBlurEffect: 'regular',
          headerShadowVisible: false,
          headerRight: () => (
            <View style={styles.rightHeader}>
              <TouchableOpacity>
                <MaterialIcons
                  name="tune"
                  size={27}
                  color={colors.primary}
                  style={{ marginLeft: 5 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialIcons
                  name="notifications"
                  size={27}
                  color={colors.primary}
                  style={{ marginLeft: 5 }}
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
    flexDirection: 'row',
    gap: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Layout;