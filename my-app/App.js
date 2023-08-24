
import { Image, StyleSheet, View, } from 'react-native';
import MinMax from './componentes/semana01/MinMax';
import NumeroAletorio from './componentes/semana01/NumeroAleatorio';

export default function App() {

  return (
    <View style={styles.container}>
     <MinMax min={10} max={20}/>
     <NumeroAletorio min={1} max={100}/>
    </View>
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

