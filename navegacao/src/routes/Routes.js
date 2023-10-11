import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Usuarios from '../screens/usuarios/Usuarios';
import Ionicons from '@expo/vector-icons/Ionicons';
import Posts from '../screens/posts/Posts';


const Tab = createBottomTabNavigator();


export default function Routes() {
    return (
        <NavigationContainer  >
            <Tab.Navigator initialRouteName='Posts'
                screenOptions={{
                    headerShown: false
                }}
            >
                <Tab.Screen
                    name='Usuarios'
                    component={Usuarios}
                    options={{
                        tabBarLabel: 'Usuarios',
                        tabBarIcon: ({ color, size }) => {
                            return (
                                <Ionicons name='person' color={color} size={size} />
                            )
                        }
                    }}
                />

                <Tab.Screen
                    name='Posts'
                    component={Posts}
                    options={{
                        tabBarLabel: 'Posts',
                        tabBarIcon: ({ color, size }) => {
                            return (
                                <Ionicons name='newspaper-outline' color={color} size={size} />
                            )
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})