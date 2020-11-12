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

const PharmacologyScreenView = ({
  navigation,
  route,
  createTest,
  addTestData,
}) => {
  const [drugOfAbuseScreen, setDrugOfAbuseScreen] = useState('');
  const [overdoseDrugScreen, setOverdoseDrugScreen] = useState('');
  const [carbamazepine, setCarbamazepine] = useState('');
  const [digoxin, setDigoxin] = useState('');
  const [epilimValproicAcid, setEpilimValproicAcid] = useState('');
  const [ethanolAchohol, setEthanolAchohol] = useState('');
  const [lamictin, setLamictin] = useState('');
  const [paracetamol, setParacetamol] = useState('');
  const [phenytoin, setPhenytoin] = useState('');
  const [lithium, setLithium] = useState('');
  const [sirolimuslevels, setSirolimuslevels] = useState('');
  const [tacrolimus, setTacrolimus] = useState('');

  const label = route.params.label;
  const patientId = route.params.patientId;
  const testData = {
    drugOfAbuseScreen,
    overdoseDrugScreen,
    carbamazepine,
    digoxin,
    epilimValproicAcid,
    ethanolAchohol,
    lamictin,
    paracetamol,
    phenytoin,
    lithium,
    sirolimuslevels,
    tacrolimus,
    testCategory: label,
  };

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.loginContainer}>
      <View>
        <TextInput
          placeholder="Drug of abuse screen"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setDrugOfAbuseScreen(text);
          }}
        />
        <TextInput
          placeholder="Overdose drug screen"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setOverdoseDrugScreen(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Carbamazepine"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setCarbamazepine(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Digoxin"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setDigoxin(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Empilim - valproic acid"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setEpilimValproicAcid(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Ethanol - alcohol"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setEthanolAchohol(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Lamictin"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setLamictin(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Paracetamol"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setParacetamol(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Phenytoin"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setPhenytoin(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Lithium"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setLithium(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Sirolimus levels"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setSirolimuslevels(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Tacrolimus"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setTacrolimus(text);
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

const PharmacologyScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PharmacologyScreenView);

export default PharmacologyScreen;

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
