import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@/screens/HomeScreen';
import UserScreen from '@/screens/UserScreen';
import {useSelector} from 'react-redux';
import LoginScreen from '../screens/LoginScreen';

const {Screen, Navigator, Group} = createBottomTabNavigator();

export default function HomeRoute() {
  const isLogin = useSelector(({user}) => user.isLogin);

  return (
    <Navigator>
      <Screen
        name="home"
        component={HomeScreen}
        options={{title: '首页', headerShown: false}}
      />
      {isLogin ? (
        <Screen
          name={'user'}
          component={UserScreen}
          options={{title: '我的', headerShown: false}}
        />
      ) : (
        <Screen
          name={'login'}
          component={LoginScreen}
          options={{title: '我的', headerShown: false}}
          initialParams="user"
        />
      )}
    </Navigator>
  );
}
