
import { Image, StyleSheet, View, Button } from 'react-native';
import ParouImpar from './componentes/semana04/ParouImpar';
import Profile from './componentes/semana04/Profile';
import Lista from './componentes/semana05/Lista';



export default function App() {

  return (
    <PaperProvider>
    <Router />
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',

  },
});

