import React from 'react';
import {View, Text} from 'react-native';
import Section from '@/components/Section';
import {Link} from '@react-navigation/native';
import {Button} from 'react-native-elements';

export default function HomeScreen({navigation}) {
  return (
    <View>
      <Section>HomeScreen</Section>
      {/* <Link to={{screen: 'user', params: {username: '小明'}}}>go user</Link> */}

      <Link to={{screen: 'movie'}}>go movie</Link>
    </View>
  );
}
