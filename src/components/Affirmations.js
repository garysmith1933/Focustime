import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Timer } from '../features/timer/Timer.js'

export const Affirmations = () => {
    const screenWidth = Dimensions.get("window").width
    const image = require('../../assets/No.gif')
    return (
        <View style={{flex: 1, padding: 32, alignItems: 'center', justifyContent:'center'}}> 
            <Image source={image} style={{width: screenWidth}}/>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}> Coming This Summer! </Text>
        </View> 
    )
}