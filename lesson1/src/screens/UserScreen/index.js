import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CustomButton from '@/components/CustomButton';
import {LOGOUT_SUCCESS} from '@/store/const';

const UserScreen = () => {
  const userInfo = useSelector(({user}) => user.userInfo);
  const dispatch = useDispatch();
  const {id, name, score} = userInfo;

  return (
    <View style={styles.main}>
      <Text style={styles.txt}>id: {id}</Text>
      <Text style={styles.txt}>name: {name}</Text>
      <Text style={styles.txt}>score: {score}</Text>
      <CustomButton
        title="退出登录"
        onPress={() => dispatch({type: LOGOUT_SUCCESS})}
      />
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  main: {backgroundColor: '#fff', padding: 12},
  txt: {
    lineHeight: 32,
    fontSize: 20,
  },
});
