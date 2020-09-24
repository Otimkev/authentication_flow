import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SupportScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Call Joan Nassuna our Virtual Assistant</Text>
    </View>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
