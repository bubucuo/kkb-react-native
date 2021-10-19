import React, {useState} from 'react';
import {View, Text, Image, Alert} from 'react-native';
import Section from '@/components/Section';
import {MapView} from 'react-native-amap3d';

const logo = 'https://zh-hans.reactjs.org/logo-og.png';

export default function MapMarker() {
  const [location, setlocation] = useState({
    latitude: 39.91095,
    longitude: 116.37296,
  });

  const _onDragEvent = ({latitude, longitude}) =>
    Alert.alert(`${latitude}, ${longitude}`);
  return (
    <MapView
      style={{flex: 1}}
      locationInterval={5000}
      center={location}
      onLocation={e =>
        setlocation({latitude: e.latitude, longitude: e.longitude})
      }>
      <MapView.Marker
        active
        draggable
        title="这是个标记"
        coordinate={location}
        onDragEnd={_onDragEvent}
        icon={() => (
          <Image source={{uri: logo}} style={{width: 100, height: 100}} />
        )}></MapView.Marker>
    </MapView>
  );
}
