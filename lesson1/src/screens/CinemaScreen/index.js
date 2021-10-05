import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  ScrollView,
  Button,
} from 'react-native';
import {cinemas} from '@/utils/service';
import Cinemas from './Cinemas';

const CinemaScreen = ({route}) => {
  const movie = route.params;

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.imBox}>
          <Image
            source={{
              uri: movie.img + '@1l_1e_1c_128w_180h',
            }}
            style={styles.img}
          />
        </View>
        <View style={styles.headerContent}>
          <Text numberOfLines={1} style={styles.nm}>
            {movie.nm}
          </Text>
          <Text style={styles.txt}>
            观众评 <Text style={styles.score}>{movie.sc}</Text>
          </Text>
          <Text style={styles.txt}>主演: {movie.star}</Text>
          <Text style={styles.txt}>{movie.showInfo}</Text>
          <Text style={styles.txt}>{movie.rt}大陆上映</Text>
        </View>
      </View>

      <Cinemas cinemas={cinemas.data.cinemas} />
    </View>
  );
};

export default CinemaScreen;

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    height: 180,
    paddingLeft: 130,
    paddingTop: 12,
    backgroundColor: 'rgba(0,0,0,.6)',
  },
  imBox: {
    position: 'absolute',
    top: 12,
    left: 12,
  },
  img: {
    width: 100,
    height: 150,
  },
  headerContent: {},
  nm: {
    marginBottom: 6,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#fff',
  },
  txt: {lineHeight: 26, fontSize: 14, color: '#fff'},
  score: {color: 'orange', fontSize: 20, fontWeight: 'bold'},
});
