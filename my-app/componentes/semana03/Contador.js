import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

export default function Contador() {

    const  [valor, setValor] = useState(0)

    function incrementar() {
        setValor(valor + 1)
    }

    function decrementar() {
        setValor(valor - 1)
    }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Volume</Text>
      <Text style={styles.text}>{valor}</Text>
      <View style={styles.botao}>
      <Button title='+'
      onPress={incrementar}
      
      />
      <Button title='-'
      onPress={decrementar}
      />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    text: {
        fontSize: 30,
    },
    botao: {
        margin: 30,
    }
})