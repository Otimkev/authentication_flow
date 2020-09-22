import React, {
  Component,
  useContext,
  useCallback,
  useState,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import GetAllPatients from '../../httpClient/repository/patient/GetAllPatients';
import SessionManager from '../../httpClient/utils/SessionManager';
import {FloatingAction} from 'react-native-floating-action';
// import AddPatientScreen from '../myScreens/patient/AddPatientScreen';

const PatientScreen = (props) => {
  const [patientList, setPatientList] = useState([]);
  const [actions, setActions] = useState([
    {
      text: 'Accessibility',
      name: 'bt_accessibility',
      position: 2,
    },
  ]);
  const fetchPatientData = useCallback(async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      const mUser = JSON.parse(user);
      console.log(mUser.userId);
      const patientData = await GetAllPatients.processGetAllPatients(
        mUser.userId,
      );
      console.log(patientData);
      setPatientList(patientData);
      return patientData;
    } catch (e) {
      console.log(e);
    }
  }, []);
  React.useEffect(() => {
    fetchPatientData().then((r) => setPatientList(r));
  }, [fetchPatientData]);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={styles.row}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.pic}
          />
          <View>
            <View style={styles.nameContainer}>
              <Text
                style={styles.nameTxt}
                numberOfLines={1}
                ellipsizeMode="tail">
                {`${item.firstName} ${item.lastName}`}
              </Text>
              <Text style={styles.mblTxt}> BED03 </Text>
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>{item.id}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <FlatList
        extraData={true}
        data={patientList}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={renderItem}
      />
      <FloatingAction
        actions={actions}
        onPressItem={() => {
          props.navigation.navigate('Register Patient');
        }}
      />
    </View>
  );
};

export default PatientScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 18,
    width: 170,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#008B8B',
    fontSize: 12,
    marginLeft: 15,
  },
});
