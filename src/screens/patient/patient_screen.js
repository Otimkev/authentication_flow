import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, SafeAreaView, View} from 'react-native';
import {globalStyles} from '../../styles/Global';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-community/picker';

import {connect} from 'react-redux';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import CustomInput from '../../components/CustomInput';
import {showToast} from '../../components/Toast';
import {secondary_color, primary_color} from '../../styles/color';
import axios from 'axios';
import {API_URL} from '../../utils/config';
import AppButton from '../../components/AppButton';
import * as action_types from '../../store/register_patient/actions';
import {index_patients} from '../../store/patients/actions';

class RegisterPatientScreenView extends React.PureComponent {
  // firstName: 'sam',
  // lastName: 'walter',
  // gender: 'male',
  // dateOfBirth: '1/2/1989',
  // maritalStatus: 'single',
  // phoneNumber: 1705055589,
  // address: 'hoima',
  // emergencyFirstName: 'walter',
  // emergencyLastName: 'pink',
  // emergencyPhoneNumber: 2705066789,
  // relationship: 'friend',
  // email: 'sppoopiiiooo.com',

  on_Submit = async (params) => {
    try {
      const response = await axios.post(
        `${API_URL}register-patient/${4}/`,
        params,
      );

      if (response.data["success"] === false) {
        alert('Error registering!');
        return null;
      }
      this.setState({});
      this.props.reload_index_patient();
      return this.props.navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const signUpValidationSchema = yup.object().shape({
      firstName: yup
        .string()
        .matches(/^[A-Za-z]+$/, 'Name Must be in Alphabet Characters')
        .min(2, ({min}) => `Name must be at least ${min} characters`)
        .required('First Name is required'),
      lastName: yup
        .string()
        .matches(/^[A-Za-z]+$/, 'Name Must be in Alphabet Characters')
        .min(2, ({min}) => `Name must be at least ${min} characters`)
        .required('Last Name is required'),
      phoneNumber: yup
        .string()
        .matches(/^[0-9]*$/, 'Enter a valid phone number')
        .min(10, ({min}) => `Phone Number must be at least ${min} characters`)
        .max(14, ({max}) => `Phone Number shouldn't exceed ${max} characters`)
        .required('Phone number is required'),
      address: yup
        .string()
        .min(2, ({min}) => `Address must be at least ${min} characters`)
        .required('First Name is required'),
      gender: yup.string().required('Select a Gender'),
      dateOfBirth: yup.string().required('Select Date of Birth'),
      maritalStatus: yup.string().required('Select appropriate Option'),
      relationship: yup.string().required('Select appropriate relationship'),
      email: yup.string().email('Please enter valid email'),
      emergencyFirstName: yup
        .string()
        .matches(/^[A-Za-z]+$/, 'Name Must be in Alphabet Characters')
        .min(2, ({min}) => `Name must be at least ${min} characters`)
        .required('Emergency Contact First Name is required'),
      emergencyLastName: yup
        .string()
        .matches(/^[A-Za-z]+$/, 'Name Must be in Alphabet Characters')
        .min(2, ({min}) => `Name must be at least ${min} characters`)
        .required('Emergency Contact Last Name is required'),
      emergencyPhoneNumber: yup
        .string()
        .matches(/^[0-9]*$/, 'Enter a valid phone number')
        .min(10, ({min}) => `Phone Number must be at least ${min} characters`)
        .max(14, ({max}) => `Phone Number shouldn't exceed ${max} characters`)
        .required('Emergency Contact Phone number is required'),
    });
    return (
      <SafeAreaView style={globalStyles.container}>
        <ScrollView>
          <View>
            <Formik
              validationSchema={signUpValidationSchema}
              initialValues={{
                firstName: '',
                lastName: '',
                gender: '',
                dateOfBirth: '',
                maritalStatus: '',
                phoneNumber: '',
                address: '',
                emergencyFirstName: '',
                emergencyLastName: '',
                emergencyPhoneNumber: '',
                relationship: '',
                email: '',
              }}
              onSubmit={(values) => this.on_Submit(values)}>
              {({handleSubmit, isValid}) => (
                <>
                  <Field
                    component={CustomInput}
                    name="firstName"
                    placeholder="First Name"
                  />
                  <Field
                    component={CustomInput}
                    name="lastName"
                    placeholder="Last Name"
                  />

                  <Field
                    component={CustomInput}
                    name="phoneNumber"
                    placeholder="Phone Number"
                    keyboardType="numeric"
                  />
                  <Field
                    component={CustomInput}
                    name="dateOfBirth"
                    placeholder="Date of Birth"
                  />
                  <Field
                    component={CustomInput}
                    name="gender"
                    placeholder="Gender"
                  />
                  <Field
                    component={CustomInput}
                    name="maritalStatus"
                    placeholder="Marital Status"
                  />
                  <Field
                    component={CustomInput}
                    name="address"
                    placeholder="Address"
                  />
                  <Field
                    component={CustomInput}
                    name="email"
                    placeholder="Email Address"
                    keyboardType="email-address"
                  />
                  <Field
                    component={CustomInput}
                    name="emergencyFirstName"
                    placeholder="Next of kin First Name"
                  />
                  <Field
                    component={CustomInput}
                    name="emergencyLastName"
                    placeholder="Next of kin Last Name"
                  />
                  <Field
                    component={CustomInput}
                    name="emergencyPhoneNumber"
                    placeholder="Next of kin Phone Number"
                    keyboardType="numeric"
                  />
                  <Field
                    component={CustomInput}
                    name="relationship"
                    placeholder="Relationship with Next of kin"
                  />

                  <View>
                    <AppButton
                      title="Register"
                      onPress={handleSubmit}
                      disabled={!isValid}
                      buttonStyle={styles.buttonStyle}
                    />
                  </View>
                </>
              )}
            </Formik>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: primary_color,
    fontWeight: 'bold',
  },
  span: {
    color: secondary_color,
  },
  lowerText: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginBottom: 10,
  },
  headerText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontStyle: 'normal',
    fontSize: 20,
    color: primary_color,
    textAlign: 'center',
    marginTop: 40,
    fontWeight: 'bold',
  },
  headerView: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    textAlign: 'center',
  },
  headerViewText: {
    width: 300,
    fontSize: 30,
    color: primary_color,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    textAlign: 'center',
    left: 135,
  },
  buttonStyle: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    height: 45,
    backgroundColor: primary_color,
  },
  termsText: {
    color: 'grey',
    textAlign: 'center',
    padding: 10,
  },
  termsHighlight: {
    color: primary_color,
  },
});

const mapStateToProps = (state, props) => {
  return state.register_patient_reducer;
};

const mapDispatchToProps = (dispatch, props) => ({
  register_patient: (patient_data) => {
    dispatch(action_types.register_patient(patient_data));
  },
  reload_index_patient: () => {
    dispatch(index_patients());
  },
});

const RegisterPatient = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterPatientScreenView);
export default RegisterPatient;
