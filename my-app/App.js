
import { Image, StyleSheet, View, } from 'react-native';
import MinMax from './componentes/semana01/MinMax';
import NumeroAletorio from './componentes/semana01/semana02/NumeroAleatorio';
import Botao from './componentes/semana03/Botao';
import Contador from './componentes/semana03/Contador';
import DigiteSeuNome from './componentes/semana03/DigiteSeuNome';

export default function App() {

  return (
    <View style={styles.container}>
     {/*<MinMax min={10} max={20}/>*/}
     {/*<NumeroAletorio min={1} max={100}/>*/}
     {/*<Botao/>*/}
     {/*<Contador/>*/}
     <DigiteSeuNome/>
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

