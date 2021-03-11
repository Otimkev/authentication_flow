import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PatientScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Patient screen</Text>
    </View>
  );
};

export default PatientScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
