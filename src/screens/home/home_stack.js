import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
const HomeStack = createStackNavigator();
import HomeScreen from './home_screen';
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
      component={HomeScreen}
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
  </HomeStack.Navigator>
);
