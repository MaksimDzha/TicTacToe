import React from 'react';
import { PixelRatio, StyleSheet, Text, View, TextInput, Picker } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';

import Game from './src/Game'
import ResultTable from "./src/Result/ResultTable"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        size: '10',
        sizeWin: '5',
        isGameRun: false,
        isGameOver: false,
        winner: "",
        resultTable: "",
        computerFirst: false
        };
        this.playTheGame = this.playTheGame.bind(this);
        this.gameOver = this.gameOver.bind(this);
    }

    playTheGame = (isIt) => {
        const size = this.state.size;
        const sizeWin = this.state.sizeWin;
        if (Number(sizeWin) > Number(size)) {
            this.state.sizeWin = size
        };
        this.setState({isGameOver: false});
        this.setState({isGameRun: isIt});
        if (!isIt) {
            this.setState({computerFirst: false})
        }
    }

    gameOver(isIt, newWinner, table){
        this.setState({isGameRun: false});
        this.setState({winner: newWinner});
        this.setState({resultTable: table});
        this.setState({isGameOver: isIt});
    }

    render() {

        if (this.state.isGameRun) {
            return (
                <Game playTheGame={this.playTheGame}
                    gameOver={this.gameOver}
                    size={this.state.size}
                    sizeWin={this.state.sizeWin}
                    aiFirst={this.state.computerFirst}
                />
            )
        }

        if (this.state.isGameOver) {
            return (
                <View style={style.start}>
                    <Text style={style.gameName}>Игра окончена</Text>
                    {ResultTable(this.state.resultTable, this.state.winner)}
                    <View style={style.buttons}>
                            <Button type="outline" title="Повторить партию" onPress={() => this.playTheGame(true)}/>
                            <Button type="outline" title="Новая игра" onPress={() => this.playTheGame(false)}/>
                    </View>
                </View>
            )
        }


        return (
            <View style={style.start}>
                <Text>Добро пожаловать в игру</Text>
                <Text style={style.gameName}>КРЕСТИКИ-НОЛИКИ</Text>
                <CheckBox
                    title="Компьютер ходит первый"
                    iconRight
                    checked={this.state.computerFirst}
                    onPress={() => this.setState({ computerFirst: !this.state.computerFirst })}
                />
                <View style={style.rowStart}>
                    <View style={style.column}>
                        <Text style={style.customize}>{"Размер поля: "}</Text>
                        <Text style={style.customize}>{"Длина линии: "}</Text>
                    </View>
                    <View style={style.column}>
                        <Picker
                            selectedValue={this.state.size}
                            style={{height: 20, width: 120 }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({size: itemValue})
                            }>
                            <Picker.Item label="3x3" value="3" />
                            <Picker.Item label="4x4" value="4" />
                            <Picker.Item label="5x5" value="5" />
                            <Picker.Item label="6x6" value="6" />
                            <Picker.Item label="7x7" value="7" />
                            <Picker.Item label="8x8" value="8" />
                            <Picker.Item label="9x9" value="9" />
                            <Picker.Item label="10x10" value="10" />
                        </Picker>
                        <Picker
                            selectedValue={this.state.sizeWin}
                            style={{height: 20, width: 120 }}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({sizeWin: itemValue})
                            }>
                            <Picker.Item label="3" value="3" />
                            <Picker.Item label="4" value="4" />
                            <Picker.Item label="5" value="5" />
                            <Picker.Item label="6" value="6" />
                            <Picker.Item label="7" value="7" />
                            <Picker.Item label="8" value="8" />
                            <Picker.Item label="9" value="9" />
                            <Picker.Item label="10" value="10" />
                        </Picker>
                    </View>
                </View>
                <View style={style.buttons}>
                    <Button type="outline" title="Начать игру" onPress={() => {this.playTheGame(true)}}/>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    start: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    gameName: {
        margin: 5,
        height: 30,
        width: '100%',
        fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#ffcc00',
    },
    customize: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(8),
    },
    rowStart: {
        margin: 5,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    column: {
        margin: 5,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    buttons: {
        margin: 5,
        display: 'flex',
        justifyContent: 'center',
    }
});

export default App;