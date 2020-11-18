import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import Icon from 'react-native-vector-icons/Fontisto';
import socketIO from 'socket.io-client';
import {API_URL} from '../../utils/config/Urls';
import {globalStyles} from '../../styles/Global';

const actions = [
  {
    text: 'Broadcast',
    // icon: <Icon name="home" color="#007360" />,
    name: 'bt_accessibility',
    position: 2,
  },
  {
    text: 'New Group',
    icon: require('../../assets/img/Crit.png'),
    name: 'bt_language',
    position: 1,
  },
  {
    text: 'Specialists',
    // icon: require('./images/ic_room_white.png'),
    name: 'bt_room',
    position: 3,
  },
  {
    text: 'New Chat',
    name: 'bt_videocam',
    position: 4,
  },
];

const ChatScreen = ({navigation}) => {
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  useEffect(() => {
    this.socket = socketIO('http://192.168.3.101:3001/', {
      transports: ['websocket'],
      jsonp: false,
    });
    this.socket.connect();
    this.socket.on('connect', () => {
      console.log('connected to socket server');
    });
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Enter message"
          onChangeText={(text) => setChatMessage(text)}
        />
      </View>
      <Text>{chatMessage}</Text>
      <FloatingAction
        actions={actions}
        onPressItem={() => {
          navigation.navigate('New Chat');
        }}
      />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
