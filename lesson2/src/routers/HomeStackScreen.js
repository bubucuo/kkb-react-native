import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@/screens/HomeScreen';
import MovieScreen from '@/screens/MovieScreen';

const HomeStack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="home1"
        component={HomeScreen}
        options={{title: '首页'}}
      />
      <HomeStack.Screen name="movie" component={MovieScreen} />
    </HomeStack.Navigator>
  );
}
