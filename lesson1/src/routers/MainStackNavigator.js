import React from 'react';
import {Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserScreen from '@/screens/UserScreen/index';
import CinemaListScreen from '@/screens/CinemaListScreen';
import WebScreen from '@/screens/WebScreen';
import TabNavigator from './TabNavigator';
import IndexScreen from '@/screens/IndexScreen';
import MovieScreen from '../screens/MovieScreen';
import AboutMovieListScreen from '@/screens/AboutMovieListScreen';
import CinemaScreen from '@/screens/CinemaScreen';

const {Navigator, Screen, Group} = createNativeStackNavigator();

export const stackMainStyle = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const stackSecStyle = {
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerTintColor: '#000',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default function MainStackNavigator(props) {
  return (
    <Navigator
      screenOptions={{
        headerBackTitle: '返回',
      }}>
      <Screen
        name="tabNavigator"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="maoyan"
        component={MovieScreen}
        options={{
          title: '电影演出',
          ...stackMainStyle,
        }}
      />
      <Group screenOptions={{...stackSecStyle}}>
        <Screen
          name="user"
          component={UserScreen}
          options={{title: '用户中心'}}
        />
        <Screen
          name="cinemaList"
          component={CinemaListScreen}
          options={{title: '上映影院和购票'}}
        />
        <Screen
          name="cinema"
          component={CinemaScreen}
          options={{title: '影院'}}
        />
        <Screen
          name="aboutMovieList"
          component={AboutMovieListScreen}
          options={{title: '热映'}}
        />

        <Screen
          name="webview"
          component={WebScreen}
          options={{
            headerTitle: () => (
              <Text
                style={{
                  backgroundColor: '#fff',
                  color: '#000',
                  fontWeight: 'bold',
                }}>
                学习RN中...
              </Text>
            ),
          }}
        />
      </Group>
    </Navigator>
  );
}
