import React from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView, TouchableOpacity } from 'react-native'

import {fontSizes, spacing} from "../../Utils/sizes"
import { RoundedButton } from "../../components/RoundedButton"

export const FocusHistory = ({focusHistory, onClear, addSubject}) => {
  const clearHistory = () => {
    onClear();
  }

  const HistoryItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => addSubject(item.subject) }>
       <Text style={styles.historyItem(item.status)}>
         {JSON.stringify(item.subject)}
       </Text>
     </TouchableOpacity>
    )
   }

  return (
    <>
    <SafeAreaView style={{flex: 0.4, alignItems: 'center',}}>
      {!!focusHistory.length && (
        <>
      <Text style={styles.title}> Things we've focused on </Text> 
        <FlatList 
        style={{width: '100%', height: '100%'}}
        contentContainerStyle={{flex: 0.7, alignItems: 'center'}}
        data={focusHistory}
        renderItem={HistoryItem}
      />

        <View style={styles.clearContainer}> 
          <RoundedButton size={75} title='Clear' onPress={() => onClear()}/>
        </View>
         </>

      )}
    </SafeAreaView>
   
    </>  
  )
}

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? 'red' : 'green',
    fontSize: fontSizes.medium
  }),
  title: {
     color: 'white',
    fontSize: fontSizes.lg,
    marginBottom: spacing.sm
  },
  // clearContainer: {
  //   alignItems: 'center',
  //   backgroundColor: 'red',
  //   justifyContent: 'flex-start'
  // }
})