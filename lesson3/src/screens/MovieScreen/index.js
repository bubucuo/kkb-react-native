import React from 'react';
import {View, Text} from 'react-native';
import {Link} from '@react-navigation/native';
import Section from '@/components/Section';
import Popular from './Popular';

export default function MovieScreen() {
  return (
    <View>
      <Section>MovieScreen</Section>
      <Link to={{screen: 'cinema'}}>购票</Link>
      <Popular />
    </View>
  );
}
