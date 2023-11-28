import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import Api from '../../services/Api'
import { DataTable } from 'react-native-paper';



export default function Tabela() {
    const [tabela, setTabela] = useState([])


    useEffect(() => {
        Api.get('/v2/crypto?coin=BTC,ETC,ADA,BNB,USDT,DOGE,USDC&currency=BRL&token=vtGrA9HFSPpaacyAjZEwLt').then(response => {
            console.log(response.data)
            setTabela(response.data.coins)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    console.log(tabela)
    return (
        <View style={styles.container}>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Moedas</DataTable.Title>
                    <DataTable.Title>taxa de câmbio de usd</DataTable.Title>
                    <DataTable.Title>Nome da Moedas</DataTable.Title>
                    <DataTable.Title>Criptomoedas</DataTable.Title>
                    <DataTable.Title>Mudança de mercado regular</DataTable.Title>
                    <DataTable.Title>porcentagem de mudança regular do mercado</DataTable.Title>
                    <DataTable.Title>Baixa normal do dia de mercado</DataTable.Title>
                    <DataTable.Title>Alta normal do dia de mercado</DataTable.Title>
                    <DataTable.Title>ntervalo normal do dia de mercado</DataTable.Title>
                    <DataTable.Title>Volume regular do mercado</DataTable.Title>
                    <DataTable.Title>valor de mercado</DataTable.Title>
                    <DataTable.Title>Horário normal do mercado</DataTable.Title>
                </DataTable.Header>
                <FlatList
                    data={tabela}
                    renderItem={({ item }) => (
                        <DataTable.Row>
                            <DataTable.Cell>{item.currency}</DataTable.Cell>
                            <DataTable.Cell>{item.currencyRateFromUSD}</DataTable.Cell>
                            <DataTable.Cell>{item.coinName}</DataTable.Cell>
                            <DataTable.Cell>{item.coin}</DataTable.Cell>
                            <DataTable.Cell>{item.regularMarketChange}</DataTable.Cell>
                            <DataTable.Cell>{item.regularMarketPrice}</DataTable.Cell>
                            <DataTable.Cell>{item.regularMarketChangePercent}</DataTable.Cell>
                            <DataTable.Cell>{item.regularMarketDayLow}</DataTable.Cell>
                            <DataTable.Cell>{item.regularMarketDayHigh}</DataTable.Cell>
                            <DataTable.Cell>{item.regularMarketDayRange}</DataTable.Cell>
                            <DataTable.Cell>{item.regularMarketVolume}</DataTable.Cell>
                            <DataTable.Cell>{item.marketCap}</DataTable.Cell>
                            <DataTable.Cell>{item.regularMarketTime}</DataTable.Cell>
                        </DataTable.Row>
                    )}
                />
            </DataTable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    }
})