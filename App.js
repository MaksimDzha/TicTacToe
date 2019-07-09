import React from 'react';
import { PixelRatio, StyleSheet, Text, View, TextInput, Picker } from 'react-native';
import { CheckBox, Button } from 'react-native-elements';


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

    onChangeSize = (value) => {
        const regex = /^[0-9]*$/;
        if (!regex.test(value)) value = 3;
        this.setState({size: value})
    }

    onBlurSize = (value) => {
        Number(value) < 3 ? value = 3 : (Number(value) > 10 ? value = 10 : true);
        if (this.state.sizeWin > value) this.state.sizeWin = value;
        this.setState({size: Number(value)})
    }

    onChangeSizeWin = (value) => {
        const regex = /^[0-9]*$/;
        if (!regex.test(value)) value = 3;

        this.setState({sizeWin: value})
    }

    onBlurSizeWin = (value) => {
        const size = this.state.size;
        Number(value) < 3 ? value = 3 : (Number(value) > size ? value = size : true);
        this.setState({sizeWin: Number(value)})
    }

    playTheGame = (isIt) => {
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
                <Text>Игра началась</Text>
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
                    <Text style={style.customize1}>{"Размер поля (3 - 10): "}</Text>
                    <Picker
                        selectedValue={this.state.size}
                        style={{height: 20, width: 100 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({size: itemValue})
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
                <View style={style.rowStart}>
                    <Text style={style.customize2}>{"Победа при количестве: "}</Text>
                    <Picker
                        selectedValue={this.state.sizeWin}
                        style={{height: 20, width: 80 }}
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
                <View style={style.buttons}>
                    <Button title="Начать игру" onPress={() => {this.playTheGame(true)}}/>
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
        flexDirection: 'column'
    },
    gameBegin: {
        margin: 5,
        height: 30,
        width: 100,
        fontSize: PixelRatio.getPixelSizeForLayoutSize(9),
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#90EE90',
        borderRadius: 5
    },
    gameEnd: {
        margin: 5,
        height: 30,
        width: 110,
        fontSize: PixelRatio.getPixelSizeForLayoutSize(9),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffcc00',
        borderRadius: 5
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
        fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    winner: {
        margin: 5,
        height: 20,
        fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    customize1: {
        marginRight: 5,
        fontSize: PixelRatio.getPixelSizeForLayoutSize(8)
    },
    customize2: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(8)
    },
    icon: {
        margin: 3,
        height: 30,
        width: 30,
        fontSize: PixelRatio.getPixelSizeForLayoutSize(14),
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


export default App;