import React, {useState, useEffect, useCallback, useRef} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {GiftedChat, Send, Bubble} from 'react-native-gifted-chat';
import {ActivityIndicator, IconButton} from 'react-native-paper';
import {Loader} from '../components/Loader';
import socketIO from 'socket.io-client';
import {openChat, sendMessage} from '../utils/SocketEvents';
import {connect} from 'react-redux';
import {gotMessagesResponse} from '../model/chat/loadMessages/Actions';
import {globalStyles} from '../styles/Global';
//import {FlatList} from 'react-native-gesture-handler';

const ConversationScreenView = ({
  navigation,
  route,
  historymessages,
  isLoading,
  getHistory,
  vUsers,
}) => {
  const {roomId, memberId, senderId} = route.params;
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    getHistory(roomId);
  }, [getHistory, roomId]);
  const m = [
    {
      _id: 0,
      text: 'New chat created',
      createdAt: new Date(),
      system: true,
      // Any additional custom parameters are passed through
    },
  ];
  const onSend = (newMessages = []) => {
    const plainText = newMessages.map((msg) => msg.text);
    sendMessage(senderId, memberId, roomId, plainText[0]);
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
      {isLoading ? (
        <Loader />
      ) : (
        <GiftedChat
          messages={[...m, ...messages, ...historymessages]}
          onSend={(newMessage) => onSend(newMessage)}
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

    // <View>
    //   <FlatList
    //     extra={true}
    //     data={historymessages}
    //     keyExtractor={(item) => item._id.toString()}
    //     renderItem={renderItem}
    //   />
    // </View>
  );
};

const mapStateToProps = (state, props) => {
  const {historymessages, isLoading} = state.messages;
  return {historymessages};
};

const mapDispatchToProps = (dispatch, props) => ({
  getHistory: (args) => {
    dispatch(gotMessagesResponse(args));
  },
});

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
