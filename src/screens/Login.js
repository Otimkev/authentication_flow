import {connect} from 'react-redux';

import AppButton from '../components/AppButton';

import * as actions from '../store/actions';
import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {globalStyles} from '../styles/Global';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import CustomInput from '../components/CustomInput';
import {primary_color, secondary_color} from '../styles/color';

const SignInScreenView = ({navigation, login, loginError}) => {
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .min(4, 'Minimum Length of 4')
      .required('Username is required'),
    password: yup
      .string()
      .min(8, ({min}) => 'Password is Short.')
      .required('Password is required'),
  });
  console.log(loginError);
  return (
    <View style={globalStyles.container}>
      <View>
        {/* <Image
          source={require('../assets/img/Real-timeTemplate.jpg')}
          style={styles.middleText}
        /> */}
        {/* <Text style={styles.headerText}>
          inovate.<Text style={styles.text}>Inform</Text>.inspire
        </Text> */}
      </View>
      <View style={styles.headerView}>
        <Text style={styles.headerTextError}>
          {!loginError ? '' : `${loginError}`}
        </Text>
      </View>

      <View>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values) => login(values)}>
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
                <AppButton
                  title="LOGIN"
                  onPress={handleSubmit}
                  disabled={false}
                  buttonStyle={styles.buttonStyle}
                />
              </View>
            </>
          )}
        </Formik>
      </View>

      <View style={styles.Row}>
        <View>
          <TouchableOpacity>
            <Text style={styles.forgot} onPress={()=> navigation.navigate('ForgotPassword')}>Forgot Password?</Text>
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

const mapStateToProps = (state) => {
  const {user, isAuthenticating, loginError} = state.auth;
  return {
    user,
    isAuthenticating,
    loginError,
  };
};

export default connect(mapStateToProps, actions)(SignInScreenView);

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
    top: -140,
    fontSize: 20,
    color: primary_color,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  headerTextError: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  headerView: {
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
  buttonStyle: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    height: 45,
    backgroundColor: primary_color,
  },
  text: {
    color: secondary_color,
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgot: {
    color: primary_color,
    fontSize: 16,
  },
  Row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  span: {
    color: primary_color,
    fontWeight: 'bold',
  },
  middleText: {
    height: 260,
    width: 350,
  },
});
