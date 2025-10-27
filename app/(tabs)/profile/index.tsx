import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import UserComponent from '../../../components/profilescreen components/user'
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import FavoriteComponent from '../../../components/profilescreen components/favorite'
import SettingsComponent from '../../../components/profilescreen components/settingsmenu'


const Profile = () => {
  const insets = useSafeAreaInsets()
  return (
    <SafeAreaProvider>
      <SafeAreaView >
        <ScrollView 
        showsVerticalScrollIndicator={false}
        style={ { paddingBottom: 0, paddingLeft: insets.left, paddingRight: insets.right }}>
          <View style={styles.usercomponent}>
            <UserComponent />
          </View>
          <FavoriteComponent />
          <SettingsComponent />
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
    shadowColor: '#454545ff',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.15,
    shadowRadius: 7,
    elevation: 4,
    backgroundColor: 'white',
    margin: 10,
    width: '91%',
    alignSelf: 'center',
    borderRadius: 16,
    paddingBottom: 20,
  },
})

export default Profile
