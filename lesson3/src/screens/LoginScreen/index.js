import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Section from '@/components/Section';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'react-native-elements';
import {login} from '@/action/user';

export default function LoginScreen() {
  const [text, setText] = useState('');
  const user = useSelector(({user}) => user);
  const dispatch = useDispatch();
  const {isLogin, userInfo} = user;

  return (
    <View>
      <Section>LoginScreen</Section>
      <TextInput
        style={{borderWidth: 1, margin: 10, padding: 10}}
        value={text}
        onChangeText={txt => setText(txt)}
      />
      <Text>{JSON.stringify(user)}</Text>
      <Text style={{color: 'red'}}>{user.err.msg}</Text>
      <Button
        title={user.loading ? 'loading' : 'login'}
        buttonStyle={{marginVertical: 20}}
        onPress={() => {
          //login(dispatch, {name: text});
          //dispatch({type: 'LOGIN_SUCCESS', paxmyload: {name: '小米'}});
          dispatch(login({name: text}));
        }}
      />
    </View>
  );
}
