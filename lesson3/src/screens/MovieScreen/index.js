import React from 'react';
import {View, Text} from 'react-native';
import Section from '@/components/Section';
import {Link} from '@react-navigation/native';

export default function MovieScreen() {
  return (
    <View>
      <Section>MovieScreen</Section>
      <Link to={{screen: 'cinema'}}>go cinema</Link>
    </View>
  );
}
