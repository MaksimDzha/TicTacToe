import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';

import Cell from './Cell'

const Cells = (table, playerTurn) => (
    table.map((row, indexX) => {
        return (
            <View style={style.row} key={indexX}>{
                row.map((cell, indexY) => {
                    return(
                        <Cell
                            value={cell}
                            key={indexY}
                            playerChange={() => playerTurn(table, indexX, indexY)}
                            size={table.size}
                        />
                    )
                })
            }</View>
        )
    })
)

const style = StyleSheet.create({
    row: {
        marginTop: 0,
        marginBottom: 0,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row'
    }
});

export default Cells;