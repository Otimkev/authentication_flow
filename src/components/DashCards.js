import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Dashboard from 'react-native-dashboard';
// import Icon from 'react-native-vector-icons/FontAwesome';

const items = [
  {name: 'In Patients', background: '#2F4F4F', icon: 'user'},
  {name: 'Patients', background: '#2F4F4F', icon: 'gratipay'},
  {name: 'Specialist', background: '#2F4F4F', icon: 'heart'},
  {name: 'Medical Officers', background: '#2F4F4F', icon: 'users'},
  {name: 'Wards', background: '#2F4F4F', icon: 'group'},
  {name: 'Inventory', background: '#2F4F4F', icon: 'calendar'},
];
const pressHandler = ({navigation}) => {
  () => navigation.navigate('SignUp');
};
class DashCards extends Component {
  _card = (props) => {
    console.log('Card: ' + props.name);
  };

  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => pressHandler(item._card)}>
        <Dashboard
          items={items}
          background={true}
          card={this._card}
          column={2}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
});

export default DashCards;
