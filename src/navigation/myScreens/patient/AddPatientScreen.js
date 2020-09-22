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
import GetAllPatients from '../../../httpClient/repository/patient/GetAllPatients';
import {Picker} from '@react-native-community/picker';

const AddPatientScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [nationality, setNationality] = useState('');
  const [religion, setReligion] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [residency, setResidency] = useState('');
  const [address, setAddress] = useState('');
  const [emergencyFirstName, setEmergencyFirstName] = useState('');
  const [emergencyLastName, setEmergencyLastName] = useState('');
  const [emergencyPhoneNumber, setEmergencyPhoneNumber] = useState('');
  const [relationship, setRelationship] = useState('');

  const patientData = {
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    dateOfBirth: dateOfBirth,
    nationality: nationality,
    religion: religion,
    maritalStatus: maritalStatus,
    email: email,
    phoneNumber: phoneNumber,
    address: address,
    emergencyFirstName: emergencyFirstName,
    emergencyLastName: emergencyLastName,
    emergencyPhoneNumber: emergencyPhoneNumber,
    relationship: relationship,
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
              <TextInput
                style={globalStyles.InputBorderBottom}
                placeholder="Gender"
                onChangeText={(text) => {
                  setGender(text);
                }}
              />
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
              <TextInput
                style={globalStyles.InputBorderBottom}
                placeholder="Marital Status"
                onChangeText={(text) => {
                  setMaritalStatus(text);
                }}
              />
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
          {/* Patient Marital Status Section */}
          <View style={globalStyles.NormalFlex}>
            <View style={styles.inputWrap}>
              <Text style={globalStyles.Heading}>Relationship</Text>
              <TextInput
                style={globalStyles.InputBorderBottom}
                placeholder="eg. Mother, Father"
                onChangeText={(text) => {
                  setRelationship(text);
                }}
              />
            </View>
          </View>
          {/* Submit Button Section */}
          <TouchableOpacity
            style={globalStyles.Button}
            onPress={async () => {
              const user = await AsyncStorage.getItem('user');
              const mUser = JSON.parse(user);
              const result = await AddPatient.processAddPatient(
                patientData,
                mUser.userId,
              );
              if (!result) {
                showToast('Unsuccessful');
                return;
              }
              showToast('Successful');
              await GetAllPatients.processGetAllPatients(mUser.userId);
              navigation.navigate('Patients');
            }}>
            <Text style={globalStyles.ButtonText}>Add Patient</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={globalStyles.Button}
            onPress={async () => {
              navigation.navigate('Patients');
            }}>
            <Text style={globalStyles.ButtonText}>cancel</Text>
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

export default AddPatientScreen;
