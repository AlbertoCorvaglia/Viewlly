import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, Button, Modal, Pressable } from 'react-native';
import { Calendar } from 'react-native-calendars';
import NavBar from './NavBar';


function TrackScreen() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleDayPress = (day) =>{
    setSelectedDay(day.dateString);
    setModalVisible(true);
  }

  const save = () => {
    setModalVisible(false);
  }

  return (
    <View style={styles.screen}>
        <View style={styles.container}>
          <Text style={styles.headerText}>Track: Your Trainings</Text>
          <View style={styles.calendarContainer}>
            <Calendar onDayPress={handleDayPress} style={styles.calendar} />
              
          </View>
          <Modal
            animationType='fade'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.NoteContainer}>
              <View style={styles.Note}>
                <Text>{selectedDay}</Text>
                <TextInput placeholder='Title..'></TextInput>

                <TextInput placeholder='Note..'></TextInput>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => save()}>
                  <Text style={styles.textStyle}>Save</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

      </View>
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  headerText: {
    position: 'absolute',
    top: 50,
    fontSize: 24,
    marginBottom: 20,
  },
  calendarContainer: {
    top: 100,
    width: '90%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
  },
  NoteContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  Note: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '30%',
    backgroundColor: '#B3E0F2',
    
  },
  switch: {
    
  },
  NoteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default TrackScreen;
