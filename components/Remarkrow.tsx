import { View, Text, StyleSheet, Image } from 'react-native'
import React, { FC } from 'react'
import colors from '../constants/colors'
import { Ionicons } from "@expo/vector-icons";

export interface RemarkrowProps {
  id: String
  name: string
  remark: string
  course: string
  img: string
  msg: string
  ratings: number
}

const Remarkrow: FC<RemarkrowProps> = ({ name, remark, course, img, msg, ratings }) => {
  return (
     <View style={styles.cardcontainer}>
      <Image source={{ uri: img }} style={styles.image} />
      <View style={styles.textcontainer}>
        <View style={styles.header}>
          <Text style={styles.name} numberOfLines={1}>{name}</Text>
          <View style={styles.ratingcontainer}>
            <Ionicons name="star" size={18} color={colors.darkBlue} />
            <Text style={styles.rating}>{ratings}</Text>
          </View>
        </View>
        <Text style={styles.course} numberOfLines={1}>{course}</Text>
        <Text style={styles.msg} numberOfLines={3}>{msg}</Text>
      </View>
     </View>
  )
}

const styles = StyleSheet.create({
  cardcontainer: {
    flexDirection: 'row',
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 15,
    backgroundColor: '#f9f9f9ff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
    width: '94%',
    alignSelf: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 5,
  },
  textcontainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-around',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal:  10
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    flexShrink: 1,
    marginHorizontal: -10
  },
  course: {
    fontSize: 16,
    color: colors.gray,
    marginTop: 4,
  },
  msg: {
    fontSize: 19,
    color: colors.textdark,
    lineHeight: 24,
    marginTop: 6,
  },
  ratingcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    color: colors.textdark,
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 4,
  }
})

export default Remarkrow