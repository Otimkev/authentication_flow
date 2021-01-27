import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {sharePatientsResponse} from '../../model/patient/sharePatient/Actions';
import {getSharedPatientsResponse} from '../../model/patient/getSharedPatients/Actions';
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
          navigation.goBack();
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
            <Text style={styles.msgTxt}>{item.hospital}</Text>
            <Text style={styles.msgTxt}>0705432558</Text>
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
  const {sharedList} = state.sharedPatients;
  return {inviteList, isFetching, isLoading, responseData, sharedList};
};

const mapDispatchToProps = (dispatch, props) => ({
  getAllUsers: () => {
    dispatch({
      type: GET_USER_RESPONSE,
    });
  },
  sharePatient: (args) => {
    dispatch(sharePatientsResponse(args));
  },
  getSharedPatients: () => {
    dispatch(getSharedPatientsResponse());
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
