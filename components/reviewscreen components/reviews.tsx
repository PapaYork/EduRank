import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import Reviewsrow from './Reviewsrow';
import reviews from '../../assets/data/reviews.json';

const Reviews = () => {
  return (
    <View style={[styles.remarkscontainer]}>
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.professor.toString()}
        renderItem={({ item }) => <Reviewsrow {...item} />}
         contentContainerStyle={{ paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  remarkscontainer: {
    flex: 1,
    marginTop: 40
  },
});

export default Reviews;
