import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
                <Text>Lifts</Text>
            </View>
        </View>
    )
}

function You() {
    return (
        <View style={styles.wrap}>
            <View style={styles.main}>
                <Text>You</Text>
            </View>
        </View>
    )
}

export default class App extends Component {

    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName={ 'Home' }
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
                            else if (route.name === 'You') {
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
                        name="Lifts"
                        component={Lifts}
                    />
                    <Tab.Screen
                        name="Home"
                        component={Home}
                    />
                    <Tab.Screen
                        name="You"
                        component={You}
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
