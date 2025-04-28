import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/profile/ProfileScreen';
import AccountScreen from '../screens/profile/AccountScreen';
import ProfileSetupScreen from '../screens/profile/ProfileSetupScreen';
import GeneralPreferenceScreen from '../screens/profile/GeneralPreferenceScreen';
import NotificationManageScreen from '../screens/profile/NotificationManageScreen';
import DataPrivacyScreen from '../screens/profile/DataPrivacyScreen';
import { RootStackParamList } from '../types/RootStackParamList';
import Profile from '../screens/profile/Profile';

const Stack = createStackNavigator<RootStackParamList>();

const ProfileStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false ,"presentation":"card" }}>
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="ProfileSetupScreen" component={ProfileSetupScreen} />
      <Stack.Screen name="PreferencesScreen" component={GeneralPreferenceScreen} />
      <Stack.Screen name="NotificationsScreen" component={NotificationManageScreen} />
      <Stack.Screen name="PrivacyScreen" component={DataPrivacyScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;

