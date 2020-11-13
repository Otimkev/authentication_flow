import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../model/patient/notifications/invites/Actions';
import {GET_NOTIFICATIONS_RESPONSE} from '../../utils/Constants';
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

const NoticationScreenView = ({
  getAllInvites,
  navigation,
  isFetching,
  invites,
  createInvites,
}) => {
  useEffect(() => {
    getAllInvites();
  }, [getAllInvites, createInvites]);
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Patient Information', {patientId: item.id});
        }}>
        <View style={styles.row}>
          <View>
            <View style={styles.nameContainer}>
              <Text
                style={styles.nameTxt}
                numberOfLines={1}
                ellipsizeMode="tail">
                {`${item.patient.firstName} ${item.patient.lastName}`}
              </Text>
              <View style={{marginHorizontal: 8}}>
                <Button title="Accept" color="#78af38" />
              </View>
              <View>
                <Button title="Decline" color="red" />
              </View>
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>{item.id}</Text>
              <Text style={styles.msgTxt}>Dr. Senabulya</Text>
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
          extra={invites}
          data={invites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      )}
      {/* <FloatingAction
        actions={[
          {
            text: 'Add Patient',
            name: 'bt_accessibility',
            position: 2,
          },
        ]}
        onPressItem={() => {
          navigation.navigate('Register Patient');
        }}
      /> */}
    </View>
  );
};

const mapStateToProps = (state, props) => {
  const {invites, isFetching} = state.invites;
  return {invites, isFetching};
};

const mapDispatchToProps = (dispatch, props) => ({
  getAllInvites: () => {
    dispatch({
      type: GET_NOTIFICATIONS_RESPONSE,
    });
  },
});

export const NoticationScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NoticationScreenView);

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
    fontWeight: 'bold',
    color: '#007360',
    fontSize: 20,
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
    color: '#008B8B',
    fontSize: 12,
    marginLeft: 15,
  },
});
