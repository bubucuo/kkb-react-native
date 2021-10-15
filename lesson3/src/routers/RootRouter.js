import React from 'react';
import {View, Text} from 'react-native';
import Section from '@/components/Section';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import LoginScreen from '@/screens/LoginScreen';
import HomeRouterScreen from './HomeRouterScreen';
import MovieScreen from '@/screens/MovieScreen';

const {Navigator, Screen, Group} = createNativeStackNavigator();
// const {Navigator, Screen, Group} = createBottomTabNavigator();

export default function RootRouter() {
  const user = useSelector(({user}) => user);
  const {isLogin} = user;

  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerStyle: {backgroundColor: 'orange'},
        headerBackTitle: '返回',
        // title: '开课吧',
      }}>
      {isLogin ? (
        <Group>
          <Screen
            name="home"
            // component={HomeScreen}
            component={HomeRouterScreen}
            options={{headerShown: false}}
          />
          <Screen
            name="movie"
            component={MovieScreen}
            // options={{headerShown: false}}
          />
        </Group>
      ) : (
        <Group>
          <Screen name="login" component={LoginScreen} />
        </Group>
      )}
    </Navigator>
  );
}
