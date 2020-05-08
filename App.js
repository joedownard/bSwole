import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TouchableOpacity from "react-native-web/dist/exports/TouchableOpacity";
import Image from "react-native-web/dist/exports/Image";
import Expo from "expo";

export default function App() {

    const Home = () =>
        <View style={styles.homeTitle}>
            <Text style={styles.homeTitleText}>Welcome to bSwole!</Text>
        </View>

    const Lifts = () =>
        <View style={styles.homeTitle}>
            <Text style={styles.homeTitleText}>Lifts Page</Text>
        </View>

    const Times = () =>
        <View style={styles.homeTitle}>
            <Text style={styles.homeTitleText}>Times Page</Text>
        </View>

    const Leaderboards = () =>
        <View style={styles.homeTitle}>
            <Text style={styles.homeTitleText}>Leaderboards Page</Text>
        </View>

    const Friends = () =>
        <View style={styles.homeTitle}>
            <Text style={styles.homeTitleText}>Friends Page</Text>
        </View>

    const [page, setPage] = useState(Home());


  return (
    <View style={styles.wrap}>
      <View style={styles.header}>
        <Text style={styles.title}>bSwole</Text>
      </View>
      <View style={styles.main}>
          { page }
      </View>
        <View style={styles.footer}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => setPage(Lifts())}
                    style={styles.button}>
                    <Image source={require('./assets/arm.png')} style={styles.img}/>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => setPage(Times())}
                    style={styles.button}>
                    <Image source={require('./assets/stopwatch.png')} style={styles.img}/>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => setPage(Leaderboards())}
                    style={styles.button}>
                    <Image source={require('./assets/leaderboard.png')} style={styles.img}/>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => setPage(Friends())}
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
        paddingHorizontal: '30%',
        paddingVertical: '15%',
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
    },
    homeTitle: {
        alignItems:'center',
        width: '75%',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'red',
        textAlign: 'center',
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: 'white',
        borderRadius: 25,

    },
    homeTitleText: {
        fontSize: 92,
        color: 'white',
        padding: '5%',
    }
});
