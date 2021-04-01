import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {HomeStackScreen} from '../screens/home/home_stack';
import {ProfileStackScreen} from '../screens/profile/profile_stack';
import {PatientStackScreen} from '../screens/patient/patient_stack';
const Tab = createMaterialBottomTabNavigator();
const color = '#fff';

const BottomNavigation = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#000000',
        tabBarIcon: () => <Icon name="home" color={color} size={22} />,
      }}
    />
    <Tab.Screen
      name="Patient"
      component={PatientStackScreen}
      options={{
        tabBarLabel: 'Patients',
        tabBarColor: '#007360',
        tabBarIcon: () => <Icon name="bell" color={color} size={22} />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#007360',
        tabBarIcon: () => <Icon name="user-md" color={color} size={30} />,
      }}
    />
  </Tab.Navigator>
);

export default BottomNavigation;
