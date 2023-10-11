import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Feed from '../screens/feed/Feed';
import Home from '../screens/home/Home';

const Stack = createStackNavigator();


export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Feed'>

                <Stack.Screen name='Home' component={Home} />

                <Stack.Screen name='Feed' component={Feed} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}