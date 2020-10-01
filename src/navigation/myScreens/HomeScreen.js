import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Attention from '../../components/AttentionComponent';
import {globalStyles} from '../../styles/Global';

const HomeScreen = () => {
  return (
    <View style={globalStyles.container}>
      <Attention />
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
