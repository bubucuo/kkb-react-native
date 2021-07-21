import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const TopBar = ({text, setText}) => {
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
};

export default TopBar;

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
