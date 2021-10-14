import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TextInput,
  // Button,
  ScrollView,
} from 'react-native';
import {Button} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import Section from '@/components/Section';

const logo = 'https://zh-hans.reactjs.org/logo-og.png';

export default function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('default');
  return (
    <ScrollView>
      <View style={styles.main}>
        <Text style={styles.bold}>App</Text>
        <Text style={styles.bold}>
          <Text>kaikeba -</Text>
          <Text style={{color: 'black'}}>logo</Text>
        </Text>

        <View style={styles.bold}>
          <Text>kaikeba -</Text>
          <Text style={{color: 'black'}}>logo</Text>
        </View>
      </View>

      <Image source={{uri: logo}} style={styles.logo} />

      <ImageBackground source={{uri: logo}} style={styles.logo}>
        <Text style={{color: 'white'}}>Inside</Text>
      </ImageBackground>

      <Button
        title={count + ''}
        onPress={() => setCount(count + 1)}
        buttonStyle={styles.btn}
      />

      <TextInput
        value={text}
        onChangeText={txt => setText(txt)}
        style={[styles.border, {borderColor: 'green'}]}
      />
      <Text>{text}</Text>

      <Section title="APP" />
      {/* <Text> */}
      <Text>这是个书名：</Text>
      <Text numberOfLines={2}>{'我是书名'.repeat(100)}</Text>
      {/* </Text> */}

      <Text>{'我是书名'.repeat(1000)}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {color: 'green'},
  logo: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
    marginVertical: 20,
    opacity: 0.5,
  },
  bold: {fontWeight: 'bold', color: 'orange'},
  btn: {backgroundColor: 'red'},
  border: {margin: 10, padding: 10, borderWidth: 1, borderColor: 'red'},
});
