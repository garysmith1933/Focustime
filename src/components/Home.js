import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Button} from 'react-native';
import {colors} from '../Utils/colors'
import {spacing, fontSizes} from '../Utils/sizes';

export const Home = ({navigation}) => {
  const focus = require("../../assets/Focused.png")
  const affirm = require("../../assets/Heart.png")

  const current = new Date()
  const currentHour = current.getHours()

  const Greeting = () => {
    switch (currentHour) {
      case currentHour >= 6 && currentHour < 12 :
        return 'Morning!'
        break;

        case currentHour >= 12 && currentHour < 17 :
          return 'Afternoon!'
          break;

          default: return 'Evening!'
    }
  }


  return (
  
      <View style={styles.container}> 

        <View style={styles.titleContainer}>
          <Text style={styles.text}>Good {Greeting()}</Text>
          <Text style={{color: colors.white, fontSize: fontSizes.md, paddingTop: spacing.sm}}> What would you like to do today? </Text>
        </View>

            <View style={styles.optionContainer}> 
            <ScrollView horizontal={true} pagingEnabled={true} style={{marginLeft: spacing.sm, marginRight: spacing.sm}}>
                <View style={styles.focus}> 
                  <Image source={focus} style={{height: 100, width: 300, flex: 1, alignSelf:'center'}}/>
                  <Text style={styles.categories}>Focus Time</Text> 
                  <Text style={{marginBottom: 30, fontSize: 18}}>Its time to get your tasks done!</Text> 

                  <TouchableOpacity style={styles.focusButton} onPress={()=> navigation.navigate("Focus")}>
                  <Text style={{fontWeight: 'bold'}}>Focus</Text>
                  </TouchableOpacity>
               
                </View> 
             
            <View style={styles.affirmation}> 
              <Image source={affirm} style={{height: 100, width: 300, flex: 1, alignSelf:'center'}}/>
              <Text style={styles.categories}>Affirmation Time</Text> 
              <Text style={{marginBottom: 30, fontSize: 18}}>Always make time to love yourself!</Text> 

              <TouchableOpacity style={styles.affirmButton} onPress={()=> navigation.navigate("Affirmations")}>
                <Text style={{fontWeight: 'bold'}}>Affirm</Text>
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
    fontSize: fontSizes.xl,
    fontWeight: 'bold'
  },

  titleContainer: {
    padding: spacing.md,
  },

  optionContainer: {
    justifyContent: 'center',
  },

  categories: {
    fontSize: fontSizes.xl, 
    fontWeight: 'bold',
    color: 'black',
  },

  focus: {
    backgroundColor: colors.white, 
    borderRadius: 10, 
    padding: spacing.sm, 
    height: 400, 
    width: 330, 
    marginRight: 15, 
    marginLeft: 8, 
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  affirmation: {
    backgroundColor: colors.white, 
    borderRadius: 10, 
    marginBottom: spacing.xxl, 
    padding: spacing.sm, 
    height: 400, 
    width: 330, 
    marginRight: 15,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },

  focusButton: {
    backgroundColor: "#bcc8fd",
    width: '35%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 45,
    position: 'absolute',
    top: 380
  },

  affirmButton: {
    backgroundColor: colors.lightPink,
    width: '35%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: 45,
    position: 'absolute',
    top: 380
  }

  




});

