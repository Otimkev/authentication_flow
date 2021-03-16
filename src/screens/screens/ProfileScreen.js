import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, StyleSheet, Image} from 'react-native';
import {Text, Card} from 'react-native-elements';
import {useFocusEffect} from '@react-navigation/native';
import {globalStyles} from '../../styles/Global';
import {primary_color} from '../../styles/color';
import Icon from 'react-native-vector-icons/Fontisto';

import * as actions from '../../store/actions';
import AppButton from '../../components/AppButton';
import axios from 'axios';
import {API_URL} from '../../utils/config';
import {retrieveData} from '../../services/persistentStorage';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   text: {
//     marginBottom: 10,
//   },
//   buttonStyle: {
//     borderRadius: 0,
//     marginLeft: 0,
//     marginRight: 0,
//     marginBottom: 0,
//   },
// });

const ProfileScreen = ({navigation, logout}) => {
  const onLogoutPress = () => {
    logout();
  };

  const [user, set_user] = React.useState(0);

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;

      const fetchCategories = async () => {
        const user_id = await retrieveData('user');
        console.log(user_id.id);
        try {
          const res = await axios.get(`${API_URL}user/${user_id.id}`);
          if (res.status === 200) {
            console.log(res.data);
          }
          if (isActive) {
            set_user(res.data);
          }
        } catch (e) {
          console.log(e);
        }
      };

      fetchCategories();

      return () => {
        isActive = false;
      };
    }, []),
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.avatar}
          source={require('../../assets/doctor3.png')}
        />
        <View style={{marginTop: 20}}>
          <Text
            style={{fontSize: 16}}>{`Dr. ${user.firstName} ${user.lastName}`}</Text>
        </View>
      </View>
      <View />

      <View style={{marginBottom: 10}}>
        <Icon name="email" color={primary_color} size={25} />
      </View>
      <View>
        <Text style={{fontSize: 16}}>{user.email}</Text>
      </View>

      <View style={{marginTop: 10}}>
        <Icon name="phone" color={primary_color} size={25} />
      </View>
      <View>
        <Text style={{fontSize: 16}}> +256 {user.phoneNumber}</Text>
      </View>

      <View style={{marginTop: 10}}>
        <Icon name="home" color={primary_color} size={25} />
      </View>
      <View>
        <Text style={{fontSize: 16}}>{user.hospital}</Text>
      </View>
      <AppButton
        onPress={() => {
          onLogoutPress();
        }}
        icon={{name: 'exit-to-app', color: '#fff'}}
        buttonStyle={styles.buttonStyle}
        title="Logout"
      />
      <View />
    </View>
  );
};

ProfileScreen.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, actions)(ProfileScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    alignItems: 'center',
    margin: 20,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 1,
    borderColor: primary_color,
  },
  name: {
    fontSize: 30,
    color: primary_color,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  buttonStyle: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    marginTop: 20,
    height: 45,
    backgroundColor: primary_color,
  },
});
