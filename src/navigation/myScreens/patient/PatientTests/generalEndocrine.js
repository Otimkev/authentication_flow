import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Button,
  ToE2Android,
} from 'react-native';
import {globalStyles} from '../../../../styles/Global';
import * as actions from '../../../../model/test/addTest/Actions';
import {connect} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';

const GeneralEndocrineScreenView = ({
  navigation,
  route,
  createTest,
  addTestData,
}) => {
  const [hirsutismProfile, setHirsutismProfile] = useState('');
  const [testosteroneFTI, setTestosteroneFTI] = useState('');
  const [DHEA, setDHEA] = useState('');
  const [androstenedione, setAndrostenedione] = useState('');
  const [OHprogesterone, setOHProgesterone] = useState('');
  const [infertilityScreen, setInfertilityScreen] = useState('');
  const [E2, setE2] = useState('');
  const [progesterone, setProgesterone] = useState('');
  const [FSH, setFSH] = useState('');
  const [LH, setLH] = useState('');
  const [prolactin, setProlactin] = useState('');
  const [antiMullerianHormone, setAntiMullerianHormone] = useState('');
  const [ACTH, setACTH] = useState('');
  const [cortisol, setCortisol] = useState('');
  const [cortisol24hrUrine, setCortisol24hrUrine] = useState('');
  const [gastrin, setGastrin] = useState('');
  const [growthHormone, setGrowthHormone] = useState('');
  const [insulin, setInsulin] = useState('');
  const [IGF1_IGFBP3, setIGF1_IGFBP3] = useState('');
  const [parathyroidHormone, setParathyroidHormone] = useState('');

  const label = route.params.label;
  const patientId = route.params.patientId;
  const testData = {
    hirsutismProfile,
    testosteroneFTI,
    DHEA,
    androstenedione,
    OHprogesterone,
    infertilityScreen,
    E2,
    progesterone,
    FSH,
    LH,
    prolactin,
    antiMullerianHormone,
    ACTH,
    cortisol,
    cortisol24hrUrine,
    gastrin,
    growthHormone,
    insulin,
    IGF1_IGFBP3,
    parathyroidHormone,
    testCategory: label,
  };

  const showToE2 = (message) => {
    ToE2Android.show(message, ToE2Android.SHORT);
  };

  return (
    <ScrollView>
      <View style={styles.loginContainer}>
        <View>
          <TextInput
            placeholder="Hirsutism Profile"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setHirsutismProfile(text);
            }}
          />
          <TextInput
            placeholder="Testosterone/FTI"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setTestosteroneFTI(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="DHEA"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setDHEA(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Androstenedione"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setAndrostenedione(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="17-OH Progesterone"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setOHProgesterone(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Infertility Screen (M or F)"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setInfertilityScreen(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="E2"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setE2(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Progesterone"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setProgesterone(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="FSH"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setFSH(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="LH"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setLH(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Prolactin"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setProlactin(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Anti-Mullerian Hormone"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setAntiMullerianHormone(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="ACTH - on ice"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setACTH(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Cortisol"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setCortisol(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Cortisol - 24hr urine"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setCortisol24hrUrine(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Gastrin - fasting on ice"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setGastrin(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Parathyroid Hormone"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setParathyroidHormone(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="IGF1 + IGFBP3"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setIGF1_IGFBP3(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Insulin"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setInsulin(text);
            }}
            keyboardType="phone-pad"
          />
          <TextInput
            placeholder="Growth Hormone"
            style={globalStyles.inputContainer}
            onChangeText={(text) => {
              setGrowthHormone(text);
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
              showToE2('Successful');
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

const GeneralEndocrineScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GeneralEndocrineScreenView);

export default GeneralEndocrineScreen;

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
