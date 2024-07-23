// pages/StartScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const StartScreen = ({ onStart }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [educationLevel, setEducationLevel] = useState('');

  const handleStart = () => {
    if (name && age && educationLevel) {
      onStart(name, age, educationLevel);
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Welcome to the IQ Test App</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
            placeholderTextColor="#666"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your age"
            value={age}
            onChangeText={setAge}
            keyboardType="numeric"
            placeholderTextColor="#666"
          />
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={educationLevel}
              onValueChange={(itemValue) => setEducationLevel(itemValue)}
              style={styles.picker}
              itemStyle={styles.pickerItem}
            >
              <Picker.Item label="Select your education level" value="" />
              <Picker.Item label="High School" value="High School" />
              <Picker.Item label="Associate's Degree" value="Associate's Degree" />
              <Picker.Item label="Bachelor's Degree" value="Bachelor's Degree" />
              <Picker.Item label="Master's Degree" value="Master's Degree" />
              <Picker.Item label="Doctorate" value="Doctorate" />
            </Picker>
          </View>
          <TouchableOpacity style={styles.startButton} onPress={handleStart}>
            <Text style={styles.startButtonText}>Start</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  innerContainer: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 15,
    width: '100%',
    backgroundColor: '#f2f2f2',
    fontSize: 16,
  },
  pickerContainer: {
    height: 50,
    width: '100%',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f2f2f2',
    borderColor: '#cccccc',
    borderWidth: 1,
  },
  picker: {
    height: '100%',
    width: '100%',
  },
  pickerItem: {
    height: 50,
  },
  startButton: {
    backgroundColor: '#ff6347',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    elevation: 2,
    marginTop: 10,
  },
  startButtonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default StartScreen;
