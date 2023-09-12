import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ParouImpar(props) {

    const numero = props.numero
    let resultado = ''
    

    if(numero %2  == 0){
        resultado = 'Par'
    } else {
        resultado = 'Impar'
    }
    
  return (
    <View>
      <Text>O numero{numero} é</Text>
      <Text>{resultado}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})