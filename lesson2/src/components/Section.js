import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Section({title}) {
  return (
    <View>
      <Text style={styles.txt}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
