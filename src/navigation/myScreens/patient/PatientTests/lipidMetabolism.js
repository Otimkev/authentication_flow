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

const LipidMetabolismScreenView = ({
  navigation,
  route,
  createTest,
  addTestData,
}) => {
  const [lipogram, setLipogram] = useState('');
  const [cholesterolOnly, setCholesterolOnly] = useState('');
  const [cholesterolHDL, setCholesterolHDL] = useState('');
  const [LDLMeasurable, setLDLMeasurable] = useState('');
  const [triglycerides, setTriglycerides] = useState('');

  const label = route.params.label;
  const patientId = route.params.patientId;
  const testData = {
    lipogram,
    cholesterolOnly,
    cholesterolHDL,
    LDLMeasurable,
    triglycerides,
    testCategory: label,
  };

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.loginContainer}>
      <View>
        <TextInput
          placeholder="Lipogram"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setLipogram(text);
          }}
        />
        <TextInput
          placeholder="Cholesterol Only"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setCholesterolOnly(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Cholesterol/HDL (Fasting)"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setCholesterolHDL(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="LDL - measurable"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setLDLMeasurable(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Triglycerides"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setTriglycerides(text);
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

const LipidMetabolismScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LipidMetabolismScreenView);

export default LipidMetabolismScreen;

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
