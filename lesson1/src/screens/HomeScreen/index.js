import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View, Button, Image} from 'react-native';
import TopBar from './TopBar';
import Popular from './Popular/';
import MovieList from './MovieList';
import Bottom from '../../components/Bottom';

const Home = ({navigation}) => {
  const [text, setText] = useState('');
  return (
    <ScrollView>
      <Button
        title="去买东西"
        color={Platform.OS === 'ios' ? 'white' : '#f03d37'}
        onPress={() => {
          navigation.navigate('webview');
        }}
      />

      <TopBar text={text} setText={setText} />
      <Popular />
      <MovieList />
      {/* <Bottom /> */}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({rn: {width: 30, height: 30}});
