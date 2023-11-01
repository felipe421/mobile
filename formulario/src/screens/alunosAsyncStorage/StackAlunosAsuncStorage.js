import { createStackNavigator } from '@react-navigation/stack'
import ListaAlunosAsyncStorage from './ListaAlunosAsyncStorage'
import FormAlunosAsyncStorage from './FormAlunosAsyncStorage'

const Stack = createStackNavigator()

export default function StackAlunosAsuncStorage() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='ListaalunosAsyncStorage'>
            <Stack.Screen name='ListaalunosAsyncStorage' component={ListaAlunosAsyncStorage} />
            <Stack.Screen name='FormAlunosAsyncStorage' component={FormAlunosAsyncStorage} />
        </Stack.Navigator>
    )
}
