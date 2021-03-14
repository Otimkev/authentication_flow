import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import * as action_types from '../../store/get_patient_details/actions';
import {Loader} from '../../components/Loader';
import {useTheme} from '@react-navigation/native';
import AppButton from '../../components/AppButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ListItem, Avatar} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler';
import ProfileScreen from '../profile/profile_screen';
import {colors} from '../../theme';
import ScreenContainer from '../../components/ScreenContainer';
import axios from 'axios';
import {API_URL} from '../../utils/config';
import {retrieveData} from '../../services/persistentStorage';
import {useFocusEffect} from '@react-navigation/native';

const ShareListView = ({navigation, route}) => {
  const patient_id = route.params.patient_id;

  const [share_list, set_share_list] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [user_id, set_user_id] = useState(1);
  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;

      const fetchUser = async () => {
        try {
          const user_id = await retrieveData('user');
          const res = await axios.get(`${API_URL}all-users/`);
          if (res.status === 200) {
            console.log(res.data);
          }
          if (isActive) {
            setisLoading(false);
            set_user_id(user_id);
            set_share_list(res.data);
          }
        } catch (e) {
          console.log(e);
        }
      };

      fetchUser();

      return () => {
        isActive = false;
      };
    }, []),
  );

  const on_share = async (receiver_id) => {
    console.log(receiver_id)
    try {
      const res = await axios.post(
        `${API_URL}share/${4}/${receiver_id}/${patient_id}/`,
      );
      console.log(receiver_id);
      if (res.status === 200) {
        return navigation.goBack();
      } else {
        alert('Error sharing!');
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderItem = ({item}) => {
    return (
      <ListItem
        bottomDivider
        onPress={async () => {
          await on_share(item.id);
        }}>
        <ListItem.Content>
          <ListItem.Title>{item.firstName}</ListItem.Title>
          <ListItem.Subtitle>{item.lastName}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : share_list === [] ? (
        <ProfileScreen />
      ) : (
        <View>
          <FlatList
            data={share_list.filter((user) => user.id !== 1)}
            extraData={true}
            renderItem={renderItem}
            keyExtractor={(item) => Math.random().toString()}
          />
          <View />
        </View>
      )}
    </View>
  );
};

export default ShareListView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
