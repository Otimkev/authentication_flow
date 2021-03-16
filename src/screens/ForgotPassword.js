import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

import ScreenContainer from '../components/ScreenContainer';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';
import {globalStyles} from '../styles/Global';
import {Formik, Field} from 'formik';
import * as yup from 'yup';
import CustomInput from '../components/CustomInput';
import {primary_color, secondary_color} from '../styles/color';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    flex: 1,
    marginTop: 50,
  },
  buttonStyle: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    height: 45,
    backgroundColor: primary_color,
  },
});

class ForgotPassword extends React.PureComponent {
  state = {
    email: '',
  };


  onChangeInput = (text, name) => {
    this.setState({[name]: text});
  };

  onSubmit = () => {
    const {navigation} = this.props;
    navigation.navigate('Login');
  };

  render() {
    const {email} = this.state;
    return (
      <View style={styles.container}>
        <Text>
          We will send the instructions how you can reset your password to your
          email.
        </Text>
        <Formik>
          <Field component={CustomInput} name="email" placeholder="Email" />
        </Formik>

        <AppButton
          title="SEND EMAIL"
          onPress={this.onSubmit}
          disabled={!email}
          buttonStyle={styles.buttonStyle}
        />
      </View>
    );
  }
}

ForgotPassword.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default ForgotPassword;
