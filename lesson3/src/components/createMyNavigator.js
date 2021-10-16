import * as React from 'react';
import {StyleSheet, Text, Pressable, View} from 'react-native';
import {
  useNavigationBuilder,
  TabRouter,
  TabActions,
  createNavigatorFactory,
} from '@react-navigation/native';

import {Header, Screen} from '@react-navigation/elements';
import {Button} from 'react-native-elements';

function TabNavigator({
  initialRouteName,
  children,
  screenOptions,
  tabBarStyle,
  contentStyle,
}) {
  const {state, navigation, descriptors, NavigationContent} =
    useNavigationBuilder(TabRouter, {
      children,
      screenOptions,
      initialRouteName,
    });

  return (
    <NavigationContent>
      <View style={[{flexDirection: 'row', paddingTop: 50}, tabBarStyle]}>
        {state.routes.map((route, index) => (
          <Pressable
            title={descriptors[route.key].options.title || route.name}
            key={route.key}
            onPress={() => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!event.defaultPrevented) {
                navigation.dispatch({
                  ...TabActions.jumpTo(route.name),
                  target: state.key,
                });
              }
            }}
            style={{
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text>{descriptors[route.key].options.title || route.name}</Text>
          </Pressable>
        ))}
      </View>
      <View style={[{flex: 1}, contentStyle]}>
        {state.routes.map((route, index) => {
          const descriptor = descriptors[route.key];
          const isFocused = state.index === index;
          return (
            <Screen
              key={route.key}
              focused={isFocused}
              route={descriptor.route}
              navigation={descriptor.navigation}
              header={<Header title={descriptor.options.title || route.name} />}
              headerShown={descriptor.options.headerShown}
              style={[
                StyleSheet.absoluteFill,
                {display: index === state.index ? 'flex' : 'none'},
              ]}>
              {descriptor.render()}
              {/* <Text>{JSON.stringify(state)}</Text> */}
            </Screen>
          );
        })}
      </View>
    </NavigationContent>
  );
}

const createMyNavigator = createNavigatorFactory(TabNavigator);

export default createMyNavigator;
