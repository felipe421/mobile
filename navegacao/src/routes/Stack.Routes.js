
import { createStackNavigator } from '@react-navigation/stack';


import Profiles from '../screens/profiles/Profiles';
import Configuracao from '../screens/configuracao/Configuracao';

const Stack = createStackNavigator();


export default function StackRoutes() {
    return (

        <Stack.Navigator initialRouteName='Profiles'>

            <Stack.Screen name='Profiles' component={Profiles} />

            <Stack.Screen name='Configuracao' component={Configuracao} />

        </Stack.Navigator>

    )
}