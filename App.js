import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TouchableOpacity from "react-native-web/dist/exports/TouchableOpacity";

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
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => alert('1')}
                    style={styles.button}>
                    <Text style={{ fontSize: 20, color: 'red' }}>1</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => alert('2')}
                    style={styles.button}>
                    <Text style={{ fontSize: 20, color: 'red' }}>2</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => alert('3')}
                    style={styles.button}>
                    <Text style={{ fontSize: 20, color: 'red' }}>3</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => alert('4')}
                    style={styles.button}>
                    <Text style={{ fontSize: 20, color: 'red' }}>4</Text>
                </TouchableOpacity>
            </View>
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
        padding: '1%',
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
        flexDirection: 'row',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 64,
        padding: '1%',
        position: 'fixed',
        bottom: 0,
        width: '100%',
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
        margin: '1%',
    },
    button: {
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 75,
    }
});
