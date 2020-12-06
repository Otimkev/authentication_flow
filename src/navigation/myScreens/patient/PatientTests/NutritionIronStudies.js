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

const NutritionIronStudiesScreenView = ({
  navigation,
  route,
  createTest,
  addTestData,
}) => {
  const [ironProfile, setIronProfile] = useState('');
  const [ferritin, setFerritin] = useState('');
  const [solubleTrabsferrinReceptor, setSolubleTrabsferrinReceptor] = useState(
    '',
  );
  const [vitaminB12, setVitaminB12] = useState('');
  const [folateSerumRBC, setFolateSerumRBC] = useState('');

  const label = route.params.label;
  const patientId = route.params.patientId;
  const testData = {
    ironProfile,
    ferritin,
    solubleTrabsferrinReceptor,
    vitaminB12,
    folateSerumRBC,
    testCategory: label,
  };

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.loginContainer}>
      <View>
        <TextInput
          placeholder="Iron Profile"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setIronProfile(text);
          }}
        />
        <TextInput
          placeholder="Ferritin"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setFerritin(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Soluble transferrin receptor"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setSolubleTrabsferrinReceptor(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Vitamin B12"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setVitaminB12(text);
          }}
          keyboardType="phone-pad"
        />
        <TextInput
          placeholder="Folate-serum + RBC"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setFolateSerumRBC(text);
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

const NutritionIronStudiesScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NutritionIronStudiesScreenView);

export default NutritionIronStudiesScreen;

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
