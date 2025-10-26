import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Easing } from 'react-native'
import React from 'react'
import Reviews from '../../../components/reviewscreen components/reviews'
import { Modalize } from 'react-native-modalize'
import Ionicons from '@expo/vector-icons/Ionicons'
import colors from '../../../constants/colors'
import WriteReview from './writereview'

const ReviewsScreen = () => {
  const modalizeRef = React.useRef<Modalize>(null)
  
  const onOpen = () => {
    modalizeRef.current?.open()
  }


  return (
    <View style={styles.reviewscontainer}>
      <Reviews />
      <TouchableOpacity style={styles.add} onPress={onOpen}>
        <Ionicons name="add" size={30} color={colors.background} />
      </TouchableOpacity>
      <Modalize
        ref={modalizeRef}
        openAnimationConfig={{
          spring: {
            damping: 50,
            mass: 1,
            stiffness: 100,
          },
          timing: { duration: 500, easing: Easing.out(Easing.exp) }
        }}
        closeAnimationConfig={{
          spring: {
            damping: 50,
            mass: 1,
            stiffness: 100,
          },
          timing: { duration: 500, easing: Easing.out(Easing.exp) }
        }}
        snapPoint={500}
        withHandle={true}
        modalHeight={660}
        >
        <ScrollView>
          <WriteReview />
        </ScrollView>
      </Modalize>
    </View>
  )
}

const styles = StyleSheet.create({
   reviewscontainer: {
    flex: 1,
    marginTop: -40
  },
  add: {
    position: 'absolute',
    bottom: 130,
    right: 30,
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 40
  }
})

export default ReviewsScreen
