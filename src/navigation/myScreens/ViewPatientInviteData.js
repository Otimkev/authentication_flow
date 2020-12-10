import React, {useState, useLayoutEffect, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  ScrollView,
} from 'react-native';
import {Modal, Portal, Provider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {OPTIONS} from '../../styles/icons';
import globalStyles from '../../styles/Global';
import {connect} from 'react-redux';
import {getAPatientsResponse} from '../../model/patient/getAPatient/Actions';

const ViewPatientInviteDataScreenView = ({
  navigation,
  getAPatient,
  route,
  aPatient,
}) => {
  const [visible, setVisible] = useState(false);
  //const [modalContent, setModalContent] = useState('');
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [state, setState] = useState([
    {id: 1, label: 'chat', screen: 'consult'},
    {id: 2, label: 'view', screen: 'view'},
  ]);
  const id = route.params.patientId;
  console.log(`patientData: ${id}`);
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

  useEffect(() => {
    getAPatient(id);
  }, [getAPatient, id]);
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
          navigation.navigate(item.screen);
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
      <ScrollView style={styles.container}>
        <View style={styles.block}>
          <Text style={styles.label}>Name: </Text>
          <Text style={styles.info}>
            {aPatient.firstName} {aPatient.lastName}
          </Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.label}>Age: </Text>
          <Text style={styles.info}>{aPatient.dateOfBirth}</Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.label}>Contact: </Text>
          <Text style={styles.info}>{aPatient.phoneNumber}</Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.label}>Gender: </Text>
          <Text style={styles.info}>{aPatient.gender}</Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.label}>Address: </Text>
          <Text style={styles.info}>{aPatient.address}</Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.label}>Marital Status: </Text>
          <Text style={styles.info}>{aPatient.maritalStatus}</Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.label}>Next of Name: </Text>
          <Text
            style={
              styles.info
            }>{`${aPatient.emergencyFirstName} ${aPatient.emergencyLastName}`}</Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.label}>Next of Kin Contact: </Text>
          <Text style={styles.info}>{aPatient.emergencyPhoneNumber}</Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.label}>Relationship: </Text>
          <Text style={styles.info}>{aPatient.relationship}</Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.label}>Patient's Ward: </Text>
          <Text style={styles.info}>General Ward</Text>
        </View>
        <View style={styles.block}>
          <Text style={styles.label}>Ward Bed: </Text>
          <Text style={styles.info}>{id}</Text>
        </View>
      </ScrollView>
    </Provider>
  );
};

const mapStateToProps = (state, props) => {
  return state.aPatient;
};

const mapDispatchToProps = (dispatch, props) => ({
  getAPatient: (args) => {
    dispatch(getAPatientsResponse(args));
  },
});

export const ViewPatientInviteDataScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ViewPatientInviteDataScreenView);

const styles = StyleSheet.create({
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
  container: {
    //backgroundColor: '#fff',
    flex: 1,
    padding: 10,
    borderWidth: 2,
    borderColor: '#78af38',
  },
  row: {
    flexDirection: 'column',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },
  nameTxt: {
    fontWeight: '600',
    marginVertical: 10,
    color: '#222',
    fontSize: 20,
    borderBottomColor: '#007360',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    margin: 10,
  },
  Card: {
    width: '100%',
    backgroundColor: '#78af38',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  CardText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  block: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 4,
    borderRadius: 10,
  },
  label: {
    fontSize: 15,
    width: 150,
    color: '#007360',
  },
  info: {
    fontSize: 17,
    color: '#007360',
    //color: 'black',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    alignItems: 'center',
  },
});
