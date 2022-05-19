import React from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import {colors} from '../Utils/colors'
import {spacing, fontSizes} from '../Utils/sizes';

export const Home = ({navigation}) => {
  const image = require('../../assets/focus.jpg')
  return (
  
      <View style={styles.container}> 

        <View style={styles.titleContainer}>
          <Text style={styles.text}>Good morning!</Text>
          <Text style={{color: colors.white, fontSize: fontSizes.md, paddingTop: spacing.sm}}> What would you like to do today? </Text>
        </View>

            <View style={styles.optionContainer}> 
            <ScrollView horizontal={true} pagingEnabled={true} style={{marginLeft: spacing.sm, marginRight: spacing.sm}}>
                <View style={styles.focus}> 
                  <TouchableOpacity onPress={()=> navigation.navigate('Focus')}>
                    <Text style={styles.categories}> Focus Time </Text> 
                  </TouchableOpacity>   
                </View> 
             
            <View style={styles.affirmation}> 
              <TouchableOpacity onPress={()=> navigation.navigate("Affirmations")}>
                <Text style={styles.categories}>Affirmation Time</Text> 
              </TouchableOpacity>
            </View> 
        
            <View style={styles.planning}> 
                <TouchableOpacity onPress={()=> navigation.navigate("Planner")}>
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
    backgroundColor: '#424874'
  },

  text: {
    color: colors.white,
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
    fontWeight: 'bold',
    color: 'black'
  },

  focus: {
    backgroundColor: "#A6B1E1", 
    borderRadius: 10, 
    padding: spacing.sm, 
    height: 400, 
    width: 330, 
    marginRight: 15, 
    marginLeft: 8, 
    justifyContent: 'flex-end'
  },

  affirmation: {
    backgroundColor: '#DCD6F7', 
    borderRadius: 10, 
    marginBottom: spacing.xxl, 
    padding: spacing.sm, 
    height: 400, 
    width: 330, 
    marginRight: 15,
    justifyContent: 'flex-end'
  },

  planning: {
    backgroundColor: "#F4EEFF", 
    borderRadius: 10,
     padding: spacing.sm, 
     height: 400, 
     width: 330, 
     marginRight: 8,
     justifyContent: 'flex-end'
  }
});

