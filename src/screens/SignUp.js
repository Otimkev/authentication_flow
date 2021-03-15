import React from 'react';

import {connect} from 'react-redux';

import AppButton from '../components/AppButton';

import * as actions from '../store/actions';

import 'react-native-gesture-handler';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {globalStyles} from '../styles/Global';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import CustomInput from '../components/CustomInput';
import {secondary_color, primary_color} from '../styles/color';

const SignUpScreen = ({navigation, signUp, signUpError, user}) => {
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
      .max(14, ({max}) => `Phone Number Shouldnt exceed ${max} characters`)
      .required('Phone number is required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email is required'),
    hospital: yup.string().required('Your Hospital is required'),
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
      .required('Please repeat your Password'),
  });
  console.log('COMPOONET', user)
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          innovate.<Text style={styles.span}>Inform</Text>.inspire
        </Text>
      </View>
      <View style={styles.headerView}>
        <Text style={styles.headerViewText}>Get Started</Text>
      </View>
      <View style={styles.headerView}>
        <Text style={styles.headerTextError}>
          {!signUpError ? '' : `${signUpError}`}
        </Text>
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
              hospital: '',
              password: '',
              confirmPassword: '',
            }}
            onSubmit={(values) => signUp(values)}>
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
                  name="hospital"
                  placeholder="hospital"
                />
                <Field
                  component={CustomInput}
                  name="password"
                  placeholder="Password"
                  secureTextEntry
                />
                <Field
                  component={CustomInput}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  secureTextEntry
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
                  <AppButton
                    title="SIGN UP"
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

const mapStateToProps = (state) => {
  const {user, isAuthenticating, signUpError} = state.auth;
  return {
    user,
    isAuthenticating,
    signUpError,
  };
};

export default connect(mapStateToProps, actions)(SignUpScreen);

const styles = StyleSheet.create({
  text: {
    color: primary_color,
    fontWeight: 'bold',
    fontSize: 16,
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
  headerTextError: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
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
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonStyle: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    height: 45,
    backgroundColor: primary_color,
  },
  headerViewText: {
    fontSize: 30,
    color: primary_color,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    textAlign: 'center',
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
