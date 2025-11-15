import React, { useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { startServer } from './nodejs-adapter';
import ChatScreen from './src/screens/ChatScreen';

const Tab = createBottomTabNavigator();

function FeedScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Feed - à implémenter</Text>
    </SafeAreaView>
  );
}

export default function App() {
  useEffect(() => {
    startServer(); // lance le serveur Node embarqué
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20 },
});

