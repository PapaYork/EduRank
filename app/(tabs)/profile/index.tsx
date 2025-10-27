import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import UserComponent from '../../../components/profilescreen components/user'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Favorite from '../../../components/profilescreen components/favorite'


const Profile = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.usercomponent}>
            <UserComponent />
          </View>
          <View>
            <Favorite />
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
