import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Dashboard from '../screens/user/Dashboard';
import Network from '../screens/user/Network';
import Post from '../screens/user/Post';
import Profile from '../screens/user/Profile';
import MessageStack from './MessageStack';

const Tab = createBottomTabNavigator();

const HomeTab = ({ route }: any) => {
  // Get the current route inside MessageStack
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Messages';

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: getFocusedRouteNameFromRoute(route) === 'ChatScreen' ? { display: 'none' } : {},
      })}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />,
        }}
      />

      <Tab.Screen
        name="Network"
        component={Network}
        options={{
          tabBarIcon: ({ color, size }) => <AntDesign name="chrome" size={size} color={color} />,
        }}
      />

      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="add-circle-outline" size={size} color={color} />,
        }}
      />

      <Tab.Screen
        name="Message"
        component={MessageStack}
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name="chatbubble-outline" size={size} color={color} />,
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="account-circle" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
