import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {
  createNavigatorFactory,
  useNavigationBuilder,
  TabRouter,
  TabActions,
} from '@react-navigation/native';
import {Header, Screen} from '@react-navigation/elements';

function TabNavigator({children}) {
  const {state, descriptors, navigation, NavigationContent} =
    useNavigationBuilder(TabRouter, {children});
  return (
    <NavigationContent>
      <View style={{paddingTop: 50, flexDirection: 'row'}}>
        {/* <Text>omg</Text>
        <Text>{JSON.stringify(state)}</Text>
        <Text>{JSON.stringify(descriptors)}</Text> */}
        {state.routes.map((route, index) => {
          const descriptor = descriptors[route.key];
          return (
            <Pressable
              key={route.key}
              style={{
                flex: 1,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              onPress={() => {
                // 切换页面
                // 修改导航器中存储的活跃页面route.name
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
              <Text>{descriptor.options.title || route.name}</Text>
            </Pressable>
          );
        })}
      </View>
      <View style={{flex: 1}}>
        {state.routes.map((route, index) => {
          const descriptor = descriptors[route.key];
          const isFocused = state.index === index;
          return (
            <Screen
              key={route.key}
              focused={isFocused}
              route={descriptor.route}
              navigation={descriptor.navigation}
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
