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
import {ScrollView} from 'react-native-gesture-handler';

const LKS_ScreenView = ({navigation, route, createTest, addTestData}) => {
  const [UECreatinine, setUECreatinine] = useState('');
  const [ureaCreatinine, setUreaCreatinine] = useState('');
  const [creatinineClearance, setCreatinineClearance] = useState('');
  const [potassium, setPotassium] = useState('');
  const [sodium, setSodium] = useState('');
  const [calcium, setCalcium] = useState('');
  const [phosphate, setPhosphate] = useState('');
  const [magnesiumSerum, setMagnesiumSerum] = useState('');
  const [magnesiumRbc, setMagnesiumRbc] = useState('');
  const [uricAcid, setUricAcid] = useState('');
  const [protein24hrUrine, setProtein24hrUrine] = useState('');
  const [proteinCreatinineRatio, setProteinCreatinineRatio] = useState('');
  const [alpha1Antitrypsin, setAlpha1Antitrypsin] = useState('');
  const [ace, setAce] = useState('');

  const label = route.params.label;
  const patientId = route.params.patientId;
  const testData = {
    UECreatinine,
    ureaCreatinine,
    creatinineClearance,
    potassium,
    sodium,
    calcium,
    phosphate,
    magnesiumSerum,
    magnesiumRbc,
    uricAcid,
    protein24hrUrine,
    proteinCreatinineRatio,
    alpha1Antitrypsin,
    ace,
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
            placeholder="U and E/Creatinine"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setUECreatinine(text);
            }}
          />
          <TextInput
            placeholder="Urea and Creatinine"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setUreaCreatinine(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Creatinine Clearance"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setCreatinineClearance(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Potassium"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setPotassium(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Sodium"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setSodium(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Calcium"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setCalcium(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Phosphate"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setPhosphate(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Magnesium (Serum)"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setMagnesiumSerum(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Magnesium (RBC)"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setMagnesiumRbc(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Uric Acid"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setUricAcid(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Protein - 24hr urine"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setProtein24hrUrine(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Protein/Creatinine ratio"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setProteinCreatinineRatio(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Alpha-1 Antitrypsin"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setAlpha1Antitrypsin(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Ace"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setAce(text);
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

const LKS_Screen = connect(mapStateToProps, mapDispatchToProps)(LKS_ScreenView);

export default LKS_Screen;

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
