import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import usuarios from '../../mocks/users.json'
import Pessoa from './components/Pessoa'
import { Button } from 'react-native-paper'


export default function Home(props) {

    console.log({props})

    function IrParaAScreenFeed() {
        props.navigation.navigate('Feed');
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>Home</Text>

            <Button mode='outliend' onPress={alert('Teste')}>Ir no Feed</Button>

            <FlatList
                style={styles.listPessoas}
                data={usuarios}
                renderItem={({ item }) => <Pessoa pessoa={item} />}
                showsVerticalScrollIndicator={false}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    listPessoas: {
        width: '90%'
    }
})
