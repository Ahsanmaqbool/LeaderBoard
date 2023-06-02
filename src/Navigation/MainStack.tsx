import {View, Text} from 'react-native';
import React from 'react';
import HomeScreen from '../Screens/HomeScreen';
import SearchedScreen from '../Screens/SearchedScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="SearchScreen" component={SearchedScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
