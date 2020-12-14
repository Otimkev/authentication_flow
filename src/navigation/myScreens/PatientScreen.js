import React, {useEffect, useRef, useState} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../model/patient/getAllPatients/Actions';
import {addPatientsResponse} from '../../model/patient/addPatient/Actions';
import {getComfiredPatientsResponse} from '../../model/patient/getComfirmedInvites/Actions';
import * as actionTypes from '../../utils/Constants';
import Icon from 'react-native-vector-icons/Fontisto';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import {Loader} from '../../components/Loader';
import {color} from 'react-native-reanimated';
import {globalStyles} from '../../styles/Global';
import {login} from '../../utils/SocketEvents';
import AsyncStorage from '@react-native-community/async-storage';
import {primary_color} from '../../styles/color';
// import AddPatientScreen from '../myScreens/patient/AddPatientScreen';

const PatientScreenView = ({
  getAllPatients,
  navigation,
  isFetching,
  patients,
  createPatient,
  isAddPatientLoading,
  responseData,
  getAcceptedPatients,
}) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    filterUser();
    login({userId: currentUser});
    getAllPatients();
    getAcceptedPatients();
  }, [currentUser, getAcceptedPatients, getAllPatients, isAddPatientLoading]);
  const filterUser = async () => {
    const userData = await AsyncStorage.getItem('user');
    const data = JSON.parse(userData);
    setCurrentUser(data.result.id);
  };
  console.log(responseData);
  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={globalStyles.mainContent}
        onPress={() => {
          navigation.navigate('Patient Information', {
            patientId: item.id,
            patientNames: `${item.firstName} ${item.lastName}`,
          });
        }}>
        <View style={styles.row}>
          <View>
            <View style={styles.nameContainer}>
              <Text
                style={globalStyles.nameTxt}
                numberOfLines={1}
                ellipsizeMode="tail">
                {`${item.firstName} ${item.lastName}`}
              </Text>
              <Text style={styles.mblTxt}>6 days ago</Text>
            </View>
            <View style={styles.msgContainer} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderItemShared = (item) => {
    return (
      <TouchableOpacity
        style={globalStyles.mainContent}
        onPress={() => {
          navigation.navigate('Patient Information', {
            patientId: item.patient.id,
            patientNames: `${item.patient.firstName} ${item.patient.lastName}`,
          });
        }}>
        <View style={styles.row}>
          <View>
            <View style={styles.nameContainer}>
              <Text style={globalStyles.nameTxt} numberOfLines={1}>
                {`${item.patient.firstName} ${item.patient.lastName}`}
              </Text>
              <Text style={styles.mblTxt}>0 minutes ago</Text>
            </View>
            <View style={styles.msgContainer}>
              <Text
                style={{
                  fontSize: 16,
                  color: `${primary_color}`,
                  marginLeft: 15,
                  fontWeight: 'normal',
                }}
                numberOfLines={1}>
                {`Received from Dr. ${item.sender.firstName} ${item.sender.lastName}`}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderFactory = ({item}) => {
    if (item.isAccepted === true) {
      return renderItemShared(item);
    } else {
      return renderItem(item);
    }
  };
  const isEmpty = () => {
    return (
      <View style={{flex: 1}}>
        <Text>Add Patients!</Text>
      </View>
    );
  };

  return (
    <View style={globalStyles.loader}>
      {isFetching ? (
        <Loader />
      ) : (
        <FlatList
          extra={true}
          data={[...patients.reverse(), ...responseData]}
          keyExtractor={(item) => Math.random()}
          renderItem={renderFactory}
        />
      )}
      <FloatingAction
        actions={[
          {
            text: 'Add Patient',
            name: 'bt_accessibility',
            color: '#007360',
            position: 2,
            icon: require('../../assets/img/patient2.jpg'),
          },
        ]}
        color="#007360"
        onPressItem={() => {
          navigation.navigate('Register Patient');
        }}
      />
    </View>
  );
};

const mapStateToProps = (state, props) => {
  const {patients, isFetching} = state.mPatients;
  const {isAddPatientLoading} = state.addPatient;
  const {responseData} = state.getComfiredPatientInvites;
  return {patients, isFetching, isAddPatientLoading, responseData};
};

const mapDispatchToProps = (dispatch, props) => ({
  getAllPatients: () => {
    dispatch({
      type: actionTypes.GET_ALL_PATIENTS_RESPONSE,
    });
  },
  createPatient: (args) => {
    dispatch(addPatientsResponse(args));
  },
  getAcceptedPatients: () => {
    dispatch(getComfiredPatientsResponse());
  },
});

export const PatientScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PatientScreenView);

const styles = StyleSheet.create({
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
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  indicatorContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#008B8B',
    fontSize: 12,
    marginLeft: 15,
  },
  share: {
    left: 80,
  },
});
