// components/AnswerOption.js
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const AnswerOption = ({ option, onSelect }) => {
  return (
    <TouchableOpacity style={styles.optionButton} onPress={() => onSelect(option.id)}>
      <Text style={styles.optionText}>{option.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionButton: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5
  },
  optionText: {
    fontSize: 18
  }
});

export default AnswerOption;
