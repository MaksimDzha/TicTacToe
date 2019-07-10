import React, { Component } from 'react'
import { PixelRatio, StyleSheet, View, Text } from 'react-native';

const Cell = (props) => (
        <Text style={style.icon} adjustsFontSizeToFit={true} onPress = {props.playerChange}>{props.value}</Text>
)

const style = StyleSheet.create({
    icon: {
        margin: 3,
        width: 30,
        fontSize: PixelRatio.getPixelSizeForLayoutSize(11),
        textAlign: 'center',
        display: 'flex',
        backgroundColor: '#FFD700',
        borderRadius: 5
    }
});

export default Cell;