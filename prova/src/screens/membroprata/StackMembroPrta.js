import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListaDeMembro from './ListaMembroPrata';
import FormMembroPrata from './FormMembroPrata';


const Stack = createNativeStackNavigator();

export default function StackMembroPrata() {
  return (
    <Stack.Navigator initialRouteName='Membroprata'>
        <Stack.Screen name='Membroprata' component={ListaDeMembro} options={{headerShown: false}}/>
        <Stack.Screen name='Bronze' component={FormMembroPrata} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}