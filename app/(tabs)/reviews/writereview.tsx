import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import colors from '../../../constants/colors'

const WriteReview = () => {
  const [rating, setRating] = useState(0)

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Write a Review</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Professor Name:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="e.g., Dr. Jane Doe"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Course:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="e.g., Intro to Psychology - PSYC 101"
        />
      </View>

      <View style={styles.ratingContainer}>
        <Text style={styles.label}>Rating:</Text>
        <View style={styles.stars}>
          {[1,2,3,4,5].map((star) => (
            <TouchableOpacity key={star} onPress={() => setRating(star)}>
              <Ionicons
                name={star <= rating ? 'star' : 'star-outline'}
                size={30}
                color={colors.primary}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.commentContainer}>
        <Text style={styles.label}>Review:</Text>
        <TextInput
          style={styles.multiLineTextInput}
          placeholder="Write your review here..."
          multiline
          numberOfLines={4}
        />
      </View>

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Submit Review</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  ratingContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  stars: {
    flexDirection: 'row',
  },
  commentContainer: {
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
  },
  multiLineTextInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  submitText: {
    color: colors.background,
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default WriteReview
