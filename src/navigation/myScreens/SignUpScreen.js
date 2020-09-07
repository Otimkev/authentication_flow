import 'react-native-gesture-handler';
import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from 'react-native';
import {AuthContext} from '../../../App';

const SignUpScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hospital, setHospital] = useState('');

  const {signUp} = useContext(AuthContext);

  const postUserData = {
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    email: email,
    facility: hospital,
    password: password,
  };

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.loginContainer}>
      <View>
        {/* <Image
          source={require('../assets/img/Criti30care_Logo.jpg')}
          style={styles.header}
        /> */}
      </View>

      <View>
        <TextInput
          placeholder="First Name"
          style={styles.inputContainer}
          onChangeText={(text) => {
            setFirstName(text);
          }}
          value={firstName}
        />
        <TextInput
          placeholder="Last Name"
          style={styles.inputContainer}
          onChangeText={(text) => {
            setLastName(text);
          }}
        />
        <TextInput
          placeholder="Email Address"
          style={styles.inputContainer}
          onChangeText={(text) => {
            setEmail(text);
          }}
        />
        <TextInput
          placeholder="Phone"
          style={styles.inputContainer}
          onChangeText={(text) => {
            setPhone(text);
          }}
        />
        <TextInput
          placeholder="Facility"
          style={styles.inputContainer}
          onChangeText={(text) => {
            setHospital(text);
          }}
        />
        <TextInput
          placeholder="Password"
          style={styles.inputContainer}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
        <TextInput
          placeholder="Retype Password"
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
        onPress={() => signUp(postUserData)}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text
          style={styles.text}
          onPress={() => navigation.navigate('SignInScreen')}>
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
    padding: 8,
    justifyContent: 'center',
  },
  header: {
    width: 50,
    marginBottom: 20,
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
    borderColor: '#7cb63b',
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
    alignItems: 'center',
  },
});

export default SignUpScreen;
