import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import * as actionTypes from '../../utils/Constants';
import {addPatientsResponse} from '../../model/patient/addPatient/Actions';
import {getAPatientsResponse} from '../../model/patient/getAPatient/Actions';
import {connect} from 'react-redux';
import {Picker} from '@react-native-community/picker';
import {globalStyles} from '../../styles/Global';

const APatientScreenView = ({navigation, getAPatient, route, aPatient}) => {
  const id = route.params.patientId;
  const userId = route.params.userId;
  console.log(aPatient);
  useEffect(() => {
    getAPatient(id);
  }, [getAPatient, id]);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.nameTxt}>First name: {aPatient.firstName}</Text>
        <Text style={styles.nameTxt}>Last name: {aPatient.lastName}</Text>
        <Text style={styles.nameTxt}>age: {aPatient.dateOfBirth}</Text>
        <Text style={styles.nameTxt}>Contact:{aPatient.phoneNumber}</Text>
        <Text style={styles.nameTxt}>Gender:{aPatient.gender}</Text>
        <Text style={styles.nameTxt}>BedId: {id}</Text>
      </View>
      <View style={styles.button}>
        <Button
          title="Tests"
          onPress={() => {
            navigation.navigate('Tests', {patientId: id});
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Add Test"
          onPress={() => {
            navigation.navigate('Test List', {patientId: id});
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Back"
          onPress={() => {
            navigation.navigate('Patients');
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Invite"
          onPress={() => {
            navigation.navigate('inviteList', {patientId: id});
          }}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state, props) => {
  return state.aPatient;
};

const mapDispatchToProps = (dispatch, props) => ({
  getAPatient: (args) => {
    dispatch(getAPatientsResponse(args));
  },
});

export const APatientScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(APatientScreenView);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  row: {
    flexDirection: 'column',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },
  nameTxt: {
    fontWeight: '600',
    marginVertical: 10,
    color: '#222',
    fontSize: 18,
    width: 170,
  },
  button: {
    margin: 10,
  },
});
