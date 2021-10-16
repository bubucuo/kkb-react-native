import React from 'react';
import {View, Text} from 'react-native';
import Section from '@/components/Section';
import {Link} from '@react-navigation/native';

export default function HomeScreen({navigation}) {
  return (
    <View>
      <Section>HomeScreen</Section>

      <Link to={{screen: 'movie'}}>go movie</Link>
    </View>
  );
}
