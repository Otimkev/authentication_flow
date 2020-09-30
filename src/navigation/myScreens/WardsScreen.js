import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Dashboard from 'react-native-dashboard';

const items = [
  {
    name: 'Maternity',
    background: '#007360',
    icon: 'user',
  },
  {
    name: 'Cardiology',
    background: '#007360',
    icon: 'heartbeat',
  },
  {
    name: 'ICU',
    background: '#007360',
    icon: 'plus-circle',
  },
  {
    name: 'Orthopaedics',
    background: '#007360',
    icon: 'wheelchair',
  },
  {
    name: 'Oncology',
    background: '#007360',
    icon: 'stethoscope',
  },
  {
    name: 'Neurology',
    background: '#007360',
    icon: 'medkit',
  },
  {
    name: 'Ophthalmology',
    background: '#007360',
    icon: 'eye',
  },
  {
    name: 'Otolaryngology',
    background: '#007360',
    icon: 'deaf',
  },
];

export default class WardScreen extends Component {
  _card = (el) => {
    console.log('Card: ' + el.name);
  };
  render() {
    return (
      <View style={styles.container}>
        <Dashboard
          items={items}
          background={true}
          card={this._card}
          column={2}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
});
