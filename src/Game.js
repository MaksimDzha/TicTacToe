import React from 'react'
import { PixelRatio, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import BattleTable from './BattleTable'

const Game = ({playTheGame, gameOver, size, sizeWin, aiFirst}) => (
    <View style={style.game}>
        <Text style={style.gameBegin}>Игра началась!</Text>
        <View><BattleTable
            gameOver={gameOver}
            size={size}
            sizeWin={sizeWin}
            aiFirst={aiFirst}
            />
        </View>
        <View style={style.buttons}>
            <Button type="outline" title="Закончить игру" onPress={() => playTheGame(false)}/>
        </View>
    </View>
)

const style = StyleSheet.create({
    gameBegin: {
        margin: 5,
        height: 30,
        width: "100%",
        fontSize: PixelRatio.getPixelSizeForLayoutSize(10),
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#90EE90',
    },
    game: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    buttons:{
        margin: 5,
        display: 'flex',
        justifyContent: 'center',
    }
});

export default Game;