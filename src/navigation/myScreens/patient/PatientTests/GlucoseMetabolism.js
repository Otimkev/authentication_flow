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

const GlucoseMetabolismScreenView = ({
  navigation,
  route,
  createTest,
  addTestData,
}) => {
  const [glucoseFasting, setGlucoseFasting] = useState('');
  const [glucoseRandom, setGlucoseRandom] = useState('');
  const [gtt2Hr75gStandard, setGtt2Hr75gStandard] = useState('');
  const [hba1cGlycosylatedHB, setHba1cGlycosylatedHB] = useState('');
  const [microalbumin, setMicroalbumin] = useState('');
  const label = route.params.category;
  const patientId = route.params.patientId;
  console.log(patientId);
  const testData = {
    glucoseFasting,
    glucoseRandom,
    gtt2Hr75gStandard,
    hba1cGlycosylatedHB,
    microalbumin,
    category: label,
  };

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.loginContainer}>
      <View>
        <TextInput
          placeholder="Glucose - Fasting"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setGlucoseFasting(text);
          }}
        />
        <TextInput
          placeholder="Glucose - Random"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setGlucoseRandom(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="GTT 2hr 75g - standard"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setGtt2Hr75gStandard(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="HBA1C/Glycosylated Hb"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setHba1cGlycosylatedHB(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Microalbumin - urine"
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
          onPress={() => {
            createTest(patientId, testData);
            console.log(addTestData);
            showToast('Successful');
            navigation.goBack();
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Back"
          onPress={() => {
            navigation.goBack();
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

const GlucoseMetabolismScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GlucoseMetabolismScreenView);

export default GlucoseMetabolismScreen;

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
