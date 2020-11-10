import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Button,
  ToastAndroid,
} from 'react-native';
import {globalStyles} from '../../../../styles/Global';
import * as actions from '../../../../model/test/addTest/Actions';
import {connect} from 'react-redux';

const ThyroidScreenView = ({navigation, route, createTest, addTestData}) => {
  const [TSH_T4_T3, setTSH_T4_T3] = useState('');
  const [TSH, setTSH] = useState('');
  const [T4, setT4] = useState('');
  const [T3, setT3] = useState('');
  const [thyroidAb, setThyroidAb] = useState('');

  const label = route.params.label;
  const patientId = route.params.patientId;
  const testData = {
    TSH_T4_T3,
    TSH,
    T4,
    T3,
    thyroidAb,
    testCategory: label,
  };

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.loginContainer}>
      <View>
        <TextInput
          placeholder="TSH/T4 and T3"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setTSH_T4_T3(text);
          }}
        />
        <TextInput
          placeholder="TSH"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setTSH(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="T4"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setT4(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="T3 (free tri-iodothyronine)"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setT3(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Thyroid Ab"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setThyroidAb(text);
          }}
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Submit"
          onPress={() => {
            createTest(patientId, testData);
            console.log(addTestData);
            showToast('Successful');
            navigation.navigate('Patient Information');
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Back"
          onPress={() => {
            navigation.navigate('Test List');
          }}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state, props) => {
  const {addTestData} = state.addTest;
  return {addTestData};
};

const mapDispatchToProps = (dispatch, props) => ({
  createTest: (args1, args2) => {
    dispatch(actions.addTestResponse(args1, args2));
  },
});

const ThyroidScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ThyroidScreenView);

export default ThyroidScreen;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
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
  button: {
    margin: 10,
  },
});
