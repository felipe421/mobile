import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import DrawerRoutes from './src/routes/DrawerRoutes';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <DrawerRoutes />
      </NavigationContainer>
    </PaperProvider>
  );
}


