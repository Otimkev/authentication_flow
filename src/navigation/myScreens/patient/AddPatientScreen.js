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
    residency: residency,
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
          <View>
            <TextInput
              style={globalStyles.inputContainer}
              placeholder="First name"
              onChangeText={(text) => {
                setFirstName(text);
              }}
            />
          </View>
          <View>
            <TextInput
              style={globalStyles.inputContainer}
              placeholder="Last name"
              onChangeText={(text) => {
                setLastName(text);
              }}
            />
          </View>
          <View>
            <TextInput
              style={globalStyles.inputContainer}
              placeholder="Gender"
              onChangeText={(text) => {
                setGender(text);
              }}
            />
          </View>
          <View>
            <TextInput
              style={globalStyles.inputContainer}
              placeholder="Date of Birth"
              onChangeText={(text) => {
                setDateOfBirth(text);
              }}
            />
          </View>
          <View>
            <TextInput
              style={globalStyles.inputContainer}
              placeholder="Nationality"
              onChangeText={(text) => {
                setNationality(text);
              }}
            />
          </View>
          <View>
            <TextInput
              style={globalStyles.inputContainer}
              placeholder="Religion"
              onChangeText={(text) => {
                setReligion(text);
              }}
            />
          </View>
          <View>
            <TextInput
              style={globalStyles.inputContainer}
              placeholder="Marital status"
              onChangeText={(text) => {
                setMaritalStatus(text);
              }}
            />
          </View>
          <View>
            <TextInput
              style={globalStyles.inputContainer}
              placeholder="Email"
              onChangeText={(text) => {
                setEmail(text);
              }}
            />
          </View>
          <View>
            <TextInput
              style={globalStyles.inputContainer}
              placeholder="Residency"
              onChangeText={(text) => {
                setResidency(text);
              }}
            />
          </View>
          <View>
            <TextInput
              style={globalStyles.inputContainer}
              placeholder="Phone Number"
              onChangeText={(text) => {
                setPhoneNumber(text);
              }}
            />
          </View>
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

export default AddPatientScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  cardContainer: {
    width: '100%',
    height: '100%',
    padding: 8,
  },
});
