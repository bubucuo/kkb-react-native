import React from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import {popularMovie} from '@/utils/service';
import {useNavigation} from '@react-navigation/core';
import {Button} from 'react-native-elements';

const Popular = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>正在热映</Text>
        <TouchableHighlight
          onPress={() => {
            navigation.navigate('aboutMovieList');
          }}>
          <Text style={styles.all}>全部></Text>
        </TouchableHighlight>
      </View>

      <ScrollView horizontal={true} style={styles.list}>
        {popularMovie.map(item => (
          <Item key={item.id} {...item} navigation={navigation} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Popular;

function Item({navigation, ...movie}) {
  const {img, sc, nm} = movie;
  return (
    <View style={styles.item}>
      <Image source={{uri: img}} style={styles.img} />
      <Text style={styles.score}>观众评分: {sc}</Text>
      <Text numberOfLines={1} style={styles.nm}>
        {nm}
      </Text>
      <Button
        title="购票"
        onPress={() => {
          // navigation.navigate('cinemaList', {...movie});
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {lineHeight: 24, padding: 8, fontSize: 14, fontWeight: 'bold'},
  all: {
    lineHeight: 24,
    padding: 8,
  },
  list: {padding: 8},
  item: {
    width: 84,
    marginRight: 8,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  img: {
    zIndex: 0,
    width: 84,
    height: 116,
  },
  score: {
    zIndex: 1,
    height: 24,
    lineHeight: 24,
    marginTop: -24,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'orange',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  nm: {
    lineHeight: 24,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#222',
  },
});
