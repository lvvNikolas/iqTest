// pages/StartScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const StartScreen = ({ onStart }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the IQ Test App</Text>
      <TouchableOpacity style={styles.startButton} onPress={onStart}>
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
    padding: 20
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0277bd',
    textAlign: 'center',
    marginBottom: 20
  },
  startButton: {
    backgroundColor: '#0288d1',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    elevation: 2
  },
  startButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default StartScreen;
