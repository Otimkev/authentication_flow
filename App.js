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
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      var userToken;
      try {
        userToken = await AsyncStorage.getItem('user');
        dispatch({type: 'RESTORE_TOKEN', token: userToken});
      } catch (e) {
        // Restoring token failed
      }
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        try {
          const {token, status, result} = await LoginRepository.postSigninData(
            data,
          );
          if (status !== 200) {
            console.log('Failed to signin user');
            return;
          }
          dispatch({type: 'SIGN_IN', token: token});
        } catch (error) {
          console.log(error);
        }
      },
      signOut: async () => {
        try {
          const userToken = await AsyncStorage.getItem('user');
          if (userToken) {
            await AsyncStorage.clear();
            dispatch({type: 'SIGN_OUT'});
            return;
          }
          console.log('token removal successful');
        } catch (error) {
          console.log(error);
        }
      },
      signUp: async (data) => {
        try {
          console.log(data);
          const result = await SignupRepository.postSignupData(data);
          const {token, status} = result;
          if (status !== 200) {
            console.log('signup failed');
            return;
          }
          dispatch({type: 'SIGN_IN', token: token});
        } catch (error) {
          console.log(error);
        }
      },
    }),
    [],
  );
  const Drawer = createDrawerNavigator();
  return (
    <Provider store={Store}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Navigator headerMode="none">
              <Stack.Screen name="Splash" component={SplashScreen} />
            </Stack.Navigator>
          ) : state.userToken !== null ? (
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
      </AuthContext.Provider>
    </Provider>
  );
}
