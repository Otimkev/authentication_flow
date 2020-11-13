import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../model/patient/notifications/invite/Actions';
import {GET_USER_RESPONSE} from '../../utils/Constants';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Button,
} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import {Loader} from '../../components/Loader';
import {globalStyles} from '../../styles/Global';

const UserListScreenView = ({
  navigation,
  isFetching,
  inviteList,
  getAllUsers,
  inviteUser,
  route,
}) => {
  const id = route.params.patientId;
  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          const mData = {userId: item.id, patientId: id};
          inviteUser(mData);
          navigation.navigate('Patient Information', {userId: item.id});
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
            <Text style={styles.msgTxt}>Mulago Hospital</Text>
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
          data={inviteList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const mapStateToProps = (state, props) => {
  const {inviteList, isFetching} = state.getUsers;
  const {isInviting} = state.invite;
  return {inviteList, isFetching, isInviting};
};

const mapDispatchToProps = (dispatch, props) => ({
  getAllUsers: () => {
    dispatch({
      type: GET_USER_RESPONSE,
    });
  },
  inviteUser: (args) => {
    dispatch(actionTypes.invitesResponse(args));
  },
});

export const UserListScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserListScreenView);

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
