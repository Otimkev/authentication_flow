import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class SpecialistsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Specialists</Text>
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

export default SpecialistsScreen;
