import React from 'react';
import {View, Text} from 'react-native';
import Section from '@/components/Section';
import {Link} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {Button} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';

// export default function UserScreen({navigation, route}) {
export default function UserScreen({navigation}) {
  const user = useSelector(({user}) => user);
  const dispatch = useDispatch();
  const {isLogin, userInfo} = user;

  const route = useRoute();
  return (
    <View>
      <Section>UserScreen</Section>
      {/* <Section>用户名: {route.params.username}</Section> */}
      <Link to={{screen: 'setting'}}>go setting</Link>
      <Button
        title="go setting"
        buttonStyle={{marginVertical: 20}}
        onPress={() => navigation.navigate('setting')}
      />
      <Button
        title="修改用户名"
        buttonStyle={{marginVertical: 20}}
        onPress={() => navigation.setParams({username: '小白'})}
      />
      {isLogin ? (
        <Button
          title={userInfo.name + 'logout'}
          buttonStyle={{marginVertical: 20}}
          onPress={() => dispatch({type: 'LOGOUT_SUCCESS'})}
        />
      ) : (
        <Button
          title="login"
          buttonStyle={{marginVertical: 20}}
          onPress={() =>
            dispatch({type: 'LOGIN_SUCCESS', payload: {name: '小米'}})
          }
        />
      )}
    </View>
  );
}
