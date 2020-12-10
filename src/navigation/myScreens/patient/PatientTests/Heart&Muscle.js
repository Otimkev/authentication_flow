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
    <ScrollView>
      <View style={styles.loginContainer}>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>Chest Pain Profile</Text>
          <TextInput
            // placeholder="Chest Pain Profile"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setChestPainProfile(text);
            }}
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>Troponin</Text>
          <TextInput
            // placeholder="Troponin"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setTroponin(text);
            }}
            keyboardType="phone-pad"
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>CK</Text>
          <TextInput
            // placeholder="CK"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setCK(text);
            }}
            keyboardType="phone-pad"
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>CKMB</Text>
          <TextInput
            // placeholder="CKMB"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setCKMB(text);
            }}
            keyboardType="phone-pad"
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>Myoglobin</Text>
          <TextInput
            // placeholder="Myoglobin"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setMyoglobin(text);
            }}
            keyboardType="phone-pad"
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>Homocysteine(fasting)(on ice)</Text>
          <TextInput
            // placeholder="Homocysteine(fasting)(on ice)"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setHomocysteine(text);
            }}
            keyboardType="phone-pad"
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>Ultrasensitive CRP</Text>
          <TextInput
            // placeholder="Ultrasensitive CRP"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setUltrasensitiveCRP(text);
            }}
            keyboardType="phone-pad"
          />
        </View>
        <View style={globalStyles.fieldSet}>
          <Text style={globalStyles.legend}>Pro BNP - on ice</Text>
          <TextInput
            // placeholder="Pro BNP - on ice"
            style={globalStyles.TextInput}
            onChangeText={(text) => {
              setProBNP(text);
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
            showToast('Successful');
            navigation.navigate('Patient Information');
          }}
        />
      </View> */}
        <TouchableOpacity
          style={globalStyles.Button}
          onPress={() => {
            createTest(patientId, testData);
            console.log(addTestData);
            showToast('Successful');
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
