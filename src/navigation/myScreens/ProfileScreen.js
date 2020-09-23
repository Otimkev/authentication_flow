import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../../App';
import AsyncStorage from '@react-native-community/async-storage';
import SessionManager from '../../httpClient/utils/SessionManager';

const ProfileScreen = () => {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userFacility, setUserFacility] = useState('');
  const retrieveItem = async (key) => {
    try {
      const retrievedItem = await AsyncStorage.getItem(key);
      const item = JSON.parse(retrievedItem);
      console.log(item);
      setUserId(item.userId);
      setUserName(item.userName);
      setUserEmail(item.email);
      setUserPhone(item.phoneNumber);
      setUserFacility(item.facility);
    } catch (error) {
      console.log(error.message);
    }
    return;
  };
  retrieveItem('user');
  const {signOut} = useContext(AuthContext);
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
          <Text style={styles.name}>{userName}</Text>
        </View>
      </View>

      <View style={styles.profileDetail}>
        <View style={styles.detailContent}>
          <Text style={styles.title}>Patients</Text>
          <Text style={styles.count}>200</Text>
        </View>
        <View style={styles.detailContent}>
          <Text style={styles.title}>Invites</Text>
          <Text style={styles.count}>200</Text>
        </View>
        <View style={styles.detailContent}>
          <Text style={styles.title}>Tests</Text>
          <Text style={styles.count}>200</Text>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>{userEmail}</Text>
          <Text style={styles.name}>{userPhone}</Text>
          <Text style={styles.name}>{userFacility}</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => signOut()}>
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
    fontSize: 22,
    color: 'grey',
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
    alignItems: 'center',
    padding: 30,
    marginTop: 40,
  },
  textInfo: {
    fontSize: 18,
    marginTop: 20,
    color: '#696969',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: '#7cb63b',
  },
  description: {
    fontSize: 20,
    color: '#7cb63b',
    marginTop: 10,
    textAlign: 'center',
  },
});
