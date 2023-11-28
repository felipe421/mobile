import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Inicio from './Inicio';
import SignIn from '../signin/SignIn';
import Conta from '../conta/Conta';


const Stack = createNativeStackNavigator();

export default function StackInicio() {
  return (
    <Stack.Navigator initialRouteName='cadastro'>
        <Stack.Screen name='cadastro' component={Inicio} options={{headerShown: false}}/>
        <Stack.Screen name='SignIn' component={SignIn} options={{headerShown: false}}/>
        <Stack.Screen name='Conta' component={Conta} options={{headerShown: false}}/>
        
    </Stack.Navigator>
  )
}

