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

const SignUpScreenView = ({navigation, signup, token}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hospital, setHospital] = useState('');
  const [speciality, setSpeciality] = useState('Optician');

  const postUserData = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber,
    email: email,
    hospital: hospital,
    password: password,
    speciality: speciality,
  };
  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <ScrollView>
      <View style={styles.loginContainer}>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>First Name</Text>
          <TextInput
            //placeholder="First Name"
            style={globalStyles.TextInput}
            autoCapitalize="words"
            onChangeText={(text) => {
              setFirstName(text);
            }}
            value={firstName}
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>Last Name</Text>
          <TextInput
            //placeholder="Last Name"
            style={globalStyles.TextInput}
            autoCapitalize="words"
            onChangeText={(text) => {
              setLastName(text);
            }}
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>Email Address</Text>
          <TextInput
            //placeholder="Email Address"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setEmail(text);
            }}
            keyboardType="email-address"
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>Phone</Text>
          <TextInput
            //placeholder="Phone"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setPhoneNumber(text);
            }}
            keyboardType="phone-pad"
            maxLength={10}
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>Speciality</Text>
          <TextInput
            //placeholder="Facility"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setSpeciality(text);
            }}
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>Facility</Text>
          <TextInput
            //placeholder="Facility"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setHospital(text);
            }}
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>Password</Text>
          <TextInput
            //placeholder="Password"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setPassword(text);
            }}
            keyboardType="visible-password"
            maxLength={10}
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>Retype Password</Text>
          <TextInput
            //placeholder="Retype Password"
            style={globalStyles.TextInput}
            keyboardType="visible-password"
            maxLength={10}
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
          onPress={() => {
            showToast('Sign in');
            signup(postUserData);
            console.log(`User token -> ${token}`);
          }}>
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
