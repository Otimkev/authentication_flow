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
import {primary_color} from '../../../../styles/color';

const AndrologyScreenView = ({navigation, route, createTest, addTestData}) => {
  const [routineSemenAnalysis, setRoutineSemenAnalysis] = useState('');
  const [postVascetomy, setPostVascetomy] = useState('');

  const label = route.params.label;
  const patientId = route.params.patientId;
  const testData = {
    routineSemenAnalysis,
    postVascetomy,
    category: 'Andrology',
  };
  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <View style={styles.loginContainer}>
      <View>
        <TextInput
          placeholder="Routine Semen Analysis"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setRoutineSemenAnalysis(text);
          }}
        />
        <TextInput
          placeholder="Post Vascetomy"
          style={globalStyles.inputContainer}
          onChangeText={(text) => {
            setPostVascetomy(text);
          }}
          keyboardType="phone-pad"
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Submit"
          color={primary_color}
          onPress={() => {
            createTest(patientId, testData);
            showToast('Successful');
            navigation.navigate('Test Graph', {
              patientId: patientId,
              label: testData.category,
            });
          }}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Back"
          color={primary_color}
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

const AndrologyScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AndrologyScreenView);

export default AndrologyScreen;

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
