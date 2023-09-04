import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Filhote(props) {
    function gerarNumeroAleatorio(min, max) {
    const numero = Math.floor(Math.random() * (max - min )) + min;
    props.funcao(numero)
}
    

  return (
    <View>
      <Button
      title='Enviar'
      onPress={() =>  gerarNumeroAleatorio(props.min, props.max)}
      />
    </View>
  )
}

const styles = StyleSheet.create({})