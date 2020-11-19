import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GiftedChat, Send, Bubble} from 'react-native-gifted-chat';
import {ActivityIndicator, IconButton} from 'react-native-paper';
import {Loader} from '../components/Loader';
import socketIO from 'socket.io-client';
import {openChat, sendMessage} from '../utils/SocketEvents';
import {connect} from 'react-redux';

const ConversationScreenView = ({navigation, route, vMessages, vUsers}) => {
  const {roomId, memberId, senderId} = route.params;
  const [state, setState] = useState([]);
  useEffect(() => {
    openChat({roomId, recipientId: memberId, userId: senderId});
  }, [memberId, roomId, senderId]);

  const messageHistory = vMessages.map((msg) => ({
    _id: msg.id,
    text: msg.message,
    createdAt: msg.timeStamp,
    user: {
      _id: msg.senderId,
      name: 'Test User',
    },
  }));

  const [messages, setMessages] = useState([
    {
      _id: 0,
      text: 'New room created.',
      createdAt: new Date().getTime(),
      system: true,
    },
    // example of chat message
    ...messageHistory.sort((a, b) => b.createdAt - a.createdAt),
  ]);

  const handleSend = (newMessage) => {
    const plainText = newMessage.map((msg) => msg.text);
    console.log(plainText);
    sendMessage(senderId, memberId, roomId, plainText[0]);
    console.log(state);
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
      {!vMessages ? (
        <Loader />
      ) : (
        <GiftedChat
          messages={messages}
          onSend={(newMessage) => handleSend(newMessage)}
          user={{_id: senderId}}
          alwaysShowSend
          renderSend={renderSend}
          renderBubble={renderBubble}
          showUserAvatar
          scrollToBottomComponent={scrollToBottomComponent}
          renderLoading={Loader}
        />
      )}
    </View>
  );
};

const mapStateToProps = (state, props) => ({
  vMessages: state.messages,
  vUsers: state.chatUsers,
});

const mapDispatchToProps = (dispatch, props) => ({});

export const ConversationScreen = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConversationScreenView);

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
