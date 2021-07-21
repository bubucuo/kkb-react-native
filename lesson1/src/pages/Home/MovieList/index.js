import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  ActivityIndicator,
  Button,
} from 'react-native';
import {movieOnInfoList} from '../../../utils/service';

const MovieList = () => {
  return (
    <FlatList
      style={styles.list}
      data={movieOnInfoList.movieList}
      renderItem={({item}) => <Movie {...item} />}
    />
  );
};

export default MovieList;

const styles = StyleSheet.create({
  list: {padding: 4},
  box: {
    position: 'relative',
    width: '100%',
    height: 100,
  },
  img: {position: 'absolute', width: 64, height: 90, margin: 4},
  middle: {
    marginLeft: 80,
  },
  nm: {width: 200, marginBottom: 4, fontSize: 16, fontWeight: 'bold'},
  txt: {lineHeight: 20, fontSize: 13, color: '#666'},
  score: {color: 'orange', fontSize: 18, fontWeight: 'bold'},
  buy: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#f03d37',
    borderRadius: 8,
  },
  buyBtn: {
    // width: 192,
  },
});

const Movie = movie => {
  return (
    <View style={styles.box}>
      <Image
        source={{
          uri: movie.img + '@1l_1e_1c_128w_180h',
        }}
        style={styles.img}
      />
      <View style={styles.middle}>
        <Text numberOfLines={1} style={styles.nm}>
          {movie.nm}
        </Text>
        <Text style={styles.txt}>
          观众评 <Text style={styles.score}>{movie.sc}</Text>
        </Text>
        <Text style={styles.txt}>主演: {movie.star}</Text>
        <Text style={styles.txt}>{movie.showInfo}</Text>
      </View>
      <View style={styles.buy}>
        <Button title="购票" color="white" buttonStyle={styles.buyBtn}></Button>
      </View>
    </View>
  );
};
