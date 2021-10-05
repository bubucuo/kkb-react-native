import React from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';

export default function WebScreen() {
  // return <WebView source={{uri: 'https://reactnative.dev/'}} />;
  return (
    <WebView
      source={{
        uri: 'https://main.m.taobao.com',
      }}
    />
  );
}
