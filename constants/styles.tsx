import { StyleSheet } from 'react-native';
import colors from './colors'

export const globalStyle = StyleSheet.create({
  SignUpButton: {
    borderRadius: 16,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.55,
    shadowRadius: 5,
    elevation: 4,   
    backgroundColor: colors.darkBlue,
    width: '91%',
    height: 60,
  },

  signUpText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },

  SignInButton: {
    backgroundColor: '#003D82',
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 24,
  },

  signInText: {
     color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },

  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'black',
    marginLeft: 50,
  },
});
