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
import {Icon} from 'react-native-vector-icons/FontAwesome';

const SignInScreenView = ({navigation, signin, currentUser}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const userCredentials = {
    email: username,
    password: password,
  };

  return (
    <View style={styles.loginContainer}>
      <View style={styles.headerView}>
        <Image
          source={require('../../assets/img/Crit.png')}
          style={styles.header}
        />
      </View>

      <View style={globalStyles.fieldSet}>
        <Text style={globalStyles.legend2}>Username</Text>
        <TextInput
          //placeholder="Username"
          style={globalStyles.TextInput}
          autoCompleteType="email"
          onChangeText={(text) => {
            setUsername(text);
          }}
        />
      </View>
      <View style={globalStyles.fieldSet}>
        <Text style={globalStyles.legend2}>Password</Text>
        <TextInput
          //placeholder="Password"
          style={globalStyles.TextInput}
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
    //backgroundColor: '#fff',
    justifyContent: 'center',
  },
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
