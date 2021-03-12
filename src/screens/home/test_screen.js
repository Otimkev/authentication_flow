import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PatientScreenView = ({route}) => {
  return (
    <View style={styles.container}>
      <Text>{route.params.num}</Text>
    </View>
  );
};

export default PatientScreenView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
