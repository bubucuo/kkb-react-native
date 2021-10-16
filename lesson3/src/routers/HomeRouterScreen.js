import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '@/screens/HomeScreen';
import UserScreen from '@/screens/UserScreen';
import SettingScreen from '@/screens/SettingScreen';
// import createMyNavigator from '../components/createMyNavigator';

const {Navigator, Screen, Group} = createBottomTabNavigator();

// const {Navigator, Screen, Group} = createMyNavigator();

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
        name="setting"
        component={SettingScreen}
        options={{title: '设置'}}
      />
    </Navigator>
  );
}
