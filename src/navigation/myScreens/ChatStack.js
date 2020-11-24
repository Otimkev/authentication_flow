import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {SharedPatientList} from './SharedPatientList';
import Icon from 'react-native-vector-icons/Fontisto';
import ConversationScreenView from '../ConversationScreen';

const ChatStack = createStackNavigator();

const ChatStackScreenView = ({navigation}) => {
  return (
    <ChatStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#007360',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <ChatStack.Screen
        component={ConversationScreenView}
        name="dialogue"
        options={{
          title: 'Chats',
          headerLeft: () => (
            <Icon.Button
              name="nav-icon-list-a"
              size={25}
              backgroundColor="#007360"
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </ChatStack.Navigator>
  );
};

export default ChatStackScreenView;
