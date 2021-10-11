import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Section from '@/components/Section';
import {Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {login} from '@/action/user';

export default function LoginScreen({route}) {
  const dispatch = useDispatch();
  return (
    <View>
      <Section title="LoginScreen" />
      <Button title="login" onPress={login} />
    </View>
  );
}
