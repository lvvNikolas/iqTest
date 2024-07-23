// components/Question.js
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Question = ({ question }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{question}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  questionText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default Question;
