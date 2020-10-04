import React, {Component} from 'react';
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
import AsyncStorage from '@react-native-community/async-storage';
import GetAllPatients from '../../httpClient/repository/patient/GetAllPatients';

export default class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calls: [],
      patientList: [],
    };
  }

  async componentDidMount() {
    try {
      await this.fetchData();
    } catch (e) {
      console.log(e);
    }
  }

  async fetchData() {
    try {
      const user = await AsyncStorage.getItem('user');
      const mUser = JSON.parse(user);
      const result = await GetAllPatients.processGetAllPatients(mUser.userId);
      this.setState({calls: result});
    } catch (e) {
      console.log(e);
    }
  }

  async componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.calls !== prevState.calls) {
      console.log('Component updating');
      await this.fetchData();
    }
  }

  renderItem = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={styles.row}>
          <Image source={{uri: item.image}} style={styles.pic} />
          <View>
            <View style={styles.nameContainer}>
              <Text
                style={styles.nameTxt}
                numberOfLines={1}
                ellipsizeMode="tail">
                {`${item.firstName} ${item.lastName}`}
              </Text>
              <Text style={styles.mblTxt}>{item.phoneNumber}</Text>
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
      <View style={{flex: 1}}>
        <FlatList
          extraData={this.state}
          data={this.state.calls}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

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
