import React from 'react';
import Drawer from './drawerNavigation';

export const DashboardScreen = ({navigation}) => (
  <Drawer navigation={navigation} name="Dashboard" />
);
export const PatientsScreen = ({navigation}) => (
  <Drawer navigation={navigation} name="Patients" />
);
export const SpecialistScreen = ({navigation}) => (
  <Drawer navigation={navigation} name="Specialist" />
);
export const WardScreen = ({navigation}) => (
  <Drawer navigation={navigation} name="Ward" />
);
export const IcuScreen = ({navigation}) => (
  <Drawer navigation={navigation} name="Icu" />
);
export const InboxScreen = ({navigation}) => (
  <Drawer navigation={navigation} name="Inbox" />
);
export const SharedPatientsScreen = ({navigation}) => (
  <Drawer navigation={navigation} name="SharedPatients" />
);
export const InventoriesScreen = ({navigation}) => (
  <Drawer navigation={navigation} name="Inventories" />
);
export const SettingsScreen = ({navigation}) => (
  <Drawer navigation={navigation} name="Settings" />
);
export const LogOutScreen = ({navigation}) => (
  <Drawer navigation={navigation} name="LogOut" />
);
