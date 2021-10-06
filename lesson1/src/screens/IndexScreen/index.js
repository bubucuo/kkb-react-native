import React from 'react';
import {View, Text} from 'react-native';
import Header from './Header';
import Menus from './Menus';

export default function IndexScreen() {
  return (
    <View>
      <Header />
      <Menus />
    </View>
  );
}
