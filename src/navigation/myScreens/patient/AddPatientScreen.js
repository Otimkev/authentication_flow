import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Button,
  Platform,
  View,
} from 'react-native';
import CardView from 'react-native-cardview';
import {globalStyles} from '../../../styles/Global';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-community/picker';
import * as actionCreators from '../../../model/patient/addPatient/Actions';
import {connect} from 'react-redux';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import CustomInput from '../../../components/CustomInput';
import CustomButton from '../../../components/CustomButton';
import {secondary_color, primary_color} from '../../../styles/color';

const AddPatientScreenView = ({
  navigation,
  createPatient,
  responseData,
  isAddPatientLoading,
}) => {
  // const [date, setDate] = useState(new Date(1598051730000));
  // const [mode, setMode] = useState('date');
  // const [show, setShow] = useState(false);

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date;
  //   setShow(Platform.OS === 'ios');
  //   setDate(currentDate);
  // };

  // const showMode = (currentMode) => {
  //   setShow(true);
  //   setMode(currentMode);
  // };

  // const showDatepicker = () => {
  //   showMode('date');
  // };

  // const showTimepicker = () => {
  //   showMode('time');
  // };
  // const [gender, setGender] = useState('');
  // const [maritalStatus, setMaritalStatus] = useState('');
  // const [relationship, setRelationship] = useState('');

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
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>
          innovate.<Text style={styles.span}>Inform</Text>.inspire
        </Text>
      </View>
      <View style={styles.headerView}>
        <Text style={styles.headerViewText}>Add New Patient</Text>
      </View> */}
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
            onSubmit={(values) => createPatient(values)}>
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
                {/* <Picker
                  selectedValue={this.state.gender}
                  onValueChange={(itemValue, itemIndex) => ({
                    gender: itemValue,
                  })}
                  style={globalStyles.pickerContainer}>
                  <Picker.Item label="Gender" value="0" />
                  <Picker.Item label="Male" value="Male" />
                  <Picker.Item label="Female" value="Female" />
                </Picker>
                <View>
                  <RNDateTimePicker mode="date" value={new Date()} />
                </View> */}
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
                  placeholder="First Name"
                />
                <Field
                  component={CustomInput}
                  name="emergencyLastName"
                  placeholder="Last Name"
                />
                <Field
                  component={CustomInput}
                  name="emergencyPhoneNumber"
                  placeholder="Phone Number"
                  keyboardType="numeric"
                />
                <Field
                  component={CustomInput}
                  name="relationship"
                  placeholder="Relationship"
                />

                <View style={styles.termsView}>
                  <Text style={styles.termsText}>
                    By Clicking the Forward Button Below, You have agreed and
                    accepted our{' '}
                    <Text style={styles.termsHighlight}>
                      Terms and Conditions
                    </Text>
                    . Please Take some time and Read through them.
                  </Text>
                </View>

                <View>
                  <CustomButton onPress={handleSubmit} disabled={!isValid} />
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
      {/* <TouchableOpacity style={styles.lowerText}>
        <Text
          style={styles.text}
          onPress={() => navigation.navigate('SignInScreen')}>
          <Text style={styles.span}>Have an account Already? </Text>
          Sign In.
        </Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

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
  const {isAddPatientLoading, responseData} = state.addPatient;
  return {isAddPatientLoading, responseData};
};

const mapDispatchToProps = (dispatch, props) => ({
  createPatient: (args) => {
    dispatch(actionCreators.addPatientsResponse(args));
  },
});

export const AddPatientScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddPatientScreenView);
