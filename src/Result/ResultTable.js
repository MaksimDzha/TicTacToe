import React, { Component } from 'react'
import { PixelRatio, StyleSheet, View, Text } from 'react-native';

const ResultTable = (table, winner, line) => (
    <View>
        <View style={style.column}>
            <Text style={style.winner}>{(winner == "") ? "Ничья!" : (winner)}</Text>
            {table.map((row, indexX) => {
                return (
                    <View style={style.row} key={indexX}>{
                        row.map((value, indexY) => {
                            return(
                                <Text
                                    style={(value[0] == "win") ? style.iconWin : style.icon}
                                    key={indexY}>
                                    { value[1] }
                                </Text>
                            )
                        })
                    }</View>
                )}
            )}
        </View>
    </View>
)

const style = StyleSheet.create({
    winner: {
        margin: 5,
        height: 30,
        width: '100%',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        margin: 3,
        width: 30,
        fontSize: PixelRatio.getPixelSizeForLayoutSize(11),
        textAlign: 'center',
        display: 'flex',
        backgroundColor: '#FFD700',
        borderRadius: 5
    },
    iconWin: {
        margin: 3,
        width: 30,
        fontWeight: 'bold',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(11),
        textAlign: 'center',
        display: 'flex',
        backgroundColor: '#FF0000',
        borderRadius: 5
    },
    column: {
        margin: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    row: {
        marginTop: 0,
        marginBottom: 0,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row'
    }
});

export default ResultTable;