import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {globalStyles} from '../../styles/Global';
import {Picker} from '@react-native-community/picker';
import AsyncStorage from '@react-native-community/async-storage';
import {login} from '../../utils/SocketEvents';

const HomeScreen = ({navigation}) => {
  const [cureentUserID, setcureentUserID] = useState(null);
  useEffect(() => {
    filterUser();
    login({userId: cureentUserID});
  }, [cureentUserID]);
  const filterUser = async () => {
    const userData = await AsyncStorage.getItem('user');
    const data = JSON.parse(userData);
    setcureentUserID(data.id);
  };
  return (
    <View style={globalStyles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
