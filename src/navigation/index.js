import React from 'react';
import Drawer from './drawerNavigation';

export const DashboardScreen = ((navigation)) => <Screen navigation={navigation} name="Dashboard" />
export const PatientsScreen = ((navigation)) => <Screen navigation={navigation} name="Patients" />
export const SpecialistScreen = ((navigation)) => <Screen navigation={navigation} name="Specialist" />
export const WardScreen = ((navigation)) => <Screen navigation={navigation} name="Ward" />
export const IcuScreen = ((navigation)) => <Screen navigation={navigation} name="Icu" />
export const InboxScreen = ((navigation)) => <Screen navigation={navigation} name="Inbox" />
export const SharedPatientsScreen = ((navigation)) => <Screen navigation={navigation} name="SharedPatients" />
export const InventoriesScreen = ((navigation)) => <Screen navigation={navigation} name="Inventories" />
export const SettingsScreen = ((navigation)) => <Screen navigation={navigation} name="Settings" />