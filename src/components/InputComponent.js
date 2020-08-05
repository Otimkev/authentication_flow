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
    width: 350,
    height: 45,
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 6,
    margin: 10,
  },
});

export default InputComponent;
