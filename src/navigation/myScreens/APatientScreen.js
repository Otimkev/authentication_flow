import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as actionTypes from '../../utils/Constants';
import {addPatientsResponse} from '../../model/patient/addPatient/Actions';
import {getAPatientsResponse} from '../../model/patient/getAPatient/Actions';
import {connect} from 'react-redux';
import {Picker} from '@react-native-community/picker';
import {globalStyles} from '../../styles/Global';
import { primary_color } from '../../styles/color';
import Icon from 'react-native-vector-icons/Fontisto';

const APatientScreenView = ({navigation, getAPatient, route, aPatient}) => {
  const id = route.params.patientId;
  const userId = route.params.userId;
  console.log(aPatient);
  useEffect(() => {
    getAPatient(id);
  }, [getAPatient, id]);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.block}>
        <Text style={styles.label}>Name: </Text>
        <Text style={styles.info}>
          {aPatient.firstName} {aPatient.lastName}
        </Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.label}>Age: </Text>
        <Text style={styles.info}>{aPatient.dateOfBirth}</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.label}>Contact: </Text>
        <Text style={styles.info}>{aPatient.phoneNumber}</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.label}>Gender: </Text>
        <Text style={styles.info}>{aPatient.gender}</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.label}>Address: </Text>
        <Text style={styles.info}>{aPatient.address}</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.label}>Marital Status: </Text>
        <Text style={styles.info}>{aPatient.maritalStatus}</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.label}>Next of Name: </Text>
        <Text
          style={
            styles.info
          }>{`${aPatient.emergencyFirstName} ${aPatient.emergencyLastName}`}</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.label}>Next of Kin Contact: </Text>
        <Text style={styles.info}>{aPatient.emergencyPhoneNumber}</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.label}>Relationship: </Text>
        <Text style={styles.info}>{aPatient.relationship}</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.label}>Patient's Ward: </Text>
        <Text style={styles.info}>General Ward</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.label}>Ward Bed: </Text>
        <Text style={styles.info}>{id}</Text>
      </View>
      <View style={globalStyles.Row}>
        <TouchableOpacity
          style={globalStyles.ButtonRow}
          onPress={() => {
            navigation.navigate('Test Category', {patientId: id});
          }}>
          <Text style={globalStyles.ButtonText}>VIEW TESTS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalStyles.ButtonRow}
          onPress={() => {
            navigation.navigate('SpecialistList', {patientId: id});
          }}>
          <Text style={globalStyles.ButtonText}>SHARE</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    //backgroundColor: '#fff',
    flex: 1,
    padding: 10,
    borderWidth: 2,
    borderColor: '#78af38',
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
    backgroundColor: '#78af38',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  CardText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  block: {
    padding: 10,
    // borderBottomColor: '#007360',
    // borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 4,
  },
  label: {
    fontSize: 15,
    width: 150,
    color: '#007360',
  },
  info: {
    fontSize: 17,
    color: '#007360',
    //color: 'black',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    alignItems: 'center',
  },
});
