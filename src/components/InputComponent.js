import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const InputComponent = ({placeholderText}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder={placeholderText} placeholderTextColor="#A9A9A9" />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: 340,
    height: 45,
    borderColor: '#2F4F4F',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 25,
    margin: 10,
    justifyContent: 'center',
  },
  // placeholder: {
  //   color: 'green',
  // },
});

export default InputComponent;
