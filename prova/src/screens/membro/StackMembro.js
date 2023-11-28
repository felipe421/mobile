import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ListaDeMembro from './ListaDeMembro';
import FormMembroBroze from './FormMembroBroze';

const Stack = createNativeStackNavigator();

export default function StackMembro() {
  return (
    <Stack.Navigator initialRouteName='Membro'>
        <Stack.Screen name='Membro' component={ListaDeMembro} options={{headerShown: false}}/>
        <Stack.Screen name='Bronze' component={FormMembroBroze} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}
