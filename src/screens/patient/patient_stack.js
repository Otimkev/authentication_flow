import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
const PatientStack = createStackNavigator();
import PatientScreen from './patient_screen';
import {colors} from '../../theme';

export const PatientStackScreen = ({navigation}) => (
  <PatientStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <PatientStack.Screen
      name="Patient"
      component={PatientScreen}
      options={{
        title: 'Patient',
        headerLeft: () => (
          <Icon.Button
            name={'bars'}
            size={25}
            backgroundColor={colors.primary}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </PatientStack.Navigator>
);
