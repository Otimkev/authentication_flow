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

const StartChatListScreen = ({navigation, route}) => {
  const [chat_head_list, set_chat_head_list] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [user_id, set_user_id] = useState(1);

  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;

      const fetchCategories = async () => {
        try {
          const res = await axios.get(`${API_URL}all-users/`);
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
    }, []),
  );


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
          navigation.navigate('chat_room', {
            receiver_username: `${item.firstName} ${item.lastName}`,
            receiver_id: item.id,
            room_id: false,
          });
        }}>
         <Avatar source={require('../../assets/doctor3.png')} />
        <ListItem.Content>
          <ListItem.Title>{`${item.firstName} ${item.lastName}`}</ListItem.Title>
          <ListItem.Subtitle>{item.hospital}</ListItem.Subtitle>
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
            data={chat_head_list.filter((user) => user.id !== 1)}
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

export default StartChatListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
