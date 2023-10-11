import { StyleSheet, Text, View } from 'react-native'
import { Avatar, Card, IconButton } from 'react-native-paper'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import Apis from '../../services/Apis'

export default function Usuarios(props) {
    const navigation = props.navigation

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        Apis.get('Usuarios')
            .then((response) => {
                setUsuarios(response.data)
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    return (
        <View>
            <FlatList
                data={Usuarios}
                renderItem={({ item }) => (
                    <Card
                        mode='elevated'
                        onPress={() => navigation.navigate('Posts', item)}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({})