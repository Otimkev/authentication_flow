import 'react-native-gesture-handler';
import React from 'react';
// import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../containers/LoginScreen';
import SignUpScreen from '../containers/SignupScreen';
import HomeScreen from '../containers/HomeScreen';
import PatientsScreen from '../containers/PatientsScreen';
import WardsScreen from '../containers/WardsScreen';
import SpecialistsScreen from '../containers/SpecialistsScreen';
import MOScreen from '../containers/MOScreen';
// import {create} from 'react-test-renderer';

const Stack = createStackNavigator();

const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Patients" component={PatientsScreen} />
        <Stack.Screen name="Specialists" component={SpecialistsScreen} />
        <Stack.Screen name="Wards" component={WardsScreen} />
        <Stack.Screen name="Medical Officers" component={MOScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({
//   nav: {
//     backgroundColor: '#2F4F4F',
//   },
// });

export default ScreenNavigator;
