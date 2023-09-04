
import { Image, StyleSheet, View, Button } from 'react-native';
import MinMax from './componentes/semana01/MinMax';
import Botao from './componentes/semana03/Botao';
import Contador from './componentes/semana03/Contador';
import Qualquernome from './componentes/semana03/Qualquernome';
import Pai from './componentes/semana04/Pai';
import ComponenteControlado from './componentes/semana04/ComponenteControlado';
import Familia from './componentes/semana04/Familia';
import Filhote from './componentes/semana04/Filhote';
import BiscoitoDaSorte from './componentes/semana04/BiscoitoDaSorte';
import Botao2 from './componentes/atividade/Botao2';
import Contador2 from './componentes/atividade/Contador2';
import DigiteSeuNome from './componentes/atividade/nome2';
import Biscoito from './componentes/atividade/Biscoito';


export default function App() {

  return (
    <View style={styles.container}>
     {/*<MinMax min={10} max={20}/>*/}
     {/*<NumeroAletorio min={1} max={100}/>*/}
     {/*<Botao/>*/}
     {/*<Contador/>*/}
     {/*<Qualquernome/>*/}
     {/*<Pai/>*/}
     {/*<ComponenteControlado/>*/}
     <Botao2/>
     <Contador2/>
     <DigiteSeuNome/>
     <Biscoito/>
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

