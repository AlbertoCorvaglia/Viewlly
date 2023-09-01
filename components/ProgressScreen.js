import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavBar from './NavBar';

function ProgressScreen() {
  return (
    <View style={styles.screen}>
        <View style={styles.container}>
        <Text style={styles.headerText}>Progress: in your journey</Text>
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
});

export default ProgressScreen;
