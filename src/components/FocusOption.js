import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Focus } from '../features/focus/Focus.js'
import { FocusHistory } from '../features/focus/FocusHistory.js'
import { Timer } from '../features/timer/Timer.js'
import {colors} from '../Utils/colors'
import {spacing, fontSizes} from '../Utils/sizes'

const STATUSES = {
  COMPLETE: 1,
  CANCELLED: 2
}

export const Focustime = () => {

  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([])

  const addFocusHistorySubjectWithStatus = (subject, status) => {
    setFocusHistory([...focusHistory, {key: String(focusHistory.length + 1), subject, status}])
  }
  
  const onClear = () => {
    setFocusHistory([]);
  }

  const saveFocusHistory = async() => {
    try {
      await AsyncStorage.setItem("FocusHistory", JSON.stringify(focusHistory));
    } catch(err) {
      console.log(err)
    }
  }

  const loadFocusHistory = async() => {
    try {
      const history = await AsyncStorage.getItem("FocusHistory")

      if(history && JSON.parse(history).length) {
        setFocusHistory(JSON.parse(history));
      }

    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    loadFocusHistory()
  }, [])

  useEffect(() => {
    saveFocusHistory();
  }, [focusHistory])

  return (
    <View style={styles.container}>
    {focusSubject ? (
        <Timer focusSubject={focusSubject} onTimerEnd={() => {
          addFocusHistorySubjectWithStatus(focusSubject, STATUSES.COMPLETE)
          setFocusSubject(null);
        }} 
        
        clearSubject={() => {
          addFocusHistorySubjectWithStatus(focusSubject, STATUSES.CANCELLED)
          setFocusSubject(null)
        }}/>
      ) : (
        <View style={{flex:0.5}}>
        <Focus addSubject={setFocusSubject}/>
        <FocusHistory focusHistory={focusHistory} onClear={onClear}/>
        </View>

      )}
      <Text> {focusSubject} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: spacing.lg,
    backgroundColor: colors.darkBlue
  }
});
