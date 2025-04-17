import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal, TextInput } from 'react-native'

import React from 'react'

const AddNoteModal = ({
    modalVisible,
    setModalVisible,
    newNote,
    setNewNote,
    addNote
}) => {
  return (
    <Modal
        visible={modalVisible}
        animationType='slide'
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add a New Note</Text>
            <TextInput style={styles.input}
              placeholder='Enter Note ...'
              placeholderTextColor="#aaa"
              value={newNote}
              onChangeText={setNewNote}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.saveButton} onPress={() => addNote()} >
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>

          


          </View>
        </View>
        <View></View>


      </Modal>
  )
}

export default AddNoteModal


const styles = StyleSheet.create({

    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      width: '80%',
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      padding: 10,
      fontSize: 16,
      marginBottom: 15,
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
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
    noteItem: {
      backgroundColor: '#f9f9f9',
      padding: 15,
      borderRadius: 10,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#eee',
    },
    noteText: {
      fontSize: 16,
      color: '#333',
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