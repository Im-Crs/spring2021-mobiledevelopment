import React from 'react';
import { Stylesheet, Text, View } from 'react-native';
import Name from './components/Name.js'

export default function App() {
  return (
    <View style={styles.container}>
    <Name/>
    </View>
  );
}

const styles = stylesheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
