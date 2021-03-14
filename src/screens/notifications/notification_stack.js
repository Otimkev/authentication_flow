import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
const Notification = createStackNavigator();
import NotificationScreen from './notification_screen';

export const NotificationStackScreen = ({navigation}) => (
  <Notification.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#007360',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Notification.Screen
      name="Notification"
      component={NotificationScreen}
      options={{
        title: 'Notification',
        headerLeft: () => (
          <Icon.Button
            name={'bars'}
            size={25}
            backgroundColor="#007360"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </Notification.Navigator>
);
