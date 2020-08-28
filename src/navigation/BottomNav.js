// /* eslint-disable react-native/no-inline-styles */
// import React from 'react';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import HomeScreen from '../containers/HomeScreen';
// import PatientsScreen from '../containers/PatientsScreen';
// import WardsScreen from '../containers/WardsScreen';
// import SpecialistsScreen from '../containers/SpecialistsScreen';
// import MOScreen from '../containers/MOScreen';

// const Tab = createMaterialBottomTabNavigator();

// function BottomNav() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Feed"
//       activeColor="#e91e63"
//       style={{backgroundColor: 'tomato'}}>
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({color}) => (
//             <MaterialCommunityIcons name="home" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Patients"
//         component={PatientsScreen}
//         options={{
//           tabBarLabel: 'Updates',
//           tabBarIcon: ({color}) => (
//             <MaterialCommunityIcons name="bell" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Wards"
//         component={WardsScreen}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({color}) => (
//             <MaterialCommunityIcons name="account" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Specialists"
//         component={SpecialistsScreen}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({color}) => (
//             <MaterialCommunityIcons name="account" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="MO"
//         component={MOScreen}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({color}) => (
//             <MaterialCommunityIcons name="account" color={color} size={26} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// export default BottomNav;
