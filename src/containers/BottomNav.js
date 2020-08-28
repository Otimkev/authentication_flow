/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../containers/HomeScreen';
import PatientsScreen from '../containers/PatientsScreen';
import WardsScreen from '../containers/WardsScreen';
import SpecialistsScreen from '../containers/SpecialistsScreen';
import MOScreen from '../containers/MOScreen';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();

function BottomNav() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#026062"
      style={{backgroundColor: '#7cb63b'}}>
      <Tab.Screen
        name="Patients"
        component={PatientsScreen}
        options={{
          tabBarLabel: 'Patients',
          tabBarColor: '#FF5E33',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account-alert-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wards"
        component={WardsScreen}
        options={{
          tabBarLabel: 'Wards',
          tabBarColor: '#C3226B',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="badge-account-horizontal"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#7cb63b',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Specialists"
        component={SpecialistsScreen}
        options={{
          tabBarLabel: 'Specialists',
          tabBarColor: '#22C377',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account-tie"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Medical Officers"
        component={MOScreen}
        options={{
          tabBarLabel: 'Med. Officers',
          tabBarColor: '#C3C322',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#7cb63b',
      },
      headerTintColor: '#026062',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Home',
        headerLeft: () => (
          <MaterialCommunityIcons.Button
            name="bars"
            size={25}
            backgroundColor="#7cb63b"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />{' '}
  </HomeStack.Navigator>
);

export default BottomNav;
