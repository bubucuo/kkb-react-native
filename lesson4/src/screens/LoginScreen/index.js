import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Section from '@/components/Section';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'react-native-elements';
import {login} from '../../action/user';

export default function LoginScreen() {
  const user = useSelector(({user}) => user);
  const dispatch = useDispatch();
  const {isLogin, userInfo} = user;

  const [text, setText] = useState('');

  return (
    <View>
      <Section>LoginScreen</Section>
      <TextInput
        value={text}
        onChangeText={txt => setText(txt)}
        style={{borderWidth: 1, margin: 20, padding: 8}}
      />
      <Text style={{color: 'red'}}>{user.err.msg}</Text>
      <Button
        title={user.loading ? 'loading...' : 'login'}
        buttonStyle={{marginVertical: 20}}
        onPress={() =>
          // login(dispatch, payload: {name: 'Xm'})
          //dispatch({type: 'LOGIN_SUCCESS', payload: {name: '小米'}})
          // login(dispatch, {name: 'Xm'})
          dispatch(login({name: text}))
        }
      />
    </View>
  );
}
