import React from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';
import {primary_color, body_color, input_color} from '../styles/color';

const CustomInput = (props) => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <>
      <TextInput
        style={[styles.textInput, hasError && styles.errorInput]}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputProps}
      />
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    height: 45,
    fontSize: 16,
    marginBottom: 20,
    borderRadius: 4,
    borderColor: primary_color,
    borderWidth: 1,
  },
  errorText: {
    fontSize: 13,
    color: 'red',
    margin: 0,
    left: 10,
  },
  errorInput: {
    borderColor: 'red',
  },
});

export default CustomInput;
