import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import Section from '@/components/Section';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '@/action/user';
import LoginScreen from '@/screens/LoginScreen';

export default function UserScreen({route, navigation}) {
  const isLogin = useSelector(({user}) => user.isLogin);
  const dispatch = useDispatch();
  // if (isLogin) {
  return (
    <SafeAreaView>
      <Section title="UserScreen" />
      {isLogin ? <Section title="vip用户已登录" /> : <Section title="登录" />}
      <Button title="logout" onPress={logout} />
    </SafeAreaView>
  );
  // }

  return <LoginScreen />;
}
