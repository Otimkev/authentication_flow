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

const APatientScreenView = ({navigation, getAPatient, route, aPatient}) => {
  const id = route.params.patientId;
  const userId = route.params.userId;
  console.log(userId);
  useEffect(() => {
    getAPatient(id);
  }, [getAPatient, id]);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.block}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.info}>
          {aPatient.firstName + aPatient.lastName}
        </Text>
        {/* <Text style={styles.nameTxt}>Last Name: {aPatient.lastName}</Text>
        <Text style={styles.nameTxt}>Age: {aPatient.dateOfBirth}</Text>
        <Text style={styles.nameTxt}>Contact:{aPatient.phoneNumber}</Text>
        <Text style={styles.nameTxt}>Gender:{aPatient.gender}</Text>
        <Text style={styles.nameTxt}>BedId: {id}</Text> */}
      </View>
      <View style={styles.block}>
        <Text style={styles.label}>Age:</Text>
        <Text style={styles.info}>{aPatient.dateOfBirth}</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.label}>Contact:</Text>
        <Text style={styles.info}>{aPatient.phoneNumber}</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.label}>Gender:</Text>
        <Text style={styles.info}>Male</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.label}>Address</Text>
        <Text style={styles.info}>Muyenga</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.label}>Next of Kin Contact:</Text>
        <Text style={styles.info}>{aPatient.phoneNumber}</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.label}>Ward:</Text>
        <Text style={styles.info}>General Ward</Text>
      </View>
      <View style={styles.block}>
        <Text style={styles.label}>Ward Bed:</Text>
        <Text style={styles.info}>{id}</Text>
      </View>
      <TouchableOpacity
        style={globalStyles.Card}
        onPress={() => {
          navigation.navigate('Tests', {patientId: id});
        }}>
        <Text style={globalStyles.CardText}>Tests</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Card}
        onPress={() => {
          navigation.navigate('Test List', {patientId: id});
        }}>
        <Text style={styles.CardText}>Add Tests</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Card}
        onPress={() => {
          navigation.navigate('inviteList', {patientId: id});
        }}>
        <Text style={styles.CardText}>Share Patient</Text>
      </TouchableOpacity>
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
  block: {
    padding: 10,
    borderBottomColor: '#007360',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  label: {
    fontSize: 15,
    color: '#007360',
  },
  info: {
    fontSize: 20,
    color: '#7f0000',
    textTransform: 'uppercase',
  },
});
