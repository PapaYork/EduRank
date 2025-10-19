import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Remarks from '../../../components/remarks'
import SearchScreen from '../../../components/searchscreen'

const HomeScreen  = () => {
  const insets = useSafeAreaInsets()
  return (
     <View style={[styles.container, { paddingTop: insets.top }]} >
        <View style={styles.searchcontainer}>
          <SearchScreen />
        </View>
         <View style={styles.remarkscontainer}>
          <Remarks />
         </View>
     </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  searchcontainer: {
    marginTop: 10,
    borderRadius: 150,
    width: 350,
    alignSelf: 'center',
    padding: 10,
    backgroundColor: '#f1f0f0ff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  remarkscontainer: {
    flex: 1,
    marginTop: 20,
  },
})

export default HomeScreen