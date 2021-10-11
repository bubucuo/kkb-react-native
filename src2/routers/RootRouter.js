import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@/screens/HomeScreen';
import UserScreen from '@/screens/UserScreen';

const {Screen, Navigator} = createNativeStackNavigator();

export default function RootRouter() {
  return (
    //   ! SafeAreaView不能写这里
    // <SafeAreaView>
    <Navigator>
      <Screen name="home" component={HomeScreen} />
      <Screen
        name="user"
        component={UserScreen}
        options={{title: '用户中心'}}
        initialParams={{name: '我是小明'}}
      />
    </Navigator>
    // </SafeAreaView>
  );
}
