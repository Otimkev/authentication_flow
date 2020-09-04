import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import LoginRepository from '../../httpClient/repository/login/LoginRepository';

const SignInScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const userCredentials = {
    email: username,
    password: password,
  };

  return (
    <View style={styles.loginContainer}>
      <View>
        <Image
          source={require('../../assets/img/Criticare_Logo.jpg')}
          style={styles.header}
        />
      </View>

      <View>
        <TextInput
          placeholder="Username"
          style={styles.inputContainer}
          onChangeText={(text) => {
            setUsername(text);
          }}
        />
        <TextInput
          placeholder="Password"
          style={styles.inputContainer}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        // onPress={() => navigation.navigate('Home')}>
        onPress={() => LoginRepository.postSigninData(userCredentials)}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text
          style={styles.text}
          onPress={() => navigation.navigate('SignUpScreen')}>
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
  inputContainer: {
    color: '#000',
    width: 300,
    height: 40,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#CCC',
    marginVertical: 5,
    borderRadius: 5,
  },
  loginBtn: {
    width: '60%',
    backgroundColor: '#7cb63b',
    borderRadius: 10,
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

export default SignInScreen;
