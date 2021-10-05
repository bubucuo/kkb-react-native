import React from 'react';
import {
  StyleSheet,
  useColorScheme,
  SafeAreaView,
  View,
  Text,
  Image,
} from 'react-native';
import {
  Colors,
  // Header,
  // LearnMoreLinks,
  // ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Bottom from './components/Bottom';
import HomeScreen from './screens/HomeScreen/index';
import UserScreen from './screens/UserScreen/index';
import CinemaScreen from './screens/CinemaScreen';
import WebScreen from './screens/WebScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const stackMainStyle = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const stackSecStyle = {
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerTintColor: '#000',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default function App(props) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      {/* <SafeAreaView style={{backgroundStyle}}> */}
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            title: '猫眼电影',
            ...stackMainStyle,
          }}
        />

        <Stack.Group screenOptions={{...stackSecStyle}}>
          <Stack.Screen
            name="user"
            component={UserScreen}
            options={{title: '用户中心'}}
          />
          <Stack.Screen
            name="cinema"
            component={CinemaScreen}
            options={{title: '上映影院和购票'}}
          />
          <Stack.Screen
            name="webview"
            component={WebScreen}
            options={{
              headerTitle: () => (
                <Text
                  style={{
                    backgroundColor: '#fff',
                    color: '#000',
                    fontWeight: 'bold',
                  }}>
                  学习RN中...
                </Text>
              ),
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
      {/* </SafeAreaView> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({rn: {width: 40, height: 40}});

// export const RootNavigator = StackNavigator({
//   HomeScreen: {
//     screen: HomeScreen,
//     navigationOptions: {
//       headerTitle: '首页',
//     },
//   },
//   UserScreen: {
//     screen: UserScreen,
//     navigationOptions: {
//       headerTitle: '个人中心',
//     },
//   },
// });

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <Text>gaoshaoyun-yyy</Text>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default App;
