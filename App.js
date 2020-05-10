import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
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

const user = {
    username: "",
    email: "",
    pass: "",
    cpass: "",
}

function register() {
    return(
    <View style={styles.container}>
        <TextInput
            value={username}
            style={styles.textInput}
            placeholder={'Username'}
            onChangeText={(username) => this.setState({ username })}
        />
        <TextInput
            value={email}
            style={styles.textInput}
            placeholder={'Email'}
            onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
            value={pass}
            style={styles.textInput}
            placeholder={'Password'}
            secureTextEntry={true}
            onChangeText={(pass) => this.setState({ pass })}
        />
        <TextInput
        value={cpass}
        style={styles.textInput}
        placeholder={'Confirm password'}
        secureTextEntry={true}
        onChangeText={(email) => this.setState({ cpass })}
        />
    </View>);
}
function You() {
    return (
        <View style={styles.wrap}>
            <View style={styles.main}>
                { register() }
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
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'gray',
        margin: '1%',
    }
});
