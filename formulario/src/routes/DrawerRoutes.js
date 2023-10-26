import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import ListaCarros from '../screens/listaCarro/ListaCarros'
import StackPessoas from '../screens/Pessoas/StackPessoas'
import StackAlunos from '../screens/alunos/StackAlunos'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator initialRouteName='alunos'>
            <Drawer.Screen name='Carros' component={ListaCarros} />
            <Drawer.Screen name='Pessoas' component={StackPessoas}/>
            <Drawer.Screen name='alunos' component={StackAlunos}/>
        </Drawer.Navigator>
    )
}