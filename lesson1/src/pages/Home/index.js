import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Top from '../../components/Top/';
import TopBar from './TopBar/';
import Popular from './Popular/';
import MovieList from './MovieList';

const Home = () => {
  const [text, setText] = useState('');
  return (
    <View>
      <Top />
      <TopBar text={text} setText={setText} />
      <Popular />
      <MovieList />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
