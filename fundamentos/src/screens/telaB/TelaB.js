import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TelaC from '../telaC/TelaC'

export default function TelaB(props) {

    const navigation = props.navigation

    return (
        <View style={styles.container}>
            <Button
                title='Click Aqui'
                onPress={() => {
                    navigation.navigate(TelaC)
                }}

            />

            <Text style={{fontSize: 40}}>TelaB</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})