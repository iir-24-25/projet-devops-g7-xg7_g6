import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/RootStackParamList';

type ChatScreenRouteProp = RouteProp<RootStackParamList, 'ChatScreen'>;

type ChatScreenProps = {
  route: ChatScreenRouteProp;
};

export default function ChatScreen({ route }: ChatScreenProps) {
  const { id } = route.params;  // Get the 'id' parameter passed from the navigation

  return (
    <View style={styles.container}>
      <Text>Chat Screen</Text>
      <Text>Message ID: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
