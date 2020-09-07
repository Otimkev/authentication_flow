import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthContext} from './App';

function HomeScreen() {
  const {signOut} = useContext(AuthContext);

  return (
    <View>
      <Text>Signed in!</Text>
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
}

export default HomeScreen;
