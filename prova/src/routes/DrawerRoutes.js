
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import Conta from '../screens/conta/Conta';
import StackInicio from '../screens/home/StackInicio';
import StackMembro from '../screens/membro/StackMembro';
import Tabela from '../screens/tabela/Tabela';
import StackMembroPrata from '../screens/membroprata/StackMembroPrta';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator initialRouteName='Inicio'>
            <Drawer.Screen name="Inicio" component={StackInicio} />
            <Drawer.Screen name='Conta' component={Conta}/>
            <Drawer.Screen name='Tabela' component={Tabela}/>
            <Drawer.Screen name='Membros' component={StackMembro}/>
            {/*<Drawer.Screen name='Membrosprata' component={StackMembroPrata}/> }
            {/* <Drawer.Screen name="Article" component={Article} /> */}
        </Drawer.Navigator>
    )
}