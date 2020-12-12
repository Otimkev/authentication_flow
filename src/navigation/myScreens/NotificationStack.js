import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BARS} from '../../styles/icons';
import ViewPatientInviteScreenView from './ViewPatientInvite';
import {NoticationScreen} from './NotificationScreen';
import ConsultScreenView from './Consultscreen';
import {ViewPatientInviteDataScreen} from './ViewPatientInviteData';

const invitationStack = createStackNavigator();

const InvitationStack = ({navigation}) => {
  const mView = () => {
    <View style={{flex: 1}}>
      <Text>tests</Text>
    </View>;
  };
  return (
    <invitationStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#007360',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <invitationStack.Screen
        component={NoticationScreen}
        name="notification"
        options={{
          title: 'Notification',
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
      <invitationStack.Screen
        component={ViewPatientInviteScreenView}
        name="view"
        options={{
          title: 'view',
        }}
      />
      <invitationStack.Screen
        component={ConsultScreenView}
        name="consult"
        options={{
          title: 'Consult',
        }}
      />
      <invitationStack.Screen
        component={ViewPatientInviteDataScreen}
        name="patient_info"
        options={{
          title: 'Patient Info',
        }}
      />
    </invitationStack.Navigator>
  );
};

export default InvitationStack;
