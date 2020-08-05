import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import InputComponent from '../components/InputComponent';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.loginContainer}>
      <View style={styles.inputContainer}>
        <InputComponent placeholderText="Username" />
        <InputComponent placeholderText="Password" />
      </View>
      <View style={styles.loginBtnContainer}>
        <Button title="Login" onPress={() => navigation.navigate('Home')} />
      </View>
      <View>
        <Text style={styles.text} onPress={() => navigation.navigate('SignUp')}>
          Don't have an account? Sign up.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  loginText: {
    fontSize: 24,
  },
  loginBtnContainer: {
    width: 200,
  },
  text: {
    color: '#CCC',
    marginTop: 10,
  },
});

export default LoginScreen;
