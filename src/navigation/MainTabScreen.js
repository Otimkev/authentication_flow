import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from './myScreens/HomeScreen';
import ProfileScreen from './myScreens/ProfileScreen';
import ChatScreen from '././myScreens/ChatScreen';
import PatientScreen from './myScreens/PatientScreen';
import AddPatientScreen from './myScreens/patient/AddPatientScreen';
import SettingsScreen from './myScreens/SettingsScreen';

const HomeStack = createStackNavigator();
const ChatsStack = createStackNavigator();
const PatientsStack = createStackNavigator();
const ProfilesStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();
const color = '#fff';
const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: () => <Icon name="home" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Chats"
      component={ChatsStackScreen}
      options={{
        tabBarLabel: 'Chats',
        tabBarColor: '#009387',
        tabBarIcon: () => <Icon name="comment" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarLabel: 'Chats',
        tabBarColor: '#009387',
        tabBarIcon: () => <Icon name="comment" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Patients"
      component={PatientStackScreen}
      options={{
        tabBarLabel: 'Patients',
        tabBarColor: '#009387',
        tabBarIcon: () => <Icon name="user-injured" color={color} size={26} />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#009387',
        tabBarIcon: () => <Icon name="user" color={color} size={26} />,
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
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
            name="bars"
            size={25}
            backgroundColor="#009387"
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
        backgroundColor: '#009387',
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
            name="bars"
            size={25}
            backgroundColor="#009387"
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
        backgroundColor: '#009387',
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
            name="bars"
            size={25}
            backgroundColor="#009387"
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
            name="bars"
            size={25}
            backgroundColor="#009387"
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
        backgroundColor: '#009387',
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
            name="bars"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </ProfilesStack.Navigator>
);
