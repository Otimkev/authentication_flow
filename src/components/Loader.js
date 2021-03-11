import {ActivityIndicator, View, StyleSheet} from 'react-native';
import React from 'react';
import ScreenContainer from './ScreenContainer';

export const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007360" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});