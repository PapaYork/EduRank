import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import colors from '../../constants/colors'
import { globalStyle } from '../../constants/styles'

const SettingsComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menuCard}>
        <TouchableOpacity 
          style={styles.menuItem}
          activeOpacity={0.3}
        >
          <View style={styles.leftContent}>
          <View style={styles.iconContainer}>
          <Ionicons name="person-outline" size={22} color="black" />
          </View>
            <Text style={styles.menuTitle}>Account Information</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
        </TouchableOpacity>
        
        <View style={globalStyle.separator} />

        <TouchableOpacity 
          style={styles.menuItem}
          activeOpacity={0.3}
        >
          <View style={styles.leftContent}>
          <View style={styles.iconContainer}>
          <Ionicons name="notifications-outline" size={22} color="black" />
          </View>
            <Text style={styles.menuTitle}>Notifications</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
        </TouchableOpacity>
        
        <View style={globalStyle.separator} />

        <TouchableOpacity 
          style={styles.menuItem}
          activeOpacity={0.3}
        >
          <View style={styles.leftContent}>
          <View style={styles.iconContainer}>
          <Ionicons name="lock-closed-outline" size={22} color="black" />
          </View>
            <Text style={styles.menuTitle}>Privacy</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
        </TouchableOpacity>
        
        <View style={globalStyle.separator} />

        <TouchableOpacity 
          style={styles.menuItem}
          activeOpacity={0.3}
        >
          <View style={styles.leftContent}>
          <View style={styles.iconContainer}>
          <Ionicons name="eye-outline" size={22} color="black" />
          </View>
            <Text style={styles.menuTitle}>Appearance</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
        </TouchableOpacity>
        
        <View style={globalStyle.separator} />

        <TouchableOpacity 
          style={styles.menuItem}
          activeOpacity={0.3}
        >
          <View style={styles.leftContent}>
          <View style={styles.iconContainer}>
          <Ionicons name="information-circle-outline" size={22} color="black" />
          </View>
            <Text style={styles.menuTitle}>About</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
        </TouchableOpacity>
        
        <View style={globalStyle.separator} />

        <TouchableOpacity 
          style={styles.menuItem}
          activeOpacity={0.3}
        >
          <View style={styles.leftContent}>
          <View style={styles.iconContainer}>
          <Ionicons name="help-circle-outline" size={22} color="black" />
          </View>
            <Text style={styles.menuTitle}>Help & Support</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  menuCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
})

export default SettingsComponent
