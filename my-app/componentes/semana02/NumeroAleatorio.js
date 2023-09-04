import React from 'react';
import { Text } from 'react-native';

const NumeroAleatorio = ({ min, max }) => {
  const numero = Math.floor(Math.random() * (max - min + 1)) + min;

  return <Text>O número aleatório é: {numero}</Text>;
};

export default NumeroAleatorio;