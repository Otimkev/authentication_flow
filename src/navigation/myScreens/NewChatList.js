import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../model/patient/notifications/invite/Actions';
import {createChatRoomResponse} from '../../model/chat/createChatRoom/Actions';
import {getChatRoomsResponse} from '../../model/chat/loadChatRooms/Actions';
import {GET_USER_RESPONSE} from '../../utils/Constants';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import {Loader} from '../../components/Loader';
import {globalStyles} from '../../styles/Global';
import {showToast} from '../../components/Toast';
import AsyncStorage from '@react-native-community/async-storage';

const NewChatListScreenView = ({
  navigation,
  isFetching,
  inviteList,
  getAllUsers,
  makeChatRoom,
  getChatRooms,
}) => {
  const [currentUser, setCurrentUser] = useState(0);
  useEffect(() => {
    getAllUsers();
    filterUser();
  }, [getAllUsers]);
  const filterUser = async () => {
    const userData = await AsyncStorage.getItem('user');
    const data = JSON.parse(userData);
    setCurrentUser(data.id);
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          showToast(`${item.lastName}`);
          makeChatRoom({memberId: item.id});
          navigation.navigate('Chats');
        }}>
        <View style={styles.row}>
          <View>
            <View style={styles.nameContainer}>
              <Text
                style={globalStyles.nameTxt}
                numberOfLines={1}
                ellipsizeMode="tail">
                {`${item.firstName} ${item.lastName}`}
              </Text>
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>{item.email}</Text>
            </View>
            <Text style={styles.msgTxt}>Mulago</Text>
            <Text style={styles.msgTxt}>0705432558</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={globalStyles.loader}>
      {isFetching ? (
        <Loader />
      ) : (
        <FlatList
          extra={inviteList}
          data={inviteList.filter((user) => user.id !== currentUser)}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const mapStateToProps = (state, props) => {
  const {inviteList, isFetching} = state.getUsers;
  const {isLoading, responseData} = state.sharePatient;
  return {inviteList, isFetching, isLoading, responseData};
};

const mapDispatchToProps = (dispatch, props) => ({
  getAllUsers: () => {
    dispatch({
      type: GET_USER_RESPONSE,
    });
  },
  makeChatRoom: (args) => {
    dispatch(createChatRoomResponse(args));
  },
  getChatRooms: () => {
    dispatch(getChatRoomsResponse());
  },
});

export const NewChatListScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewChatListScreenView);

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
