import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import * as action_types from '../../store/get_patient_details/actions';
import {Loader} from '../../components/Loader';

const PatientDetailView = ({
  navigation,
  get_patient_details,
  isLoading,
  patient_details,
  route,
}) => {
  console.log('route.params.patient_id');
  const patient_id = 1;
  useEffect(() => {
    get_patient_details({patient_id});
  }, [get_patient_details]);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <ScrollView>
          <View>
            <Text>
              {patient_details.firstName ? patient_details.firstName : '--'}
            </Text>
          </View>
        </ScrollView>
      )}
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
