import React from 'react';
import {Provider} from 'react-redux';
import store from '../store';
import RootRouter from '@/routers/RootRouter';

export default function App(props) {
  return (
    <Provider store={store}>
      <RootRouter />
    </Provider>
  );
}
