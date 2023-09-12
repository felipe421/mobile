import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Estilos() {
  return (
    <View style={{ flexDirection:'column' ,blackgroundColor:'gray'}}>
      <Text style={{blackgroundColor:'red', flex: 1}}>Texto</Text>
    </View>
  )
}

const styles = StyleSheet.create({})