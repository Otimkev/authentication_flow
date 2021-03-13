import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppButton from '../../components/AppButton';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Empty list</Text>
      <AppButton
        onPress={() => {
          navigation.navigate('Patient');
        }}
        icon={{name: 'exit-to-app'}}
        buttonStyle={styles.buttonStyle}
        title="Register Patient"
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
