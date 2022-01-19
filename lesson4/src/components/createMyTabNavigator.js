import React from 'react';

import {
  createNavigatorFactory,
  DefaultNavigatorOptions,
  ParamListBase,
  TabActionHelpers,
  TabActions,
  TabNavigationState,
  TabRouter,
  TabRouterOptions,
  useNavigationBuilder,
} from '@react-navigation/native';
import {View, Text, Pressable} from 'react-native';
import {Screen} from '@react-navigation/elements';

function TabNavigator({children, screenOptions}) {
  const {state, descriptors, navigation, NavigationContent} =
    useNavigationBuilder(TabRouter, {
      children,
      screenOptions,
    });
  return (
    <NavigationContent>
      <View style={{flexDirection: 'row', paddingTop: 50}}>
        {/* <Text>导航</Text> */}
        {state.routes.map(route => (
          <Pressable
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
      <View style={{flex: 1}}>
        {/* <Text>---页面----</Text> */}
        {state.routes.map((route, index) => {
          const descriptor = descriptors[route.key];
          const isFocused = state.index === index;
          return (
            <Screen
              key={route.key}
              route={descriptor.route}
              navigation={descriptor.navigation}
              // focused={isFocused}
              headerShown={descriptor.options.headerShown}
              style={{
                display: index === state.index ? 'flex' : 'none',
              }}>
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
