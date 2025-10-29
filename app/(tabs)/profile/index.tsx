import { View, Text, ScrollView, StyleSheet, Platform, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import UserComponent from '../../../components/profilescreen components/user'
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import FavoriteComponent from '../../../components/profilescreen components/favorite'
import SettingsComponent from '../../../components/profilescreen components/settingsmenu'
import { useClerk } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'


const Profile = () => {

  const insets = useSafeAreaInsets()

  const { signOut } = useClerk()
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      await signOut()
      // Redirect to your desired page
      router.replace('/')
    } catch (err) {
      // See https://clerk.com/docs/guides/development/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
    }
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView >
        <ScrollView 
        showsVerticalScrollIndicator={false}

        >
          <View style={styles.usercomponent}>
            <UserComponent />
          </View>
          <FavoriteComponent />
          <SettingsComponent />
          <View style={{ paddingBottom: insets.bottom }}>
          <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={handleSignOut}
                      style={[
                        styles.logoutButton,
                        Platform.OS === 'ios' ? styles.logoutButtonIOS : styles.logoutButtonAndroid,
                      ]}
                    >
                      <Text style={[styles.logoutText, Platform.OS === 'ios' ? styles.logoutTextIOS : {}]}>
                        Log out
                      </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  usercomponent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
    width: '91%',
    alignSelf: 'center',
    borderRadius: 16,
    paddingBottom: 20,
    shadowColor: '#b7b7b7ff',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  logoutButton: {
    width: '92%',
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 65,
    marginTop: -25,
  },
  logoutButtonIOS: {
    backgroundColor: 'transparent',
  },
  logoutButtonAndroid: {
    backgroundColor: '#007AFF', // Android/Default button color (change as needed)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 6,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
  },
  logoutTextIOS: {
    color: '#E11D48', // destructive red on iOS
  },
})

export default Profile
