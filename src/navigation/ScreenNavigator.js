import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/header';
import LoginScreen from '../containers/LoginScreen';
import SignUpScreen from '../containers/SignupScreen';
import HomeScreen from '../containers/HomeScreen';
import PatientsScreen from '../containers/PatientsScreen';
import WardsScreen from '../containers/WardsScreen';
import SpecialistsScreen from '../containers/SpecialistsScreen';
import MOScreen from '../containers/MOScreen';
import WardDetails from '../containers/WardDetails';
import SettingsScreen from '../containers/SettingsScreen';

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();

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
          <Icon.Button
            name="bars"
            size={25}
            backgroundColor="#7cb63b"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);
const SettingsStackScreen = ({navigation}) => (
  <SettingsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#7cb63b',
      },
      headerTintColor: '#026062',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <SettingsStack.Screen name="Settings" component={SettingsScreen} />
  </SettingsStack.Navigator>
);
// const HomeStackScreen = ({navigation}) => (
//   <HomeStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#7cb63b',
//       },
//       headerTintColor: '#026062',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}>
//     <HomeStack.Screen name="Home" component={HomeScreen} />
//   </HomeStack.Navigator>
// );
// const HomeStackScreen = ({navigation}) => (
//   <HomeStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#7cb63b',
//       },
//       headerTintColor: '#026062',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}>
//     <HomeStack.Screen name="Home" component={HomeScreen} />
//   </HomeStack.Navigator>
// );

const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Settings" component={SettingsStackScreen} />
        <Drawer.Screen name="Sign Out" component={LoginScreen} />
      </Drawer.Navigator>
      {/* <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#7cb63b',
          },
          headerTintColor: '#026062',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
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
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default ScreenNavigator;
