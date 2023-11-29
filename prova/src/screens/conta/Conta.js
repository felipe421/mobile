import { StyleSheet, View, ImageBackground } from 'react-native'
import React from 'react'
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

export default function Conta(props) {
  const dadosLogin = props.route.params
  return (
    <ImageBackground source={require('../../../assets/fundo.jpg')} resizeMode='stretch' style={styles.image}>
      <Card style={styles.card}>
        <Card.Title
          style={{ margin: 5 }}
          title='Perfil'
          titleStyle={{ fontWeight: 'bold' }}
        />
        <Card.Cover style={{ margin: 12 }} source={require('../../../assets/perfil.png')} />
        <Card.Content style={{width: 340}}>
          <View style={styles.labelArea}>
            <Ionicons style={styles.icon} name="person-outline" size={16} color="#DCDCDC" />
            <Text variant='bodyMedium' style={{ fontWeight: 'bold' }} >Nome:</Text>
            <Text variant='bodyMedium' style={{ fontWeight: 'bold' }}></Text>
          </View>

          <View style={styles.labelArea}>
          <Ionicons style={styles.icon} name="at-outline" size={16} color="#DCDCDC"/>
            <Text variant='bodyMedium' style={{ fontWeight: 'bold' }} >Emai:</Text>
            <Text variant='bodyMedium' style={{ fontWeight: 'bold' }}></Text>
          </View>

          <View style={styles.labelArea}>
          <Ionicons style={styles.icon} name="finger-print" size={16} color="#DCDCDC"/>
            <Text variant='bodyMedium' style={{ fontWeight: 'bold' }} >Senha:</Text>
            <Text variant='bodyMedium' style={{ fontWeight: 'bold' }}></Text>
          </View>

        </Card.Content>

      </Card>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    justifyContent: 'center', alignItems: 'center',

  },
  card: {
    margin: 10,
    borderWidth: 2,
    borderRadius: 10
  },
  labelArea: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})