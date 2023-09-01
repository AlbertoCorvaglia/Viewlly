import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import NavBar from './NavBar';
function TrackScreen() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Track: Your Trainings</Text>
      <View style={styles.calendarContainer}>
        <Calendar
          onDayPress={handleDayPress}
          markedDates={selectedDate ? { [selectedDate]: { selected: true } } : {}}
        />
      </View>
      {selectedDate && (
        <View style={styles.NotePromptContainer}>
            <Text style={styles.NoteTitle}>Add your trainings note...</Text>

        </View>
      )}
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    position: 'absolute',
    top: 50,
    fontSize: 24,
    marginBottom: 20,
  },
  calendarContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
  },
  selectedDateText: {
    marginTop: 20,
  },
  NotePromptContainer: {
    flex: 1,
    backgroundColor: 'red',
    position: 'absolute',
    top: 600,
    height: 200,
    width: 200,
  }

});

export default TrackScreen;
