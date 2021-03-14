import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
const HomeStack = createStackNavigator();
import PatientDetail from './home_screen';
import PatientScreenView from './test_screen';
import {colors} from '../../theme';
import ShareListView from './share_user_list';
import ListDonePatientCategories from './load_patient_categories';
import IndexTestCategories from './index_test_categories';
import EmptyCategories from './empty_category';
import LabTestForm from './lab_test_form';
import Graph from './graph';

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
        title: route.params.user_name,
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
      name="Share"
      component={ShareListView}
      options={({route}) => ({
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
      name="view_patient_category_tests"
      component={ListDonePatientCategories}
      options={({route}) => ({
        title: 'Categories',
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
      name="view_category_tests"
      component={IndexTestCategories}
      options={({route}) => ({
        title: 'Lab Test Categories',
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
      name="empty"
      component={EmptyCategories}
      options={({route}) => ({
        title: '.',
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
      name="lab_test_form"
      component={LabTestForm}
      options={({route}) => ({
        title: route.params.category_label,
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
      name="test_graph"
      component={Graph}
      options={({route}) => ({
        title: route.params.category_label,
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
