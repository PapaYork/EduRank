import { StyleSheet } from 'react-native';
import colors from './colors'

export const globalStyle = StyleSheet.create({
  SignInButton: {
    backgroundColor: colors.darkBlue,
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 32,
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
    width: '91%',
    alignSelf: 'center',
  },

  signInText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },

//   SignUpButton: {
//     backgroundColor: 'transparent',
//     borderRadius: 16,
//     paddingVertical: 18,
//     paddingHorizontal: 32,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 2,
//     borderColor: colors.darkBlue, // '#003D82'
//     width: '91%',
//     alignSelf: 'center',
//   },

//   signUpText: {
//     color: colors.darkBlue, // '#003D82'
//     fontSize: 18,
//     fontWeight: '600',
//   },

  // Alternative: Solid Sign Up Button (if you prefer filled version)
  SignUpButtonSolid: {
    backgroundColor: colors.buttoncolor, 
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 32,
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
    width: '91%',
    alignSelf: 'center',
  },

  signUpTextSolid: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },

  // Input Styles
  inputContainer: {
    marginBottom: 24,
    width: '100%',
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D2D2D',
    marginBottom: 8,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 18,
    fontSize: 16,
    color: '#2D2D2D',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },

  passwordInput: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 18,
    fontSize: 16,
    color: '#2D2D2D',
  },

  // Text Styles
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2D2D2D',
    textAlign: 'center',
    marginBottom: 48,
  },

  forgotPasswordText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.darkBlue,
    textAlign: 'right',
  },

  linkText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.darkBlue,
  },

  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 28,
    paddingTop: 60,
    paddingBottom: 40,
  },

  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },

  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'gray',
    marginLeft: 50,
  },
});
