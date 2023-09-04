import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function ComponenteControlado() {

    const [nome, setNome] = useState('')
  return (
    <View>
      <Text>ComponenteControlado</Text>


      <TextInput
      style={styles.input}
      placeholder='Digite seu nome'
      value={nome}
      onChangeText={valorDigitado =>setNome(valorDigitado)}
      
      />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 30,
        borderWidth: 2,
        margin: 10
    }
})