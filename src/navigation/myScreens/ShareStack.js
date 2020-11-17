import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {SharedPatientList} from './SharedPatientList';
import Icon from 'react-native-vector-icons/Fontisto';

const shareStack = createStackNavigator();

const ShareStack = ({navigation}) => {
  return (
    <shareStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#007360',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <shareStack.Screen
        component={SharedPatientList}
        name="sharedList"
        options={{
          title: 'Shared Patients',
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
    </shareStack.Navigator>
  );
};

export default ShareStack;
