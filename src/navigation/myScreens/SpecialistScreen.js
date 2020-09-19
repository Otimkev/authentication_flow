import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SpecialistScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
    </View>
  );
};

export default SpecialistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
