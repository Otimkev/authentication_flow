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

const PregnancyScreenView = ({navigation, route, createTest, addTestData}) => {
  const [anteNatalScreenHIV, setAnteNatalScreenHIV] = useState('');
  const [anteNatalScreenNoHIV, setAnteNatalScreenNoHIV] = useState('');
  const [bHCGQualitative, setbHCGQualitative] = useState('');
  const [bHCGQuantitative, setbHCGQuantitative] = useState('');

  const label = route.params.label;
  const patientId = route.params.patientId;
  const testData = {
    anteNatalScreenHIV,
    anteNatalScreenNoHIV,
    bHCGQualitative,
    bHCGQuantitative,
    testCategory: label,
  };

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.loginContainer}>
      <View>
        <TextInput
          placeholder="Ante natal Screen with HIV (*samples: 2×E,2×B)"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setAnteNatalScreenHIV(text);
          }}
        />
        <TextInput
          placeholder="Ante natal screen no HIV (*samples: 2×E,1×B)"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setAnteNatalScreenNoHIV(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="βHCG qualitative (Pos/Neg)"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setbHCGQualitative(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="βHCG quantitative"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setbHCGQuantitative(text);
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

const PregnancyScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PregnancyScreenView);

export default PregnancyScreen;

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
