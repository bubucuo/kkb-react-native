import React from 'react';
import {View, Text} from 'react-native';
import Section from '@/components/Section';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {useSelector} from 'react-redux';
import LoginScreen from '@/screens/LoginScreen';
import HomeRouterScreen from './HomeRouterScreen';
import MovieScreen from '@/screens/MovieScreen';
import CinemaScreen from '../screens/CinemaScreen';
import VIPScreen from '../screens/VIPScreen';
import createMyNavigator from '../components/createMyNavigator';

const {Navigator, Screen, Group} = createNativeStackNavigator();
// const {Navigator, Screen, Group} = createBottomTabNavigator();

// const {Navigator, Screen, Group} = createMyNavigator();

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
            name="home1"
            // component={HomeScreen}
            component={HomeRouterScreen}
            options={{headerShown: false, title: '首页'}}
          />
          <Screen
            name="movie"
            // component={HomeScreen}
            component={MovieScreen}
            options={{title: '电影'}}
          />
          <Screen
            name="cinema"
            // component={HomeScreen}
            component={CinemaScreen}
            options={{title: '影院'}}
          />
          <Screen
            name="vip"
            // component={HomeScreen}
            component={VIPScreen}
            options={{title: '会员中心'}}
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
