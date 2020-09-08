import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from './myScreens/SignInScreen';
import SignUpScreen from './myScreens/SignUpScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
