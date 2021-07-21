import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import {movieOnInfoList} from '../../../utils/service';

const MovieList = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then(response => response.json())
      .then(json => setData(json.movies))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={movieOnInfoList.movieList}
          renderItem={({item}) => <Movie {...item} />}
        />
      )}
    </View>
  );
};

export default MovieList;

const styles = StyleSheet.create({
  img: {width: 64, height: 90},
});

const Movie = ({img, nm}) => {
  return (
    <View>
      <Text>{nm}</Text>
      <Image
        source={{uri: img}}
        // style={styles.img}
        style={{
          width: 64,
          height: 90,
        }}
      />
    </View>
  );
};
