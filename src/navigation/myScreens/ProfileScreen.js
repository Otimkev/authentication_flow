import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {globalStyles} from '../../styles/Global';
import {primary_color} from '../../styles/color';
import Icon from 'react-native-vector-icons/Fontisto';

const ProfileScreen = () => {
  const [user, setUser] = useState('');

  useEffect(() => {
    retrieveItem();
  }, []);
  const retrieveItem = async () => {
    const retrievedItem = await AsyncStorage.getItem('user');
    const item = JSON.parse(retrievedItem);
    setUser(item.result);
  };
  retrieveItem('user');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://bootdey.com/img/Content/avatar/avatar2.png',
            }}
          />
          <Text
            style={styles.name}>{`${user.firstName} ${user.lastName}`}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.hospital}>{'mulago hospital'}</Text>
      </View>

      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.email}>{user.email}</Text>
          <Icon name="email" color="#007360" size={24} />
        </View>
        <View style={styles.bodyContent}>
          <Text style={styles.contact}>{user.contact}</Text>
          <Icon name="phone" color="#007360" size={24} />
        </View>
      </View>
    </View>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#83f881',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 30,
    color: primary_color,
    fontWeight: 'bold',
  },
  hospital: {
    fontSize: 20,
    color: '#fff',
    //fontWeight: '600',
    textTransform: 'capitalize',
  },
  email: {
    fontSize: 20,
    color: primary_color,
    fontWeight: '600',
  },
  contact: {
    fontSize: 20,
    color: primary_color,
    fontWeight: '600',
  },
  profileDetail: {
    alignSelf: 'center',
    marginTop: 200,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: '#ffffff',
  },
  detailContent: {
    margin: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#00CED1',
  },
  count: {
    fontSize: 18,
  },
  bodyContent: {
    flex: 1,
    padding: 30,
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: '#696969',
  },
  description: {
    fontSize: 20,
    color: '#7cb63b',
    marginTop: 10,
    textAlign: 'center',
  },
  card: {
    width: '50%',
    backgroundColor: primary_color,
    borderRadius: 30,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    top: -30,
    left: 90,
  },
});
