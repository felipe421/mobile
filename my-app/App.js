
import { Image, StyleSheet, View, Button } from 'react-native';
import ParouImpar from './componentes/semana04/ParouImpar';
import Profile from './componentes/semana04/Profile';



export default function App() {

  return (
     <Profile/>

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

