import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Image } from 'react-native'
import React, { useEffect } from 'react'
import { globalStyle } from '../../constants/styles'
import { SafeAreaView } from 'react-native-safe-area-context' 
import { useSignUp, useUser } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'

const Signup = () => {
  const { isLoaded, signUp, setActive } = useSignUp()
  const router = useRouter()

  const[firstName, setFirstName] = React.useState('')
  const[lastName, setLastName] = React.useState('')
  const [emailAddress, setEmailAddress] = React.useState('')
  const [password, setPassword] = React.useState('')
  const[confirmPassword, setConfirmPassword] = React.useState('')
  const [pendingVerification, setPendingVerification] = React.useState(false)

  // Clerk user hook
  const { user } = useUser()

  // Update user publicMetadata when the user object becomes available.
  // Use an effect and an async function inside it (can't use await at top level).
  useEffect(() => {
    if (!user) return

    const updateMetadata = async () => {
      try {
        await user.update({
          unsafeMetadata: {
            university: 'University of Example', // Get from form if needed
            totalReviews: 0,
            avgRating: 0,
            helpfulVotes: 0,
          }
        })
      } catch (err) {
        console.error('Failed to update user metadata', err)
      }
    }

    updateMetadata()
  }, [user])

  // Handle submission of sign-up form
  const onSignUpPress = async () => {
    if (!isLoaded) return

    // Basic client-side validation (example)
    if (password !== confirmPassword) {
      console.error('Passwords do not match')
      return
    }

    try {
      // Start sign-up process using email and password provided
      await signUp.create({
        emailAddress,
        password,
        firstName,
        lastName,
      })

      // Send user an email with verification code
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      // Set 'pendingVerification' to true to display second form and capture OTP code
      setPendingVerification(true)
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      console.error(JSON.stringify(err, null, 2))
    }
  }

  // Navigate to verify screen when pendingVerification becomes true
  useEffect(() => {
    if (pendingVerification) {
      router.replace('/(auth)/verify')
    }
  }, [pendingVerification])

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Image 
                source={require('../../assets/image/edurank.png')} 
                style={styles.logo}
              />
            </View>
            <Text style={styles.title}>Create Your Account</Text>
            <Text style={styles.subtitle}>Join EduRank and start rating professors</Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.row}>
              <View style={styles.halfInput}>
                <Text style={styles.label}>First Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="John"
                  placeholderTextColor="#A0A0A0"
                  value={firstName}
                  onChangeText={(text) => setFirstName(text)}
                />
              </View>
              
              <View style={styles.halfInput}>
                <Text style={styles.label}>Last Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Doe"
                  placeholderTextColor="#A0A0A0"
                  value={lastName}
                  onChangeText={(text) => setLastName(text)}
                />
              </View>
            </View>

            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="john.doe@example.com"
              placeholderTextColor="#A0A0A0"
              value={emailAddress}
              onChangeText={(text) => setEmailAddress(text)}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#A0A0A0"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
            />

            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Re-enter your password"
              placeholderTextColor="#A0A0A0"
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              secureTextEntry={true}
            />

            <TouchableOpacity 
              style={[globalStyle.SignUpButtonSolid, styles.loginContainer]}
              activeOpacity={0.8}
              onPress={onSignUpPress}
            >
              <Text style={globalStyle.signUpTextSolid}>Create Account</Text>
            </TouchableOpacity>

            <View style={styles.loginContainer}>
              <Text style={styles.loginText}>Already have an account? </Text>
              <Link href="/(auth)/login" asChild>
                <TouchableOpacity>
                  <Text style={styles.loginLink}>Log In</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  keyboardView: {
    flex: 1
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 30
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30
  },
  logoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F0F4FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    shadowColor: '#003D82',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  logo: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2D2D2D',
    marginBottom: 8
  },
  subtitle: {
    fontSize: 15,
    color: '#6B7280',
    textAlign: 'center'
  },
  formContainer: {
    width: '100%'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12
  },
  halfInput: {
    flex: 1
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2D2D2D',
    marginBottom: 8,
    marginTop: 4
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    color: '#2D2D2D',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0'
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  loginText: {
    color: '#6B7280',
    fontSize: 15
  },
  loginLink: {
    color: '#003D82',  
    fontSize: 15,
    fontWeight: '600'
  }
})

export default Signup