import AsyncStorage from '@react-native-community/async-storage';
import React, {Component, useState} from 'react';

class SessionManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
    };
    this.retrieveItem('user');
  }
  retrieveItem = async (key) => {
    try {
      const retrievedItem = await AsyncStorage.getItem(key);
      const item = JSON.parse(retrievedItem);
      console.log(item);
      this.state.userId = item.userId;
    } catch (error) {
      console.log(error.message);
    }
    return;
  };

  getUserId() {
    return this.state.userId;
  }
}

export default new SessionManager();
