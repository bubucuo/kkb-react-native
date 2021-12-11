import React from 'react';
import {Pressable, View, Text, StyleSheet, Alert} from 'react-native';
import {
  createNavigatorFactory,
  useNavigationBuilder,
  TabRouter,
  TabActions,
} from '@react-navigation/native';
import {Screen} from '@react-navigation/elements';

function TabNavigator({children}) {
  const {state, NavigationContent, descriptors, navigation} =
    useNavigationBuilder(TabRouter, {children});
  return (
    <NavigationContent>
      {/* 1. Tab */}
      <View style={{flexDirection: 'row', paddingTop: 100}}>
        {state.routes.map(route => (
          <Pressable
            title={descriptors[route.key].options.title || route.name}
            key={route.key}
            style={{
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            onPress={() => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
              if (!event.defaultPrevented) {
                // Alert.alert(route.name);
                navigation.dispatch({
                  ...TabActions.jumpTo(route.name),
                  target: state.key,
                });
              }
            }}>
            <Text>{descriptors[route.key].options.title || route.name}</Text>
          </Pressable>
        ))}
      </View>

      {/* 2. Content */}
      <View style={{flex: 1}}>
        {state.routes.map((route, index) => {
          const descriptor = descriptors[route.key];
          const isSelected = state.index === index;
          return (
            <Screen
              key={route.key}
              route={descriptor.route}
              navigation={descriptor.navigation}
              focused={isSelected}
              headerShown={descriptor.options.headerShown}
              style={[
                StyleSheet.absoluteFill,
                {display: index === state.index ? 'flex' : 'none'},
              ]}>
              {descriptor.render()}
            </Screen>
          );
        })}
      </View>
    </NavigationContent>
  );
}

const createMyTabNavigator = createNavigatorFactory(TabNavigator);
export default createMyTabNavigator;
