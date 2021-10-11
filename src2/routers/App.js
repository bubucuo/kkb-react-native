// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   Image,
//   ImageBackground,
//   TextInput,
//   ScrollView,
// } from 'react-native';
// import {Button} from 'react-native-elements';

// const logo = 'https://zh-hans.reactjs.org/logo-og.png';

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState('default');
//   return (
//     <SafeAreaView>
//       <ScrollView>
//         <Text>App</Text>

//         <Image source={{uri: logo}} style={styles.logo} />
//         <ImageBackground source={{uri: logo}} style={styles.logo}>
//           <Text style={{color: 'white'}}>Inside</Text>
//         </ImageBackground>

//         <Button
//           title={count + ''}
//           onPress={() => setCount(count + 1)}
//           buttonStyle={styles.btn}
//         />
//         <TextInput
//           value={text}
//           onChangeText={txt => setText(txt)}
//           style={styles.txt}
//         />

//         <Text style={[styles.txt, {borderColor: 'green'}]}>
//           <Text style={styles.bold}>文本: </Text>
//           <Text>{text}</Text>
//         </Text>
//         <View style={[styles.txt, {borderColor: 'green'}]}>
//           <Text style={styles.bold}>文本: </Text>
//           <Text>{text}</Text>
//         </View>

//         {/* //! 溢出 */}
//         <Text>omg:</Text>
//         <Text numberOfLines={1}>{'书名'.repeat(100)}</Text>

//         {/* <Text>{'书名'.repeat(1000)}</Text> */}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   logo: {
//     width: 100,
//     height: 100,
//     marginHorizontal: 10,
//     marginVertical: 10,
//   },

//   btn: {backgroundColor: 'red'},
//   txt: {
//     margin: 10,
//     padding: 10,
//     borderColor: 'red',
//     borderWidth: 1,
//     color: 'grey',
//   },
//   bold: {color: 'orange', fontWeight: 'bold'},
// });
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootRouter from './RootRouter';

export default function App() {
  return (
    <NavigationContainer>
      <RootRouter />
    </NavigationContainer>
  );
}
