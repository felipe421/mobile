import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function DigiteSeuNome() {

    const [nome, setNome] = useState('')
    const [valorDigitado, setValorDigitado] = useState('')

  return (
    <View>
      <Text style={styles.texto}>digite Seu Nome</Text>
      <Text style={styles.texto}>{nome}</Text>

      <TextInput 
      style={styles.input}
      onChangeText={e => setValorDigitado(e)}
      placeholder='Digite seu nome'
      value={nome}

      />

      <Button
      title='Enviar'
      onPress={() =>setNome(valorDigitado)}
      
      />
    </View>
  )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    input: {
        fontSize: 30,
        borderWidth: 2,
        margin: 10
    }
})