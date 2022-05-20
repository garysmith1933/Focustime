import React, { useState } from "react";
import { View, StyleSheet, Text, Vibration, Platform} from "react-native";
import {colors} from '../../Utils/colors'
import {spacing} from '../../Utils/sizes'
import { Countdown } from '../../components/Countdown'
import { RoundedButton } from '../../components/RoundedButton'
import { ProgressBar } from "react-native-paper"
import {Timing} from './Timing'
import {useKeepAwake} from 'expo-keep-awake'

const DEFAULT_TIME = 0.5;

export const Timer = ({focusSubject, onTimerEnd, clearSubject}) => {
  useKeepAwake()

  const [minutes, setMinutes] = useState(DEFAULT_TIME)
  const [isStarted, setIsStarted] = useState(false)
  const [progress, setProgress] = useState(1)

  const onProgress = (progress) => {
    setProgress(progress)
  }

  const vibrate = () => {
        Vibration.vibrate(5000)
  }

  const onEnd = () => {
    vibrate();
    setMinutes(DEFAULT_TIME)
    setProgress(1)
    setIsStarted(false)
    onTimerEnd()
  }

  const changeTime = (minutes, title) => {

    if(minutes <= 0.5 && title === '-') {
      alert('Error: Minutes cannot be 0')
      return;
    }
   
    
    title === '+' ? setMinutes(minutes + 0.5) : setMinutes(minutes - 0.5
      )
    setProgress(1)
    setIsStarted(false)
    
  }

  return (
    <View style={styles.container}> 

      <View style={styles.countdown}> 
        <Countdown minutes={minutes} isPaused={!isStarted} onProgress={onProgress} onEnd={onEnd} />
      </View>

      <View style={{ paddingTop: spacing.xxl}}> 
        <Text style={styles.title}> Focusing on </Text>
        <Text style={styles.task}> {focusSubject} </Text>
      </View>

      <View style={{paddingTop: spacing.sm}}>
        <ProgressBar 
        progress={progress}
        color='#5E84E2' 
        style={{height: 10}}
        />
      </View>

      <View style={styles.buttonWrapper}> 
        <Timing onChangeTime={changeTime} minutes={minutes} />
      </View>

      <View style={styles.buttonWrapper}>
        {isStarted ? 
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
             : 
                <RoundedButton title="start" onPress={() => setIsStarted(true)} />   
        }
      </View>

      <View style={styles.clearSubject}>
         <RoundedButton title="X" textStyle={{fontWeight: 'bold'}} size={50} onPress={() => clearSubject()} />   
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    color: colors.white,
    textAlign: 'center'
  },

  task: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold'
  },

  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent:'center'
  },

  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },

  clearSubject: {
    paddingBottom: 25,
    paddingLeft: 25
  }
})