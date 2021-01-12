import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ToastAndroid,
  Image,
  ScrollView,
} from 'react-native';
import {globalStyles} from '../../styles/Global';
import * as actionCreators from '../../model/user/authentication/Actions';
import {SIGNUP_RESONSE} from '../../utils/Constants';
import {connect} from 'react-redux';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {secondary_color, primary_color} from '../../styles/color';

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
      .matches(/^[0-9]*$/, 'Enter a valid phone number')
      .min(10, ({min}) => `Phone Number must be at least ${min} characters`)
      .max(14, ({max}) => `Phone Number Shouldnt exceed ${max} characters`)
      .required('Phone number is required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email is required'),
    address: yup.string().required('Your Address is required'),
    speciality: yup.string().required('What is your speciality?'),
    facility: yup.string().required('Your Facility or Hospital is required'),
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
    // confirmPassword: yup
    //   .string()
    //   .oneOf([yup.ref('password')], 'Passwords do not match')
    //   .required('Please repeat your Password'),
  });

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          inovate.<Text style={styles.span}>Inform</Text>.inspire
        </Text>
      </View>
      <View style={styles.headerView}>
        <Text style={styles.headerViewText}>Get Started</Text>
      </View>
      <ScrollView>
        <View>
          <Formik
            validationSchema={signUpValidationSchema}
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              phoneNumber: '',
              address: 'Muyenga, Kampala',
              speciality: 'Cardiologist',
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
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.lowerText}>
        <Text
          style={styles.text}
          onPress={() => navigation.navigate('SignInScreen')}>
          <Text style={styles.span}>Have an account Already? </Text>
          Sign In.
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
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
    width: 200,
    fontSize: 30,
    color: primary_color,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    textAlign: 'center',
    left: 135,
  },
});
