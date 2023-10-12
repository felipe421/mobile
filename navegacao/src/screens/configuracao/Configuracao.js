import {  StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, Text } from 'react-native-paper'

export default function Configuracao({ navigation, route }) {
    return (
        <View style={styles.container}>
            <Text variant='displayLarge'>Configuracao</Text>
            <Button
                mode='contained'
                onPress={() => navigation.navigate.push('Profiles')}
            ir para Configurações/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})