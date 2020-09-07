import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {AuthContext} from '../../../App';

const ProfileScreen = () => {
  const {signOut} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Profile screen</Text>
      <Button title="Sign Out" onPress={signOut} />
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
