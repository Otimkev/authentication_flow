import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import Icon from 'react-native-vector-icons/Fontisto';

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
  return (
    <View style={styles.container}>
      <Text>Chat screen</Text>
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
