import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';

import {colors} from '../theme';

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 20,
  },
  inputContainerStyle: {
    borderBottomColor: colors.green,
  },
});

const AppInput = ({label, onChangeInput, ...rest}) => (
  <View style={styles.inputContainer}>
    <Input
      onChangeText={onChangeInput}
      containerStyle={styles.inputContainerStyle}
      {...rest}
      placeholder={label}
    />
  </View>
);

AppInput.propTypes = {
  label: PropTypes.string,
  onChangeInput: PropTypes.func,
};

AppInput.defaultProps = {
  label: '',
  onChangeInput: () => {},
};

export default AppInput;
