import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
const HomeStack = createStackNavigator();
import PatientDetail from './home_screen';
import PatientScreenView from './test_screen';
import {colors} from '../../theme';

export const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={PatientDetail}
      options={({route}) => ({
        title: "route.params.user_name",
        headerLeft: () => (
          <Icon.Button
            name={'bars'}
            size={25}
            backgroundColor={colors.primary}
            onPress={() => navigation.openDrawer()}
          />
        ),
      })}
    />
    <HomeStack.Screen
      name="es"
      component={PatientScreenView}
      options={({route}) => ({
        title: route.params.num,
        headerLeft: () => (
          <Icon.Button
            name={'bars'}
            size={25}
            backgroundColor={colors.primary}
            onPress={() => navigation.openDrawer()}
          />
        ),
      })}
    />
  </HomeStack.Navigator>
);
