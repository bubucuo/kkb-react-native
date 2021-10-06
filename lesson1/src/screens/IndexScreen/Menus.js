import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Alert} from 'react-native';

const menus = [
  {
    title: '外卖',
    to: 'webview',
    uri: 'https://h5.waimai.meituan.com/waimai/mindex/home',
  },
  {
    title: '美食',
  },
  {
    title: '酒店/民宿',
  },
  {
    title: '休闲/玩乐',
  },

  {
    title: '电影/演出',
    to: 'maoyan',
  },

  {
    title: '打车',
  },

  {
    title: '景点/门票',
  },

  {
    title: '丽人/美发',
  },

  {
    title: '买药',
  },

  {
    title: '火车票/机票',
  },
];

export default function Menus() {
  return (
    <View style={styles.main}>
      {menus.map(item => (
        <Item key={item.title} {...item} />
      ))}
    </View>
  );
}
function Item({title, to, uri}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        if (to) {
          navigation.navigate(to, {uri});
        } else {
          Alert.alert('未配置路径！');
        }
      }}>
      <View style={styles.item}>
        <View style={styles.circle}></View>
        <Text style={styles.txt}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  item: {
    width: 68,
    height: 88,
    marginBottom: 10,
  },
  circle: {
    height: 50,
    width: 50,
    marginLeft: 9,
    borderRadius: 100,
    backgroundColor: 'orange',
  },
  txt: {
    // width: 68,
    lineHeight: 26,
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    // marginBottom: 10,
  },
});
