import React from 'react';
import {StyleSheet, Image, ScrollView, Text, View} from 'react-native';
import {popularMovie} from '@/utils/service';
import CustomButton from '../../../components/CustomButton';
import {useNavigation} from '@react-navigation/core';

const Popular = () => {
  return (
    <View>
      <Text style={styles.title}>正在热映</Text>
      <ScrollView horizontal={true} style={styles.box}>
        {popularMovie.map(item => (
          <Img key={item.id} {...item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Popular;

function Img(movie) {
  const {img, sc, nm} = movie;
  const navigation = useNavigation();
  return (
    <View style={styles.imgBox}>
      <Image source={{uri: img}} style={styles.img} />
      <Text style={styles.sc}>观众评分: {sc}</Text>
      <Text numberOfLines={1} style={styles.nm}>
        {nm}
      </Text>
      <CustomButton
        title="购票"
        onPress={() => navigation.navigate('cinema', {...movie})}
      />
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
  sc: {
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
  nm: {
    maxWidth: 85,
    marginTop: 2,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#222',
    overflow: 'hidden',
  },
});
