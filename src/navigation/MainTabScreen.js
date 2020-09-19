import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Fontisto';

import HomeScreen from './myScreens/HomeScreen';
import ProfileScreen from './myScreens/ProfileScreen';
import ChatScreen from '././myScreens/ChatScreen';
import PatientScreen from './myScreens/PatientScreen';
import AddPatientScreen from './myScreens/patient/AddPatientScreen';
import NotificationsScreen from './myScreens/NotificationScreen';

const HomeStack = createStackNavigator();
const ChatsStack = createStackNavigator();
const PatientsStack = createStackNavigator();
const ProfilesStack = createStackNavigator();
const NotificationsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();
const color = '#fff';
const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#7cb63b',
        tabBarIcon: () => <Icon name="home" color={color} size={22} />,
      }}
    />
    <Tab.Screen
      name="Patients"
      component={PatientStackScreen}
      options={{
        tabBarLabel: 'Patients',
        tabBarColor: '#7cb63b',
        tabBarIcon: () => <Icon name="first-aid-alt" color={color} size={20} />,
      }}
    />
    <Tab.Screen
      name="Chats"
      component={ChatsStackScreen}
      options={{
        tabBarLabel: 'Chats',
        tabBarColor: '#7cb63b',
        tabBarIcon: () => <Icon name="commenting" color={color} size={20} />,
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationsStackScreen}
      options={{
        tabBarLabel: 'Notifications',
        tabBarColor: '#7cb63b',
        tabBarIcon: () => <Icon name="bell" color={color} size={22} />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#7cb63b',
        tabBarIcon: () => <Icon name="doctor" color={color} size={22} />,
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#7cb63b',
      },
      headerTintColor: '#fff',
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
          <Icon.Button
            name="nav-icon-list-a"
            size={25}
            backgroundColor="#7cb63b"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);

const ChatsStackScreen = ({navigation}) => (
  <ChatsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#7cb63b',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <ChatsStack.Screen
      name="Chats"
      component={ChatScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="nav-icon-list-a"
            size={25}
            backgroundColor="#7cb63b"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </ChatsStack.Navigator>
);

const PatientStackScreen = ({navigation}) => (
  <PatientsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#7cb63b',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <PatientsStack.Screen
      name="Patients"
      component={PatientScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="nav-icon-list-a"
            size={25}
            backgroundColor="#7cb63b"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
    <PatientsStack.Screen
      name="AddPatientScreen"
      component={AddPatientScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="nav-icon-list-a"
            size={25}
            backgroundColor="#7cb63b"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </PatientsStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
  <ProfilesStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#7cb63b',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <ChatsStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="nav-icon-list-a"
            size={25}
            backgroundColor="#7cb63b"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </ProfilesStack.Navigator>
);

const NotificationsStackScreen = ({navigation}) => (
  <NotificationsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#7cb63b',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <NotificationsStack.Screen
      name="Notifications"
      component={NotificationsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="nav-icon-list-a"
            size={25}
            backgroundColor="#7cb63b"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </NotificationsStack.Navigator>
);
