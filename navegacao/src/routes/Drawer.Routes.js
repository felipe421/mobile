import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import TabRoutes from './Tab.Routes';
import StackRoutes from './Stack.Routes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName='Inicio'>

                <Drawer.Screen name='Inicio' component={TabRoutes} />

                <Drawer.Screen name='toProfiles' component={StackRoutes} options={{
                    drawerLabel: 'Profiles',
                    headerTitle: 'Profiles',
                }} />

            </Drawer.Navigator>
        </NavigationContainer>
    )
}