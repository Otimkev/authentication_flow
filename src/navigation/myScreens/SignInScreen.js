import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {globalStyles} from '../../styles/Global';
import * as actionCreators from '../../model/user/authentication/Actions';
import {connect} from 'react-redux';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {primary_color, secondary_color} from '../../styles/color';

const SignInScreenView = ({navigation, signin}) => {
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .min(4, 'Minimum Length of 4')
      .required('Username is required'),
    password: yup
      .string()
      .min(4, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  return (
    <View style={globalStyles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          inovate.<Text>Inform</Text>.inspire
        </Text>
      </View>
      {/* <View>
        <Text style={styles.headerText}>
          inovate.<Text>Inform</Text>.inspire
        </Text>
      </View> */}
      <View style={styles.headerView}>
        <Text style={styles.headerViewText}>Welcome Back</Text>
      </View>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => signin(values)}>
        {({isValid, handleSubmit}) => (
          <>
            <Field
              component={CustomInput}
              name="email"
              placeholder="Username"
            />
            <Field
              component={CustomInput}
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <View>
              <CustomButton onPress={handleSubmit} disabled={!isValid} />
            </View>
          </>
        )}
      </Formik>
      <View style={styles.Row}>
        <View>
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Text
              style={styles.text}
              onPress={() => navigation.navigate('SignUpScreen')}>
              New? <Text style={styles.span}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state, props) => {
  const {isLoading, currentUser} = state.authentication;
  return {isLoading, currentUser};
};

const mapDispatchToProps = (dispatch, props) => ({
  signin: (args) => {
    dispatch(actionCreators.logInStart(args));
  },
});

const SignInScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInScreenView);

const styles = StyleSheet.create({
  header: {
    width: 170,
    height: 170,
    borderRadius: 120,
    left: 100,
    backgroundColor: 'red',
    transform: [{scaleX: 2}, {rotate: '15deg'}],
    marginBottom: 80,
  },
  headerText: {
    alignItems: 'center',
    justifyContent: 'center',
    left: 10,
    transform: [{rotate: '-15deg'}],
    fontStyle: 'normal',
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
    left: 120,
  },
  text: {
    color: secondary_color,
    fontWeight: 'bold',
  },
  forgot: {
    color: primary_color,
  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 20,
  },
  span: {
    color: primary_color,
    fontWeight: 'bold',
  },
});

export default SignInScreen;
