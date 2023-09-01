import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {NavBar} from './NavBar';
function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../assets/home_bg.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={[styles.homeText, styles.title]}>Viewlly</Text>
          <Text style={[styles.homeText, styles.claim]}>Unleash your volleyball potential.</Text>
        </View>

        <View style={styles.menuContainer}>
          <Image
            source={require('../assets/volley.png')}
            style={styles.volleyImage}
          />

    <TouchableOpacity style={[styles.menuElement, styles.track]} onPress={() => navigation.navigate('Track')}>
        <Text style={styles.menuElementText}>Track</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.menuElement, styles.review]} onPress={() => navigation.navigate('Review')}>
        <Text style={styles.menuElementText}>Review</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.menuElement, styles.progress]} onPress={() => navigation.navigate('Progress')}>
        <Text style={styles.menuElementText}>Progress</Text>
      </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or other options
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  homeText: {
    color: '#fff',
    textAlign: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  claim: {
    fontSize: 20,
    fontWeight: '200',
  },
  menuContainer: {
    position: 'absolute',
    bottom: 0, // Adjust this if needed
    left: 0, // Adjust this if needed
  },
  volleyImage: {
    bottom: -100,
    left: -100,
    width: 350, // Adjust this if needed
    height: 350, // Adjust this if needed
  },
  menuElement: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 2.5,
  },
  menuElementText: {
    fontSize: 30,
  },
  track: {
    top: 65,
    right: 110,
  },
  review: {
    top: 140,
    right: 35,
  },
  progress: {
    top: 215,
    right: -40,
  },
});

export default HomeScreen;
