import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile Screen</Text>
      <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
