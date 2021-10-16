import React from 'react';
import {View, Text} from 'react-native';
import Section from '@/components/Section';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Link} from '@react-navigation/native';
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
