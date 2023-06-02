import {View, Text} from 'react-native';
import React from 'react';
import MainStack from './src/Navigation/MainStack';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;
