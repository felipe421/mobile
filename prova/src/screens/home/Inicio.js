
import { StyleSheet, ImageBackground, View, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Card, Dialog, FAB, MD3Colors, Portal, Text } from 'react-native-paper'
import { KeyboardAvoidingView, FlatList, Image, TouchableOpacity } from "react-native"
import * as animatable from 'react-native-animatable'



export default function Inicio({ route, navigation }) {

    return (
        <ImageBackground source={require('../../../assets/fundo.jpg')} resizeMode='stretch' style={styles.image}>
            <View style={styles.container}>
                <View style={styles.containerLogo}>
                    <animatable.Image
                        source={require('../../../assets/capa.png')}
                        resizeMode='contain'
                        animation='flipInY'
                    />
                </View>
                <animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                    <Text style={styles.title}>Banco mais Seguro</Text>
                    <Text style={styles.text}>Faça o login para começar</Text>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.push('SignIn')}>
                        <Text style={styles.buttonText}>Acessar</Text>
                    </TouchableOpacity>
                </animatable.View>
            </View>
        </ImageBackground>

    )
}


const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        margin: 10,
        color: '#a1a1a1'
    },
    butao: {
        padding: '10px 24px',
        borderRadius: '12px',
        fontSize: '12px',
        backgroundColor: ' #555555',
        fontStyle: 'italic'
    },
    image: {
        flex: 1,
        width: '100%',
        justifyContent: 'center', alignItems: 'center'
    },
    icon: {
        alignSelf: 'center'
    },
    inputContainer: {
        borderColor: '#FF5C00',
        borderWidth: 1,
        paddingLeft: 10,
        marginTop: 15,
        borderRadius: 45,
        flexDirection: 'row',
    },
    containerLogo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#rgb(201, 76, 76)',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        color: '#FFF'
    },
    button: {
        position: 'absolute',
        backgroundColor: '#FF5C00',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    }

})