import { StyleSheet, Text, View,FlatList, TouchableOpacity,Modal,TextInput } from 'react-native'
import React, { useState } from 'react'

const NoteScreen = () => {
    const [notes, setNotes] = useState([
        {id: '1', text: 'Note One'},
        {id: '2', text: 'Note Two'},
        {id: '3', text: 'Note Three'},
    ])

    const [modalVisible, setModalVisible] = useState(false)
    const [newNote,setNewNote] = useState('')



    return (
        <View style={styles.container}>
        <FlatList
            data={notes}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <View style={styles.noteItem}> 
                    <Text style={styles.noteText}>{item.text}</Text>
                </View>
            )}
        />

        <TouchableOpacity style={styles.addButton} onPress={()=>
            setModalVisible(true)
        }>
            <Text style={styles.addButtonText}> +Add Note</Text>
        </TouchableOpacity>

        <Modal
        visible={modalVisible}
        animationType='slide'
        transparent
        onRequestClose={()=>setModalVisible(false)}
        >

        </Modal>
    </View>
    )
}

export default NoteScreen

const styles = StyleSheet.create({
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