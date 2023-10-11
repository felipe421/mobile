import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TelaB from '../telaB/TelaB'
import TelaD from '../telaD/TelaD'


export default function TelaC(props) {

    const navigation = props.navigation

    return (
        <View style={styles.container}>
            <Button
                title='Click Aqui'
                onPress={() => {
                    navigation.goBack(TelaD)
                }}
            />
            <Text style={{fontSize: 40}}>telaC</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})