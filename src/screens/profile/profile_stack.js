import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
const ProfileStack = createStackNavigator();
import HomeScreen from './profile_screen';

export const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#007360',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <ProfileStack.Screen
      name="Profile"
      component={HomeScreen}
      options={{
        title: 'Profile',
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
  </ProfileStack.Navigator>
);
