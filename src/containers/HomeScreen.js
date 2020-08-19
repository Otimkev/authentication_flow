import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Attention from '../components/AttentionComponent';
import DashCards from '../components/DashCards';
class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Attention />
        <DashCards />
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

export default HomeScreen;
