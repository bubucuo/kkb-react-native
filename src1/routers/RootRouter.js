import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@/screens/HomeScreen';
import UserScreen from '@/screens/UserScreen';
import MovieScreen from '@/screens/MovieScreen';
import CinemaScreen from '@/screens/CinemaScreen';
import LoginScreen from '@/screens/LoginScreen';
import HomeRoute from './HomeRoute';
import {useSelector} from 'react-redux';

const {Screen, Navigator, Group} = createNativeStackNavigator();
// const {Screen, Navigator} = createBottomTabNavigator();
// const Tab = createBottomTabNavigator();

export default function RootRouter() {
  const isLogin = useSelector(({user}) => user.isLogin);

  // return <HomeRoute />;
  return (
    <Navigator>
      {isLogin ? (
        <Group>
          <Screen
            name="index"
            component={HomeRoute}
            options={{headerShown: false}}
          />
          <Screen name="user" component={UserScreen} />
          <Screen
            name="movie"
            component={MovieScreen}
            options={{title: '电影演出'}}
            // initialParams={{name: '我是小明'}}
          />
          <Screen
            name="cinema"
            component={CinemaScreen}
            options={{title: '影院'}}
            // initialParams={{name: '我是小明'}}
          />
        </Group>
      ) : (
        <Group>
          <Screen name="/login" component={LoginScreen} />
        </Group>
      )}
    </Navigator>
  );
}
