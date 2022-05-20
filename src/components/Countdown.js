import React, {useState, useEffect} from 'react'
import { Text, View, StyleSheet } from "react-native"
import {fontSizes, spacing} from '../Utils/sizes';
import { colors } from '../Utils/colors'

//sets the millseconds 
const minutesToMillis = (min) => min * 1000 * 60;

//formats the time 
const formatTime = (time) => time < 10 ? `0${time}` : time

export const Countdown = ({
  minutes = 20,
  isPaused,
  onProgress,
  onEnd
}) => {
  const interval = React.useRef(null)

  //literally the countdown functionally
  const countDown = () => {
    setMillis((time) => {
      if(time === 0) {
        onEnd();
        clearInterval(interval.current);
        return time;
      }
      const timeLeft = time - 1000
      
      return timeLeft;
    })
  }

  // hook for setting and getting milliseconds
  const [millis, setMillis] = useState(minutesToMillis(null))

//sets the progress on the progress bar every time millis is changed
  useEffect(() => {
    onProgress(millis / minutesToMillis(minutes))
  }, [millis])

  //sets the millis everytime minutes change
  useEffect(() => {
    setMillis(minutesToMillis(minutes))
  }, [minutes])

  //if the interval paused and its on a number, it will clear. otherwise, every second it will run countdown 
useEffect(() => {
  if(isPaused) {
    if(interval.current) clearInterval(interval.current);
    return 
  }
  interval.current = setInterval(countDown, 1000);

  return () => clearInterval(interval.current)
}, [isPaused])

//passing interval to that one function and then clearing it from there?

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;
  return (
    <Text style={styles.text}> {formatTime(minute)}:{formatTime(seconds)} </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxxl,
    fontWeight: 'bold',
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: 'rgba(94, 132, 226, 0.3)'
  }
})