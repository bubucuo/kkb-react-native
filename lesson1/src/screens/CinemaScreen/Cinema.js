import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';

const Cinema = ({addr, price}) => {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => navigation.navigate('user')}>
      <View style={styles.main}>
        <Text numberOfLines={1}>{addr}</Text>
        <Text style={styles.priceBox}>
          <Text style={styles.price}>{price}</Text> 起
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default Cinema;

const styles = StyleSheet.create({
  main: {
    padding: 8,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  priceBox: {
    lineHeight: 28,
    color: '#f03d37',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
