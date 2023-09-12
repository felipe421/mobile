import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function Profile() {
  return (
    <View style={styles.container}>
        <Image source={{uri: require=('./assets/volei.png')}}  style={styles.img}/>
        <Text>oi</Text>
      
      <View>
        <Text></Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    texto : {
        fontSize: 30,
    },
    container : {
        flex : 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img : {
        width: 230,
        height: 230,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: "blue",
        borderRadius: 400,
        padding : 20
    }
})