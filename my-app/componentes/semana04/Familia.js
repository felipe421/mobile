import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Familia(props) {
  return (
    <View>
      <Text>Familia {props.Familia}</Text>
      <view>
        {props.children}
      </view>
    </View>
  )
}

const styles = StyleSheet.create({})