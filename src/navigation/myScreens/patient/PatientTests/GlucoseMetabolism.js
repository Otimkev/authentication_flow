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
  const testData = {
    glucoseFasting,
    glucoseRandom,
    gtt2Hr75gStandard,
    hba1cGlycosylatedHB,
    microalbumin,
    category: 'glucose metabolism',
  };

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <View style={globalStyles.testContainer}>
      <View>
        <TextInput
          placeholder="Glucose - Fasting"
          style={globalStyles.testInput}
          onChangeText={(text) => {
            setGlucoseFasting(text);
          }}
        />
        <TextInput
          placeholder="Glucose - Random"
          style={globalStyles.testInput}
          onChangeText={(text) => {
            setGlucoseRandom(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="GTT 2hr 75g - standard"
          style={globalStyles.testInput}
          onChangeText={(text) => {
            setGtt2Hr75gStandard(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="HBA1C/Glycosylated Hb"
          style={globalStyles.testInput}
          onChangeText={(text) => {
            setHba1cGlycosylatedHB(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Microalbumin - urine"
          style={globalStyles.testInput}
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
            console.log(testData);
            showToast('Successful');
            navigation.navigate('Test Graph', {
              patientId: patientId,
              label: testData.category,
            });
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
    padding: 10,
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
