import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../components/header';
import LoginScreen from '../containers/LoginScreen';
import SignUpScreen from '../containers/SignupScreen';
import HomeScreen from '../containers/HomeScreen';
import PatientsScreen from '../containers/PatientsScreen';
import WardsScreen from '../containers/WardsScreen';
import SpecialistsScreen from '../containers/SpecialistsScreen';
import MOScreen from '../containers/MOScreen';
import WardDetails from '../containers/WardDetails';

const Stack = createStackNavigator();

const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: ''}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{headerTitle: () => <Header title="Sign Up" />}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerTitle: () => <Header title="Home" />}}
        />
        <Stack.Screen
          name="Patients"
          component={PatientsScreen}
          options={{headerTitle: () => <Header title="Patients" />}}
        />
        <Stack.Screen
          name="Specialists"
          component={SpecialistsScreen}
          options={{headerTitle: () => <Header title="Specialists" />}}
        />
        <Stack.Screen
          name="Wards"
          component={WardsScreen}
          options={{headerTitle: () => <Header title="Wards" />}}
        />
        <Stack.Screen
          name="Medical Officers"
          component={MOScreen}
          options={{headerTitle: () => <Header title="Medical Officers" />}}
        />
        <Stack.Screen
          name="Ward Details"
          component={WardDetails}
          options={{headerTitle: () => <Header title="Ward Detials" />}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//export default ScreenNavigator;
