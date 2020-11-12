import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import * as actionTypes from '../../utils/Constants';
import {addPatientsResponse} from '../../model/patient/addPatient/Actions';
import {getAPatientsResponse} from '../../model/patient/getAPatient/Actions';
import {connect} from 'react-redux';
import {Picker} from '@react-native-community/picker';
import {globalStyles} from '../../styles/Global';

const APatientScreenView = ({navigation, getAPatient, route, aPatient}) => {
  const id = route.params.patientId;
  const userId = route.params.userId;
  console.log(userId);
  useEffect(() => {
    getAPatient(id);
  }, [getAPatient, id]);
  return (
    <View style={styles.container}>
      <View>
        <Text>Name:</Text>
        <Text>{aPatient.firstName + aPatient.lastName}</Text>
        {/* <Text style={styles.nameTxt}>Last Name: {aPatient.lastName}</Text>
        <Text style={styles.nameTxt}>Age: {aPatient.dateOfBirth}</Text>
        <Text style={styles.nameTxt}>Contact:{aPatient.phoneNumber}</Text>
        <Text style={styles.nameTxt}>Gender:{aPatient.gender}</Text>
        <Text style={styles.nameTxt}>BedId: {id}</Text> */}
      </View>
      <View>
        <Text>Contact:</Text>
        <Text>{aPatient.phoneNumber}</Text>
      </View>
      <TouchableOpacity
        style={globalStyles.Card}
        onPress={() => {
          navigation.navigate('Tests', {patientId: id});
        }}>
        <Text style={globalStyles.CardText}>Tests</Text>
      </TouchableOpacity>
      <View style={styles.button}>
        <Button
          title="Add Test"
          onPress={() => {
            navigation.navigate('Test List', {patientId: id});
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.Card}
        onPress={() => {
          navigation.navigate('inviteList', {patientId: id});
        }}>
        <Text style={styles.CardText}>Share Patient</Text>
      </TouchableOpacity>
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
    padding: 10,
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
    fontSize: 20,
    borderBottomColor: '#007360',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    margin: 10,
  },
  Card: {
    width: '100%',
    backgroundColor: '#007360',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  CardText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});
