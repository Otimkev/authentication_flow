import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SharedPatients = () => {
  return (
    <View style={styles.container}>
      <Text>Shared Patients</Text>
    </View>
  );
};

export default SharedPatients;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
