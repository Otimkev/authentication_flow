import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import * as action_types from '../../store/register_patient/actions';
import {index_patients} from '../../store/patients/actions';
import {Loader} from '../../components/Loader';
import AppInput from '../../components/AppInput';
import AppButton from '../../components/AppButton';
import axios from 'axios';
import {API_URL} from '../../utils/config';

class RegisterPatientScreenView extends React.PureComponent {
  // firstName: 'sam',
  // lastName: 'walter',
  // gender: 'male',
  // dateOfBirth: '1/2/1989',
  // maritalStatus: 'single',
  // phoneNumber: 1705055589,
  // address: 'hoima',
  // emergencyFirstName: 'walter',
  // emergencyLastName: 'pink',
  // emergencyPhoneNumber: 2705066789,
  // relationship: 'friend',
  // email: 'sppoopiiiooo.com',


  state = {
  firstName: '',
  lastName: '',
  gender: '',
  dateOfBirth: '',
  maritalStatus: '',
  phoneNumber: '',
  address: '',
  emergencyFirstName: '',
  emergencyLastName: '',
  emergencyPhoneNumber: '',
  relationship: '',
  email: '',
  };

  onChangeInput = (text, name) => {
    this.setState({[name]: text});
  };
  onSubmit = async () => {
    const params = {...this.state};
      try{
        const response = await axios.post(`${API_URL}register-patient/${4}/`, params);
        console.log(response.data['success'])
        if(response.data['success'] === false) {
          alert('Error registering!');
       return null;
        }
        this.setState({})
             this.props.reload_index_patient();
             return this.props.navigation.goBack();
      }catch(error){
        console.log(error)
      }
    // this.props.register_patient(params);

 
    //   console.log(res.['success']);
    //   if (res['success'] === false) {
    //     alert('Error registering!');
    //     return null;
    //   }
    //   if(res['success'] === true) {
    //   this.setState({}cons
    //   this.props.reload_index_patient();
    //   return this.props.navigation.goBack();}

  };
  render() {
    const {
      firstName,
      lastName,
      gender,
      dateOfBirth,
      maritalStatus,
      phoneNumber,
      address,
      emergencyFirstName,
      emergencyLastName,
      emergencyPhoneNumber,
      relationship,
      email,
    } = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <AppInput
            label="First name"
            onChangeInput={(value) => this.onChangeInput(value, 'firstName')}
          />
          <AppInput
            label="Last name"
            onChangeInput={(value) => this.onChangeInput(value, 'lastName')}
          />
          <AppInput
            label="Gender"
            onChangeInput={(value) => this.onChangeInput(value, 'gender')}
          />
          <AppInput
            label="Date of birth"
            onChangeInput={(value) => this.onChangeInput(value, 'dateOfBirth')}
          />
          <AppInput
            label="Maritial status"
            onChangeInput={(value) =>
              this.onChangeInput(value, 'maritalStatus')
            }
          />
          <AppInput
            label="Email Address"
            onChangeInput={(value) => this.onChangeInput(value, 'email')}
          />
          <AppInput
            label="Phone number"
            onChangeInput={(value) => this.onChangeInput(value, 'phoneNumber')}
          />
          <AppInput
            label="Home address"
            onChangeInput={(value) => this.onChangeInput(value, 'address')}
          />
          <Text style={{textAlign: 'center', fontSize: 18}}>
            Emmergency contact information
          </Text>
          <AppInput
            label="First name"
            onChangeInput={(value) =>
              this.onChangeInput(value, 'emergencyFirstName')
            }
          />
          <AppInput
            label="Last name"
            onChangeInput={(value) =>
              this.onChangeInput(value, 'emergencyLastName')
            }
          />
          <AppInput
            label="Emergency Phone Number"
            onChangeInput={(value) =>
              this.onChangeInput(value, 'emergencyPhoneNumber')
            }
          />
          <AppInput
            label="Relationship"
            onChangeInput={(value) => this.onChangeInput(value, 'relationship')}
          />

          <View style={{margin: 16}}>
            <AppButton
              title="Register"
              onPress={this.onSubmit}
              disabled={
                !firstName ||
                !lastName ||
                !gender ||
                !dateOfBirth ||
                !maritalStatus ||
                !phoneNumber ||
                !address ||
                !emergencyFirstName ||
                !emergencyLastName ||
                !emergencyPhoneNumber ||
                !relationship ||
                !email
              }
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state, props) => {
  return state.register_patient_reducer;
};

const mapDispatchToProps = (dispatch, props) => ({
  register_patient: (patient_data) => {
    dispatch(action_types.register_patient(patient_data));
  },
  reload_index_patient: () => {
    dispatch(index_patients());
  },
});

const RegisterPatient = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterPatientScreenView);
export default RegisterPatient;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
