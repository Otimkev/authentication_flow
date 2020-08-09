import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import InputComponent from '../components/InputComponent';

const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.loginContainer}>
      <View>
        <Image
          source={require('../assets/img/Criticare_Logo.jpg')}
          style={styles.header}
        />
      </View>

      <View>
        <InputComponent
          placeholderText="First Name"
          style={styles.inputContainer}
        />
        <InputComponent
          placeholderText="Other Name"
          style={styles.inputContainer}
        />
        <InputComponent
          placeholderText="Email Address"
          style={styles.inputContainer}
        />
        <InputComponent
          placeholderText="Facility/Hospital"
          style={styles.inputContainer}
        />
        <InputComponent
          placeholderText="Password"
          style={styles.inputContainer}
        />
        <InputComponent
          placeholderText="Retype Password"
          style={styles.inputContainer}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>
          By tapping the SignUp button, You have agreed to our Terms and
          Conditions.
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.text} onPress={() => navigation.navigate('Login')}>
          Already have an account? Login.
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  header: {
    width: 300,
    marginBottom: 20,
  },
  loginText: {
    fontSize: 24,
    color: '#fff',
  },
  inputContainer: {
    color: '#fff',
  },
  loginBtn: {
    width: '60%',
    backgroundColor: '#2F4F4F',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    color: '#aaae',
    marginTop: 10,
  },
  forgot: {
    color: '#aaae',
    fontSize: 11,
  },
});

export default SignupScreen;
