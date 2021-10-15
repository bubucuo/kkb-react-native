import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Section({children, title}) {
  return (
    <View>
      <Text style={styles.txt}>{children || title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    lineHeight: 60,
    margin: 12,
    padding: 12,
    borderColor: 'red',
    borderWidth: 1,
    fontSize: 32,
    fontWeight: 'bold',
  },
});
