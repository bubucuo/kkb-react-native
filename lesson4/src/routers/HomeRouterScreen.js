import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@/screens/HomeScreen';
import MovieScreen from '@/screens/MovieScreen';
import UserScreen from '@/screens/UserScreen';
import SettingScreen from '@/screens/SettingScreen';
import WebScreen from '../screens/WebScreen';
import MapScreen from '../screens/MapScreen';

// const HomeStack = createNativeStackNavigator();

const {Navigator, Screen, Group} = createBottomTabNavigator();

export default function HomeRouterScreen() {
  return (
    <Navigator>
      <Screen name="home" component={HomeScreen} options={{title: '首页'}} />
      <Screen
        name="user"
        component={UserScreen}
        options={{title: '用户中心'}}
      />

      <Screen
        name="mapScreen"
        component={MapScreen}
        options={{title: '附近'}}
      />

      <Screen
        name="setting"
        component={SettingScreen}
        options={{title: '设置'}}
      />

      <Screen
        name="webview"
        component={WebScreen}
        options={{title: '学习'}}
        initialParams={{uri: 'https://m.vip.com/index.html'}}
      />
    </Navigator>
  );
}
