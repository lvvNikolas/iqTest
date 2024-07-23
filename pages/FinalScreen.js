// pages/FinalScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FinalScreen = ({ correctAnswers, totalQuestions, onRestart, name, age, educationLevel }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Test Completed</Text>
      <Text style={styles.userInfo}>Name: {name}</Text>
      <Text style={styles.userInfo}>Age: {age}</Text>
      <Text style={styles.userInfo}>Education Level: {educationLevel}</Text>
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
    backgroundColor: '#f7f9fc',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 20,
  },
  userInfo: {
    fontSize: 20,
    color: '#555555',
    marginVertical: 5,
  },
  statsText: {
    fontSize: 20,
    color: '#333333',
    marginVertical: 10,
  },
  restartButton: {
    backgroundColor: '#ff6347',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    elevation: 2,
    marginTop: 20,
  },
  restartButtonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default FinalScreen;
