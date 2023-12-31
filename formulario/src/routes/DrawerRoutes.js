import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import ListaCarros from '../screens/listaCarro/ListaCarros'
import StackPessoas from '../screens/Pessoas/StackPessoas'
import StackAlunos from '../screens/alunos/StackAlunos'
import ListaCarrosAsyncStorage from '../screens/listaCarrosAsyncStorage/ListaCarrosAsyncStorage'
import StackAlunosAsuncStorage from '../screens/alunosAsyncStorage/StackAlunosAsuncStorage'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator initialRouteName='PessoasA'>
            <Drawer.Screen name='PessoasA' component={StackAlunosAsuncStorage}/>
            <Drawer.Screen name='CarrosA' component={ListaCarrosAsyncStorage}/>
            <Drawer.Screen name='Carros' component={ListaCarros} />
            <Drawer.Screen name='Pessoas' component={StackPessoas}/>
            <Drawer.Screen name='alunos' component={StackAlunos}/>
        </Drawer.Navigator>
    )
}