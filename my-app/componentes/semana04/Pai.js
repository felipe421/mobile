import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Filhote from './Filhote'

export default function () {

    const [numero, setNumero] = useState(0)

    function alteraraNumero(valor){
        setNumero(valor)
    }

  return (
    <View>
      <Text>O Numero Aleatorio</Text>
      <Text>{numero}</Text>


      <Filhote min="1" max="60" funcao={alteraraNumero}/>
    </View>
  )
}

const styles = StyleSheet.create({})