import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import colors from '../../constants/colors'
import favorites from '../../assets/data/favorites.json'

interface Professor {
  id: string
  name: string
  iconName: string
  iconColor: string
  backgroundColor: string
}

const FavoriteComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favorite Professors</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        {favorites.map((item: Professor) => (
          <View key={item.id} style={styles.favoriteWrapper}>
            <TouchableOpacity style={[styles.favoriteItem, { backgroundColor: item.backgroundColor }]}>
              <FontAwesome5 name={item.iconName} size={24} color={item.iconColor} />
            </TouchableOpacity>
            <Text style={styles.favoriteText}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: '91%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 16,
    shadowColor: '#000000ff',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    elevation: 4,
    padding: 7,
    paddingBottom: 20,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.textdark,
    marginBottom: 10,
  },
  scrollContainer: {
    flexDirection: 'row',
  },
  favoriteWrapper: {
    alignItems: 'center',
    margin: 17,
    marginBlock: 7,
  },
  favoriteItem: {
    width: 70,
    height: 70,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
  },
  favoriteText: {
    fontSize: 14,
    color: colors.gray,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 80,
  },
})

export default FavoriteComponent
