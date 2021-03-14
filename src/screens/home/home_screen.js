import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import * as action_types from '../../store/get_patient_details/actions';
import {Loader} from '../../components/Loader';
import AppButton from '../../components/AppButton';

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
    <View style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <ScrollView>
          <View>
            <Text>
              {patient_details.firstName ? patient_details.firstName : '--'}
            </Text>
            <AppButton
              onPress={() => {
                navigation.navigate('Share', {patient_id: patient_id});
              }}
              icon={{name: 'exit-to-app'}}
              buttonStyle={styles.buttonStyle}
              title="share"
            />
            <AppButton
              onPress={() => {
                navigation.navigate('view_patient_category_tests', {
                  patient_id: patient_id,
                });
              }}
              icon={{name: 'exit-to-app'}}
              buttonStyle={styles.buttonStyle}
              title="view tests"
            />
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
