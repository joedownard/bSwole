import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Image from "react-native-web/dist/exports/Image";
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function Home() {
    return (
        <View style={styles.wrap}>
            <View style={styles.main}>
                <Text>fuck</Text>
            </View>
        </View>);
}

function Lifts() {
    return (
        <View style={styles.wrap}>
            <View style={styles.main}>
                <Image style={styles.img} source={require('./assets/arm.png')} />
            </View>
        </View>
    )
}

function Times() {
    return (
        <View style={styles.wrap}>
            <View style={styles.main}>
                <Text>times</Text>
            </View>
        </View>
    )
}

function Leaderboard() {
    return (
        <View style={styles.wrap}>
            <View style={styles.main}>
                <Text>leaderboard</Text>
            </View>
        </View>
    )
}

function Friends() {
    return (
        <View style={styles.wrap}>
            <View style={styles.main}>
                <Text>Friends</Text>
            </View>
        </View>
    )
}

export default class App extends Component {

    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({route}) => ({
                        tabBarIcon: ({focused, color, size}) => {
                            let iconName;

                            if (route.name === 'Home') {
                                iconName = focused
                                    ? 'home'
                                    : 'home';
                            } else if (route.name === 'Lifts') {
                                iconName = focused ? 'linechart' : 'linechart';
                            }
                            else if (route.name === 'Times') {
                                iconName = focused ? 'clockcircleo' : 'clockcircleo';
                            }
                            else if (route.name === 'Leaderboard') {
                                iconName = focused ? 'Trophy' : 'Trophy';
                            }
                            else if (route.name === 'Friends') {
                                iconName = focused ? 'team' : 'team';
                            }

                            return <AntDesign name={iconName} size={size} color={color}/>;
                        },
                    })}
                    tabBarOptions={{
                        inactiveBackgroundColor: 'white',
                        activeBackgroundColor: 'red',
                        activeTintColor: 'white',
                        inactiveTintColor: 'red',
                    }}
                >
                    <Tab.Screen
                        name="Home"
                        component={Home}
                    />
                    <Tab.Screen
                        name="Lifts"
                        component={Lifts}
                    />
                    <Tab.Screen
                        name="Times"
                        component={Times}
                    />
                    <Tab.Screen
                        name="Leaderboard"
                        component={Leaderboard}
                    />
                    <Tab.Screen
                        name="Friends"
                        component={Friends}
                    />
                </Tab.Navigator>
            </NavigationContainer>);

    }
}

const styles = StyleSheet.create({
    wrap: {
        flex: 20,
        alignItems: 'stretch',

    },
    main: {
        flex: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        width: 64,
        height: 64,
    },
});
