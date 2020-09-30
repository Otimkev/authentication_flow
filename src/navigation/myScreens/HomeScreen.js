import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Dashboard from 'react-native-dashboard';

const items = [
  {
    name: 'To do',
    background: '#007360',
    icon: 'calendar-check-o',
  },
  {
    name: 'On Duty',
    background: '#007360',
    icon: 'gratipay',
  },
  {
    name: 'In Patients',
    background: '#007360',
    icon: 'heart',
  },
  {
    name: 'Medical Officers',
    background: '#007360',
    icon: 'users',
  },
  {
    name: 'Inventory',
    background: '#007360',
    icon: 'group',
  },
  {
    name: 'Calendar',
    background: '#007360',
    icon: 'calendar',
  },
];

export default class HomeScreen extends Component {
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
