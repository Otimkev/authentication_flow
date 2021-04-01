import React from 'react';
import PropTypes from 'prop-types';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import * as actions from './store/actions';
import * as storage from './services/persistentStorage';
import {PatientStackScreen} from './screens/patient/patient_stack';
import {HomeStackScreen} from './screens/home/home_stack';

import {colors} from './theme/index';
import BottomNavigation from './navigation/bottom_navigation';
import RootStackScreen from './screens/screens/RootStackScreen';
import MainTabScreen from './screens/screens/MainTabScreen';
import SupportScreen from './screens/screens/SupportScreen';
import SettingsScreen from './screens/screens/SettingsScreen';
import BookmarkScreen from './screens/screens/BookmarkScreen';
import DrawerContent from './screens/screens/DrawerContent';
import {ChatStackScreen} from './screens/chat/chat_stack';
import {ConversationStackScreen} from './screens/chat/chat_stack_conversation';

const Drawer = createDrawerNavigator();

class Main extends React.Component {
  async componentDidMount() {
    const {user, storageLogin} = this.props;
    if (user === null) {
      try {
        const savedUser = await storage.retrieveData('user');
        console.log('savedUser', savedUser);
        storageLogin(savedUser);
      } catch (error) {
        console.log('error getting user from stroage: ', error);
      }
    }
  }

  componentDidUpdate(prevProps) {
    const {isAuthenticating, user} = this.props;

    if (!isAuthenticating) {
      if (user && user['token']) {
        if (!prevProps.user) {
          // a user has logged in
        } else if (user['token'] !== prevProps.user['token']) {
          // a new user has logged in
        }
      }
    }
  }

  render() {
    const {user} = this.props;
    const isLoggedIn = user && !!user['token'];
    console.log(isLoggedIn);
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          {isLoggedIn ? (
            <Drawer.Navigator
              drawerContent={(props) => <DrawerContent {...props} />}>
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
              <Drawer.Screen
                name="SupportScreen"
                component={PatientStackScreen}
              />
              <Drawer.Screen
                name="patient_details"
                component={HomeStackScreen}
              />
              <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
              <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
              <Drawer.Screen name="Chat_stack" component={ChatStackScreen} />
              <Drawer.Screen
                name="ConversationStackScreen"
                component={ConversationStackScreen}
              />
            </Drawer.Navigator>
          ) : (
            <RootStackScreen />
          )}
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}

Main.propTypes = {
  user: PropTypes.shape({}),
  isAuthenticating: PropTypes.bool.isRequired,
  storageLogin: PropTypes.func.isRequired,
};

Main.defaultProps = {
  user: null,
};

const mapStateToProps = (state) => {
  const {user, isAuthenticating} = state.auth;
  return {
    user,
    isAuthenticating,
  };
};

export default connect(mapStateToProps, actions)(Main);
