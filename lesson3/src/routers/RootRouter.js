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
import HomeStackScreen from './HomeStackScreen';

// const {Navigator, Screen, Group} = createNativeStackNavigator();
const {Navigator, Screen, Group} = createBottomTabNavigator();

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
            component={HomeStackScreen}
            options={{headerShown: false}}
          />
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
        </Group>
      ) : (
        <Group>
          <Screen
            name="home"
            component={HomeScreen}
            options={{title: '首页'}}
          />
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
