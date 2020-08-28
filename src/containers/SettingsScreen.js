import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class SettingsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default SettingsScreen;
