// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   Image,
//   ImageBackground,
//   Alert,
// } from 'react-native';
// import {Button} from 'react-native-elements';

// const uri = 'https://zh-hans.reactjs.org/logo-og.png';

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState('');
//   return (
//     <View>
//       <TextInput
//         value={text}
//         onChangeText={txt => setText(txt)}
//         style={styles.border}
//       />
//       <Text onPress={() => Alert.alert(0)}>输入框文本：{text}</Text>
//       <Button
//         title={count + ''}
//         onPress={() => setCount(count + 1)}
//         buttonStyle={styles.buttonStyle}
//       />
//       <Image source={{uri}} style={styles.img} />
//       <ImageBackground source={{uri}} style={styles.img}>
//         <Text>Inside</Text>
//       </ImageBackground>

//       <Text>
//         <Text>First part and </Text>
//         <Text>second part</Text>
//       </Text>
//       <View>
//         <Text>First part and </Text>
//         <Text>second part</Text>
//       </View>

//       {/* <Text>
//         <Text numberOfLines={1}>{'sometext'.repeat(1000)}</Text>
//       </Text> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   border: {borderWidth: 1},
//   buttonStyle: {
//     width: 100,
//     height: 40,
//     marginHorizontal: 10,
//     backgroundColor: 'red',
//     color: 'white',
//   },
//   img: {
//     width: 100,
//     height: 100,
//     marginVertical: 20,
//   },
// });

import React from 'react';
import {View, Text} from 'react-native';
import RootRouter from './RootRouter';
import {Provider} from 'react-redux';
import store from '@/store/';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootRouter />
      </NavigationContainer>
    </Provider>
  );
}
