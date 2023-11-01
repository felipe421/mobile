import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Button, Card, Dialog, FAB, MD3Colors, Portal, Text } from 'react-native-paper'
import Toast from 'react-native-toast-message'


export default function ListaAlunosAsyncStorage({ navigation, route }) {

    const [alunos, setAlunos] = useState([])
    const [showModalExcluirUsuario, setShowModalExcluirUsuario] = useState(false)
    const [alunoASerExcluida, setAlunoASerExcluida] = useState(null)

    useEffect(() => {
        loadAlunos()
    }, [])

    async function loadAlunos() {
        const response = await AsyncStorage.getItem('alunos')
        console.log(" file: ListaAlunosAsyncStorage.js:21 ~ loadAlunos ~ response:", response)
        const alunosStorage = response ? JSON.parse(response) : []
        setAlunos(alunosStorage)
    }
    const showModal = () => setShowModalExcluirUsuario(true);
    const hideModal = () => setShowModalExcluirUsuario(false);

    async function adicionarAluno(aluno) {
        let novaListaAlunos = alunos
        novaListaAlunos.push(aluno)
        await AsyncStorage.setItem('alunos', JSON.stringify(novaListaAlunos));
        setAlunos(novaListaAlunos)
    }

    async function editarAluno(alunoAntiga, novosDados) {
        console.log('Aluno ANTIGA -> ', alunoAntiga)
        console.log('DADOS NOVOS -> ', novosDados)

        const novaListaAlunos = alunos.map(aluno => {
            if (aluno == alunoAntiga) {
                return novosDados
            } else {
                return aluno
            }
        })

        await AsyncStorage.setItem('alunos', JSON.stringify(novaListaAlunos))
        setAlunos(novaListaAlunos)
    }

    async function excluirAluno(aluno) {
        const novaListaAluno = alunos.filter(p => p !== aluno)
        await AsyncStorage.setItem('alunos', JSON.stringify(novaListaAluno))
        setAlunos(novaListaAluno)
        Toast.show({
            type: 'success',
            text1: 'Aluno excluida com sucesso!'
        })
    }

    function handleExluirAluno() {
        excluirAluno(alunoASerExcluida)
        setAlunoASerExcluida(null)
        hideModal()
    }


    return (
        <View style={styles.container}>
            <Text variant='titleLarge' style={styles.title}>Listas de Alunos</Text>

            <FlatList
                style={styles.list}
                data={alunos}
                renderItem={({ item }) => (
                    <Card mode='outlined' style={styles.card}>
                        <Card.Content style={styles.cardContent}>
                            <View>
                                <Text variant='titleMedium'>{item?.nome}</Text>
                                <Text variant='bodyLarge'>Matricula: {item?.matricula}</Text>
                                <Text variant='bodyLarge'>Turno: {item?.turno}</Text>
                                <Text variant='bodyLarge'>Curso: {item.curso}</Text>
                            </View>
                        </Card.Content>
                        <Card.Actions>
                            <Button onPress={() => navigation.push('FormAlunosAsyncStorage', { acao: editarAluno, aluno: item })}>
                                Editar
                            </Button>
                            <Button onPress={() => {
                                setAlunoASerExcluida(item)
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
                onPress={() => navigation.push('FormAlunosAsyncStorage', { acao: adicionarAluno })}
            />

            <Portal>
                <Dialog visible={showModalExcluirUsuario} onDismiss={hideModal}>
                    <Dialog.Title>Atenção</Dialog.Title>
                    <Dialog.Content>
                        <Text variant="bodyMedium">Tem certeza que deseja excluir este usuário?</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={hideModal}>Voltar</Button>
                        <Button onPress={handleExluirAluno}>Tenho Certeza</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        margin: 10
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
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
    }
})