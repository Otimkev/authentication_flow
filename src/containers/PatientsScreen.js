import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '../components/NewButton';
import PatientsForm from '../containers/PatientsForm';

const PatientsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        text={'Add Patient'}
        onPress={() => navigation.navigate('PatientsForm')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default PatientsScreen;
