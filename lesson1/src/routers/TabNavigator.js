import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import UserScreen from '@/screens/UserScreen/index';
import IndexScreen from '@/screens/IndexScreen';

const {Navigator, Screen} = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Navigator>
      <Screen
        name="index"
        component={IndexScreen}
        options={{
          title: '首页',
          headerShown: false,
        }}
      />
      <Screen
        name="user"
        component={UserScreen}
        options={{title: '用户中心'}}
      />
    </Navigator>
  );
}
