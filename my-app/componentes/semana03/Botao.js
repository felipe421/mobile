import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Botao() {
    function executarBotao2() {
        alert('Botao 2')
    }


  return (
    <View>
      <Text>Botao</Text>

      <Button
      title='Botao 1'
      onPress={() => alert('botao 1')}
      />

      <Button
      title='Botao 2'
      onPress={executarBotao2}
      />

      <Button
      title='Botao 3'
      onPress={
            function executarBotao2() {
                alert('Botao 3')
            }
      }
      />
    </View>
  )
}

const styles = StyleSheet.create({})