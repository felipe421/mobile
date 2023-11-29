import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Formik } from 'formik'

const validationSchema = yup.object({
  username: yup.string().required("informe seu nome"),
  email: yup.string().email('Email Invalido').required('Informe seu Email'),
  password: yup.string().min(6, 'A senha deve ter pelo menos 6 digitos').required('Informe sua senha')
})

export default function SignIn(props) {
  const { navigation } = props
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  function handleSignIn(data) {
    console.log(data);
  }

  function salvar() {

  }

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: ''
        }}
         validationSchema={validationSchema}
        onSubmit={values => salvar(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, touched, errors, values }) => (
          <>

            <Text style={styles.title}>Bem Vindo</Text>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              placeholder='Nome'
              error={errors.username ? true : false}
            />

            {touched.username && errors.username && (
              <Text style={{ color: 'red', textAlign: 'center' }}>{errors.username}</Text>
            )}

            <TextInput
              style={styles.input}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder='Digite seu Email'
              error={errors.email ? true : false}
            />
            {touched.email && errors.email && (
              <Text style={{ color: 'red', textAlign: 'center' }}>{errors.email}</Text>
            )}

            <TextInput
              style={styles.input}
              onChangeText={handleChange('password')}
              value={values.password}
              placeholder='Senha'
              secureTextEntry={true}
              error={errors.password ? true : false}
              onBlur={handleBlur('password')}
            />
            {touched.password && errors.password && (
              <Text style={{ color: 'red', textAlign: 'center' }}>{errors.password}</Text>
            )}

            <TouchableOpacity style={styles.button} onPress={() => {
              handleSubmit(handleSignIn)
              props.navigation.push('Conta')
            }}>
              <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>

          </>
        )}
      </Formik>
    </View >

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
