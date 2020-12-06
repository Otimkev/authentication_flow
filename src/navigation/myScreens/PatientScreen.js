import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../model/patient/getAllPatients/Actions';
import {addPatientsResponse} from '../../model/patient/addPatient/Actions';
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
// import AddPatientScreen from '../myScreens/patient/AddPatientScreen';

const PatientScreenView = ({
  getAllPatients,
  navigation,
  isFetching,
  patients,
  createPatient,
  isAddPatientLoading,
}) => {
  useEffect(() => {
    getAllPatients();
  }, [getAllPatients, isAddPatientLoading]);
  const renderItem = ({item}) => {
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
              <Text style={styles.mblTxt}>6 daysgit  ago</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SpecialistList', {patientId: id});
                }}>
                <Text style={styles.share}>
                  <Icon name="share-a" color="#007360" size={24} />
                </Text>
              </TouchableOpacity>
              {/* <Text style={styles.mblTxt}>
                <Icon name="share-a" color="#007360" size={24} />
              </Text> */}
            </View>
            {/* <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>{item.id}</Text>
            </View> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={globalStyles.loader}>
      {isFetching ? (
        <Loader />
      ) : (
        <FlatList
          extra={true}
          data={patients.reverse()}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
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
  return {patients, isFetching, isAddPatientLoading};
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
