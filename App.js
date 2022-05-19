import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, ScrollView, Dimensions} from 'react-native';
import {colors} from './src/Utils/colors'
import {spacing, fontSizes} from './src/Utils/sizes'
import Home from "./src/components/Home";

export default function App() {
  const image = require('./assets/focus.jpg')
  let screenWidth = Dimensions.get('window').width
  return (
      <View style={styles.container}> 

        <View style={styles.titleContainer}>
          <Text style={styles.text}>Good morning!</Text>
          <Text style={{color: 'white', fontSize: fontSizes.md, paddingTop: spacing.sm}}> What would you like to do today? </Text>
        </View>

            <View style={styles.optionContainer}> 
            <ScrollView horizontal={true} pagingEnabled={true} style={{marginLeft: spacing.sm, marginRight: spacing.sm}}>
            <View style={styles.focus}> 
              <TouchableOpacity onPress={()=> console.log('history.push component to FocusTime')}>
                <Text style={styles.categories}> Focus Time </Text> 
              </TouchableOpacity>
            </View> 

            <View style={styles.affirmation}> 
              <TouchableOpacity onPress={()=> console.log('history.push component to Affirmations')}>
                <Text style={styles.categories}>Affirmation Time</Text> 
              </TouchableOpacity>
            </View> 
        
            <View style={styles.planning}> 
                <TouchableOpacity onPress={()=> console.log('history.push component to Scheduler')}>
                  <Text style={styles.categories} > Planning Time </Text> 
                </TouchableOpacity>
            </View> 
            </ScrollView>
          </View>
      </View>
  )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: spacing.lg,
    backgroundColor: colors.darkBlue
  },

  text: {
    color: 'white',
    fontSize: fontSizes.xl
  },

  titleContainer: {
    padding: spacing.md,
  },

  optionContainer: {
    justifyContent: 'center',
  },

  categories: {
    fontSize: fontSizes.xxl, 
    fontWeight: 'bold'
  },

  focus: {
    backgroundColor: 'blue', 
    borderRadius: 10, 
    padding: spacing.sm, 
    height: 400, 
    width: 330, 
    marginRight: 15, 
    marginLeft: 8, 
    justifyContent: 'flex-end'
  },

  affirmation: {
    backgroundColor: 'red', 
    borderRadius: 10, 
    marginBottom: spacing.xxl, 
    padding: spacing.sm, 
    height: 400, 
    width: 330, 
    marginRight: 15,
    justifyContent: 'flex-end'
  },

  planning: {
    backgroundColor: 'green', 
    borderRadius: 10,
     padding: spacing.sm, 
     height: 400, 
     width: 330, 
     marginRight: 8,
     justifyContent: 'flex-end'
  }
});

