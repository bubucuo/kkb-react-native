import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Section from '@/components/Section';
import {Button} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {login} from '../../action/user';

export default function LoginScreen() {
  const [text, setText] = useState('');
  const disapcth = useDispatch();
  const user = useSelector(({user}) => user);

  return (
    <View>
      <Section>LoginScreen</Section>
      <TextInput
        style={{borderWidth: 1, padding: 10, margin: 10}}
        value={text}
        onChangeText={txt => setText(txt)}
      />
      <Text>{user.err.msg}</Text>
      <Button
        title={user.loading ? 'loading' : 'login'}
        onPress={() => {
          disapcth(login({name: text}));
        }}
      />
    </View>
  );
}
