import { createStackNavigator } from '@react-navigation/stack'
import ListaAlunos from './ListaAlunos'
import FormAlunos from './FormAlunos'

const Stack = createStackNavigator()

export default function StackAlunos() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='ListaAlunos'>
            <Stack.Screen name='ListaAlunos' component={ListaAlunos} />
            <Stack.Screen name='FormAlunos' component={FormAlunos} />
        </Stack.Navigator>
    )
}
