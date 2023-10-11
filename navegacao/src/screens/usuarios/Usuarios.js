import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Api from '../../services/Api'
import { Avatar, Card, IconButton } from 'react-native-paper'


export default function Usuarios(navigation) {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        Api.get('/users')
            .then((response) => {
                setUsuarios(response.data.users)
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
            style={styles.listPessoas}
                data={usuarios}
                renderItem={({ item }) => (
                    <Card
                        mode='elevated'
                        onPress={() => navigation.navigate('Posts', item)}
                        style={styles.card}
                    >
                        <Card.Title
                            title={item.username}
                            titleStyle={{ fontWeight: 'bold' }}
                            subtitle={item.maidenName}
                            left={() => <Avatar.Image size={48} source={{ uri: item.image }} />}
                            right={() => <IconButton
                                icon="arrow-right"
                                size={20}
                            />}
                        />
                    </Card>
                )}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    card: {
        margin: 10,
        borderWidth: 2,
        borderRadius: 10
    },
    listPessoas: {
        width: '90%'
    }
})