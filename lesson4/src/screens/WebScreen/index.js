import React from 'react';
import {View, Text} from 'react-native';
import Section from '@/components/Section';
import WebView from 'react-native-webview';

export default function WebScreen({route}) {
  return (
    <WebView
      style={{margin: 20, padding: 20}}
      //source={{uri: route.params.uri || 'https://www.kaikeba.com/'}}
      originWhitelist={['*']}
      source={{html: '<h1>hello  world！</h1>'}}
    />
  );
}
