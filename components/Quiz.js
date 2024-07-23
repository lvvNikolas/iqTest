// components/Quiz.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Question from './Question';
import AnswerOption from './AnswerOption';
import TextInputAnswer from './TextInputAnswer';
import ImageQuestion from './ImageQuestion';
import questions from '../data.json';

const Quiz = ({ onComplete, onBack }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    if (timeLeft === 0) {
      onComplete(correctAnswers, questions.length);
    }
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
    if (optionId === currentQuestion.correctOption) {
      setCorrectAnswers(correctAnswers + 1);
    }
    setTimeout(() => {
      if (currentQuestionIndex + 1 === questions.length) {
        onComplete(correctAnswers, questions.length);
      } else {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedOption(null);
      }
    }, 500);
  };

  const handleSubmitAnswer = (answer) => {
    if (answer.toLowerCase() === currentQuestion.correctTextAnswer.toLowerCase()) {
      setCorrectAnswers(correctAnswers + 1);
    }
    setTimeout(() => {
      if (currentQuestionIndex + 1 === questions.length) {
        onComplete(correctAnswers, questions.length);
      } else {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedOption(null);
      }
    }, 500);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onBack}>
        <Icon name="arrow-back" size={30} color="#34495e" />
      </TouchableOpacity>
      <Text style={styles.timerText}>Время осталось: {formatTime(timeLeft)}</Text>
      <Text style={styles.questionNumberText}>Вопрос {currentQuestionIndex + 1} / {questions.length}</Text>
      <Question question={currentQuestion.question} />
      {currentQuestion.image && <ImageQuestion imageUrl={currentQuestion.image} />}
      {currentQuestion.options ? (
        currentQuestion.options.map((option) => (
          <AnswerOption
            key={option.id}
            option={option}
            onSelect={handleOptionSelect}
          />
        ))
      ) : (
        <TextInputAnswer onSubmit={handleSubmitAnswer} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f4f7',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  timerText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#34495e',
    marginBottom: 20,
  },
  questionNumberText: {
    fontSize: 20,
    color: '#7f8c8d',
    marginBottom: 10,
  },
});

export default Quiz;
