import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Title, Caption, Paragraph, Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

// import WardsScreen from './myScreens/WardsScreen';
// import SpecialistScreen from './myScreens/SpecialistScreen';
// import SettingsScreen from './myScreens/SettingsScreen';
// import SharedPatients from './myScreens/SharedPatients';
// import SupportScreen from './myScreens/SupportScreen';

import Icon from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Font from 'react-native-vector-icons/FontAwesome5';
import {destroyToken} from '../utils/SessionManager';
import * as actionCreators from '../model/user/authentication/Actions';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

function DrawerContentView({props, navigation, logOut}) {
  const [user, setUser] = useState('');

  useEffect(() => {
    retrieveItem();
  }, []);
  const retrieveItem = async () => {
    const retrievedItem = await AsyncStorage.getItem('user');
    const item = JSON.parse(retrievedItem);
    setUser(item.result);
  };
  retrieveItem('user');
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri:
                    'data:image/jpeg;base64,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',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>
                  Dr. {`${user.firstName} ${user.lastName}`}
                </Title>
                <Caption style={styles.caption}>Cardiologist</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  10
                </Paragraph>
                <Caption style={styles.caption}> Active Patients</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="doctor" color="#007360" size={size} />
              )}
              label="Specialists"
              onPress={() => {
                navigation.navigate('Specialists');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="bed-patient" color="#007360" size={size} />
              )}
              label="Wards"
              onPress={() => {
                navigation.navigate('Wards');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Font name="share-square" color="#007360" size={size} />
              )}
              label="Shared Patients"
              onPress={() => {
                navigation.navigate('SharedPatients');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Font name="hospital-user" color="#007360" size={size} />
              )}
              label="Change Facility"
              onPress={() => {
                navigation.navigate('SharedPatients');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="player-settings" color="#007360" size={size} />
              )}
              label="Settings"
              onPress={() => {
                navigation.navigate('Settings');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="world-o" color="#007360" size={size} />
              )}
              label="Support"
              onPress={() => {
                navigation.navigate('SupportScreen');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Ionicons name="log-out-outline" color="#007360" size={size} />
          )}
          label="Sign Out"
          onPress={async () => {
            logOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const mapStateToProps = (state, props) => {
  const {isLoading, currentUser} = state.authentication;
  return {isLoading, currentUser};
};

const mapDispatchToProps = (dispatch, props) => ({
  logOut: () => {
    dispatch(actionCreators.logOut());
  },
});

const DrawerContent = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerContentView);

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color: '#007360',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: '#007360',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
    color: '#007360',
  },
  drawerSection: {
    marginTop: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
