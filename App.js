// App.js
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import StartScreen from './pages/StartScreen';
import Quiz from './components/Quiz';
import FinalScreen from './pages/FinalScreen';

const App = () => {
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const handleStart = () => {
    setStarted(true);
    setCompleted(false);
    setCorrectAnswers(0);
    setTotalQuestions(0);
  };

  const handleComplete = (correct, total) => {
    setCorrectAnswers(correct);
    setTotalQuestions(total);
    setStarted(false);
    setCompleted(true);
  };

  return (
    <View style={styles.container}>
      {!started && !completed && <StartScreen onStart={handleStart} />}
      {started && !completed && <Quiz onComplete={handleComplete} />}
      {completed && <FinalScreen correctAnswers={correctAnswers} totalQuestions={totalQuestions} onRestart={handleStart} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
