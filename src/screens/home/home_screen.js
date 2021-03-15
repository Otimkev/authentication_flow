import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import * as action_types from '../../store/get_patient_details/actions';
import {Loader} from '../../components/Loader';
import AppButton from '../../components/AppButton';
import {globalStyles} from '../../styles/Global';
import {primary_color, secondary_color} from '../../styles/color';

const PatientDetailView = ({
  navigation,
  get_patient_details,
  isLoading,
  patient_details,
  route,
}) => {
  const patient_id = route.params.patient_id;
  useEffect(() => {
    get_patient_details({patient_id});
  }, [get_patient_details, patient_id]);
  return (
    <View style={globalStyles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <ScrollView>
          <View style={globalStyles.container}>
            <View style={styles.block}>
              <Text style={styles.label}>Name: </Text>
              <Text style={styles.info}>
                {patient_details.firstName} {patient_details.lastName}
              </Text>
            </View>
            <View style={styles.block}>
              <Text style={styles.label}>Age: </Text>
              <Text style={styles.info}>{patient_details.dateOfBirth}</Text>
            </View>
            <View style={styles.block}>
              <Text style={styles.label}>Contact: </Text>
              <Text style={styles.info}>{patient_details.phoneNumber}</Text>
            </View>
            <View style={styles.block}>
              <Text style={styles.label}>Gender: </Text>
              <Text style={styles.info}>{patient_details.gender}</Text>
            </View>
            <View style={styles.block}>
              <Text style={styles.label}>Address: </Text>
              <Text style={styles.info}>{patient_details.address}</Text>
            </View>
            <View style={styles.block}>
              <Text style={styles.label}>Marital Status: </Text>
              <Text style={styles.info}>{patient_details.maritalStatus}</Text>
            </View>
            <View style={styles.block}>
              <Text style={styles.label}>Next of Name: </Text>
              <Text
                style={
                  styles.info
                }>{`${patient_details.emergencyFirstName} ${patient_details.emergencyLastName}`}</Text>
            </View>
            <View style={styles.block}>
              <Text style={styles.label}>Next of Kin Contact: </Text>
              <Text style={styles.info}>
                {patient_details.emergencyPhoneNumber}
              </Text>
            </View>
            <View style={styles.block}>
              <Text style={styles.label}>Relationship: </Text>
              <Text style={styles.info}>{patient_details.relationship}</Text>
            </View>
            <View style={styles.block}>
              <Text style={styles.label}>Patient's Ward: </Text>
              <Text style={styles.info}>General Ward</Text>
            </View>
            <View style={styles.block}>
              <Text style={styles.label}>Ward Bed: </Text>
              <Text style={styles.info}>5464lj</Text>
            </View>
          </View>
        </ScrollView>
      )}
      <AppButton
        onPress={() => {
          navigation.navigate('view_patient_category_tests', {
            patient_id: patient_id,
          });
        }}
        buttonStyle={styles.buttonStyle}
        title="view tests"
      />
    </View>
  );
};

const mapStateToProps = (state, props) => {
  return state.get_patients_details_reducer;
};

const mapDispatchToProps = (dispatch, props) => ({
  get_patient_details: (patient_id) => {
    dispatch(action_types.get_patients_details(patient_id));
  },
});

const PatientDetail = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PatientDetailView);
export default PatientDetail;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'column',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },
  buttonStyle: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    height: 45,
    backgroundColor: primary_color,
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
    backgroundColor: 'red',
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
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  label: {
    fontSize: 16,
    width: 180,
  },
  info: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    alignItems: 'center',
  },
});
