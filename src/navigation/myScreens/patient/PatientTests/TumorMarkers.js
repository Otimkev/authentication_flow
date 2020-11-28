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
  ScrollView,
} from 'react-native';
import {globalStyles} from '../../../../styles/Global';
import * as actions from '../../../../model/test/addTest/Actions';
import {connect} from 'react-redux';

const TumourMarkersScreenView = ({
  navigation,
  route,
  createTest,
  addTestData,
}) => {
  const [AFP, setAFP] = useState('');
  const [bHCGQuantitative, setbHCGQuantitative] = useState('');
  const [CEA, setCEA] = useState('');
  const [CA153Breast, setCA153Breast] = useState('');
  const [CA125Ovary, setCA125Ovary] = useState('');
  const [CA199, setCA199] = useState('');
  const [CA724, setCA724] = useState('');
  const [PSAonly, setPSAonly] = useState('');
  const [PSAfree, setPSAfree] = useState('');
  const [PSAcomplexed, setPSAcomplexed] = useState('');
  const [malignantMelanoma, setMalignantMelanoma] = useState('');
  const [B2Microglobulin, setB2Microglobulin] = useState('');

  const label = route.params.label;
  const patientId = route.params.patientId;
  const testData = {
    AFP,
    bHCGQuantitative,
    CEA,
    CA153Breast,
    CA125Ovary,
    CA199,
    CA724,
    PSAonly,
    PSAfree,
    PSAcomplexed,
    malignantMelanoma,
    B2Microglobulin,
    testCategory: label,
  };

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <ScrollView>
      <View style={styles.loginContainer}>
        <View>
          <TextInput
            placeholder="AFP"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setAFP(text);
            }}
          />
          <TextInput
            placeholder="βHCG quantitative"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setbHCGQuantitative(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="CEA"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setCEA(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="CA 153 - breast"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setCA153Breast(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="CA 125 - ovary"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setCA125Ovary(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="CA 199"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setCA199(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="CA 724"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setCA724(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="PSA only - monitoring"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setPSAonly(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="PSA (+Free PSA)"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setPSAfree(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="PSA - complexed"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setPSAcomplexed(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Malignant Melanoma S-100B"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setMalignantMelanoma(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="B2 microglobulin"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setB2Microglobulin(text);
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
    </ScrollView>
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

const TumourMarkersScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TumourMarkersScreenView);

export default TumourMarkersScreen;

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
