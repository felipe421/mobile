import { StyleSheet,  View } from 'react-native'
import React from 'react'
import { Button, Text } from 'react-native-paper'

export default function Profiles({ navigation, route }) {
    return (
        <View style={styles.container}>
            <Text variant='displayLarge'>Profiles</Text>
            <Button
                mode='contained'
                onPress={() => navigation.navigate('Posts')}
            ir para Posts/>
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