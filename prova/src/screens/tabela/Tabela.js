import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import Api from '../../services/Api'
import { DataTable } from 'react-native-paper';



export default function Tabela() {
    const [tabela, setTabela] = useState([])


    useEffect(() => {
        Api.get('/v2/crypto?coin=BTC,ETC,ADA,BNB,USDT,DOGE,USDC,SOL1,XTZ,NEO,MKR,QNT,HOT1,AR,YFI&currency=BRLT&token=vtGrA9HFSPpaacyAjZEwLt').then(response => {
            console.log(response.data)
            setTabela(response.data.coins)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    console.log(tabela)
    return (
        <View style={styles.container}>
            <DataTable style={styles.tabela}>
                <DataTable.Header style={styles.title}>
                    <DataTable.Title>Moedas</DataTable.Title>
                    <DataTable.Title>taxa de câmbio de usd</DataTable.Title>
                    <DataTable.Title>Nome da Moedas</DataTable.Title>
                    <DataTable.Title>Criptomoedas</DataTable.Title>
                </DataTable.Header>
                <FlatList
                    data={tabela}
                    renderItem={({ item }) => (
                        <DataTable.Row style={styles.title}>
                            <DataTable.Cell style={styles.title}>{item.currency}</DataTable.Cell>
                            <DataTable.Cell>{item.currencyRateFromUSD}</DataTable.Cell>
                            <DataTable.Cell>{item.coinName}</DataTable.Cell>
                            <DataTable.Cell>{item.coin}</DataTable.Cell>
                        </DataTable.Row>
                    )}
                />
            </DataTable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    },
    tabela: {
        width: '100 %',
        border: '1px solid #ddd',
        backgroundcolor: '#f9f9f9'
    },
    title: {
        backgroundColor: '#ddd'
    }

})