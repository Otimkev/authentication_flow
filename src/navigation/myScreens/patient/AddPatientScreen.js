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

const AddPatientScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [sex, setSex] = useState('');
  const [age, setAge] = useState('');
  const [nationality, setNationality] = useState('');
  const [religion, setReligion] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [weight, setWeight] = useState('');

  const patientData = {
    firstName: firstName,
    lastName: lastName,
    sex: sex,
    age: age,
    nationality: nationality,
    religion: religion,
    maritalStatus: maritalStatus,
    address: address,
    email: email,
    weight: weight,
  };

  const patient = {
    firstName: 'mangoes',
    lastName: 'lastName',
    sex: 'male',
    age: 34,
    nationality: 'ugandan',
    religion: 'christian',
    maritalStatus: 'single',
    address: 'kampala',
    email: 'mangoes@gmail.com',
    weight: 67,
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
              placeholder="Sex"
              onChangeText={(text) => {
                setSex(text);
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
                setReligion(text);
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
          <View style={{marginVertical: 10}}>
            <Button
              title="Submit"
              onPress={() => {
                AddPatient.processAddPatient()
                  ? showToast('Success')
                  : showToast('Faild');
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
    borderColor: '#7cb63b',
    marginVertical: 5,
    borderRadius: 5,
  },
});
