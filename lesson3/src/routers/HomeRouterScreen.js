import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@/screens/HomeScreen';
import SettingScreen from '@/screens/SettingScreen';
import UserScreen from '@/screens/UserScreen';
import WebScreen from '../screens/WebScreen';

// const HomeStack = createNativeStackNavigator();

const {Navigator, Screen, Group} = createBottomTabNavigator();

export default function HomeRouterScreen() {
  return (
    <Navigator>
      <Screen name="home" component={HomeScreen} options={{title: '首页'}} />
      <Screen
        name="setting"
        component={SettingScreen}
        options={{title: '设置'}}
      />

      <Screen
        name="user"
        component={UserScreen}
        options={{title: '用户中心'}}
      />
      <Screen name="webview" component={WebScreen} options={{title: 'h5'}} />
    </Navigator>
  );
}
