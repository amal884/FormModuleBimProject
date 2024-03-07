import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import MainForm from './src/screens/MainForm';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <MainForm />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

