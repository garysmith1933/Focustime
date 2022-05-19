import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Timer } from '../features/timer/Timer.js'

export const Affirmations = () => {
    return (
        <View style={{flex: 1, padding: 32}}> 
            <Text style={{fontSize: 32}}> AFFIRMATIONS </Text>
        </View>
    )
}