import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  createNavigatorFactory,
  useNavigationBuilder,
  TabRouter,
  TabActions,
} from '@react-navigation/native';
import {Pressable} from 'react-native';
import {Screen, Header} from '@react-navigation/elements';

// 自定义一个Navigator
function TabNavigator({initialRouteName, children, tabBarStyle}) {
  const {state, descriptors, NavigationContent, navigation} =
    useNavigationBuilder(TabRouter, {children, initialRouteName});

  return (
    <NavigationContent>
      <View style={[{flexDirection: 'row', paddingTop: 50, tabBarStyle}]}>
        {state.routes.map((route, index) => (
          <Pressable
            style={{
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
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
            }}>
            <Text>{descriptors[route.key].options.title || route.name}</Text>
          </Pressable>
        ))}
      </View>
      <View style={[{flex: 1}]}>
        {state.routes.map((route, index) => {
          const descriptor = descriptors[route.key];
          const isFoucsed = state.index === index;
          return (
            <Screen
              key={route.key}
              isFoucsed={isFoucsed}
              route={descriptor.route}
              navigation={descriptor.navigation}
              header={<Header title={descriptor.options.title || route.name} />}
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
