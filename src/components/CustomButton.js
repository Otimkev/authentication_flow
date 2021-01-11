import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {globalStyles} from '../styles/Global';

const CustomButton = (props) => {
  return (
    <TouchableOpacity
      style={globalStyles.SubmitButton}
      onPress={props.onPress}
      disabled={props.disabled}>
      <Icon name="arrow-right" color="#ffff" size={60} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderColor: 'black',
  // },
  arrow: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    width: 60,
    height: 60,
  },
});

export default CustomButton;
