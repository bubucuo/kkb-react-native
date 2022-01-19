// import React from 'react';
// import {View, Text} from 'react-native';
// import Section from '@/components/Section';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {Link} from '@react-navigation/native';
// import Popular from './Popular';

// export default function MovieScreen() {
//   return (
//     <View>
//       <Section>MovieScreen</Section>
//       <Link to={{screen: 'cinema'}}>购票</Link>
//       <Popular />
//     </View>
//   );
// }

import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import Section from '@/components/Section';
import {movieOnInfoList} from '@/utils/service';
import {useNavigation} from '@react-navigation/core';
import {Button} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function CinemaScreen() {
  return (
    <FlatList
      style={styles.list}
      data={movieOnInfoList.movieList}
      renderItem={({item}) => <Movie {...item} />}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  list: {margin: 14, paddingBottom: 100},
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
  sc: {color: 'orange', fontSize: 18, fontWeight: 'bold'},
  buy: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#f03d37',
    borderRadius: 8,
  },
});

const Movie = movie => {
  const navigation = useNavigation();
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
          观众评 <Text style={styles.sc}>{movie.sc}</Text>
        </Text>
        <Text style={styles.txt}>主演: {movie.star}</Text>
        <Text style={styles.txt}>{movie.showInfo}</Text>
      </View>
      <View style={styles.buy}>
        <Button
          title="购票"
          accessibilityLabel="购票"
          onPress={() => {
            navigation.navigate('cinemaList', {...movie});
          }}
        />
      </View>
    </View>
  );
};
