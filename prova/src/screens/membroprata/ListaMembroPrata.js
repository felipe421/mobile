import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View, ImageBackground } from 'react-native'
import { Button, Card, Dialog, FAB, MD3Colors, Portal, Text, Avatar } from 'react-native-paper'
import Toast from 'react-native-toast-message'


export default function ListaDeMembro(props, route) {
    const [clientesprata, setClientesprata] = useState([])
    const [showModalExcluirUsuario, setShowModalExcluirUsuario] = useState(false)
    const [clienteprataASerExcluida, setClienteprataASerExcluida] = useState(null)

    useEffect(() => {
        loadClientesprata()
    }, [])

    async function loadClientesprata() {
        const response = await AsyncStorage.getItem('clientesprata')
        console.log(" file: ListaClientesprataAsyncStorage.js:21 ~ loadClientes ~ response:", response)
        const clientesprataStorage = response ? JSON.parse(response) : []
        setClientesprata(clientesprataStorage)
    }

    const showModal = () => setShowModalExcluirUsuario(true);
    const hideModal = () => setShowModalExcluirUsuario(false);

    async function adicionarClienteprata(clienteprata) {
        let novaListaClientesprata = clientesprata
        novaListaClientesprata.push(clienteprata)
        await AsyncStorage.setItem('clientesprata', JSON.stringify(novaListaClientesprata));
        setClientes(novaListaClientesprata)
    }

    async function editarClienteprata(clienteprataAntiga, novosDados) {
        console.log('Cliente ANTIGA -> ', clienteprataAntiga)
        console.log('DADOS NOVOS -> ', novosDados)

        const novaListaClientesprata = clientesprata.map(clienteprata => {
            if (clienteprata == clienteprataAntiga) {
                return novosDados
            } else {
                return clientesprata
            }
        })

        await AsyncStorage.setItem('clientesprata', JSON.stringify(novaListaClientesprata))
        setClientes(novaListaClientesprata)
    }

    async function excluirCliente(clienteprata) {
        const novaListaClienteprata = clientesprata.filter(p => p !== clienteprata)
        await AsyncStorage.setItem('clientesprata', JSON.stringify(novaListaClienteprata))
        setClientes(novaListaClienteprata)
        Toast.show({
            type: 'success',
            text1: 'Cliente excluida com sucesso!'
        })
    }

    function handleExluirClienteprata() {
        excluirCliente(clienteprataASerExcluida)
        setClienteprataASerExcluida(null)
        hideModal()
    }
    console.log(clientesprata)
    return (
        <ImageBackground source={require('../../../assets/fundo.jpg')} resizeMode='stretch' style={styles.image}>
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    data={clientes}
                    renderItem={({ item }) =>(
                        <Card mode='outlined' style={styles.card}>
                            <Card.Title
                                title='Membros de Prata '
                                left={() => <Avatar.Image size={48} source={require('../../../assets/logo2.jpeg')} />}
                            />
                            <Card.Content style={styles.cardContent}>
                                <View>
                                    <Text variant='titleMedium'>{item?.nome}</Text>
                                    <Text variant='bodyLarge'>CPF: {item?.cpf}</Text>
                                    <Text variant='bodyLarge'>CEF: {item?.cef}</Text>
                                    <Text variant='bodyLarge'>telefone: {item.telefone}</Text>
                                    <Text variant='bodyLarge'>Bairro: {item.bairro}</Text>
                                </View>
                            </Card.Content>
                            <Card.Actions>
                                <Button onPress={() => props.navigation.push('Bronze', { acao: editarClienteprata, clienteprata: item })}>
                                    Editar
                                </Button>
                                <Button onPress={() => {
                                    setClienteprataASerExcluida(item)
                                    showModal()
                                }}>
                                    Excluir
                                </Button>
                            </Card.Actions>
                        </Card>
                    )}
                />

                <FAB
                    icon="plus"
                    style={styles.fab}
                    onPress={() => props.navigation.push('Bronze', { acao: adicionarClienteprata })}
                />

                <Portal>
                    <Dialog visible={showModalExcluirUsuario} onDismiss={hideModal}>
                        <Dialog.Title>Atenção</Dialog.Title>
                        <Dialog.Content>
                            <Text variant="bodyMedium">Tem certeza que deseja excluir este usuário?</Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={hideModal}><Text>Voltar</Text></Button>
                            <Button onPress={handleExluirClienteprata}><Text>Tenho Certeza</Text></Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        width: '100%',
        justifyContent: 'center', alignItems: 'center'
    },
    list: {
        width: '90%',
    },
    card: {
        marginTop: 15
    },
    cardContent: {
        flexDirection: 'row',
        backgroundColor: MD3Colors.primary80,
        borderWidth: 2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingBottom: 15
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})