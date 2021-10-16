import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Section from '@/components/Section';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'react-native-elements';
import {login} from '../../action/user';

export default function LoginScreen() {
  const [text, setText] = useState('');
  const user = useSelector(({user}) => user);
  const dispatch = useDispatch();
  const {isLogin, userInfo} = user;

  return (
    <View>
      <Section>LoginScreen</Section>
      <TextInput
        value={text}
        onChangeText={txt => setText(txt)}
        style={{borderWidth: 1, margin: 10, padding: 10}}
      />
      <Text style={{color: 'red'}}>{user.err.msg}</Text>
      <Button
        title={user.loading ? 'loading...' : 'login'}
        buttonStyle={{marginVertical: 20}}
        onPress={() => {
          // login(dispatch, {name: text});
          dispatch(login({name: text}));

          // dispatch({type: 'LOGIN_SUCCESS', payload: {name: text}});
        }}
      />
    </View>
  );
}
