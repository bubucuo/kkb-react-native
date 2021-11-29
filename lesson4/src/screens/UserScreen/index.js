import React, {useState} from 'react';
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

  const [random, setrandom] = useState({name: {}});

  const getUser = () => {
    // debugger;
    // console.log('omg'); //sy-log
    fetch('https://randomuser.me/api')
      .then(x => x.json())
      .then(x => setrandom(x.results[0]));
  };
  return (
    <View>
      <Section>UserScreen</Section>

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

      <View>
        <Text style={{fontSize: 30, padding: 10}}>{random.name?.first}</Text>
        <Button title="refresh" onPress={() => getUser()} />
      </View>
    </View>
  );
}
