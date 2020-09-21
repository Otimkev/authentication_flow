import React, {Component, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native';
import GetAllPatients from '../../httpClient/repository/patient/GetAllPatients';
import SessionManager from '../../httpClient/utils/SessionManager';
import {FloatingAction} from 'react-native-floating-action';
// import AddPatientScreen from '../myScreens/patient/AddPatientScreen';

export default class PatientScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calls: [],
      isLoading: false,
      actions: [
        {
          text: 'Add patient',
          name: 'bt_accessibility',
          icon: () => <Icon name="user-injured" color="#ccc" size={26} />,
          position: 2,
        },
      ],
    };
  }

  async componentDidMount() {
    this.setState({isLoading: false});
    try {
      const user = await AsyncStorage.getItem('user');
      const mUser = JSON.parse(user);
      const ApiCall = await GetAllPatients.processGetAllPatients(mUser.userId);
      this.setState({calls: ApiCall});
      this.setState({isLoading: true});
      console.log(`NEW DATA ${this.calls}`);
    } catch (err) {
      console.log('Error fetching data-----------', err);
    }
  }

  renderItem = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={styles.row}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.pic}
          />
          <View>
            <View style={styles.nameContainer}>
              <Text
                style={styles.nameTxt}
                numberOfLines={1}
                ellipsizeMode="tail">
                {`${item.firstName} ${item.lastName}`}
              </Text>
              <Text style={styles.mblTxt}> BED03 </Text>
            </View>
            <View style={styles.msgContainer}>
              <Text style={styles.msgTxt}>{item.id}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <FlatList
          extraData={this.state}
          data={this.state.calls}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={this.renderItem}
        />
        <FloatingAction
          actions={this.state.actions}
          onPressItem={() => {
            this.props.navigation.navigate('Register Patient');
          }}
        />
      </View>
    );
  }
}
// onPress={() => navigation.navigate('SignUpScreen')}>

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
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#008B8B',
    fontSize: 12,
    marginLeft: 15,
  },
});
