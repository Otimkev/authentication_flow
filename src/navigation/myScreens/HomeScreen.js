import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Attention from '../../components/AttentionComponent';
import {globalStyles} from '../../styles/Global';

const HomeScreen = ({navigation}) => {
  return (
    <View style={globalStyles.container}>
      <Button title="Add Patient" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
