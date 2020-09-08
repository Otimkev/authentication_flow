import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import AddPatient from '../../../httpClient/repository/patient/AddPatient';
import CardView from 'react-native-cardview';

const AddPatientScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [nationality, setNationality] = useState('');
  const [religon, setReligon] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [weight, setWeight] = useState('');

  const patientData = {
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    age: age,
    nationality: nationality,
    religon: religon,
    maritalStatus: maritalStatus,
    address: address,
    email: email,
    weight: weight,
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
        <View style={styles.container}>
          <View>
            <TextInput
              style={styles.inputContainer}
              placeholder="First name"
              onChangeText={(text) => {
                setFirstName(text);
              }}
            />
          </View>
          <View>
            <TextInput
              style={styles.inputContainer}
              placeholder="Last name"
              onChangeText={(text) => {
                setLastName(text);
              }}
            />
          </View>
          <View>
            <TextInput
              style={styles.inputContainer}
              placeholder="Gender"
              onChangeText={(text) => {
                setGender(text);
              }}
            />
          </View>
          <View>
            <TextInput
              style={styles.inputContainer}
              placeholder="Age"
              onChangeText={(text) => {
                setAge(text);
              }}
            />
          </View>
          <View>
            <TextInput
              style={styles.inputContainer}
              placeholder="Nationality"
              onChangeText={(text) => {
                setNationality(text);
              }}
            />
          </View>
          <View>
            <TextInput
              style={styles.inputContainer}
              placeholder="Religon"
              onChangeText={(text) => {
                setReligon(text);
              }}
            />
          </View>
          <View>
            <TextInput
              style={styles.inputContainer}
              placeholder="Marital status"
              onChangeText={(text) => {
                setMaritalStatus(text);
              }}
            />
          </View>
          <View>
            <TextInput
              style={styles.inputContainer}
              placeholder="Address"
              onChangeText={(text) => {
                setAddress(text);
              }}
            />
          </View>
          <View>
            <TextInput
              style={styles.inputContainer}
              placeholder="Email"
              onChangeText={(text) => {
                setEmail(text);
              }}
            />
          </View>
          <View>
            <TextInput
              style={styles.inputContainer}
              placeholder="Weight"
              onChangeText={(text) => {
                setWeight(text);
              }}
            />
          </View>
          <View
            style={{
              marginVertical: 10,
              width: 320,
              height: 40,
            }}>
            <Button
              title="Submit"
              color="#009387"
              onPress={async () => {
                const result = await AddPatient.processAddPatient(patientData);
                if (!result) {
                  showToast('Unsuccessful');
                  return;
                }
                showToast('Sucessful');
                navigation.navigate('Patients');
              }}
            />
          </View>
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
  inputContainer: {
    color: '#000',
    width: 320,
    height: 40,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#009387',
    marginVertical: 5,
    borderRadius: 5,
  },
});
