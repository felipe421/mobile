import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import Toast from 'react-native-toast-message'
import * as yup from 'yup'
import { TextInputMask } from 'react-native-masked-text';


export default function FormMembroBroze(props) {
  const { acao, cliente: clienteAntiga } = props.route.params
  console.log(props)

  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [cef, setCef] = useState('')
  const [telefone, setTelefone] = useState('')
  const [bairro, setBairro] = useState('')
  const [showMensagemErro, setShowMensagemErro] = useState(false)
  const [two, setTwo] = useState(0)

  async function handleSendForm() {
    try {
      const schema = yup.object({
        nome: yup.string().required("Nome Obrigatório"),
        email: yup.string().email('Email Invalido').required('Informe seu Email'),
        telefone: yup.string().required('Informe sua seu numero'),
        cpf: yup.string().required('Campo obrigatório!'),
        cef: yup.string().required('Campo obrigatório!'),
        bairro: yup.string().required('Campo obrigatório!'),
      })
      await schema.validate({ bairro, nome, telefone, bairro })

      alert.alert('Passou')
    } catch (error) {
      if(error instanceof yup.ValidationError){
        alert.alert(error.message)
      }
    }
  }

useEffect(() => {

  console.log('cliente -> ', clienteAntiga)

  if (clienteAntiga) {
    setNome(clienteAntiga.nome)
    setCpf(clienteAntiga.cpf)
    setCef(clienteAntiga.cef)
    setTelefone(clienteAntiga.telefone)
    setBairro(clienteAntiga.bairro)
  }

}, [])

function salvar() {

  if (nome === '' || cef === '' || cef === '' || telefone === '' || bairro === '') {
    setShowMensagemErro(true)
  } else {
    setShowMensagemErro(false)

    const novaCliente = {
      nome: nome,
      cpf: cpf,
      cef: cef,
      telefone: telefone,
      bairro: bairro
    }

    const objetoEmString = JSON.stringify(novaCliente)
    console.log(" ~ file: FormMembroBronze.js:47 ~ salvar ~ objetoEmString:", objetoEmString)
    console.log(typeof (objetoEmString))

    const objeto = JSON.parse(objetoEmString)
    console.log(" ~ file: FormMembroBronze.js:52 ~ salvar ~ objeto:", objeto)
    console.log(typeof (objeto))

    if (clienteAntiga) {
      acao(clienteAntiga, novaCliente)
    } else {
      acao(novaCliente)
    }

    Toast.show({
      type: 'success',
      text1: 'Cliente salva com sucesso!'
    })

    props.navigation.goBack()

    handleSendForm
  }
}

return (
  <View style={styles.container}>
    <Text variant='titleLarge' style={styles.title}>{clienteAntiga ? 'Editar cliente' : 'Adicionar cliente'}</Text>
    <View style={styles.inputContainer}>

      {two === 0 && (
        <>
          <TextInput
            style={styles.input}
            placeholder='Nome'
            label={'Nome'}
            mode='outlined'
            value={nome}
            onChangeText={text => setNome(text)}
            onFocus={() => setShowMensagemErro(false)}
          />

          <TextInput
            style={styles.input}
            placeholder='CPF'
            label={'CPF'}
            keyboardType='numeric'
            mode='outlined'
            value={cpf}
            onChangeText={text => setCpf(text)}
            onFocus={() => setShowMensagemErro(false)}
            render={props =>
              <TextInputMask
                {...props}
                type={'cpf'}
              />
            }
          />

          <Button onPress={() => setTwo(1)}>Proxima</Button>
        </>
      )}
      {two === 1 && (
        <>
          <TextInput
            style={styles.input}
            label={'CEF'}
            placeholder='CEF'
            keyboardType='numeric'
            mode='outlined'
            value={cef}
            onChangeText={text => setCef(text)}
            onFocus={() => setShowMensagemErro(false)}
            render={props =>
              <TextInputMask
                {...props}
                type={'zip-code'}
              />
            }
          />

          <TextInput
            style={styles.input}
            label={'telefone'}
            placeholder='seu telefone'
            keyboardType='numeric'
            mode='outlined'
            value={telefone}
            onChangeText={text => setTelefone(text)}
            onFocus={() => setShowMensagemErro(false)}
            render={props =>
              <TextInputMask
                {...props}
                type={'cel-phone'}
                options={{
                  maskType: 'BRL',
                  withDDD: true,
                  dddMask: '(61)'
                }}
              />
            }
          />

          <Button onPress={() => setTwo(2)}>Proxima</Button>
        </>
      )}
      {two === 2 && (
        <>

          <TextInput
            style={styles.input}
            label={'bairro'}
            placeholder='bairro'
            mode='outlined'
            value={bairro}
            onChangeText={text => setBairro(text)}
            onFocus={() => setShowMensagemErro(false)}
          />

          {showMensagemErro &&
            <Text style={{ color: 'red', textAlign: 'center' }}>Preencha todos os campos!</Text>
          }
          <View style={styles.buttonContainer}>
            <Button
              style={styles.button}
              mode='contained-tonal'
              onPress={() => props.navigation.goBack()}
            >
              Voltar
            </Button>
            <Button
              style={styles.button}
              mode='contained'
              onPress={salvar}
            >
              Salvar
            </Button>
          </View>

        </>
      )}
    </View>
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
  inputContainer: {
    width: '90%',
    flex: 1
  },
  input: {
    margin: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '90%',
    gap: 10,
    marginBottom: 10
  },
  button: {
    flex: 1
  }
})