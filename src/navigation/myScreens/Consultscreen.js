import React, {useState, useLayoutEffect} from 'react';
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
import globalStyles from '../../styles/Global';

const ConsultScreenView = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  //const [modalContent, setModalContent] = useState('');
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [state, setState] = useState([
    {id: 1, label: 'view', screen: 'view'},
    {id: 2, label: 'patient Info', screen: 'patient_info'},
  ]);
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
      <View style={styles.container}>
        <Text>consult screen</Text>
        <Text>Not implemented!</Text>
      </View>
    </Provider>
  );
};

export default ConsultScreenView;

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
