import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import ListaCarros from '../screens/listaCarro/ListaCarros'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator initialRouteName='Carros'>
            <Drawer.Screen name='Carros' component={ListaCarros} />
        </Drawer.Navigator>
    )
}