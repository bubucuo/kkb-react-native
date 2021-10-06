import React from 'react';
import {WebView} from 'react-native-webview';

export default function WebScreen({route}) {
  // return <WebView source={{uri: 'https://reactnative.dev/'}} />;
  const {uri = 'https://main.m.taobao.com'} = route.params;

  return (
    <WebView
      source={{
        uri,
      }}
    />
  );
}
