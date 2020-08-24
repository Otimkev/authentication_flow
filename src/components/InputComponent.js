import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
// import {color, greaterThan} from 'react-native-reanimated';

const InputComponent = ({placeholderText}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholderText}
        placeholderTextColor="#A9A9A9"
        style={styles.TextInput}
      />
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
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
  },
  TextInput: {
    paddingHorizontal: 30,
    color: '#2F4F4F',
    fontWeight: 'bold',
  },
});

export default InputComponent;
