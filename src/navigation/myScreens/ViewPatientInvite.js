import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
} from 'react-native';
import {Modal, Portal, Provider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {OPTIONS} from '../../styles/icons';
import {globalStyles} from '../../styles/Global';
import {connect} from 'react-redux';
import {getTestCategoryResponse} from '../../model/test/loadTestCategories/Actions';

const ViewPatientInviteScreenView = ({
  navigation,
  route,
  getTestCategory,
  testCategoryList,
  isFetching,
}) => {
  const [visible, setVisible] = useState(false);
  //const [modalContent, setModalContent] = useState('');
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [state, setState] = useState([
    {id: 1, label: 'chat', screen: 'consult'},
    {id: 2, label: 'patient Info', screen: 'patient_info'},
  ]);
  const {patientId, senderId} = route.params;

  useEffect(() => {
    getTestCategory(patientId);
  }, [getTestCategory, patientId]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Icon.Button
          name={OPTIONS}
          size={25}
          backgroundColor="#007360"
          onPress={() => showModal()}
        />
      ),
    });
  }, [navigation]);
  const containerStyle = {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 540,
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(item.screen, {patientId, senderId});
          hideModal();
        }}>
        <View>
          <View>
            <View>
              <Text>{`${item.label}`}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderCategoryItem = ({item}) => {
    return (
      <TouchableOpacity
        style={globalStyles.mainContent}
        onPress={() => {
          navigation.navigate('invited_patient_test_graph', {
            patientId,
            label: item.category.label,
            senderId,
          });
        }}>
        <View style={styles.row}>
          <View>
            <View style={styles.nameContainer}>
              <Text style={globalStyles.nameTxt} numberOfLines={1}>
                {item.category.label}
              </Text>
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
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <FlatList
                extra={true}
                data={state}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
              />
            </View>
          </View>
        </Modal>
      </Portal>
      <View style={globalStyles.loader}>
        <FlatList
          data={testCategoryList}
          keyExtractor={(item) => {
            return item.id.toString();
          }}
          renderItem={renderCategoryItem}
        />
      </View>
    </Provider>
  );
};

const mapStateToProps = (state, props) => {
  const {testCategoryList, isFetching} = state.getTestCategory;
  return {testCategoryList, isFetching};
};

const mapDispatchToProps = (dispatch, props) => ({
  getTestCategory: (args) => {
    dispatch(getTestCategoryResponse(args));
  },
});

const ViewPatientInviteScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewPatientInviteScreenView);

export default ViewPatientInviteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    // borderRadius: 20,
    padding: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    //marginBottom: 15,
    textAlign: 'center',
  },
});
