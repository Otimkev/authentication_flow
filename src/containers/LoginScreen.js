import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import InputComponent from '../components/InputComponent';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.loginContainer}>
      <View>
        <Image
          source={require('../assets/img/Criticare_Logo.jpg')}
          style={styles.header}
        />
      </View>

      <View style={styles.inputContainer}>
        <InputComponent placeholderText="Username" />
        <InputComponent placeholderText="Password" />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.text} onPress={() => navigation.navigate('SignUp')}>
          Don't have an account? Sign up.
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
    marginBottom: 60,
  },
  loginText: {
    fontSize: 24,
    color: '#fff',
  },
  loginBtn: {
    width: '60%',
    backgroundColor: '#006400',
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
    marginTop: 40,
  },
});

export default LoginScreen;
