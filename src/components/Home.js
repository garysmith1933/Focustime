import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import {fontSizes, spacing} from '../Utils/sizes';
import { colors } from '../Utils/colors';

export const Home =  () => {
    return (
        <View>
            <Text> This is home </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: spacing.md
    }
})