import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {globalStyles} from '../../styles/Global';
import * as actionCreators from '../../model/user/authentication/Actions';
import {connect} from 'react-redux';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import CustomInput from '../../components/CustomInput';

const SignInScreenView = ({navigation, signin, currentUser}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const userCredentials = {
    email: username,
    password: password,
  };

  const loginValidationSchema = yup.object().shape({
    username: yup
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
      <View style={styles.headerView}>
        <Image
          source={require('../../assets/img/Crit.png')}
          style={styles.header}
        />
      </View>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{
          fullName: '',
          confirmPassword: '',
        }}
        onSubmit={(values) => console.log(values)}>
        {({isValid}) => (
          <>
            <Field
              component={CustomInput}
              name="username"
              placeholder="Username"
              // onChange={(text) => {
              //   setUsername(text);
              // }}
            />
            <Field
              component={CustomInput}
              name="password"
              placeholder="Password"
              secureTextEntry
              // onChange={(text) => {
              //   setPassword(text);
              // }}
            />
            <TouchableOpacity
              style={globalStyles.Button}
              onPress={() => {
                signin(userCredentials);
              }}
              disabled={!isValid}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={styles.text}
          onPress={() => navigation.navigate('SignUpScreen')}>
          Don't have an account? Sign up Here.
        </Text>
      </TouchableOpacity>
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
    width: 500,
    marginBottom: 60,
  },
  loginText: {
    fontSize: 24,
    color: '#fff',
  },
  text: {
    color: '#aaae',
    marginTop: 10,
  },
  forgot: {
    color: '#aaae',
    fontSize: 11,
    marginTop: 40,
  },
});

export default SignInScreen;
