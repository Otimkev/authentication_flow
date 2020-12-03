import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {GET_NOTIFICATIONS_RESPONSE} from '../../utils/Constants';
import {Modal, Portal, Provider} from 'react-native-paper';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Button,
  Dimensions,
} from 'react-native';
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
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: 'white',
    padding: 16,
    height: 0.5 * Dimensions.get('window').height,
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setModalContent(item);
          showModal();
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
              <Text
                style={
                  styles.msgTxt2
                }>{`Dr.${item.sender.firstName} ${item.sender.lastName}`}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <Provider>
      <Portal>
        <Modal
          animationType="slide"
          transparent={false}
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>
              {modalContent
                ? `From Dr. ${modalContent.sender.firstName} ${modalContent.sender.lastName}`
                : undefined}
            </Text>
          </View>
          <View
            style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <View style={{marginHorizontal: 8}}>
              <Button title="Comfirm" color="#78af38" />
            </View>
            <View>
              <Button title="Decline" color="red" />
            </View>
          </View>
        </Modal>
      </Portal>
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
      </View>
    </Provider>
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
  msgTxt2: {
    fontWeight: '400',
    color: 'grey',
    fontSize: 12,
    marginLeft: 15,
  },
  modalTitle: {
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    // textDecorationLine: 'underline',
    fontWeight: '500',
    color: '#fff',
    fontSize: 28,
    marginLeft: 15,
    textTransform: 'capitalize',
    backgroundColor: '#007360',
    borderRadius: 10,
  },
  modal: {
    flex: 6,
    borderRadius: 10,
  },
});
