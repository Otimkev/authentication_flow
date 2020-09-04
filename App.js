import 'react-native-gesture-handler';
import React from 'react';
import RootStackScreen from './src/navigation/RootStack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabscreen from './src/navigation/MainTabScreen';
import NotificationsScreen from './src/navigation/myScreens/NotificationScreen';
import SettingsScreen from './src/navigation/myScreens/SettingsScreen';

const App = () => {
  const token = 4;
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      {token !== 3 ? (
        <Drawer.Navigator>
          <Drawer.Screen name="HomeScreen" component={MainTabscreen} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
      ) : (
        <RootStackScreen />
      )}
    </NavigationContainer>
  );
};

export default App;
