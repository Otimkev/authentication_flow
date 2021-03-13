import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  Button,
  StyleSheet,
  StatusBar,
  FlatList,
  ScrollView,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import AppButton from '../../components/AppButton';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ListItem, Avatar} from 'react-native-elements';
import {TextInput} from 'react-native-gesture-handler';
import ProfileScreen from '../profile/profile_screen';
import {Loader} from '../../components/Loader';
import * as action_types from '../../store/patients/action_types';
import {colors} from '../../theme';
import ScreenContainer from '../../components/ScreenContainer';

const HomeScreenView = ({
  navigation,
  patients_list,
  isLoading,
  get_all_patients,
  route,
}) => {
  useEffect(() => {
    get_all_patients();
  }, [get_all_patients]);
  const {colors} = useTheme();
  const list = [];
  const theme = useTheme();
  const [state, setstate] = useState(list);
  const renderItem = ({item}) => {
    return (
      <ListItem
        bottomDivider
        onPress={() => {
          navigation.navigate('patient_details', {
            screen: 'Home',
            params: {
              patient_id: item.id,
              user_name: `${item.firstName} ${item.lastName}`,
            },
          });
        }}>
        <ListItem.Content>
          <ListItem.Title>{item.firstName}</ListItem.Title>
          <ListItem.Subtitle>{item.lastName}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      {isLoading ? (
        <Loader />
      ) : patients_list === [] ? (
        <ProfileScreen />
      ) : (
        <View>
          <FlatList
            data={patients_list}
            extraData={true}
            renderItem={renderItem}
            keyExtractor={(item) => Math.random().toString()}
          />
          <View>
            <AppButton
              onPress={() => {
                navigation.navigate('SupportScreen', {patient_id: 2});
              }}
              icon={{name: 'exit-to-app'}}
              buttonStyle={styles.buttonStyle}
              title="Register Patient"
            />
          </View>
        </View>
      )}
    </View>
  );
};

const mapStateToProps = (state, props) => {
  return state.index_patients_reducer;
};

const mapDispatchToProps = (dispatch, props) => ({
  get_all_patients: () => {
    dispatch({
      type: action_types.GET_PATIENTS,
    });
  },
});

const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(HomeScreenView);
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonStyle: {
    marginBottom: 50,
  },
});
