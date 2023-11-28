import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View, ImageBackground } from 'react-native'
import { Button, Card, Dialog, FAB, MD3Colors, Portal, Text, Avatar } from 'react-native-paper'
import Toast from 'react-native-toast-message'


export default function ListaDeMembro(props, route) {
    const [clientes, setClientes] = useState([])
    const [showModalExcluirUsuario, setShowModalExcluirUsuario] = useState(false)
    const [clienteASerExcluida, setClienteASerExcluida] = useState(null)

    useEffect(() => {
        loadClientes()
    }, [])

    async function loadClientes() {
        const response = await AsyncStorage.getItem('clientes')
        console.log(" file: ListaClientesAsyncStorage.js:21 ~ loadClientes ~ response:", response)
        const clientesStorage = response ? JSON.parse(response) : []
        setClientes(clientesStorage)
    }

    const showModal = () => setShowModalExcluirUsuario(true);
    const hideModal = () => setShowModalExcluirUsuario(false);

    async function adicionarCliente(cliente) {
        let novaListaClientes = clientes
        novaListaClientes.push(cliente)
        await AsyncStorage.setItem('clientes', JSON.stringify(novaListaClientes));
        setClientes(novaListaClientes)
    }

    async function editarCliente(clienteAntiga, novosDados) {
        console.log('Cliente ANTIGA -> ', clienteAntiga)
        console.log('DADOS NOVOS -> ', novosDados)

        const novaListaClientes = clientes.map(cliente => {
            if (cliente == clienteAntiga) {
                return novosDados
            } else {
                return cliente
            }
        })

        await AsyncStorage.setItem('clientes', JSON.stringify(novaListaClientes))
        setClientes(novaListaClientes)
    }

    async function excluirCliente(cliente) {
        const novaListaCliente = clientes.filter(p => p !== cliente)
        await AsyncStorage.setItem('clientes', JSON.stringify(novaListaCliente))
        setClientes(novaListaCliente)
        Toast.show({
            type: 'success',
            text1: 'Cliente excluida com sucesso!'
        })
    }

    function handleExluirCliente() {
        excluirCliente(clienteASerExcluida)
        setClienteASerExcluida(null)
        hideModal()
    }
    console.log(clientes)
    return (
        <ImageBackground source={require('../../../assets/fundo.jpg')} resizeMode='stretch' style={styles.image}>
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    data={clientes}
                    renderItem={({ item }) =>(
                        <Card mode='outlined' style={styles.card}>
                            <Card.Title
                                title='Membros Bronzes'
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
                                <Button onPress={() => props.navigation.push('Bronze', { acao: editarCliente, cliente: item })}>
                                    Editar
                                </Button>
                                <Button onPress={() => {
                                    setClienteASerExcluida(item)
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
                    onPress={() => props.navigation.push('Bronze', { acao: adicionarCliente })}
                />

                <Portal>
                    <Dialog visible={showModalExcluirUsuario} onDismiss={hideModal}>
                        <Dialog.Title>Atenção</Dialog.Title>
                        <Dialog.Content>
                            <Text variant="bodyMedium">Tem certeza que deseja excluir este usuário?</Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={hideModal}><Text>Voltar</Text></Button>
                            <Button onPress={handleExluirCliente}><Text>Tenho Certeza</Text></Button>
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
