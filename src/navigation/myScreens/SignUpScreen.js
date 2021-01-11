import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  Image,
  ScrollView,
  _ScrollView,
} from 'react-native';
import {globalStyles} from '../../styles/Global';
import * as actionCreators from '../../model/user/authentication/Actions';
import {SIGNUP_RESONSE} from '../../utils/Constants';
import {connect} from 'react-redux';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {primary_color, secondary_color} from '../../styles/color';

const SignUpScreenView = ({navigation, signup, token}) => {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [hospital, setHospital] = useState('');
  // const [speciality, setSpeciality] = useState('Optician');

  // const postUserData = {
  //   firstName: firstName,
  //   lastName: lastName,
  //   phoneNumber: phoneNumber,
  //   email: email,
  //   hospital: hospital,
  //   password: password,

  //   speciality: speciality,
  // };
  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };
  const signUpValidationSchema = yup.object().shape({
    firstName: yup
      .string()
      .matches(/^[A-Za-z]+$/, 'Name Must be in Alphabet Characters')
      .min(2, ({min}) => `Password must be at least ${min} characters`)
      .required('First Name is required'),
    lastName: yup
      .string()
      .matches(/^[A-Za-z]+$/, 'Name Must be in Alphabet Characters')
      .min(2, ({min}) => `Password must be at least ${min} characters`)
      .required('Last Name is required'),
    phoneNumber: yup
      .string()
      .matches(/(01)(\d){8}\b/, 'Enter a valid phone number')
      .required('Phone number is required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email is required'),
    address: yup
      .string()
      .matches(/(\w.+\s).+/, 'Enter at least 2 Characters')
      .required('Full name is required'),
    speciality: yup
      .string()
      .matches(/(\w.+\s).+/, 'Enter at least 2 Characters')
      .required('Full name is required'),
    facility: yup
      .string()
      .matches(/(\w.+\s).+/, 'Enter at least 2 Characters')
      .required('Full name is required'),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        'Password must have a special character',
      )
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Confirm password is required'),
  });

  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <Formik
          validationSchema={signUpValidationSchema}
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            address: 'Muyenga, Kampala',
            speciality: '',
            facility: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={(values) => signup(values)}>
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
                name="email"
                placeholder="Email Address"
                keyboardType="email-address"
              />
              <Field
                component={CustomInput}
                name="phoneNumber"
                placeholder="Phone Number"
                keyboardType="numeric"
              />
              <Field
                component={CustomInput}
                name="Address"
                placeholder="Address"
              />
              <Field
                component={CustomInput}
                name="speciality"
                placeholder="Speciality"
              />
              <Field
                component={CustomInput}
                name="facility"
                placeholder="Facility"
              />
              <Field
                component={CustomInput}
                name="passowrd"
                placeholder="Password"
                secureTextEntry
              />
              <Field
                component={CustomInput}
                name="confirmPassword"
                placeholder="Confirm Password"
                secureTextEntry
              />

              <View>
                <CustomButton onPress={handleSubmit} disabled={!isValid} />
              </View>
            </>
          )}
        </Formik>
        <TouchableOpacity style={styles.lowerText}>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate('SignInScreen')}>
            <Text style={styles.span}>Have an account Already? </Text>
            Sign In.
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state, props) => {
  const {isLoading, currentUser} = state.authentication;
  return {isLoading, currentUser};
};

const mapDispatchToProps = (dispatch, props) => ({
  signup: (args) => {
    dispatch(actionCreators.registerStart(args));
  },
});

const SignUpScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpScreenView);

export default SignUpScreen;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    //backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'center',
  },
  header: {
    width: 300,
    marginBottom: 10,
  },
  loginText: {
    fontSize: 24,
    color: '#fff',
  },
  TextInput: {
    paddingHorizontal: 10,
    color: '#026062',
    fontWeight: 'normal',
    fontSize: 20,
  },
  forgot: {
    color: '#aaae',
    fontSize: 11,
    textAlign: 'center',
  },
  text: {
    color: '#007360',
  },
  span: {
    color: secondary_color,
  },
  lowerText: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
