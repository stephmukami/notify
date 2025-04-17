import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import NoteList from '../components/NoteList'
import AddNoteModal from '../components/AddNoteModal'

const NoteScreen = () => {
  const [notes, setNotes] = useState([
    { id: '1', text: 'Note One' },
    { id: '2', text: 'Note Two' },
    { id: '3', text: 'Note Three' },
  ])

  const [modalVisible, setModalVisible] = useState(false)
  const [newNote, setNewNote] = useState('')

  const addNote = () => {
    if (newNote.trim() === '') return;

    setNotes((prevNotes) => [
      ...prevNotes,
      { id: Date.now.toString(), text: newNote },
    ]);
    setNewNote('');
    setModalVisible(false)
  }



  return (
    <View style={styles.container}>

      <NoteList notes={notes}
      />
   
    
      <TouchableOpacity style={styles.addButton} onPress={() =>
        setModalVisible(true)
      }>
        <Text style={styles.addButtonText}> +Add Note</Text>
      </TouchableOpacity>

        <AddNoteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newNote={setNewNote}
        addNote={addNote}
        setNewNote={setNewNote}
        />
      
    </View>
  )
}

export default NoteScreen

const styles = StyleSheet.create({

  
  
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  
  cancelButton: {
    backgroundColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    color: '#333',
  },
  saveButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    color: '#fff',
  },

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  addButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  noNotesText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 15,
  },
})