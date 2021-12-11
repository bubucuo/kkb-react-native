import React from 'react';
import {View, Text} from 'react-native';
import Section from '@/components/Section';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'react-native-elements';

export default function LoginScreen() {
  const user = useSelector(({user}) => user);
  const dispatch = useDispatch();
  const {isLogin, userInfo} = user;

  return (
    <View>
      <Section>LoginScreen</Section>
      <Button
        title="login"
        buttonStyle={{marginVertical: 20}}
        onPress={() =>
          dispatch({type: 'LOGIN_SUCCESS', payload: {name: '小米'}})
        }
      />
    </View>
  );
}
