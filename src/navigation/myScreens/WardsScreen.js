import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const WardsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Wards screen</Text>
    </View>
  );
};

export default WardsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
