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
import {Dropdown} from 'react-native-material-dropdown';
import AddPatient from '../../../httpClient/repository/patient/AddPatient';
import CardView from 'react-native-cardview';
import {globalStyles} from '../../../styles/Global';

const data = [
  {
    value: 'Banana',
  },
  {
    value: 'Mango',
  },
  {
    value: 'Pear',
  },
];

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
              placeholder="Age"
              onChangeText={(text) => {
                setAge(text);
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
              placeholder="Address"
              onChangeText={(text) => {
                setAddress(text);
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
              placeholder="Weight"
              onChangeText={(text) => {
                setWeight(text);
              }}
            />
          </View>
          <Dropdown label="Favorite Fruit" data={data} />
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
          {/* <View
            style={{
              marginVertical: 10,
              width: 320,
              height: 40,
            }}> */}
          {/* <Button
              style={globalStyles.Button}
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
            /> */}
          {/* </View> */}
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
