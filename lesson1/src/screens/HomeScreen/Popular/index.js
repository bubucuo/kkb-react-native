import React from 'react';
import {StyleSheet, Image, ScrollView, Text, View} from 'react-native';
import {popularMovie} from '../../../utils/service';

const Popular = () => {
  return (
    <View>
      <Text style={styles.title}>最受好评电影</Text>
      <ScrollView horizontal={true} style={styles.box}>
        {popularMovie.map(item => (
          <Img key={item.id} {...item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Popular;

function Img({src, score, name}) {
  return (
    <View style={styles.imgBox}>
      <Image source={{uri: src}} style={styles.img} />
      <Text style={styles.score}>观众评分: {score}</Text>
      <Text numberOfLines={1} style={styles.name}>
        {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {padding: 8, fontSize: 14},
  box: {padding: 4},
  imgBox: {position: 'relative'},
  img: {
    zIndex: 0,
    width: 85,
    height: 115,
    margin: 4,
  },
  score: {
    zIndex: 1,
    position: 'absolute',
    right: 4,
    bottom: 24,
    left: 4,
    height: 24,
    lineHeight: 24,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: 'orange',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  name: {
    maxWidth: 85,
    marginTop: 2,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#222',
    overflow: 'hidden',
  },
});
