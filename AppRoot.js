import * as React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './src/navigation/DrawerContent';
import MainTabScreen from './src/navigation/MainTabScreen';
import SplashScreen from './src/navigation/myScreens/SplashScreen';
import ProfileScreen from './src/navigation/myScreens/ProfileScreen';
import RootStackScreen from './src/navigation/RootStack';
import WardsScreen from './src/navigation/myScreens/WardsScreen';
import SettingsScreen from './src/navigation/myScreens/SettingsScreen';
import SpecialistScreen from './src/navigation/myScreens/SpecialistScreen';
import SharedPatients from './src/navigation/myScreens/ShareStack';
import SupportScreen from './src/navigation/myScreens/SupportScreen';
import Icon from 'react-native-vector-icons/Fontisto';
import ShareStack from './src/navigation/myScreens/ShareStack';
import * as actionCreators from './src/model/user/authentication/Actions';
import {connect} from 'react-redux';
const Stack = createStackNavigator();

function AppRootView({
  navigation,
  currentUser,
  token,
  checkForToken,
  isLoading,
}) {
  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      try {
        checkForToken();
      } catch (e) {
        console.log(e);
      }
    };
    bootstrapAsync();
  }, [checkForToken]);

  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      {isLoading ? (
        // We haven't finished checking for the token yet
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Splash" component={SplashScreen} />
        </Stack.Navigator>
      ) : token === null ? (
        // No token found, user isn't signed in
        <RootStackScreen />
      ) : (
        // User is signed in, token found
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="Specialists" component={SpecialistScreen} />
          <Drawer.Screen name="Wards" component={WardsScreen} />
          <Drawer.Screen name="Notifications" component={ProfileScreen} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
          <Drawer.Screen name="SharedPatients" component={ShareStack} />
          <Drawer.Screen
            name="SupportScreen"
            component={SupportScreen}
            options={{
              headerLeft: () => (
                <Icon.Button
                  name="nav-icon-list-a"
                  size={25}
                  backgroundColor="#007360"
                  onPress={() => navigation.openDrawer()}
                />
              ),
            }}
          />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}

const mapStateToProps = (state, props) => {
  const {isLoading, currentUser, token} = state.authentication;
  return {isLoading, currentUser, token};
};

const mapDispatchToProps = (dispatch, props) => ({
  checkForToken: () => {
    dispatch(actionCreators.checkTokenStart());
  },
});

const AppRoot = connect(mapStateToProps, mapDispatchToProps)(AppRootView);
export default AppRoot;
