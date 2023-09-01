import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function NavBar(){
    const navigation = useNavigation();
    return (
        <View style={styles.NavContainer}>
            <TouchableOpacity style={[styles.menuElement, styles.Home]} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.menuElementText}>Home</Text>
            </TouchableOpacity>
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
    );
}

const styles = StyleSheet.create({
    NavContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'blue',
    }
});

export default NavBar;