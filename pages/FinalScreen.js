// pages/FinalScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FinalScreen = ({ correctAnswers, totalQuestions, onRestart }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Test Completed</Text>
      <Text style={styles.statsText}>Correct Answers: {correctAnswers}</Text>
      <Text style={styles.statsText}>Total Questions: {totalQuestions}</Text>
      <TouchableOpacity style={styles.restartButton} onPress={onRestart}>
        <Text style={styles.restartButtonText}>Restart</Text>
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
  statsText: {
    fontSize: 20,
    marginVertical: 10
  },
  restartButton: {
    backgroundColor: '#0288d1',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 30,
    elevation: 2,
    marginTop: 20
  },
  restartButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default FinalScreen;
