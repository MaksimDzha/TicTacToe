import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={style.start}>
            <Text style={style.gameName}>Добро пожаловать в игру крестики-нолики</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    start: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    gameBegin: {
        margin: 5,
        height: 30,
        width: 100,
        fontSize: 12,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#90EE90',
        borderRadius: 5
    },
    gameEnd: {
        margin: 5,
        height: 30,
        width: 110,
        fontSize: 14,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffcc00',
        borderRadius: 5
    },
    gameName: {
        margin: 5,
        height: 30,
        width: 300,
        fontSize: 14,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffcc00',
        borderRadius: 5
    },
    game: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    playerName: {
        marginBottom: 5,
        height: 10,
        fontSize: 12,
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    winner: {
        margin: 5,
        height: 20,
        fontSize: 14,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    customize: {
        marginLeft: 10
    },
    icon: {
        margin: 3,
        height: 30,
        width: 30,
        fontSize: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFD700',
        borderRadius: 5
    },
    column: {
        margin: 5,
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    rowStart: {
        margin: 5,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    row: {
        marginTop: 0,
        marginBottom: 0,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buttons:{
        margin: 5,
        display: 'flex',
        justifyContent: 'center',
    },
    inputNumberStyle:{
        marginLeft: 5,
        marginRight: 15,
        height: 10,
        width: 20,
    },
    button:{
        margin: 5
    },
});
