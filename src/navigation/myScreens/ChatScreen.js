import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import Icon from 'react-native-vector-icons/Fontisto';
import socketIO from 'socket.io-client';
import {API_URL} from '../../utils/config/Urls';
import {globalStyles} from '../../styles/Global';
import {showToast} from '../../components/Toast';
import {connect} from 'react-redux';
import {getChatRoomsResponse} from '../../model/chat/loadChatRooms/Actions';
import {Loader} from '../../components/Loader';
import AsyncStorage from '@react-native-community/async-storage';
import {gotMessagesResponse} from '../../model/chat/loadMessages/Actions';

const actions = [
  {
    text: 'Broadcast',
    // icon: <Icon name="home" color="#007360" />,
    name: 'bt_accessibility',
    position: 2,
  },
  {
    text: 'New Group',
    icon: require('../../assets/img/Crit.png'),
    name: 'bt_language',
    position: 1,
  },
  {
    text: 'Specialists',
    // icon: require('./images/ic_room_white.png'),
    name: 'room',
    position: 3,
  },
  {
    text: 'New Chat',
    name: 'new_chat_list',
    position: 4,
  },
];

const ChatScreenView = ({
  navigation,
  isFetching,
  chatRooms,
  getChatRooms,
  getHistory,
}) => {
  const [currentUserId, setcurrentUserId] = useState(null);
  useEffect(() => {
    getChatRooms();
    filterUser();
  }, [getChatRooms]);
  console.log(chatRooms);
  const filterUser = async () => {
    const userData = await AsyncStorage.getItem('user');
    const data = JSON.parse(userData);
    setcurrentUserId(data.result.id);
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          getChatRooms();
          getHistory(item.id);
          navigation.navigate('talk', {
            mangoes: `${item.chatRoomMember.firstName} ${item.chatRoomMember.lastName}`,
            roomId: item.id,
            memberId: item.createdByUserId,
            senderId: currentUserId,
          });
        }}>
        <View style={styles.row}>
          <View>
            <View style={styles.nameContainer}>
              <Text
                style={globalStyles.nameTxt}
                numberOfLines={1}
                ellipsizeMode="tail">
                {`${item.chatRoomMember.firstName} ${item.chatRoomMember.lastName}`}
              </Text>
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>{item.id}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      {isFetching ? (
        <Loader />
      ) : (
        <FlatList
          extra={chatRooms}
          data={chatRooms}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
      <FloatingAction
        actions={actions}
        onPressItem={(name) => {
          navigation.navigate(name);
        }}
      />
    </View>
  );
};

const mapStateToProps = (state, props) => {
  const {chatRooms, isFetching} = state.getChatRooms;
  return {chatRooms, isFetching};
};

const mapDispatchToProps = (dispatch, props) => ({
  getChatRooms: () => {
    dispatch(getChatRoomsResponse());
  },
  getHistory: (args) => {
    dispatch(gotMessagesResponse(args));
  },
});

export const ChatScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatScreenView);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 18,
    width: 170,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  indicatorContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: 'grey',
    fontSize: 12,
    marginLeft: 15,
  },
});
