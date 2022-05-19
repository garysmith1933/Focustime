import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import {colors} from './src/Utils/colors'
import {spacing, fontSizes} from './src/Utils/sizes'
import {Home} from "./src/components/Home";
import { Colors } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Focustime} from "./src/components/FocusOption"
import {Affirmations} from "./src/components/Affirmations"
import {Planner} from "./src/components/Planner"

const {Navigator, Screen} = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
          <Screen name='Home' component={Home}/>
          <Screen name='Focus' component={Focustime}/>
          <Screen name='Affirmations' component={Affirmations}/>
          <Screen name='Planner' component={Planner}/>
        </Navigator>
    </NavigationContainer>
     )
}
