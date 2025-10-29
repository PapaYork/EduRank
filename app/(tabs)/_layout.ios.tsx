import { NativeTabs, Icon, Label, Badge } from 'expo-router/unstable-native-tabs';
import { DynamicColorIOS } from 'react-native';
import colors from '../../constants/colors';

export default function TabsLayout() {
  return (
    <NativeTabs
    labelStyle={{
        // For the text color
        color: DynamicColorIOS({
          dark: 'white',
          light: 'black',
        }),
      }}
      // For the selected icon color
      tintColor={DynamicColorIOS({
        dark: colors.primary,
        light: colors.primary,
      })}
    
    minimizeBehavior="onScrollDown">
      <NativeTabs.Trigger name="home">
        <Icon 
          sf="house.fill" 
          drawable="home"
        />
        <Label>Home</Label>
        <Badge>99+</Badge>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="reviews">
        <Icon 
          sf="star.bubble.fill" 
          drawable="rate_review" 
        />
        <Label>My Reviews</Label>
        <Badge>99+</Badge>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <Icon 
          sf="person.fill" 
          drawable="person" 
        />
        <Label>Profile</Label>
      </NativeTabs.Trigger>
      
      <NativeTabs.Trigger name="search" role="search">
        <Label>Search</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}