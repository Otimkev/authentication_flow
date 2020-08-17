import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />{' '}
        <Tab.Screen name="users" component={PatientsScreen} />{' '}
        <Tab.Screen name="Home" component={HomeScreen} />{' '}
        <Tab.Screen name="house" component={WardsScreen} />{' '}
        <Tab.Screen name="Settings" component={SettingsScreen} />{' '}
    </Tab.Navigator>
  );
}

export default TabNavigator