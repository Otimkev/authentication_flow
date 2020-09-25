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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFF',
//   },
//   text: {
//     fontFamily: 'HelveticaNeue',
//     color: '#52575D',
//   },
//   image: {
//     flex: 1,
//     height: undefined,
//     width: undefined,
//   },
//   titleBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 24,
//     marginHorizontal: 16,
//   },
//   subText: {
//     fontSize: 12,
//     color: '#AEB5BC',
//     textTransform: 'uppercase',
//     fontWeight: '500',
//   },
//   profileImage: {
//     width: 200,
//     height: 200,
//     borderRadius: 100,
//     overflow: 'hidden',
//   },
//   dm: {
//     backgroundColor: '#41444B',
//     position: 'absolute',
//     top: 20,
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   active: {
//     backgroundColor: '#34FFB9',
//     position: 'absolute',
//     bottom: 28,
//     left: 10,
//     padding: 4,
//     height: 20,
//     width: 20,
//     borderRadius: 10,
//   },
//   add: {
//     backgroundColor: '#41444B',
//     position: 'absolute',
//     bottom: 0,
//     right: 0,
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   infoContainer: {
//     alignSelf: 'center',
//     alignItems: 'center',
//     marginTop: 16,
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     alignSelf: 'center',
//     marginTop: 32,
//   },
//   statsBox: {
//     alignItems: 'center',
//     flex: 1,
//   },
//   mediaImageContainer: {
//     width: 180,
//     height: 200,
//     borderRadius: 12,
//     overflow: 'hidden',
//     marginHorizontal: 10,
//   },
//   mediaCount: {
//     backgroundColor: '#41444B',
//     position: 'absolute',
//     top: '50%',
//     marginTop: -50,
//     marginLeft: 30,
//     width: 100,
//     height: 100,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 12,
//     shadowColor: 'rgba(0, 0, 0, 0.38)',
//     shadowOffset: {width: 0, height: 10},
//     shadowRadius: 20,
//     shadowOpacity: 1,
//   },
//   recent: {
//     marginLeft: 78,
//     marginTop: 32,
//     marginBottom: 6,
//     fontSize: 10,
//   },
//   recentItem: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',
//     marginBottom: 16,
//   },
//   activityIndicator: {
//     backgroundColor: '#CABFAB',
//     padding: 4,
//     height: 12,
//     width: 12,
//     borderRadius: 6,
//     marginTop: 3,
//     marginRight: 20,
//   },
// });
