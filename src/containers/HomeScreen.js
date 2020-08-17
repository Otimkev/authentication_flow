import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Dashboard from 'react-native-dashboard';
import Attention from '../components/AttentionComponent';
import Tab from '../components/TabNavigator';
// import {Feather} from 'react-native-vector-icons';

const items = [
  {name: 'Patients', background: '#2F4F4F', icon: 'users'},
  {name: 'Specialists', background: '#2F4F4F', icon: 'gratipay'},
  {name: 'Wards', background: '#2F4F4F', icon: 'heart'},
  {name: 'Inventory', background: '#2F4F4F', icon: 'users'},
  {name: 'Medical Officers', background: '#2F4F4F', icon: 'group'},
  {name: '', background: '#2F4F4F', icon: 'calendar'},
];

class HomeScreen extends Component {
  _card = (props) => {
    console.log('Card: ' + props.name);
  };
  render() {
    return (
      <View style={styles.container}>
        <Attention />
        <Dashboard
          items={items}
          background={true}
          card={this._card}
          column={2}
        />
        <Tab />
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

// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';

// const HomeScreen = () => {
//   return (
//     <View style={styles.homeContainer}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   homeContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default HomeScreen;
