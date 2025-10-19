import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import remarks from '../assets/data/remarks.json';
import Remarkrow from './Remarkrow';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Remarks = () => {
    const insets = useSafeAreaInsets();
  return (
    <View style={[styles.remarkscontainer, { paddingBottom: 0, paddingLeft: insets.left, paddingRight: insets.right }]}>
      <Text style={styles.remarkstext}>Lecturer Remarks</Text>
      <FlatList
        data={remarks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Remarkrow remark={''} {...item} />}
        contentContainerStyle={{ paddingBottom: 120 }} // keeps last item visible above floating tabs
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  remarkscontainer: {
    flex: 1,
  },
  remarkstext: {
    fontSize: 33,
    marginLeft: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
});

export default Remarks;