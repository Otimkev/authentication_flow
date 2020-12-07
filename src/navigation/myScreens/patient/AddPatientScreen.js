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
import CardView from 'react-native-cardview';
import {globalStyles} from '../../../styles/Global';
import {Picker} from '@react-native-community/picker';
import * as actionCreators from '../../../model/patient/addPatient/Actions';
import {connect} from 'react-redux';
import {Loader} from '../../../components/Loader';

const AddPatientScreenView = ({
  navigation,
  createPatient,
  responseData,
  isAddPatientLoading,
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('male');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('single');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [emergencyFirstName, setEmergencyFirstName] = useState('');
  const [emergencyLastName, setEmergencyLastName] = useState('');
  const [emergencyPhoneNumber, setEmergencyPhoneNumber] = useState('');
  const [relationship, setRelationship] = useState('friend');
  const [ward, setWard] = useState('ICU');
  const [bed, setBed] = useState('05');
  const [mState, setmState] = useState(false);

  const patientData = {
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    dateOfBirth: dateOfBirth,
    maritalStatus: maritalStatus,
    email: email,
    phoneNumber: phoneNumber,
    address: address,
    emergencyFirstName: emergencyFirstName,
    emergencyLastName: emergencyLastName,
    emergencyPhoneNumber: emergencyPhoneNumber,
    relationship: 'relationship',
    ward: 'ward',
    bed: 'bed',
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
          <View style={globalStyles.fieldSet}>
            <Text style={globalStyles.legend2}>First Name</Text>
            <TextInput
              style={globalStyles.TextInput}
              //placeholder="First name"
              onChangeText={(text) => {
                setFirstName(text);
              }}
            />
          </View>
          <View style={globalStyles.fieldSet}>
            <Text style={globalStyles.legend2}>Last Name</Text>
            <TextInput
              style={globalStyles.TextInput}
              //placeholder="Last name"
              onChangeText={(text) => {
                setLastName(text);
              }}
            />
          </View>
          {/*Patient Age and Sex Section*/}
          <View style={globalStyles.fieldSet}>
            <Text style={globalStyles.legend2}>Gender</Text>
            <Picker style={globalStyles.pickerContainer}>
              <Picker.Item label="Male" value="Male" />
              <Picker.Item label="Female" value="Female" />
            </Picker>
            {/* <TextInput
                style={globalStyles.TextInput}
                //placeholder="Gender"
                onChangeText={(text) => {
                  setGender(text);
                }}
              /> */}
          </View>
          <View style={globalStyles.fieldSet}>
            <Text style={globalStyles.legend2}>Age</Text>
            <TextInput
              style={globalStyles.TextInput}
              //placeholder="Age"
              onChangeText={(text) => {
                setDateOfBirth(text);
              }}
              keyboardType="phone-pad"
            />
          </View>
          {/* Patient Address Section */}
          <View style={globalStyles.fieldSet}>
            <Text style={globalStyles.legend2}>Address</Text>
            <TextInput
              style={globalStyles.TextInput}
              //placeholder="Address"
              onChangeText={(text) => {
                setAddress(text);
              }}
            />
          </View>
          {/* Patient Marital Status Section */}
          <View style={globalStyles.fieldSet}>
            <Text style={globalStyles.legend2}>Marital Status</Text>
            <Picker style={globalStyles.pickerContainer}>
              <Picker.Item label="Single" value="Single" />
              <Picker.Item label="Married" value="Married" />
              <Picker.Item label="Divorced" value="Divorced" />
              <Picker.Item label="Widowed" value="Widowed" />
            </Picker>
            {/* <TextInput
                style={globalStyles.TextInput}
                //placeholder="Marital Status"
                onChangeText={(text) => {
                  setMaritalStatus(text);
                }}
              /> */}
          </View>
          {/* Patient Phone Number Section */}
          <View style={globalStyles.fieldSet}>
            <Text style={globalStyles.legend2}>Phone Number</Text>
            <TextInput
              style={globalStyles.TextInput}
              //placeholder="Phone Number"
              onChangeText={(text) => {
                setPhoneNumber(text);
              }}
              keyboardType="phone-pad"
              maxLength={10}
            />
          </View>
          {/* Patient Email Address Section */}
          <View style={globalStyles.fieldSet}>
            <Text style={globalStyles.legend2}>Email</Text>
            <TextInput
              style={globalStyles.TextInput}
              //placeholder="Email"
              onChangeText={(text) => {
                setEmail(text);
              }}
              keyboardType="email-address"
            />
          </View>
          <View style={globalStyles.fieldSet}>
            <Text style={globalStyles.legend2}>Ward</Text>
            <Picker style={globalStyles.pickerContainer}>
              <Picker.Item label="General Ward" value="General Ward" />
              <Picker.Item label="Cardiology" value="Cardiology" />
              <Picker.Item label="ICU" value="ICU" />
              <Picker.Item label="Orthopaedics" value="Orthopaedics" />
              <Picker.Item label="Neurology" value="Neurology" />
              <Picker.Item label="Maternity" value="Maternity" />
              <Picker.Item label="Oncology" value="Oncology" />
              <Picker.Item label="Opothalmology" value="Opothalmology" />
            </Picker>
          </View>
          <View style={globalStyles.fieldSet}>
            <Text style={globalStyles.legend2}>Bed Number</Text>
            <TextInput
              style={globalStyles.TextInput}
              //placeholder="Bed"
              onChangeText={(text) => {
                setBed(text);
              }}
              keyboardType="phone-pad"
            />
          </View>
          {/* Emergency Contact section */}
          <Text style={globalStyles.BlockHeading}>
            Emergency contact Information
          </Text>
          <View style={globalStyles.fieldSet}>
            <Text style={globalStyles.legend2}>First Name</Text>
            <TextInput
              style={globalStyles.TextInput}
              //placeholder="First name"
              onChangeText={(text) => {
                setEmergencyFirstName(text);
              }}
            />
          </View>

          <View style={globalStyles.fieldSet}>
            <Text style={globalStyles.legend2}>Last Name</Text>
            <TextInput
              style={globalStyles.TextInput}
              //placeholder="Last name"
              onChangeText={(text) => {
                setEmergencyLastName(text);
              }}
            />
          </View>
          {/* Emergency Phone Number Section */}
          <View style={globalStyles.fieldSet}>
            <Text style={globalStyles.legend2}>Phone Number</Text>
            <TextInput
              style={globalStyles.TextInput}
              //placeholder="eg. 0777..."
              onChangeText={(text) => {
                setEmergencyPhoneNumber(text);
              }}
              keyboardType="phone-pad"
              maxLength={10}
            />
          </View>
          {/* Emergency Relationship Section */}
          <View style={globalStyles.fieldSet}>
            <Text style={globalStyles.legend2}>Relationship</Text>
            <Picker style={globalStyles.pickerContainer}>
              <Picker.Item label="Mother" value="Mother" />
              <Picker.Item label="Father" value="Father" />
              <Picker.Item label="Sister" value="Sister" />
              <Picker.Item label="Brother" value="Brother" />
              <Picker.Item label="Wife" value="Wife" />
              <Picker.Item label="Husband" value="Husband" />
              <Picker.Item label="Friend" value="Friend" />
              <Picker.Item label="Other" value="Other" />
            </Picker>
          </View>
          {/* Submit Button Section */}
          <View style={globalStyles.DirectionRow}>
            <TouchableOpacity
              style={styles.Card}
              onPress={() => {
                createPatient(patientData);
                if (!responseData) {
                  showToast('Unsccessful');
                }
                showToast('Successful');
                navigation.goBack();
              }}>
              <Text style={globalStyles.ButtonText}>Add Patient</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancel}
              onPress={async () => {
                navigation.navigate('Patients');
              }}>
              <Text style={globalStyles.ButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </CardView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: '100%',
    padding: 0,
  },
  inputWrap: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  Card: {
    width: '60%',
    backgroundColor: '#78af38',
    borderRadius: 10,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  CardText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  cancel: {
    width: '35%',
    backgroundColor: 'red',
    borderRadius: 10,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
});

const mapStateToProps = (state, props) => {
  const {isAddPatientLoading, responseData} = state.addPatient;
  return {isAddPatientLoading, responseData};
};

const mapDispatchToProps = (dispatch, props) => ({
  createPatient: (args) => {
    dispatch(actionCreators.addPatientsResponse(args));
  },
});

export const AddPatientScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddPatientScreenView);
