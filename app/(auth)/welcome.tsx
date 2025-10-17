import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { globalStyle } from '../../constants/styles';
import { router } from 'expo-router';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/image/edurank.png')} 
        style={styles.edurank} 
      />

      <TouchableOpacity 
        style={[globalStyle.SignInButton, { marginBottom: 16 }]}
        onPress={() => router.push('/(auth)/login')}
        activeOpacity={0.8}
      >
        <Text style={globalStyle.signInText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={globalStyle.SignUpButtonSolid}
        onPress={() => router.push('/(auth)/signup')}
        activeOpacity={0.8}
      >
        <Text style={globalStyle.signUpTextSolid}>Sign Up</Text>
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
    resizeMode: 'contain',
    marginBottom: 80,
  },
});

export default WelcomeScreen;