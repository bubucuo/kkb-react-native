import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import Section from '@/components/Section';
import {MapView} from 'react-native-amap3d';

const logo = 'https://zh-hans.reactjs.org/logo-og.png';

export default function MapScreen() {
  const [location, setLocation] = useState({
    latitude: 39.91095,
    longitude: 116.37296,
  });

  return (
    <MapView
      style={{flex: 1}}
      center={location}
      locationInterval={5000}
      onLocation={e =>
        setLocation({latitude: e.latitude, longitude: e.longitude})
      }>
      <MapView.Marker
        title="React Icon"
        coordinate={location}
        icon={() => {
          return (
            <Image source={{uri: logo}} style={{width: 100, height: 100}} />
          );
        }}
      />
    </MapView>
  );
}
