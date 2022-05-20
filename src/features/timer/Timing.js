import React from 'react'
import {View, StyleSheet} from 'react-native';
import { RoundedButton } from '../../components/RoundedButton'

export const Timing = ({ onChangeTime, minutes }) => {
  return (
    <>
    <View style={styles.timingButton}>
    <RoundedButton size={75} title='+' onPress={() => onChangeTime(minutes, '+')}/>
    </View>

     <View style={styles.timingButton}>
    <RoundedButton size={75} title='-' onPress={() => onChangeTime(minutes, '-')}/>
    </View>

     {/* <View style={styles.timingButton}>
    <RoundedButton size={75} title='20' onPress={() => onChangeTime(20)}/>
    </View> */}
    </>
  )
}

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center'
  }
  })
