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
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>Hirsutism Profile</Text>
          <TextInput
            // placeholder="Hirsutism Profile"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setHirsutismProfile(text);
            }}
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>Testosterone/FTI</Text>
          <TextInput
            //placeholder="Testosterone/FTI"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setTestosteroneFTI(text);
            }}
            keyboardType="phone-pad"
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>DHEA</Text>
          <TextInput
            //placeholder="DHEA"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setDHEA(text);
            }}
            keyboardType="phone-pad"
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>Androstenedione</Text>
          <TextInput
            //placeholder="Androstenedione"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setAndrostenedione(text);
            }}
            keyboardType="phone-pad"
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>17-OH Progesterone</Text>
          <TextInput
            //placeholder="17-OH Progesterone"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setOHProgesterone(text);
            }}
            keyboardType="phone-pad"
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>Infertility Screen (M or F)</Text>
          <TextInput
            //placeholder="Infertility Screen (M or F)"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setInfertilityScreen(text);
            }}
            keyboardType="phone-pad"
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>E2</Text>
          <TextInput
            //placeholder="E2"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setE2(text);
            }}
            keyboardType="phone-pad"
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>Progesterone</Text>
          <TextInput
            //placeholder="Progesterone"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setProgesterone(text);
            }}
            keyboardType="phone-pad"
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>FSH</Text>
          <TextInput
            //placeholder="FSH"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setFSH(text);
            }}
            keyboardType="phone-pad"
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>LH</Text>
          <TextInput
            //placeholder="LH"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setLH(text);
            }}
            keyboardType="phone-pad"
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>Prolactin</Text>
          <TextInput
            //placeholder="Prolactin"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setProlactin(text);
            }}
            keyboardType="phone-pad"
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>Anti-Mullerian Hormone</Text>
          <TextInput
            //placeholder="Anti-Mullerian Hormone"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setAntiMullerianHormone(text);
            }}
            keyboardType="phone-pad"
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>ACTH - on ice</Text>
          <TextInput
            //placeholder="ACTH - on ice"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setACTH(text);
            }}
            keyboardType="phone-pad"
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>Cortisol</Text>
          <TextInput
            //placeholder="Cortisol"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setCortisol(text);
            }}
            keyboardType="phone-pad"
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>Cortisol - 24hr urine</Text>
          <TextInput
            //placeholder="Cortisol - 24hr urine"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setCortisol24hrUrine(text);
            }}
            keyboardType="phone-pad"
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>Gastrin - fasting on ice</Text>
          <TextInput
            //placeholder="Gastrin - fasting on ice"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setGastrin(text);
            }}
            keyboardType="phone-pad"
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>Parathyroid Hormone</Text>
          <TextInput
            //placeholder="Parathyroid Hormone"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setParathyroidHormone(text);
            }}
            keyboardType="phone-pad"
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>IGF1 + IGFBP3</Text>
          <TextInput
            //placeholder="IGF1 + IGFBP3"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setIGF1_IGFBP3(text);
            }}
            keyboardType="phone-pad"
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>Insulin</Text>
          <TextInput
            //placeholder="Insulin"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setInsulin(text);
            }}
            keyboardType="phone-pad"
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>Growth Hormone</Text>
          <TextInput
            //placeholder="Growth Hormone"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setGrowthHormone(text);
            }}
            keyboardType="phone-pad"
          />
        </View>
        {/* <View style={styles.button}>
          <Button
            title="Submit"
            color="#007360"
            onPress={() => {
              createTest(patientId, testData);
              console.log(addTestData);
              showToE2('Successful');
              navigation.navigate('Patient Information');
            }}
          />
        </View> */}
        <TouchableOpacity
          style={globalStyles.ButtonSmall}
          onPress={() => {
            createTest(patientId, testData);
            console.log(addTestData);
            showToE2('Successful');
            navigation.navigate('Patient Information');
          }}>
          <Text style={styles.loginText}>SUBMIT</Text>
        </TouchableOpacity>
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
