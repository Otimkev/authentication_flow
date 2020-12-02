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

const AllergyScreenView = ({navigation, route, createTest, addTestData}) => {
  const [glucoseFasting, setGlucoseFasting] = useState('');
  const [glucoseRandom, setGlucoseRandom] = useState('');
  const [gtt2Hr75gStandard, setGtt2Hr75gStandard] = useState('');
  const [hba1cGlycosylatedHB, setHba1cGlycosylatedHB] = useState('');
  const [microalbumin, setMicroalbumin] = useState('');
  const label = route.params.label;
  const patientId = route.params.patientId;
  const testData = {
    glucoseFasting,
    glucoseRandom,
    gtt2Hr75gStandard,
    hba1cGlycosylatedHB,
    microalbumin,
    testCategory: label,
  };

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.loginContainer}>
      <View>
        <TextInput
          placeholder="GlucoseFasting"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setGlucoseFasting(text);
          }}
        />
        <TextInput
          placeholder="GlucoseRandom"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setGlucoseRandom(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Gtt2Hr75gStandard"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setGtt2Hr75gStandard(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Hba1cGlycosylatedHB"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setHba1cGlycosylatedHB(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Microalbumin"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setMicroalbumin(text);
          }}
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Submit"
          color="#007360"
          onPress={() => {
            createTest(patientId, testData);
            console.log(addTestData);
            showToast('Successful');
            navigation.navigate('Patient Information');
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

const AllergyScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllergyScreenView);

export default AllergyScreen;

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
