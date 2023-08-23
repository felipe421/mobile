import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View, } from 'react-native';
import MinMax from './componentes/MinMax';

export default function App() {

  return (
    <View style={styles.container}>
     <MinMax min={10} max={20}/>
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

