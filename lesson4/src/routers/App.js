import React from 'react';
import {View, Text} from 'react-native';
import Section from '@/components/Section';
import RootRouter from '@/routers/RootRouter';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from '@/store/index';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {AMapSdk} from 'react-native-amap3d';

AMapSdk.setApiKey(
  Platform.select({
    android: 'c52c7169e6df23490e3114330098aaac',
    ios: '2e301afe760e3c98d9f0bd894d5ea4c5',
  }),
);

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer>
          <RootRouter />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}
