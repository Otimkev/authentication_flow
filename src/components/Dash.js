import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import Dashboard from 'react-native-dashboard';

// const HomeCard = ({textData, imageUrl}) => {
//   return (
//     <container>
//       <Text>{textData}</Text>
//       <Image source={{uri: imageUrl}} />
//     </container>
//   );
// };

const items = [
  {name: 'In-Patients', background: '#2F4F4F', icon: 'user'},
  {name: 'Patients', background: '#2F4F4F', icon: 'gratipay'},
  {name: 'Specialists', background: '#2F4F4F', icon: 'heart'},
  {name: 'Medical officers', background: '#2F4F4F', icon: 'users'},
  {name: 'Wards', background: '#2F4F4F', icon: 'group'},
  {name: 'Inventory', background: '#2F4F4F', icon: 'calendar'},
];

class Dash extends Component {
  _card = (props) => {
    console.log('Card: ' + props.name);
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
    backgroundColor: '#fff',
  },
});

export default Dash;
