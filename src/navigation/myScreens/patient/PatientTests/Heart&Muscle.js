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

const Heart_MuscleScreenView = ({
  navigation,
  route,
  createTest,
  addTestData,
}) => {
  const [chestPainProfile, setChestPainProfile] = useState('');
  const [troponin, setTroponin] = useState('');
  const [CK, setCK] = useState('');
  const [CKMB, setCKMB] = useState('');
  const [myoglobin, setMyoglobin] = useState('');
  const [homocysteine, setHomocysteine] = useState('');
  const [ultrasensitiveCRP, setUltrasensitiveCRP] = useState('');
  const [proBNP, setProBNP] = useState('');

  const label = route.params.label;
  const patientId = route.params.patientId;
  const testData = {
    chestPainProfile,
    troponin,
    CK,
    CKMB,
    myoglobin,
    homocysteine,
    ultrasensitiveCRP,
    proBNP,
    testCategory: label,
  };

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.loginContainer}>
      <View>
        <TextInput
          placeholder="Chest Pain Profile"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setChestPainProfile(text);
          }}
        />
        <TextInput
          placeholder="Troponin"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setTroponin(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="CK"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setCK(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="CKMB"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setCKMB(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Myoglobin"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setMyoglobin(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Homocysteine(fasting)(on ice)"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setHomocysteine(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Ultrasensitive CRP"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setUltrasensitiveCRP(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Pro BNP - on ice"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setProBNP(text);
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

const Heart_MuscleScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Heart_MuscleScreenView);

export default Heart_MuscleScreen;

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
