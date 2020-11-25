import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './myScreens/HomeScreen';
import ProfileScreen from './myScreens/ProfileScreen';
import {ChatScreen} from '././myScreens/ChatScreen';
import {PatientScreen} from './myScreens/PatientScreen';
import {AddPatientScreen} from './myScreens/patient/AddPatientScreen';
import {NoticationScreen} from './myScreens/NotificationScreen';
import GeneralTestScreen from './myScreens/patient/PatientTests/GeneralTestScreen';
import MaternityWard from './myScreens/Wards/MaternityWard';
import {APatientScreen} from './myScreens/APatientScreen';
import GlucoseMetabolism from './myScreens/patient/PatientTests/GlucoseMetabolism';
import TestListScreen from './myScreens/TestList';
import {AllTestScreen} from './myScreens/AllTestsScreen';
import {mGraphScreen} from './myScreens/mGraph';
import {UserListScreen} from './myScreens/InviteList';
import GlucoseMetabolismScreen from './myScreens/patient/PatientTests/GlucoseMetabolism';
import {TestCategoryScreen} from './myScreens/TestCategories';
import {ConversationScreen} from './ConversationScreen';
import {NewChatListScreen} from './myScreens/NewChatList';
import {BARS} from '../styles/icons';
import AllergyScreen from './myScreens/patient/PatientTests/Allergy';
import AndrologyScreen from './myScreens/patient/PatientTests/Andrology';
import GeneralEndocrineScreen from './myScreens/patient/PatientTests/generalEndocrine';
import Heart_MuscleScreen from './myScreens/patient/PatientTests/Heart&Muscle';
import HypertensionNeuroEndocrineScreen from './myScreens/patient/PatientTests/hypertensionNeuroEndocrine';
import InflamInfectionMarkersScreen from './myScreens/patient/PatientTests/inflamInfectionMarkers';
import LipidMetabolismScreen from './myScreens/patient/PatientTests/lipidMetabolism';
import LKS_Screen from './myScreens/patient/PatientTests/lung,kidney,skeleton';
// import WardsScreen from './myScreens/WardsScreen';
// import SpecialistScreen from './myScreens/SpecialistScreen';
// import SettingsScreen from './myScreens/SettingsScreen';

const HomeStack = createStackNavigator();
const ChatsStack = createStackNavigator();
const PatientsStack = createStackNavigator();
const ProfilesStack = createStackNavigator();
const NotificationsStack = createStackNavigator();
const MaternityWardStack = createStackNavigator();
// const WardsStack = createStackNavigator();
// const SpecialistStack = createStackNavigator();
// const SettingsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();
const color = '#fff';
const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#007360',
        tabBarIcon: () => <Icon name="home" color={color} size={22} />,
      }}
    />
    <Tab.Screen
      name="Patients"
      component={PatientStackScreen}
      options={{
        tabBarLabel: 'Patients',
        tabBarColor: '#007360',
        tabBarIcon: () => <Icon name="user" color={color} size={20} />,
      }}
    />
    <Tab.Screen
      name="Chats"
      component={ChatsStackScreen}
      options={{
        tabBarLabel: 'Chats',
        tabBarColor: '#007360',
        tabBarIcon: () => <Icon name="commenting" color={color} size={20} />,
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationsStackScreen}
      options={{
        tabBarLabel: 'Notifications',
        tabBarColor: '#007360',
        tabBarIcon: () => <Icon name="bell" color={color} size={22} />,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#007360',
        tabBarIcon: () => <Icon name="user-md" color={color} size={30} />,
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#007360',
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
            name={BARS}
            size={25}
            backgroundColor="#007360"
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
        backgroundColor: '#007360',
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
            name={BARS}
            size={25}
            backgroundColor="#007360"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
    <ChatsStack.Screen
      name="talk"
      component={ConversationScreen}
      options={({route}) => ({
        title: route.params.mangoes,
      })}
    />
    <ChatsStack.Screen name="new_chat_list" component={NewChatListScreen} />
  </ChatsStack.Navigator>
);

const PatientStackScreen = ({navigation}) => (
  <PatientsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#007360',
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
            name={BARS}
            size={25}
            backgroundColor="#007360"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
    <PatientsStack.Screen
      name="Register Patient"
      component={AddPatientScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name={BARS}
            size={25}
            backgroundColor="#007360"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
    <PatientsStack.Screen
      name="Patient Information"
      component={APatientScreen}
      options={({route}) => ({
        title: route.params.patientNames,
      })}
    />
    <PatientsStack.Screen
      name="Test List"
      component={TestListScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name={BARS}
            size={25}
            backgroundColor="#007360"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
    <PatientsStack.Screen
      name="glucose metabolism"
      component={GlucoseMetabolismScreen}
      options={({route}) => ({
        title: 'Add Tests',
      })}
    />
    <PatientsStack.Screen
      name="Allergy"
      component={AllergyScreen}
      options={({route}) => ({
        title: 'Add Tests',
      })}
    />
    <PatientsStack.Screen
      name="Andrology"
      component={AndrologyScreen}
      options={({route}) => ({
        title: 'Add Tests',
      })}
    />
    <PatientsStack.Screen
      name="General Endocrine"
      component={GeneralEndocrineScreen}
      options={({route}) => ({
        title: 'Add Tests',
      })}
    />
    <PatientsStack.Screen
      name="Heart and Muscle"
      component={Heart_MuscleScreen}
      options={({route}) => ({
        title: 'Add Tests',
      })}
    />
    <PatientsStack.Screen
      name="Hypertension/Neuro Endocrine"
      component={HypertensionNeuroEndocrineScreen}
      options={({route}) => ({
        title: 'Add Tests',
      })}
    />
    <PatientsStack.Screen
      name="Inflam/ Infection Markers"
      component={InflamInfectionMarkersScreen}
      options={({route}) => ({
        title: 'Add Tests',
      })}
    />
    <PatientsStack.Screen
      name="Lipid Metabolism"
      component={LipidMetabolismScreen}
      options={({route}) => ({
        title: 'Add Tests',
      })}
    />
    <PatientsStack.Screen
      name="Lung Kidney, Skeleton"
      component={LKS_Screen}
      options={({route}) => ({
        title: 'Add Tests',
      })}
    />
    

    <PatientsStack.Screen
      name="Test Category"
      component={TestCategoryScreen}
      options={({route}) => ({
        title: 'Test Categories',
      })}
    />
    <PatientsStack.Screen
      name="SpecialistList"
      component={UserListScreen}
      options={({route}) => ({
        title: 'Contacts',
      })}
    />
    <PatientsStack.Screen
      name="Test Graph"
      component={mGraphScreen}
      options={({route}) => ({
        title: route.params.label,
      })}
    />
  </PatientsStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
  <ProfilesStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#007360',
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
            name={BARS}
            size={25}
            backgroundColor="#007360"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </ProfilesStack.Navigator>
);

const NotificationsStackScreen = ({navigation}) => (
  <NotificationsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#007360',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <NotificationsStack.Screen
      name="Notifications"
      component={NoticationScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name={BARS}
            size={25}
            backgroundColor="#007360"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </NotificationsStack.Navigator>
);

// const MaternityWardStackScreen = ({navigation}) => (
//   <MaternityWardStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: '#007360',
//       },
//       headerTintColor: '#fff',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     }}>
//     <MaternityWardStack.Screen
//       name="MaternityWard"
//       component={MaternityWard}
//       options={{
//         headerLeft: () => (
//           <Icon.Button
//             name={BARS}
//             size={25}
//             backgroundColor="#007360"
//             onPress={() => navigation.openDrawer()}
//           />
//         ),
//       }}
//     />
//   </MaternityWardStack.Navigator>
// );
