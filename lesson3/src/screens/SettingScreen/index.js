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
      <Button
        title="go home"
        buttonStyle={{marginVertical: 20}}
        onPress={() => {
          // ! 三种返回首页的方式，注意区分
          // navigation.push('home');
          // navigation.navigate('home');
          navigation.popToTop();
        }}
      />

      <Button
        title="back 去修改用户中心的用户名"
        onPress={() => {
          navigation.navigate('user', {username: '小花'});
        }}
      />
    </View>
  );
}
