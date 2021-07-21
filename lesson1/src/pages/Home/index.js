import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Top from '../../components/Top/';
import TopBar from './TopBar/';
import Popular from './Popular/';
import MovieList from './MovieList';

const Home = () => {
  const [text, setText] = useState('');
  return (
    <ScrollView>
      <Top />
      <TopBar text={text} setText={setText} />
      <Popular />
      <MovieList />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({topPart: {position: 'relative'}});
