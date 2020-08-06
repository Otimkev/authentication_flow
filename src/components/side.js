import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Dimensions} from 'react-native';
import {Feather} from 'react-native-vector-icons';

import {
  DashboardScreen,
  PatientsScreen,
  SpecialistScreen,
  WardScreen,
  IcuScreen,
  InboxScreen,
  SharedPatientsScreen,
  InventoriesScreen,
  SettingsScreen,
  LogOutScreen,
} from '../sideMenu';

import SideBar from './SideBar';

const DrawerNavigator = createDrawerNavigator(
  {
    DashboardScreen: {
      screen: DashboardScreen,
      navigationOptions: {
        title: 'Dashboard',
        drawerIcon: ({tintColor}) => (
          <Feather name="layout" size={16} color={tintColor} />
        ),
      },
    },
    PatientsScreen: {
      screen: PatientsScreen,
      navigationOptions: {
        title: 'Patients',
        drawerIcon: ({tintColor}) => (
          <Feather name="users" size={16} color={tintColor} />
        ),
      },
    },
    SpecialistScreen: {
      screen: SpecialistScreen,
      navigationOptions: {
        title: 'Specialists',
        drawerIcon: ({tintColor}) => (
          <Feather name="briefcase" size={16} color={tintColor} />
        ),
      },
    },
    WardScreen: {
      screen: WardScreen,
      navigationOptions: {
        title: 'Wards',
        drawerIcon: ({tintColor}) => (
          <Feather name="plus-square" size={16} color={tintColor} />
        ),
      },
    },
    IcuScreen: {
      screen: IcuScreen,
      navigationOptions: {
        title: 'ICU',
        drawerIcon: ({tintColor}) => (
          <Feather name="plus-circle" size={16} color={tintColor} />
        ),
      },
    },
    InboxScreen: {
      screen: InboxScreen,
      navigationOptions: {
        title: 'Inbox',
        drawerIcon: ({tintColor}) => (
          <Feather name="inbox" size={16} color={tintColor} />
        ),
      },
    },
    SharedPatientsScreen: {
      screen: SharedPatientsScreen,
      navigationOptions: {
        title: 'Shared Patients',
        drawerIcon: ({tintColor}) => (
          <Feather name="folder-plus" size={16} color={tintColor} />
        ),
      },
    },
    InventoriesScreen: {
      screen: InventoriesScreen,
      navigationOptions: {
        title: 'Inventories',
        drawerIcon: ({tintColor}) => (
          <Feather name="layers" size={16} color={tintColor} />
        ),
      },
    },
    SettingsScreen: {
      screen: SettingsScreen,
      navigationOptions: {
        title: 'Settings',
        drawerIcon: ({tintColor}) => (
          <Feather name="settings" size={16} color={tintColor} />
        ),
      },
    },
    LogOutScreen: {
      screen: LogOutScreen,
      navigationOptions: {
        title: 'Log Out',
        drawerIcon: ({tintColor}) => (
          <Feather name="log-out" size={16} color={tintColor} />
        ),
      },
    },
  },

  {
    contentComponent: (props) => <SideBar {...props} />,

    drawerWidth: Dimensions.get('window').width * 0.85,
    hideStatusBar: true,

    contentOptions: {
      activeBackgroundColor: 'rgba(212, 118, 207, 0.2)',
      activeTintColor: '#53115B',
      itemsContainerStyle: {
        marginTop: 16,
        marginHorizontal: 8,
      },
      itemStyle: {
        borderRadius: 4,
      },
    },
  },
);

export default createAppContainer(DrawerNavigator);
