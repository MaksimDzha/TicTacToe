import React, { Component } from 'react'
import { PixelRatio, StyleSheet, Text, View } from 'react-native';

import Cells from './Cells'
import newCheck from './Logic/newCheck'
import createTable from './Logic/createTable'
import aiHard from './Logic/aiHard'

class BattleTable extends Component{

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            computerPlay: "O",
            table: createTable(this.props.size),
            step: "X"
        }
        this.playerTurn = this.playerTurn.bind(this);
        this.aiTurn = this.aiTurn.bind(this)
    };

    gameResult = (resultTable, line, message) => {
        resultTable.forEach((row, indexX) =>
            row.forEach((item, indexY) => (
                resultTable[indexX][indexY] = ["", item]
            ))
        )
        if (line != null){
            line.forEach((item) => {resultTable[item[0]][item[1]][0] = "win"})
        }
        this.props.gameOver(true, message, resultTable);
    }

    nextStep = (newTable) => {
        const tStep = this.state.step == "X" ? "O" : "X";
        const size = this.props.size;
        const newCount = this.state.count + 1;
        if ((newCount == size*size)&&(this.state.computerPlay == "X"))
            this.aiTurn(newTable);
        if (newCount >= size*size) {
            var resultTable = createTable(newTable.length);
            this.gameResult(resultTable, null, "");
        }
        this.setState({step: tStep});
        this.setState({count: this.state.count + 1});
        if ((tStep == this.state.computerPlay)&&(newCount < size*size))
            this.aiTurn(newTable);
    }

    aiTurn = (newTable) => {
        aiHard(newTable, this.props.sizeWin, this.state.computerPlay, 0);
        const line = newCheck(newTable, this.props.sizeWin);
        if (line != null){
            this.gameResult(newTable, line, "Вы проиграли");
        }
        this.setState({table: newTable}, function(){this.nextStep(newTable)});
    }

    playerTurn = (table, rowID, cellID) => {
        const newTable = [...table];
        const newRow = [...table[rowID]];
        if (newRow[cellID] == "") {
            newRow[cellID] = this.state.step;
            newTable[rowID] = newRow;
            const line = newCheck(newTable, this.props.sizeWin);
            if (line != null){
                this.gameResult(newTable, line, "Вы победили. Поздравляем!");
            }
            this.setState({table: newTable}, function(){this.nextStep(newTable)});
        }
    }

    render(){
        if (this.state.count == 0 && this.props.aiFirst) {
            this.setState({computerPlay: "X"});
            const newCount = this.state.count + 1;
            var aiTable = createTable(this.props.size);
            for (let i = 0; i < this.props.size; i++)
                for (let j = 0; j < this.props.size; j++)
                    aiTable[i][j] = "";
            this.setState({count: newCount}, function(){this.aiTurn(aiTable)});
        }
        return(
            <View style={style.column}>
                <Text style={style.playerName}>{
                    this.state.step === "X" ? 'Ваш ход - X' : 'Ваш ход - O'
                }
                </Text>
                <View>{Cells(this.state.table, this.playerTurn)}</View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    playerName: {
        marginBottom: 5,
        height: 25,
        width: '100%',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(9),
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    column: {
        margin: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }
});

export default BattleTable;