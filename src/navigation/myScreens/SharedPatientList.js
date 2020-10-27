import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SharedPatientList = () => {
  return (
    <View style={styles.container}>
      <Text>Call Ineza Rachel our Virtual Assistant</Text>
    </View>
  );
};

export default SharedPatientList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
