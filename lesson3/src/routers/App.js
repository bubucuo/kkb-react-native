import React from 'react';
import {View, Text} from 'react-native';
import Section from '@/components/Section';
import RootRouter from '@/routers/RootRouter';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from '@/store/index';

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
