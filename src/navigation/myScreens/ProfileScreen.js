import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

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
          <Text style={styles.name}>{`mulago hospital`}</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>Email: {user.email}</Text>
          <Text style={styles.name}>Phone: {user.contact}</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => console.log('Not implemented')}>
            <Text style={{color: 'white'}}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
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
    fontSize: 20,
    color: 'black',
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
});
