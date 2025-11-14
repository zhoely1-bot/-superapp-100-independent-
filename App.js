import React, { useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { startServer } from './nodejs-adapter';

export default function App() {
  useEffect(() => {
    startServer();   // lance le serveur Node embarqué
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>SuperApp100 – Serveur Node démarré !</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20 },
});

