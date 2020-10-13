import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import AddPatient from '../../../httpClient/repository/patient/AddPatient';
import CardView from 'react-native-cardview';
import {globalStyles} from '../../../styles/Global';
import AsyncStorage from '@react-native-community/async-storage';
import {Picker} from '@react-native-community/picker';
import * as actionTypes from '../../../utils/Constants';
import * as actions from '../../../model/patient/addPatient/Actions';
import {connect} from 'react-redux';
import {AddPatientReducer} from '../../../model/patient/addPatient/Reducer';

const AddPatientScreenView = ({navigation, createPatient, responseData}) => {
  const [firstName, setFirstName] = useState('testFirstName');
  const [lastName, setLastName] = useState('testLastName');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(90);
  const [maritalStatus, setMaritalStatus] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(9798786);
  const [address, setAddress] = useState('Kampala');
  const [emergencyFirstName, setEmergencyFirstName] = useState('testemgOne');
  const [emergencyLastName, setEmergencyLastName] = useState('testemgTwo');
  const [emergencyPhoneNumber, setEmergencyPhoneNumber] = useState(8978778);
  const [relationship, setRelationship] = useState('');
  const [mState, setmState] = useState(false);

  const patientData = {
    firstName: firstName,
    lastName: lastName,
    gender: 'gender',
    dateOfBirth: dateOfBirth,
    maritalStatus: 'maritalStatus',
    email: email,
    phoneNumber: phoneNumber,
    address: address,
    emergencyFirstName: emergencyFirstName,
    emergencyLastName: emergencyLastName,
    emergencyPhoneNumber: emergencyPhoneNumber,
    relationship: 'relationship',
  };

  const showToast = (message) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  return (
    <ScrollView>
      <CardView
        style={styles.cardContainer}
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={5}>
        <View style={globalStyles.container}>
          {/* Patient Name Section */}
          <Text style={globalStyles.Heading}>Name</Text>
          <View style={globalStyles.Row}>
            <View style={styles.inputWrap}>
              <TextInput
                style={globalStyles.InputBorderBottom}
                placeholder="First name"
                onChangeText={(text) => {
                  setFirstName(text);
                }}
              />
            </View>
            <View style={styles.inputWrap}>
              <TextInput
                style={globalStyles.InputBorderBottom}
                placeholder="Last name"
                onChangeText={(text) => {
                  setLastName(text);
                }}
              />
            </View>
          </View>
          {/*Patient Age and Sex Section*/}
          <View style={globalStyles.Row}>
            <View style={styles.inputWrap}>
              <Text style={globalStyles.Heading}>Gender</Text>
              <Picker>
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
              </Picker>
              {/* <TextInput
                style={globalStyles.InputBorderBottom}
                placeholder="Gender"
                onChangeText={(text) => {
                  setGender(text);
                }}
              /> */}
            </View>
            <View style={styles.inputWrap}>
              <Text style={globalStyles.Heading}>Age</Text>
              <TextInput
                style={globalStyles.InputBorderBottom}
                placeholder="Age"
                onChangeText={(text) => {
                  setDateOfBirth(text);
                }}
                keyboardType="phone-pad"
              />
            </View>
          </View>
          {/* Patient Address Section */}
          <View style={globalStyles.NormalFlex}>
            <View style={styles.inputWrap}>
              <Text style={globalStyles.Heading}>Address</Text>
              <TextInput
                style={globalStyles.InputBorderBottom}
                placeholder="Address"
                onChangeText={(text) => {
                  setAddress(text);
                }}
              />
            </View>
          </View>
          {/* Patient Marital Status Section */}
          <View style={globalStyles.NormalFlex}>
            <View style={styles.inputWrap}>
              <Text style={globalStyles.Heading}>Marital Status</Text>
              <Picker>
                <Picker.Item label="Single" value="Single" />
                <Picker.Item label="Married" value="Married" />
                <Picker.Item label="Divorced" value="Divorced" />
                <Picker.Item label="Widowed" value="Widowed" />
              </Picker>
              {/* <TextInput
                style={globalStyles.InputBorderBottom}
                placeholder="Marital Status"
                onChangeText={(text) => {
                  setMaritalStatus(text);
                }}
              /> */}
            </View>
          </View>
          {/* Patient Phone Number Section */}
          <View style={globalStyles.NormalFlex}>
            <View style={styles.inputWrap}>
              <Text style={globalStyles.Heading}>Phone Number</Text>
              <TextInput
                style={globalStyles.InputBorderBottom}
                placeholder="Phone Number"
                onChangeText={(text) => {
                  setPhoneNumber(text);
                }}
                keyboardType="phone-pad"
              />
            </View>
          </View>
          {/* Patient Email Address Section */}
          <View style={globalStyles.NormalFlex}>
            <View style={styles.inputWrap}>
              <Text style={globalStyles.Heading}>Email Address</Text>
              <TextInput
                style={globalStyles.InputBorderBottom}
                placeholder="Email"
                onChangeText={(text) => {
                  setEmail(text);
                }}
                keyboardType="email-address"
              />
            </View>
          </View>
          {/* Emergency Contact section */}
          <Text style={globalStyles.BlockHeading}>
            Emergency contact Information
          </Text>
          <View style={globalStyles.Row}>
            <View style={styles.inputWrap}>
              <TextInput
                style={globalStyles.InputBorderBottom}
                placeholder="First name"
                onChangeText={(text) => {
                  setEmergencyFirstName(text);
                }}
              />
            </View>

            <View style={styles.inputWrap}>
              <TextInput
                style={globalStyles.InputBorderBottom}
                placeholder="Last name"
                onChangeText={(text) => {
                  setEmergencyLastName(text);
                }}
              />
            </View>
          </View>
          {/* Emergency Phone Number Section */}
          <View style={globalStyles.NormalFlex}>
            <View style={styles.inputWrap}>
              <Text style={globalStyles.Heading}>Phone Number</Text>
              <TextInput
                style={globalStyles.InputBorderBottom}
                placeholder="eg. 0777..."
                onChangeText={(text) => {
                  setEmergencyPhoneNumber(text);
                }}
                keyboardType="phone-pad"
              />
            </View>
          </View>
          {/* Emergency Relationship Section */}
          <View style={globalStyles.NormalFlex}>
            <View style={styles.inputWrap}>
              <Text style={globalStyles.Heading}>Relationship</Text>
              <Picker>
                <Picker.Item label="Mother" value="Mother" />
                <Picker.Item label="Father" value="Father" />
                <Picker.Item label="Sister" value="Sister" />
                <Picker.Item label="Brother" value="Brother" />
                <Picker.Item label="Wife" value="Wife" />
                <Picker.Item label="Husband" value="Husband" />
                <Picker.Item label="Friend" value="Friend" />
                <Picker.Item label="Other" value="Other" />
              </Picker>
              {/* <TextInput
                style={globalStyles.InputBorderBottom}
                placeholder="eg. Mother, Father"
                onChangeText={(text) => {
                  setRelationship(text);
                }}
              /> */}
            </View>
          </View>
          {/* Submit Button Section */}
          <TouchableOpacity
            style={globalStyles.Button}
            onPress={async () => {
              const user = await AsyncStorage.getItem('user');
              const mUser = JSON.parse(user);
              createPatient(patientData);
              console.log(JSON.stringify(patientData));
              if (!JSON.stringify(patientData)) {
                showToast('Unsuccessful');
                return;
              }
              showToast('Successful');
              navigation.navigate('Patients', {
                mData: mState,
              });
            }}>
            <Text style={globalStyles.ButtonText}>Add Patient</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={globalStyles.Button}
            onPress={async () => {
              navigation.navigate('Patients');
            }}>
            <Text style={globalStyles.ButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </CardView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: '100%',
    padding: 8,
  },
  inputWrap: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
});

const mapStateToProps = (state, props) => {
  return {addPatient: state.addPatient};
};

const mapDispatchToProps = (dispatch, props) => ({
  createPatient: (args) => {
    dispatch(actions.addPatientsResponse(args));
  },
});

export const AddPatientScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddPatientScreenView);
