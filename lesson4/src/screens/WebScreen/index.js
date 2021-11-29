import React from 'react';
import {View, Text} from 'react-native';
import Section from '@/components/Section';
import WebView from 'react-native-webview';

export default function WebScreen({route}) {
  const {uri = 'https://main.m.taobao.com'} = route.params || {};

  return (
    <WebView
      style={{margin: 10}}
      source={{uri}}
      // source={{html: '<h1>Hello world</h1>'}}
    />
  );
  return (
    <View>
      <Section>WebScreen</Section>
    </View>
  );
}
