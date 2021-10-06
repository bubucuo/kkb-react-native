import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '@/screens/LoginScreen';
import TabNavigator from './TabNavigator';

const {Navigator, Screen} = createNativeStackNavigator();

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
export default function AuthStackNavigator(props) {
  return (
    <Navigator>
      <Screen name="login" component={LoginScreen} options={{title: '登录'}} />
    </Navigator>
  );
}
