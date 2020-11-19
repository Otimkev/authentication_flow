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
          <Text style={styles.name}>{`${user.hospital}`}</Text>
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
