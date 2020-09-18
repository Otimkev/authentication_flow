import * as React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainTabScreen from './src/navigation/MainTabScreen';
import SplashScreen from './src/navigation/myScreens/SplashScreen';
import ProfileScreen from './src/navigation/myScreens/ProfileScreen';
import RootStackScreen from './src/navigation/RootStack';
import SignupRepository from './src/httpClient/repository/signup/SignupRepository';
import LoginRepository from './src/httpClient/repository/login/LoginRepository';

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

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
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
          return;
        } catch (error) {
          console.log(error);
        }
      },
      signOut: async () => {
        try {
          const userToken = await AsyncStorage.getItem('user');
          if (userToken) {
            await AsyncStorage.removeItem('user');
            dispatch({type: 'SIGN_OUT'});
            return;
          }
          console.log('token removal faild');
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
          return;
        } catch (error) {
          console.log(error);
        }
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
      },
    }),
    [],
  );
  const Drawer = createDrawerNavigator();
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.isLoading ? (
          // We haven't finished checking for the token yet
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Splash" component={SplashScreen} />
          </Stack.Navigator>
        ) : state.userToken != null ? (
          // No token found, user isn't signed in
          <RootStackScreen />
        ) : (
          // User is signed in, token found
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={MainTabScreen} />
            <Drawer.Screen name="Notifications" component={ProfileScreen} />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
