import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import TelaB from '../screens/telaB/TelaB'
import TelaC from '../screens/telaC/TelaC'
import TelaD from '../screens/telaD/TelaD'
import Ionicons from '@expo/vector-icons/Ionicons';
import Usuarios from '../screens/usuarios/Usuarios';
import Posts from '../screens/pos/Posts';

//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Usuarios'>
                <Tab.Screen
                    name='Usuarios'
                    component={Usuarios}
                    options={{
                        tabBarLabel: 'Usuarios',
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                <Ionicons name="brush" size={size} color={color} />
                            )
                        }
                    }}
                />

                <Tab.Screen
                    name='Posts'
                    component={Posts}
                    options={{
                        tabBarLabel: 'Postagem',
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                <Ionicons name="brush" size={size} color={color} />
                            )
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

