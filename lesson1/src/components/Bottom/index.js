import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomeScreen from '@/screens/HomeScreen/index';
import UserScreen from '@/screens/UserScreen/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Bottom = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="user" component={UserScreen} />
    </Tab.Navigator>
  );
};

// const Bottom = () => {
//   return (
//     <Navigator
//       screenOptions={({route}) => ({
//         tabBarIcon: ({color, size}) => {
//           const routeName = route.name;
//           let iconName = '';
//           if (routeName === 'HomeScreen') {
//             iconName = 'home';
//           } else if (routeName === 'MapScreen') {
//             iconName = 'map-marker';
//           } else if (routeName === 'ProfileScreen') {
//             iconName = 'user';
//           } else if (routeName === 'DiscoverScreen') {
//             iconName = 'compass';
//           }
//           return <Icon name={iconName} size={size} color={color} />;
//         },
//       })}>
//       <Screen
//         name="HomeScreen"
//         component={HomeScreen}
//         options={{tabBarLabel: '首页'}}
//       />
//       <Screen
//         name="MapScreen"
//         component={MapScreen}
//         options={{tabBarLabel: '附近'}}
//       />
//       <Screen
//         name="DiscoverScreen"
//         component={DiscoverScreen}
//         options={{tabBarLabel: '发现'}}
//       />
//       <Screen
//         name="ProfileScreen"
//         component={ProfileScreen}
//         options={{tabBarLabel: '我的'}}
//       />
//     </Navigator>
//   );
// };

export default Bottom;

const styles = StyleSheet.create({});
