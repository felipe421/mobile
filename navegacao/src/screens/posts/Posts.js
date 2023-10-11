import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Api from '../../services/Api'
import { Card } from 'react-native-paper'

export default function Posts(navigation) {

    const [posts, setPosts] = useState([])

    Api.get('/posts').then(response => {
        setPosts(response.data.posts)
    })

    return (
        <View style={styles.container}>
            <FlatList style={styles.listPessoas}
                data={posts}
                renderItem={({ item }) =>
                    <View style={{ marginTop: 10 }}>
                        <Card mode='outlined'>

                            <Card.Title title={item.title} />
                            <Card.Content>
                                <Text variant="titleLarge">{item.body}</Text>

                            </Card.Content>
                        </Card>
                    </View>
                }
            // showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        justifyContent: 'center',
        alignContent: 'center'
    },
    listPessoas: {
        width: '90%',
    }
})