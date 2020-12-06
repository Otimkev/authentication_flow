import {ActivityIndicator, View, StyleSheet} from 'react-native';
import React from 'react';

export const Loader = () => {
  return (
    <View style={styles.indicatorContainer}>
      <ActivityIndicator size="large" color="#007360" />
    </View>
  );
};

const styles = StyleSheet.create({
  indicatorContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
