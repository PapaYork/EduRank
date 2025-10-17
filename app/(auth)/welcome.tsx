import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import   Colors from '../../constants/colors';
import { globalStyle } from '../../constants/styles';
import { router } from 'expo-router';


const WelcomeScreen = () => {

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/image/edurank.png') } style={styles.edurank} />

     
       <View  style={[globalStyle.SignInButton, { marginBottom: 20 }]}>
        <TouchableOpacity onPress={() => router.push('/(auth)/login')}>
          <Text style={globalStyle.signInText}>Sign IN</Text>
        </TouchableOpacity>
        </View>
   
        <TouchableOpacity style={globalStyle.SignUpButton}>
          <Text style={globalStyle.signUpText}>Sign Up</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  edurank: {
    width: '100%',
    height: 100,
    marginTop: 100,
    marginVertical: 20,
    marginBottom: 200,
  },
});

export default WelcomeScreen;