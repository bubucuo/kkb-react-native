import React from 'react';
import {View, Text} from 'react-native';
import Section from '@/components/Section';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

// export default function SettingScreen({navigation}) {
export default function SettingScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Section>SettingScreen</Section>
    </View>
  );
}
