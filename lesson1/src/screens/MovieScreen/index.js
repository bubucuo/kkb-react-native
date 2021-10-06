import React, {useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import Popular from './Popular/';
import MovieList, {Movie} from './MovieList';
import {movieOnInfoList} from '@/utils/service';

const MovieScreen = ({navigation}) => {
  const [text, setText] = useState('');
  return (
    <View style={styles.main}>
      <Popular />
      <MovieList />
    </View>
  );
};

export default MovieScreen;

const styles = StyleSheet.create({
  main: {
    paddingBottom: 100,
  },
});
