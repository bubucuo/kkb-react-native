// import React, {useState} from 'react';
// import {View, Text, Image, Alert} from 'react-native';
// import Section from '@/components/Section';
// import {MapView} from 'react-native-amap3d';

// const logo = 'https://zh-hans.reactjs.org/logo-og.png';

// export default function MapMarker() {
//   const [location, setlocation] = useState({
//     latitude: 39.91095,
//     longitude: 116.37296,
//   });

//   const _onDragEvent = ({latitude, longitude}) => {
//     console.log('oooooo', latitude, longitude); //sy-log
//     Alert.alert(`${latitude}, ${longitude}`);
//   };
//   return (
//     <MapView
//       style={{flex: 1}}
//       locationInterval={5000}
//       center={location}
//       onLocation={e =>
//         setlocation({latitude: e.latitude, longitude: e.longitude})
//       }>
//       <MapView.Marker
//         active
//         draggable
//         title="这是个标记"
//         coordinate={location}
//         onDragEnd={_onDragEvent}
//         icon={() => (
//           <Image source={{uri: logo}} style={{width: 100, height: 100}} />
//         )}></MapView.Marker>
//     </MapView>
//   );
// }

import React, {Component} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {MapView} from 'react-native-amap3d';

const styles = StyleSheet.create({
  customIcon: {
    width: 40,
    height: 40,
  },
  customInfoWindow: {
    backgroundColor: '#8bc34a',
    padding: 10,
    borderRadius: 10,
    elevation: 4,
    borderWidth: 2,
    borderColor: '#689F38',
    marginBottom: 5,
  },
  customMarker: {
    backgroundColor: '#009688',
    alignItems: 'center',
    borderRadius: 5,
    padding: 5,
  },
  markerText: {
    color: '#fff',
  },
});

export default class MarkerExample extends Component {
  static navigationOptions = {
    title: '添加标记',
  };

  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      location: {
        latitude: 39.806901,
        longitude: 116.397972,
      },
    };
  }

  componentDidMount() {
    this.mounted = true;
    setInterval(() => {
      if (this.mounted) {
        this.setState({time: new Date()});
      }
    }, 1000);
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  _coordinates = [
    {
      latitude: 39.806901,
      longitude: 116.397972,
    },
    {
      latitude: 39.806901,
      longitude: 116.297972,
    },
    {
      latitude: 39.906901,
      longitude: 116.397972,
    },
    {
      latitude: 39.706901,
      longitude: 116.397972,
    },
  ];

  _onMarkerPress = () => Alert.alert('onPress');
  _onInfoWindowPress = () => Alert.alert('onInfoWindowPress');
  _onDragEvent =
    () =>
    ({latitude, longitude}) => {
      console.log('yyyy'); //sy-log
      Alert.alert(`${latitude}, ${longitude}`);
    };

  render() {
    console.log('render'); //sy-log
    const {location} = this.state;
    return (
      <MapView style={StyleSheet.absoluteFill}>
        <MapView.Marker
          active
          draggable
          title="一个可拖拽的标记"
          description={this.state.time.toLocaleTimeString()}
          onDragEnd={this._onDragEvent}
          onInfoWindowPress={this._onInfoWindowPress}
          // coordinate={this._coordinates[0]}
          coordinate={location}
        />
        {/* <MapView.Marker color="green" coordinate={this._coordinates[1]}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={this._onInfoWindowPress}>
            <View style={styles.customInfoWindow}>
              <Text>自定义信息窗口</Text>
              <Text>{this.state.time.toLocaleTimeString()}</Text>
            </View>
          </TouchableOpacity>
        </MapView.Marker>
        <MapView.Marker
          image="flag"
          title="自定义图片"
          onPress={this._onMarkerPress}
          coordinate={this._coordinates[2]}
        />
        <MapView.Marker
          title="自定义 View"
          icon={() => (
            <View style={styles.customMarker}>
              <Text style={styles.markerText}>
                {this.state.time.toLocaleTimeString()}
              </Text>
            </View>
          )}
          coordinate={this._coordinates[3]}
        /> */}
      </MapView>
    );
  }
}
