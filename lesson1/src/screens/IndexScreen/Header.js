import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

export default function Header() {
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="搜索"
        defaultValue={text}
        onChangeText={text => setText(text)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#eee',
    borderStyle: 'solid',
  },
});
