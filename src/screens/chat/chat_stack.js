import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
const ChatStack = createStackNavigator();
import ChatHeadScreen from './chat_head_screen';
import {colors} from '../../theme';
import StartChatListScreen from './start_chat_list';
import ConversationScreen from './conversation_screen';

export const ChatStackScreen = ({navigation}) => (
  <ChatStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <ChatStack.Screen
      name="chat_contacts"
      component={StartChatListScreen}
      options={{
        title: 'Chat Contacts',
      }}
    />
    <ChatStack.Screen
      name="chat_room"
      component={ConversationScreen}
      options={({route}) => ({
        title: route.params.receiver_username,
      })}
    />
  </ChatStack.Navigator>
);
