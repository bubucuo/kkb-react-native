import React from 'react';
import {View, Text} from 'react-native';
import Section from '@/components/Section';
import {Link} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {Button} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../action/user';

// export default function UserScreen({navigation, route}) {
export default function UserScreen({navigation}) {
  const user = useSelector(({user}) => user);
  const dispatch = useDispatch();
  const {isLogin, userInfo} = user;

  const route = useRoute();
  return (
    <View>
      <Section>UserScreen</Section>

      <Link to={{screen: 'vip'}}>vip</Link>

      <Text style={{margin: 10}}>id:{userInfo.id}</Text>
      <Text style={{margin: 10}}>name:{userInfo.name}</Text>
      <Text style={{margin: 10}}>score:{userInfo.score}</Text>

      {isLogin ? (
        <Button
          title={userInfo.name + 'logout'}
          buttonStyle={{marginVertical: 20}}
          onPress={() => {
            dispatch(logout());
            // dispatch({type: 'LOGOUT_SUCCESS'});
          }}
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
