import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Top = () => {
  return (
    <View style={styles.box}>
      <Text style={styles.txt}>猫眼电影</Text>
    </View>
  );
};

export default Top;

const styles = StyleSheet.create({
  box: {
    height: 50,
    backgroundColor: '#e54847',
  },
  txt: {
    lineHeight: 50,
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
  },
});
