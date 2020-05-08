import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TouchableOpacity from "react-native-web/dist/exports/TouchableOpacity";
import Image from "react-native-web/dist/exports/Image";
import Expo from "expo";

export default function App() {
  return (
    <View style={styles.wrap}>
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
                    <Image source={require('./assets/arm.png')} style={styles.img}/>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => alert('2')}
                    style={styles.button}>
                    <Image source={require('./assets/stopwatch.png')} style={styles.img}/>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => alert('3')}
                    style={styles.button}>
                    <Image source={require('./assets/leaderboard.png')} style={styles.img}/>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => alert('4')}
                    style={styles.button}>
                    <Image source={require('./assets/friends.png')} style={styles.img}/>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    wrap: {
        flex: 20,
        alignItems: 'stretch',

    },
    header: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 64,
    },
    title: {
        color: 'white',
        fontStyle: 'normal',
        fontSize: 30,
    },
    main: {
        flex: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        color: 'red',
    },
    footer: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: 'red',
        alignItems: 'stretch',
        alignContent: 'stretch',
        justifyContent: 'center',
        fontSize: 64,
        padding: '1%',
        width: '100%',
    },
    buttonContainer: {
        flex: 1,
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: 'white',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: '1%',
    },
    button: {
        padding: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 60,
        color: 'red',
    },
    img: {
        width: 64,
        height: 64,
    }
});
