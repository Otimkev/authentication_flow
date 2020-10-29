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
} from 'react-native';
import {globalStyles} from '../../styles/Global';
import * as actionCreators from '../../model/user/authentication/Actions';
import {SIGNUP_RESONSE} from '../../utils/Constants';
import {connect} from 'react-redux';

const SignUpScreenView = ({navigation, isLoading, token, user, signup}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hospital, setHospital] = useState('');

  const postUserData = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email,
    facility: hospital,
    password: password,
  };
  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.loginContainer}>
      <Image
        source={require('../../assets/img/Criticare_Logo.jpg')}
        style={styles.header}
      />
      <View>
        <TextInput
          placeholder="First Name"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setFirstName(text);
          }}
          value={firstName}
        />
        <TextInput
          placeholder="Last Name"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setLastName(text);
          }}
        />
        <TextInput
          placeholder="Email Address"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setEmail(text);
          }}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Phone"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setPhoneNumber(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Facility"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setHospital(text);
          }}
        />
        <TextInput
          placeholder="Password"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setPassword(text);
          }}
          keyboardType="visible-password"
        />
        <TextInput
          placeholder="Retype Password"
          style={globalStyles.inputContainer}
          keyboardType="visible-password"
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>
          By tapping the SignUp button, You have agreed to our Terms and
          Conditions.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={globalStyles.Button}
        onPress={() => signup(postUserData)}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={styles.text}
          onPress={() => navigation.navigate('SignInScreen')}>
          Have an account Already? Sign In Here.
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state, props) => {
  const {isLoading, token, user} = state.authentication;
  return {isLoading, token, user};
};

const mapDispatchToProps = (dispatch, props) => ({
  signup: (args) => {
    dispatch(actionCreators.signupResponse(args));
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
    backgroundColor: '#fff',
    padding: 8,
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
});
