import * as React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from './src/navigation/DrawerContent';
import MainTabScreen from './src/navigation/MainTabScreen';
import SplashScreen from './src/navigation/myScreens/SplashScreen';
import ProfileScreen from './src/navigation/myScreens/ProfileScreen';
import RootStackScreen from './src/navigation/RootStack';
import SignupRepository from './src/httpClient/repository/signup/SignupRepository';
import LoginRepository from './src/httpClient/repository/login/LoginRepository';
import WardsScreen from './src/navigation/myScreens/WardsScreen';
import SettingsScreen from './src/navigation/myScreens/SettingsScreen';
import SpecialistScreen from './src/navigation/myScreens/SpecialistScreen';
import SharedPatients from './src/navigation/myScreens/ShareStack';
import SupportScreen from './src/navigation/myScreens/SupportScreen';
import {Provider} from 'react-redux';
import {Store} from './src/store/Store';
import Icon from 'react-native-vector-icons/Fontisto';
import ShareStack from './src/navigation/myScreens/ShareStack';

export const AuthContext = React.createContext();

const Stack = createStackNavigator();

export default function App({navigation}) {
  const [userToken, setToken] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      try {
        const mtoken = await AsyncStorage.getItem('user');
      } catch (e) {
        // Restoring token failed
      }
    };

    bootstrapAsync();
  }, []);

  const Drawer = createDrawerNavigator();
  return (
    <Provider store={Store}>
      <NavigationContainer>
        {isLoading ? (
          // We haven't finished checking for the token yet
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Splash" component={SplashScreen} />
          </Stack.Navigator>
        ) : userToken === null ? (
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
    </Provider>
  );
}
