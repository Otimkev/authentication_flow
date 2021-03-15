import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreenView from '../Login';
import SignUp from '../SignUp';
import ForgotPassword from '../ForgotPassword';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode="none">
    {/* <RootStack.Screen name="SplashScreen" component={SplashScreen} /> */}
    <RootStack.Screen name="SignInScreen" component={SignInScreenView} />
    <RootStack.Screen name="SignUpScreen" component={SignUp} />
    <RootStack.Screen name="ForgotPassword" component={ForgotPassword} />
  </RootStack.Navigator>
);

export default RootStackScreen;
