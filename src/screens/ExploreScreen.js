import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const ExploreScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ExploreScreen</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
    </SafeAreaView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
