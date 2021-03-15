import React, {useState, useEffect, useCallback, useRef} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {GiftedChat, Send, Bubble} from 'react-native-gifted-chat';
import {ActivityIndicator, IconButton} from 'react-native-paper';
import {Loader} from '../../components/Loader';
import socketIO from 'socket.io-client';
import {identify} from '../../utils/socket_io';
import {prompt_message_history} from '../../utils/socket_io';
import {history} from '../../utils/socket_io';
import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios';
import socket from '../../utils/socket_config';
import {send_message} from '../../utils/socket_io';
import {retrieveData} from '../../services/persistentStorage';

//import {openChat, sendMessage} from '../utils/SocketEvents';

const ConversationScreen = ({navigation, route}) => {
  const [user_id, setuser_id] = useState(null);
  const {receiver_id, room_id} = route.params;
  const ROOM_ID = room_id ? room_id : false;
  const [chat_message_history, setmessage_history] = useState([]);
  const [incoming_messages, setincoming_messages] = useState([]);
  useFocusEffect(
    React.useCallback(() => {
      let isActive = true;

      const fetch_messages = async () => {
        try {
          const userId = await retrieveData('user');
          prompt_message_history(ROOM_ID);
          if (isActive) {
            setuser_id(userId);
            socket.on('priorMessages', async (message_historys) => {
              setmessage_history(message_historys);
            });
            socket.on('incomingMessage', async (response) => {
              setincoming_messages(response);
            });
          }
        } catch (e) {
          console.log(e);
        }
      };

      fetch_messages();

      return () => {
        isActive = false;
      };
    }, [ROOM_ID]),
  );

  const [messages, setMessages] = useState([]);

  const m = [
    {
      _id: 0,
      text: 'New chat created',
      createdAt: new Date(),
      system: true,
      // Any additional custom parameters are passed through
    },
  ];
  //user_id, receiver_id, room_id, text
  const onSend = (newMessages = []) => {
    const plainText = newMessages.map((msg) => msg.text);
    send_message({user_id, receiver_id, room_id: ROOM_ID, text: plainText[0]});
    setMessages(GiftedChat.append(messages, newMessages));
  };

  function renderSend(props) {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <IconButton icon="send-circle" size={32} color="#007360" />
        </View>
      </Send>
    );
  }

  function renderBubble(props) {
    return (
      // Step 3: return the component
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            // Here is the color change
            backgroundColor: '#007360',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  }

  function scrollToBottomComponent() {
    return (
      <View style={styles.bottomComponentContainer}>
        <IconButton icon="chevron-double-down" size={36} color="#6646ee" />
      </View>
    );
  }
  return (
    <View style={{flex: 1}}>
      <GiftedChat
        messages={[...m, ...messages, ...chat_message_history]}
        onSend={(newMessage) => onSend(newMessage)}
        user={{_id: user_id}}
        alwaysShowSend
        renderSend={renderSend}
        renderBubble={renderBubble}
        showUserAvatar
        scrollToBottomComponent={scrollToBottomComponent}
        renderLoading={Loader}
      />
    </View>
  );
};

export default ConversationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#007360',
    borderBottomWidth: StyleSheet.hairlineWidth,
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
