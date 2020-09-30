import React, {Component} from 'react';
import {Text, View, ProgressBarAndroid, StyleSheet} from 'react-native';

class AttentionComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>ATTENTION</Text>
        <Text>
          <ProgressBarAndroid />
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default AttentionComponent;
