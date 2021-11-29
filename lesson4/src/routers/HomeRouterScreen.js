import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AMapSdk} from 'react-native-amap3d';
import HomeScreen from '@/screens/HomeScreen';
import SettingScreen from '@/screens/SettingScreen';
import UserScreen from '@/screens/UserScreen';
import WebScreen from '../screens/WebScreen';
import MapScreen from '../screens/MapScreen';

// const HomeStack = createNativeStackNavigator();

const {Navigator, Screen, Group} = createBottomTabNavigator();

export default function HomeRouterScreen() {
  React.useEffect(() => {
    AMapSdk &&
      AMapSdk.setApiKey(
        Platform.select({
          //android: "c52c7169e6df23490e3114330098aaac",
          ios: '7c22d159b7be641843b9a7108c084a0a',
        }),
      );
  }, []);

  return (
    <Navigator>
      <Screen name="home" component={HomeScreen} options={{title: '首页'}} />
      <Screen
        name="setting"
        component={SettingScreen}
        options={{title: '设置'}}
      />
      <Screen name="map" component={MapScreen} options={{title: '附近'}} />
      <Screen
        name="user"
        component={UserScreen}
        options={{title: '用户中心'}}
      />
      <Screen name="webview" component={WebScreen} options={{title: 'h5'}} />
    </Navigator>
  );
}
