import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import Section from '@/components/Section';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function HomeScreen({navigation, route}) {
  // const [text, setText] = useState('我是小明');

  // useEffect(() => {
  //   if (route?.params?.name) {
  //     setText(route.params.name);
  //   }
  // }, [route?.params?.name]);

  return (
    <SafeAreaView>
      <Section title="HomeScreen" />
      {/* <Button
        title="go user"
        onPress={() => navigation.navigate('user', {name: '我不是小明'})}
        buttonStyle={{marginVertical: 10}}
      /> */}

      {/* <Text>我是谁：{text}</Text> */}

      <Button
        title="go movie"
        onPress={() => navigation.navigate('movie')}
        buttonStyle={{marginVertical: 10}}
      />
    </SafeAreaView>
  );
}
