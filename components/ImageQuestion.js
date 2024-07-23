// components/ImageQuestion.js
import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

const ImageQuestion = ({ imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain'
  }
});

export default ImageQuestion;
