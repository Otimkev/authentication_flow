import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import CardView from 'react-native-cardview';

const PatientScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Add Patient"
        onPress={() => {
          navigation.navigate('AddPatientScreen');
        }}
      />
      <CardView
        style={styles.cardContainer}
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={5}>
        <Text>Name:</Text>
        <Text>Weight:</Text>
        <Text>Bed No.:</Text>
        <Text>Ward:</Text>
      </CardView>
    </View>
  );
};

export default PatientScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  cardContainer: {
    width: '100%',
    height: 100,
    marginVertical: 10,
    padding: 10,
  },
});
