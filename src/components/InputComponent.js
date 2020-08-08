import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const InputComponent = ({placeholderText}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder={placeholderText} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: 320,
    height: 45,
    borderColor: '#CCC',
    backgroundColor: '#6B8E23',
    borderWidth: 1,
    borderRadius: 20,
    margin: 10,
    justifyContent: 'center',
  },
});

export default InputComponent;
