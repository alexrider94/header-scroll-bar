import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import HeaderScrollBar from '../src/HeaderScrollBar';

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderScrollBar height={200} visible scrollPosition="top" time={20} isRepeatable>
        <Button title="submit" onPress={() => {}} />
      </HeaderScrollBar>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
