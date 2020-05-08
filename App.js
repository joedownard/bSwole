import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>bSwole</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.content}>content</Text>
      </View>
        <View style={styles.footer}>
            <Text style={styles.title}>Buttons</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 64,
        padding: '2%',
    },

    title: {
        color: 'white',
        fontStyle: 'bold',
        fontFamily: 'Verdana',
        fontSize: 30,
    },
    main: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '50%',
    },
    content: {
        color: 'red',
    },
    footer: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'bottom',
        fontSize: 64,
        padding: '10%',
        position: 'fixed',
        bottom: 0,
        width: '100%',
    },
});
