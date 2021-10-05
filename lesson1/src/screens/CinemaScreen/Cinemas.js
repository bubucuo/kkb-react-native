import React from 'react';
import {StyleSheet, Text, View, Image, Alert, ScrollView} from 'react-native';
import Cinema from './Cinema';

const Cinemas = ({cinemas}) => (
  <ScrollView style={styles.main}>
    <View>
      {cinemas.map(cinema => {
        return <Cinema key={cinema.id} {...cinema} />;
      })}
    </View>
  </ScrollView>
);

export default Cinemas;

const styles = StyleSheet.create({
  main: {paddingLeft: 12, paddingRight: 12, backgroundColor: '#fff'},
  cinema: {margin: 12},
  addr: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
