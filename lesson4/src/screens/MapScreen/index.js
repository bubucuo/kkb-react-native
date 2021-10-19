import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Section from '@/components/Section';
import {MapView} from 'react-native-amap3d';
import MapMarker from './MapMarker';

export default function MapScreen() {
  const [location, setlocation] = useState({
    latitude: 39.91095,
    longitude: 116.37296,
  });

  return <MapMarker />;
  return (
    <MapView
      style={{flex: 1}}
      locationInterval={5000}
      center={location}
      onLocation={e =>
        setlocation({latitude: e.latitude, longitude: e.longitude})
      }
    />
  );
}
