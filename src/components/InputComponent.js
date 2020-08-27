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
    borderColor: '#7cb63b',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
    justifyContent: 'center',
  },
  TextInput: {
    paddingHorizontal: 30,
    color: '#026062',
    fontWeight: 'bold',
  },
});

export default InputComponent;
