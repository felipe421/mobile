import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  username: yup.string().required("informe seu nome"),
  email: yup.string().email('Email Invalido').required('Informe seu Email'),
  password: yup.string().min(6, 'A senha deve ter pelo menos 6 digitos').required('Informe sua senha')
})

export default function SignIn(props) {
  const { navigation } = props
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  function handleSignIn(data) {
    console.log(data);
  }


  return (

    <View style={styles.container}>
      <Text style={styles.title}>Bem Vindo</Text>
      <Controller
        control={control}
        name='username'
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, {
              borderWidth: errors.username && 1,
              borderColor: errors.username && '#ff365b'
            }]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder='Nome'
          />
        )}
      />
      {errors.username && <Text style={styles.labelError}>{errors.username?.message}</Text>}

      <Controller
        control={control}
        name='email'
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, {
              borderWidth: errors.email && 1,
              borderColor: errors.email && '#ff365b'
            }]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder='Digite seu Email'
          />
        )}

      />
      {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}

      <Controller
        control={control}
        name='password'
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, {
              borderWidth: errors.password && 1,
              borderColor: errors.password && '#ff365b'
            }]}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder='Senha'
            secureTextEntry={true}
          />
        )}

      />
      {errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>}

      <TouchableOpacity style={styles.button} onPress={() => {
          handleSubmit(handleSignIn)
          props.navigation.push('Conta', {nome: 'Filipe'})
      }}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  title: {
    fontSize: 34,
    marginBottom: 34,
    color: '#121212',
    fontWeight: 'bold'
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    marginBottom: 8,
    borderRadius: 4,
    color: '#121212'
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#45D800',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  },
  labelError: {
    alignSelf: 'flex-start',
    marginBottom: 8,
    color: '#ff375b'
  }
})
