// components/TextInputAnswer.js
import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, View } from 'react-native';

const TextInputAnswer = ({ onSubmit }) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    onSubmit(answer);
    setAnswer('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={answer}
        onChangeText={setAnswer}
        placeholder="Type your answer here"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
  }
});

export default TextInputAnswer;
