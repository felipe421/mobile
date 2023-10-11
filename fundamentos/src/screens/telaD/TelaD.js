import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TelaD(props) {

    const navigation = props.navigation
    return (
        <View style={styles.container}>
            <Button
                title='Clique aqui'
                onPress={() => {
                    navigation.push('TelaD')
                }}
            />

            <Button
                title='CLIQUE AQUI PARA VOLTAR'
                onPress={() => {
                    navigation.goBack()
                }}
            />

            <Button
                title='CLIQUE AQUI PARA VOLTAR AO INICIO'
                onPress={() => {
                    navigation.popToTop()
                }}
            />

            <Text style={{ fontSize: 40 }}>Tela D</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow'
    }
})