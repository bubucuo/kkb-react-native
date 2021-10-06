import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import {getCinemaDetail} from '@/utils/service';

export default function CinemaScreen() {
  const [cinemaDetail, setcinemaDetail] = useState({});
  useEffect(() => {
    setcinemaDetail(getCinemaDetail);
  }, []);

  const {cinemaData = {}} = cinemaDetail;
  return (
    <View style={styles.main}>
      <TouchableHighlight>
        <View style={styles.address}>
          <Text style={styles.title}>{cinemaData.nm}</Text>
          <Text style={styles.addr}>{cinemaData.addr}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {paddingLeft: 12, backgroundColor: '#fff'},
  address: {},
  title: {lineHeight: 40, fontSize: 20, fontWeight: 'bold'},
  addr: {lineHeight: 22},
});
