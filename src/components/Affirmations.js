import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import {colors} from '../Utils/colors'

export const Affirmations = () => {
    const screenWidth = Dimensions.get("window").width
    const image = require('../../assets/No.gif')
    return (
        <View style={{flex: 1, padding: 32, alignItems: 'center', justifyContent:'center', backgroundColor: colors.lightPink}}> 
            <Image source={image} style={{width: screenWidth}}/>
        </View> 
    )
}
