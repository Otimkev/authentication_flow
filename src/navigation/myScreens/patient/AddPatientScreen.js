import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import AddPatient from '../../../httpClient/repository/patient/AddPatient';
import CardView from 'react-native-cardview';
import SessionManager from '../../../httpClient/utils/SessionManager';
import {globalStyles} from '../../../styles/Global';

const AddPatientScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [nationality, setNationality] = useState('');
  const [religon, setReligon] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNymber] = useState('');
  const [residency, setResidency] = useState('');

  const patientData = {
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    dateOfBirth: dateOfBirth,
    nationality: nationality,
    religon: religon,
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
          <Text style={styles.label}>Name</Text>
          <View style={globalStyles.Row}>
            <View style={styles.inputWrap}>
              <TextInput
                placeholder="First name"
                onChangeText={(text) => {
                  setFirstName(text);
                }}
              />
            </View>

            <View style={styles.inputWrap}>
              <TextInput
                placeholder="Last name"
                onChangeText={(text) => {
                  setLastName(text);
                }}
              />
            </View>
          </View>
          {/* <View>
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
              placeholder="Religon"
              onChangeText={(text) => {
                setReligon(text);
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
                setPhoneNymber(text);
              }}
            />
          </View> */}
          <TouchableOpacity
            style={globalStyles.Button}
            onPress={async () => {
              const result = await AddPatient.processAddPatient(patientData);
              if (!result) {
                showToast('Unsuccessful');
                return;
              }
              showToast('Sucessful');
              navigation.navigate('Patients');
            }}>
            <Text style={globalStyles.ButtonText}>Add Patient</Text>
          </TouchableOpacity>
        </View>
      </CardView>
    </ScrollView>
  );
};

export default AddPatientScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     padding: 10,
//   },
//   cardContainer: {
//     width: '100%',
//     height: '100%',
//     padding: 8,
//   },
// });

const styles = StyleSheet.create({
  label: {
    flex: 1,
    fontWeight: 'bold',
  },
  inputWrap: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  inputDate: {
    flex: 1,
    backgroundColor: '#108c96',
  },
  inputCvv: {
    flex: 1,
    backgroundColor: '#6fa511',
  },
});
