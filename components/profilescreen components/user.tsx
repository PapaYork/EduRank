import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import colors from '../../constants/colors'
import { useUser, useAuth } from '@clerk/clerk-expo'

const UserComponent = () => {
  const { user, isLoaded } = useUser()

  useEffect(() => {
    if (isLoaded) {
      console.log('Clerk user:', user)
    }
  }, [isLoaded, user])

  if (!isLoaded) {
    return (
      <View style={[styles.container, { justifyContent: 'center' }]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    )
  }

  const displayName =
    user?.fullName ||
    user?.username ||
    user?.emailAddresses?.[0]?.emailAddress?.split('@')[0] ||
    'User'

  // publicMetadata may store numbers as strings; coerce safely
  const totalReviews = Number(user?.publicMetadata?.totalReviews) || 0
  const avgRating = Number(user?.publicMetadata?.avgRating) || 0
  const helpfulVotes = Number(user?.publicMetadata?.helpfulVotes) || 0
  const university = user?.publicMetadata?.university || 'University Name'

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <View style={styles.usericon}>
          <FontAwesome5
            name="user-astronaut"
            size={30}
            color={colors.background}
            style={{ alignSelf: 'center' }}
          />
        </View>
        <Text style={styles.username}>{displayName}</Text>
        {/* <Text style={styles.university}>{university}</Text> */}
      </View>

      <View style={styles.Ratereview}>
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>{totalReviews}</Text>
            <Text style={styles.statLabel}>Total Reviews</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>
              {avgRating > 0 ? avgRating.toFixed(1) : '0.0'}
            </Text>
            <Text style={styles.statLabel}>Avg. Rating Given</Text>
          </View>
        </View>

        <View style={styles.helpfulBox}>
          <Text style={styles.statNumber}>{helpfulVotes}</Text>
          <Text style={styles.statLabel}>Helpful Votes</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  user: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  usericon: {
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    width: 80,
    height: 80,
    marginTop: 10,
    backgroundColor: colors.primary,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 7,
  },
  university: {
    fontSize: 16,
    color: 'gray',
  },
  Ratereview: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  statBox: {
    flex: 1,
    backgroundColor: 'rgba(239, 246, 255, 1)',
    borderRadius: 20,
    padding: 20,
    width: 140,
    alignItems: 'center',
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  helpfulBox: {
    backgroundColor: 'rgba(250, 238, 224, 0.63)',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: 300,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
  },
})

export default UserComponent