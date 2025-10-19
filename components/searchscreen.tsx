import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons'
import { TextInput } from 'react-native-gesture-handler'

const SearchScreen = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <EvilIcons name="search" size={30} color="black" />
      <TextInput style={styles.searchText} placeholder="Search by professor, university, or course"/>
    </View>
  )
}

const styles = StyleSheet.create({
  searchText: {
    marginLeft: 10,
    marginTop: 4,
    fontSize: 20,
    width: 290,
  },
})

export default SearchScreen
