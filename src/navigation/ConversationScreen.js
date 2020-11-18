import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GiftedChat, Send, Bubble} from 'react-native-gifted-chat';
import {ActivityIndicator, IconButton} from 'react-native-paper';
import {Loader} from '../components/Loader';
import socketIO from 'socket.io-client';

const ConversationScreenView = ({navigation, route}) => {
  const {roomId, memberId} = route.params;
  const [sockets, setsockets] = useState(null);
  useEffect(() => {
    const socket = socketIO('http://192.168.3.101:3001/', {
      transports: ['websocket'],
      jsonp: false,
      rejectUnauthorized: '-',
      perMessageDeflate: '-',
    });
    socket.connect();
    setsockets(socket);
    socket.on('new_message', (data) => {
      addNewMessage(data);
    });
  }, []);
  const [messages, setMessages] = useState([
    {
      _id: 0,
      text: 'New room created.',
      createdAt: new Date().getTime(),
      system: true,
    },
    // example of chat message
    {
      _id: 1,
      text: 'Henlo!',
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: 'Test User',
      },
    },
  ]);

  const handleSend = (newMessage = []) => {
    sockets.emit('new_message', {message: newMessage});
    setMessages(GiftedChat.append(messages, newMessage));
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
  const addNewMessage = (data) => {
    console.log(data);
  };

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
    <GiftedChat
      messages={messages}
      onSend={(newMessage) => handleSend(newMessage)}
      user={{_id: 1, name: 'user test'}}
      alwaysShowSend
      renderSend={renderSend}
      renderBubble={renderBubble}
      showUserAvatar
      scrollToBottomComponent={scrollToBottomComponent}
      renderLoading={Loader}
    />
  );
};

export default ConversationScreenView;

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
});
