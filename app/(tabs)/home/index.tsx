import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { globalStyle } from '../../../constants/styles'

const Page = () => {
  return (
     <SafeAreaProvider>
        <SafeAreaView>
         <Text>Home Screen</Text>
        </SafeAreaView>
        </SafeAreaProvider>
  )
}

export default Page

