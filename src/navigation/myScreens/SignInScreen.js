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
import {globalStyles} from '../../styles/Global';
import * as actionCreators from '../../model/user/authentication/Actions';
import {connect} from 'react-redux';
import {login} from '../../utils/SocketEvents';

const SignInScreenView = ({navigation, signin, currentUser}) => {
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
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setUsername(text);
          }}
        />
        <TextInput
          placeholder="Password"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
      </View>

      <TouchableOpacity
        style={globalStyles.Button}
        onPress={() => {
          signin(userCredentials);
          //login(userCredentials);
        }}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

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
