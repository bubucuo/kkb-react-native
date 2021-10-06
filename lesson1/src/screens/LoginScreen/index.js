import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {LOGIN_SUCCESS} from '@/store/const';

const LoginScreen = () => {
  const isLogin = undefined;
  const dispatch = useDispatch();
  const [name, setname] = useState('');
  const [pass, setpass] = useState('');
  return (
    <View>
      <TextInput
        placeholder="user"
        value={name}
        placeholder="用户名"
        onChangeText={text => setname(text)}
      />
      <TextInput
        textContentType="password"
        placeholder="password"
        value={pass}
        placeholder="密码"
        onChangeText={text => setpass(text)}
      />
      <Button
        title="登录"
        accessibilityLabel="购票"
        color={Platform.OS === 'ios' ? 'white' : '#f03d37'}
        onPress={() => {
          dispatch({type: LOGIN_SUCCESS, payload: {id: 1, name, score: 100}});
        }}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
