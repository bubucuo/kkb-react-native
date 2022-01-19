// <Screen name="map" component={MapScreen} options={{title: '附近'}} />

import React from 'react';
import {View, Text} from 'react-native';
import Section from '@/components/Section';
import {MapView, MapType} from 'react-native-amap3d';

export default function MapScreen() {
  return (
    <MapView
      mapType={MapType.Satellite}
      initialCameraPosition={{
        target: {
          latitude: 39.91095,
          longitude: 116.37296,
        },
        zoom: 8,
      }}
    />
  );
}
