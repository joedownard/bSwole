import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>bSwole</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>content</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'red',
    fontStyle: 'bold',
    fontFamily: 'Verdana',
    fontSize: 30,
  },
});
