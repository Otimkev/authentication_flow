import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import {Loader} from '../../components/Loader';
import {useTheme} from '@react-navigation/native';
import AppButton from '../../components/AppButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import {API_URL} from '../../utils/config';
import {retrieveData} from '../../services/persistentStorage';
import {useFocusEffect} from '@react-navigation/native';
import {ListItem, Avatar} from 'react-native-elements';

const NotificationScreen = ({navigation, route}) => {
  const [chat_head_list, set_chat_head_list] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [user_id, set_user_id] = useState(1);

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;

      const fetchCategories = async () => {
        try {
          const res = await axios.get(`${API_URL}get-share/${user_id}`);
          if (res.status === 200) {
            console.log(res.data);
          }
          if (isActive) {
            setisLoading(false);

            set_chat_head_list(res.data);
          }
        } catch (e) {
          console.log(e);
        }
      };

      fetchCategories();

      return () => {
        isActive = false;
      };
    }, [user_id]),
  );

  const on_select = async (receiver_id) => {
    try {
      const res = await axios.post(
        `${API_URL}share/${4}/${receiver_id}/${'patient_id'}/`,
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

  const EmptyCategories = () => {
    return (
      <View>
        <Text>Empty list</Text>
      </View>
    );
  };

  const renderItem = ({item}) => {
    return (
      <ListItem
        bottomDivider
        onPress={() => {
          navigation.navigate('lab_test_form');
        }}>
        <ListItem.Content>
          <ListItem.Title>{item.label}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : chat_head_list.length <= 0 ? (
        EmptyCategories()
      ) : (
        <View>
          <FlatList
            data={chat_head_list}
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

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
