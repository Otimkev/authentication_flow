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

const HypertensionNeuroEndocrineScreenView = ({
  navigation,
  route,
  createTest,
  addTestData,
}) => {
  const [catecholMetanephrine, setCatecholMetanephrine] = useState('');
  const [VMAMetanephrine, setVMAMetanephrine] = useState('');
  const [aldosterone, setAldosterone] = useState('');
  const [renin, setRenin] = useState('');
  const [_5HIAA, set_5HIAA] = useState('');
  const [chromogranin, setChromogranin] = useState('');
  const [serotonin, setSerotonin] = useState('');

  const label = route.params.label;
  const patientId = route.params.patientId;
  const testData = {
    catecholMetanephrine,
    VMAMetanephrine,
    aldosterone,
    renin,
    _5HIAA,
    chromogranin,
    serotonin,
    testCategory: label,
  };

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.loginContainer}>
      <View>
        <TextInput
          placeholder="Catechol + Metanephrine"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setCatecholMetanephrine(text);
          }}
        />
        <TextInput
          placeholder="VMA + Metanephrine"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setVMAMetanephrine(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Aldosterone"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setAldosterone(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Renin - spun on ice"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setRenin(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="5HIAA"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            set_5HIAA(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Chromogranin A - on ice"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setChromogranin(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Serotonin - on ice"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setSerotonin(text);
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
          title="Baaldosterone"
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

const HypertensionNeuroEndocrineScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HypertensionNeuroEndocrineScreenView);

export default HypertensionNeuroEndocrineScreen;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    baaldosteronegroundColor: '#fff',
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
