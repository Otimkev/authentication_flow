import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import {Loader} from '../../components/Loader';

import AppButton from '../../components/AppButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ListItem, Avatar} from 'react-native-elements';
import axios from 'axios';
import {API_URL} from '../../utils/config';
import {retrieveData} from '../../services/persistentStorage';
import {useFocusEffect} from '@react-navigation/native';

const actions = [
  {
    text: 'New Chat',
    // icon: require('../../assets/img/chat2.png'),
    name: 'Chat_stack',
    position: 4,
    color: '#007360',
  },
];

const ChatHeadScreen = ({navigation, route}) => {
  const [chat_head_list, set_chat_head_list] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [user_id, set_user_id] = useState(1);
  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;

      const fetchUser = async () => {
        try {
          const userId = await retrieveData('user');
          const res = await axios.get(`${API_URL}chat/${user_id}/head/`);
          if (res.status === 200) {
            console.log(res.data);
          }
          if (isActive) {
            setisLoading(false);
            set_user_id(userId);
            set_chat_head_list(res.data);
          }
        } catch (e) {
          console.log(e);
        }
      };

      fetchUser();

      return () => {
        isActive = false;
      };
    }, [user_id]),
  );

  const renderItem = ({item}) => {
    return (
      <ListItem
        bottomDivider
        onPress={() => {
          navigation.navigate('ConversationStackScreen', {
            screen: 'chat_room',
            params: {
              receiver_username: `${
                user_id === item.member.id
                  ? item.author.firstName
                  : item.member.firstName
              }`,
              receiver_id: item.member.id,
              room_id: item.id,
            },
          });
        }}>
        <ListItem.Content>
          <ListItem.Title>
            {user_id === item.member.id
              ? `${item.author.firstName} ${item.author.lastName}`
              : `${item.author.firstName} ${item.author.lastName}`}
          </ListItem.Title>
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
        <View style={styles.container2}>
          <Text>Empty list</Text>
        </View>
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
      <FloatingAction
        actions={actions}
        color="#007360"
        onPressItem={(name) => {
          navigation.navigate(name);
        }}
      />
    </View>
  );
};

export default ChatHeadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
  },
});
