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

const LiverPancreasGitScreenView = ({
  navigation,
  route,
  createTest,
  addTestData,
}) => {
  const [LFT, setLFT] = useState('');
  const [bilirubinTotalConj, setBilirubinTotalConj] = useState('');
  const [bilirubinNeonatal, setBilirubinNeonatal] = useState('');
  const [alkalinePhosphatase, setAlkalinePhosphatase] = useState('');
  const [amylase, setAmylase] = useState('');
  const [ALT, setALT] = useState('');
  const [AST, setAST] = useState('');
  const [gammaGT, setGammaGT] = useState('');
  const [LDH, setLDH] = useState('');
  const [lactate, setLactate] = useState('');
  const [aldolase, setAldolase] = useState('');
  const [lipase, setLipase] = useState('');
  const [CDT, setCDT] = useState('');
  const [proteinElectrophoresis, setProteinElectrophoresis] = useState('');
  const [immunoglobulins, setImmunoglobulins] = useState('');
  const [porphyrinScr, setPorphyrinScr] = useState('');

  const label = route.params.label;
  const patientId = route.params.patientId;
  const testData = {
    LFT,
    bilirubinTotalConj,
    bilirubinNeonatal,
    alkalinePhosphatase,
    amylase,
    ALT,
    AST,
    gammaGT,
    LDH,
    lactate,
    aldolase,
    lipase,
    CDT,
    proteinElectrophoresis,
    immunoglobulins,
    porphyrinScr,
    testCategory: label,
  };

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.loginContainer}>
      <View>
        <TextInput
          placeholder="LFT"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setLFT(text);
          }}
        />
        <TextInput
          placeholder="Bilirubin - total + conj."
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setBilirubinTotalConj(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Bilirubin - neonatal (SBR)"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setBilirubinNeonatal(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Alkaline Phosphatase"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setAlkalinePhosphatase(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Amylase"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setAmylase(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="ALT"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setALT(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="AST"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setAST(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Gamma GT"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setGammaGT(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="LDH"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setLDH(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Lactate - on ice"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setLactate(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Aldolase"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setAldolase(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Lipase"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setLipase(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="CDT - on ice"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setCDT(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Protein Electrophoresis"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setProteinElectrophoresis(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Immunoglobulins (IgA,IgM,IgG)"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setImmunoglobulins(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Porphyrin scr (samples: U,E,F)"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setPorphyrinScr(text);
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

const LiverPancreasGitScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LiverPancreasGitScreenView);

export default LiverPancreasGitScreen;

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
