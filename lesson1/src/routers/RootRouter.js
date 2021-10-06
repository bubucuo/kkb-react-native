import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import MainStackNavigator from './MainStackNavigator';
import AuthStackNavigator from './AuthStackNavigator';

function RootRouter() {
  const isLogin = useSelector(({user}) => user.isLogin);
  return (
    <NavigationContainer>
      {isLogin ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
}

export default RootRouter;
