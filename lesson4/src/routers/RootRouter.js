import React from 'react';
import {View, Text} from 'react-native';
import Section from '@/components/Section';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import UserScreen from '@/screens/UserScreen';
import SettingScreen from '@/screens/SettingScreen';
import {useSelector} from 'react-redux';
import LoginScreen from '@/screens/LoginScreen';
import HomeRouterScreen from './HomeRouterScreen';
import createMyTabNavigator from '../components/createMyTabNavigator';
import MovieScreen from '@/screens/MovieScreen';
import CinemaScreen from '@/screens/CinemaScreen';
import VIPScreen from '@/screens/VIPScreen';

const {Navigator, Screen, Group} = createNativeStackNavigator();
// const {Navigator, Screen, Group} = createBottomTabNavigator();

// const {Navigator, Screen, Group} = createMyTabNavigator();

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
            name="home0"
            component={HomeRouterScreen}
            options={{headerShown: false}}
          />
          <Screen
            name="movie"
            component={MovieScreen}
            options={{title: '电影'}}
          />
          <Screen
            name="cinema"
            component={CinemaScreen}
            options={{title: '影院'}}
          />
          <Screen
            name="vip"
            component={VIPScreen}
            options={{title: '大会员'}}
          />
        </Group>
      ) : (
        <Group>
          <Screen
            name="login"
            component={LoginScreen}
            options={{title: '登录'}}
          />
        </Group>
      )}
    </Navigator>
  );
}
