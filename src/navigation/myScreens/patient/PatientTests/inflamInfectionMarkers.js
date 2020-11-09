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

const InflamInfectionMarkersScreenView = ({
  navigation,
  route,
  createTest,
  addTestData,
}) => {
  const [CRP, setCRP] = useState('');
  const [PCTQuantitative, setPCTQuantitative] = useState('');

  const label = route.params.label;
  const patientId = route.params.patientId;
  const testData = {
    CRP,
    PCTQuantitative,
    testCategory: label,
  };

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.loginContainer}>
      <View>
        <TextInput
          placeholder="CRP"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setCRP(text);
          }}
        />
        <TextInput
          placeholder="PCT Quantitative"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setPCTQuantitative(text);
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

const InflamInfectionMarkersScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InflamInfectionMarkersScreenView);

export default InflamInfectionMarkersScreen;

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
