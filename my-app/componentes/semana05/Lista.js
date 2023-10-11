import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Lista() {


    const carros  = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <View>
      {carros.map((item, index) => {
        return<Text key={index}>{item}</Text>
      })}

      <FlatList
      data = {carros}
      renderItem = {({item}) => {
        <Text>{item}</Text>
        
      }} 

      
      />
    </View>
  )
}

const styles = StyleSheet.create({})