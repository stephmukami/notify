import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NoteItem = ({note}) => {
  return (
    <View style={styles.noteItem}>
      <Text style={styles.noteText}>{note.text}</Text>
    </View>
  )
}

export default NoteItem

const styles = StyleSheet.create({
    noteItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#f5f5f5',
      padding: 15,
      borderRadius: 5,
      marginVertical: 5,
    },
    noteText: {
      fontSize: 18,
    },
    delete: {
      fontSize: 18,
      color: 'red',
    },
    actions: {
      flexDirection: 'row',
    },
    edit: {
      fontSize: 18,
      marginRight: 10,
      color: 'blue',
    },
  });